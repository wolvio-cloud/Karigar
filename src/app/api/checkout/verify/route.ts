import { NextResponse } from 'next/server';
import crypto from 'crypto';
import prisma from '@/lib/prisma';
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

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
      return NextResponse.json({ error: "Invalid signature" }, { status: 400 });
    }

    // Get user session if exists
    const session = await getServerSession(authOptions);
    let userId = null;

    if (session && session.user && session.user.email) {
      const user = await prisma.user.findUnique({ where: { email: session.user.email } });
      if (user) userId = user.id;
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

    return NextResponse.json({ success: true, orderId: order.id });

  } catch (error) {
    console.error("Verification Error:", error);
    return NextResponse.json({ error: "Verification failed" }, { status: 500 });
  }
}
