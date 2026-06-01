import { NextResponse } from 'next/server';
import crypto from 'crypto';
import prisma from '@/lib/prisma'; // Assuming standard prisma client location

// Handle Shopify Webhooks safely
export async function POST(req: Request) {
  try {
    const rawBody = await req.text();
    const signature = req.headers.get('x-shopify-hmac-sha256');
    const topic = req.headers.get('x-shopify-topic');
    const shopDomain = req.headers.get('x-shopify-shop-domain');

    if (!signature || !topic) {
      return NextResponse.json({ error: 'Missing webhook headers' }, { status: 400 });
    }

    const secret = process.env.SHOPIFY_WEBHOOK_SECRET;
    if (!secret) {
      console.warn('Webhook secret is not configured. Rejecting request.');
      return NextResponse.json({ error: 'Server configuration error' }, { status: 500 });
    }

    // Verify HMAC signature
    const generatedHash = crypto
      .createHmac('sha256', secret)
      .update(rawBody, 'utf8')
      .digest('base64');

    if (generatedHash !== signature) {
      return NextResponse.json({ error: 'Invalid signature' }, { status: 401 });
    }

    const payload = JSON.parse(rawBody);

    // Audit Log the webhook receipt
    await prisma.auditLog.create({
      data: {
        actorType: 'WEBHOOK',
        action: `RECEIVED_${topic}`,
        entityType: 'SHOPIFY_ORDER_OR_FULFILLMENT',
        entityId: payload.id ? String(payload.id) : null,
        ipAddress: req.headers.get('x-forwarded-for') || null,
      }
    });

    // Handle standard events securely
    switch (topic) {
      case 'orders/create':
        await handleOrderCreate(payload);
        break;
      case 'orders/paid':
        await handleOrderPaid(payload);
        break;
      case 'fulfillments/create':
        await handleFulfillmentCreate(payload);
        break;
      default:
        console.log(`Unhandled webhook topic: ${topic}`);
    }

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error('Webhook processing error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

// -----------------------------------------------------------------------------
// Webhook Handlers
// -----------------------------------------------------------------------------

async function handleOrderCreate(order: any) {
  const shopifyOrderId = String(order.id);
  
  // Create an OrderOperation record for internal logistics mapping
  await prisma.orderOperation.upsert({
    where: { shopifyOrderId },
    create: {
      shopifyOrderId,
      qualityCheckStatus: 'PENDING',
      packagingStatus: 'PENDING',
      pickPackStatus: 'PENDING',
      dispatchStatus: 'PENDING',
    },
    update: {}
  });

  console.log(`OrderOperation created for Shopify Order ID: ${shopifyOrderId}`);
  
  // Note: Here we would trigger email notifications, slack alerts, etc.
}

async function handleOrderPaid(order: any) {
  console.log(`Order Paid: ${order.id}. Total: ${order.total_price} ${order.currency}`);
  
  // Custom logic: Verify payments, transition order status, prepare shipping label request...
}

async function handleFulfillmentCreate(fulfillment: any) {
  const shopifyOrderId = String(fulfillment.order_id);
  const trackingNumber = fulfillment.tracking_number;
  const trackingUrl = fulfillment.tracking_url;
  const trackingCompany = fulfillment.tracking_company;

  // Sync to our Shipments DB
  await prisma.shipment.create({
    data: {
      shopifyOrderId,
      provider: trackingCompany || 'Unknown',
      trackingNumber,
      trackingUrl,
      status: 'DISPATCHED',
      dispatchedAt: new Date(),
    }
  });

  console.log(`Shipment created for Order ${shopifyOrderId} with tracking ${trackingNumber}`);
}
