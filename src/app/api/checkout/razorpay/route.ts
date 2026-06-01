import { NextResponse } from 'next/server';
import Razorpay from 'razorpay';
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

const instance = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID || 'rzp_test_dummy_key_123',
  key_secret: process.env.RAZORPAY_KEY_SECRET || 'dummy_secret_123',
});

export async function POST(req: Request) {
  try {
    const { amount } = await req.json();

    const options = {
      amount: Math.round(amount * 100), // amount in smallest currency unit
      currency: "USD",
      receipt: `receipt_${Date.now()}`,
    };

    const order = await instance.orders.create(options);

    return NextResponse.json(order);
  } catch (error) {
    console.error("Razorpay Error:", error);
    return NextResponse.json({ error: "Failed to create order" }, { status: 500 });
  }
}
