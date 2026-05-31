import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { items, customerDetails, totalAmount } = body;

    if (!items || !items.length || !customerDetails) {
      return NextResponse.json({ error: 'Invalid order data' }, { status: 400 });
    }

    // Create the Order and OrderItems in a transaction
    const order = await prisma.order.create({
      data: {
        customerName: `${customerDetails.firstName} ${customerDetails.lastName}`,
        customerEmail: customerDetails.email,
        customerPhone: customerDetails.phone,
        address: customerDetails.address,
        city: customerDetails.city,
        postalCode: customerDetails.zip,
        country: customerDetails.country,
        total: totalAmount,
        status: 'PENDING',
        orderItems: {
          create: items.map((item: any) => ({
            productId: item.id,
            quantity: item.quantity,
            price: item.price,
          }))
        }
      }
    });

    return NextResponse.json({ orderId: order.id, status: 'success' }, { status: 201 });
  } catch (error) {
    console.error('Error creating order:', error);
    return NextResponse.json({ error: 'Failed to create order' }, { status: 500 });
  }
}
