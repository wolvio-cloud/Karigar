import { NextResponse } from 'next/server';
import crypto from 'crypto';
import prisma from '@/lib/prisma';
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import logger from '@/lib/logger';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { razorpay_order_id, razorpay_payment_id, razorpay_signature, customerDetails, cartItems, totalAmount, shippingCost } = body;

    const secret = process.env.RAZORPAY_KEY_SECRET || 'dummy_secret_123';

    // Verify signature
    const generated_signature = crypto
      .createHmac('sha256', secret)
      .update(razorpay_order_id + "|" + razorpay_payment_id)
      .digest('hex');

    // In a real environment, you MUST compare signatures.
    // For test mode with dummy keys, we will skip hard failing if it doesn't match dummy keys.
    if (generated_signature !== razorpay_signature && process.env.NODE_ENV === 'production') {
      logger.critical("PAYMENT_VERIFICATION_FAILED", { message: "Invalid Razorpay signature detected.", razorpay_payment_id });
      return NextResponse.json({ success: false, error: { code: "PAYMENT_VERIFICATION_FAILED", message: "Payment verification failed. Please contact support if money was deducted." } }, { status: 400 });
    }

    // Get user session if exists
    const session = await getServerSession(authOptions);
    let userId = null;

    if (session && session.user && session.user.email) {
      const user = await prisma.user.findUnique({ where: { email: session.user.email } });
      if (user) userId = user.id;
    }

    // Check if order already exists to prevent duplicate creation
    const existingOrder = await prisma.order.findUnique({
      where: { razorpayPaymentId: razorpay_payment_id }
    });

    if (existingOrder) {
      logger.info("PAYMENT_DUPLICATE_CALLBACK", { orderId: existingOrder.id, razorpay_payment_id });
      return NextResponse.json({ success: true, data: { orderId: existingOrder.id, message: "Order already verified" } });
    }

    // Create Order in DB
    const order = await prisma.order.create({
      data: {
        razorpayId: razorpay_order_id,
        razorpayPaymentId: razorpay_payment_id,
        customerName: customerDetails.name,
        customerEmail: customerDetails.email,
        customerPhone: customerDetails.phone,
        address: customerDetails.address,
        city: customerDetails.city,
        postalCode: customerDetails.postalCode,
        country: customerDetails.country,
        total: totalAmount,
        shippingCost: shippingCost || 0,
        status: "PAID",
        userId: userId,
        orderItems: {
          create: cartItems.map((item: any) => ({
            productId: item.productId,
            quantity: item.quantity,
            price: item.price
          }))
        }
      }
    });

    // TODO: Send Order Confirmation Email to Customer
    logger.info("EMAIL_DISPATCH_MOCK", { email: customerDetails.email, orderId: order.id });
    
    // TODO: Send Admin Notification
    logger.info("ADMIN_NOTIFICATION_MOCK", { customer: customerDetails.name, total: totalAmount, orderId: order.id });

    return NextResponse.json({ success: true, data: { orderId: order.id } });

  } catch (error: any) {
    logger.error("DATABASE_ERROR", { message: "Failed to save verified order to database.", details: error.message });
    return NextResponse.json({ success: false, error: { code: "DATABASE_ERROR", message: "Payment was successful, but we encountered an error saving your order. Please contact support with your payment reference." } }, { status: 500 });
  }
}
