import { NextResponse } from 'next/server';
import Razorpay from 'razorpay';

// Initialize razorpay instance with dummy keys
// User will replace these via environment variables later.
const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID || 'rzp_test_dummy_key_123',
  key_secret: process.env.RAZORPAY_KEY_SECRET || 'dummy_secret_123',
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { amount, currency } = body; // amount should be in smallest currency unit (paise/cents)

    // Razorpay requires currency to be supported, but we will pass INR for Indian gateway 
    // or the converted amount. For this scaffolding, we pass the raw requested amount/currency.
    
    const options = {
      amount: Math.round(amount * 100), // convert to subunit
      currency: currency || 'INR',
      receipt: `receipt_${Date.now()}`,
    };

    // In a real scenario with valid keys, this creates an order on Razorpay servers:
    // const order = await razorpay.orders.create(options);
    
    // For our scaffolding with dummy keys, we mock the response to prevent crashes:
    const isMock = !process.env.RAZORPAY_KEY_ID;
    
    let order;
    if (isMock) {
      order = {
        id: `order_mock_${Date.now()}`,
        amount: options.amount,
        currency: options.currency,
      };
    } else {
      order = await razorpay.orders.create(options);
    }

    return NextResponse.json(order, { status: 200 });
  } catch (error: any) {
    console.error("Razorpay Order Creation Error:", error);
    return NextResponse.json(
      { error: 'Failed to create order', details: error.message },
      { status: 500 }
    );
  }
}
