import { NextResponse } from 'next/server';
import crypto from 'crypto';
import prisma from '@/lib/prisma';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { razorpay_order_id, razorpay_payment_id, razorpay_signature, internal_order_id } = body;

    const secret = process.env.RAZORPAY_KEY_SECRET || 'dummy_secret_123';

    // Verify Signature
    const generated_signature = crypto
      .createHmac('sha256', secret)
      .update(razorpay_order_id + '|' + razorpay_payment_id)
      .digest('hex');

    const isAuthentic = generated_signature === razorpay_signature;

    // For local dummy testing without actual Razorpay SDK execution, 
    // we bypass the signature if secret is dummy
    const isMock = process.env.RAZORPAY_KEY_SECRET === 'dummy_secret_123';

    if (isAuthentic || isMock) {
      // Update order status in DB
      await prisma.order.update({
        where: { id: internal_order_id },
        data: {
          status: 'PAID',
          razorpayId: razorpay_payment_id || 'mock_payment_id',
        }
      });

      return NextResponse.json({ success: true, message: 'Payment verified successfully' }, { status: 200 });
    } else {
      return NextResponse.json({ success: false, message: 'Invalid signature' }, { status: 400 });
    }
  } catch (error) {
    console.error('Error verifying payment:', error);
    return NextResponse.json({ success: false, message: 'Internal server error' }, { status: 500 });
  }
}
