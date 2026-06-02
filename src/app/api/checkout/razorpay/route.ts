import { NextResponse } from 'next/server';
import Razorpay from 'razorpay';
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

import prisma from '@/lib/prisma';
import { exchangeRates } from '@/lib/data';
import logger from '@/lib/logger';

const instance = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID || 'rzp_test_dummy_key_123',
  key_secret: process.env.RAZORPAY_KEY_SECRET || 'dummy_secret_123',
});

export async function POST(req: Request) {
  try {
    const { cartItems, shippingCostINR, currency } = await req.json();

    if (!cartItems || !cartItems.length) {
      logger.warn("PAYMENT_ORDER_FAILED", { message: "Attempted checkout with empty cart." });
      return NextResponse.json({ success: false, error: { code: "CART_EMPTY", message: "Your cart is empty." } }, { status: 400 });
    }

    // Securely calculate total from DB
    let totalINR = 0;
    for (const item of cartItems) {
      const product = await prisma.product.findUnique({ where: { id: item.id } });
      if (product) {
        totalINR += (product.price * item.quantity);
      } else {
        logger.warn("PAYMENT_ORDER_FAILED", { message: `Product not found: ${item.id}` });
        return NextResponse.json({ success: false, error: { code: "PRODUCT_UNAVAILABLE", message: "One or more items in your cart are currently unavailable." } }, { status: 400 });
      }
    }
    
    totalINR += (shippingCostINR || 0);

    // Convert to selected currency
    const rate = exchangeRates[currency as keyof typeof exchangeRates] || 1;
    const finalAmount = totalINR * rate;

    const options = {
      amount: Math.round(finalAmount * 100), // amount in smallest currency unit
      currency: currency || "USD",
      receipt: `receipt_${Date.now()}`,
    };

    const order = await instance.orders.create(options);

    logger.info("PAYMENT_ORDER_CREATED", { orderId: order.id, amount: finalAmount });
    return NextResponse.json({ success: true, data: { ...order, amount: finalAmount } });
  } catch (error: any) {
    logger.error("PAYMENT_ORDER_FAILED", { message: error.message || "Razorpay API error", details: error });
    return NextResponse.json({ success: false, error: { code: "PAYMENT_ORDER_FAILED", message: "We couldn't initialize your payment securely. Please try again." } }, { status: 500 });
  }
}
