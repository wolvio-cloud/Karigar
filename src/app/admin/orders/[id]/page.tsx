import { PrismaClient } from '@prisma/client';
import Link from 'next/link';
import { notFound } from 'next/navigation';

const prisma = new PrismaClient();

export default async function AdminOrderDetailPage({ params }: { params: { id: string } }) {
  const order = await prisma.order.findUnique({
    where: { id: params.id },
    include: {
      orderItems: {
        include: {
          product: true
        }
      }
    }
  });

  if (!order) {
    notFound();
  }

  return (
    <div style={{ padding: '2rem', maxWidth: '1000px', margin: '0 auto', color: '#fcfaf8' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
        <h1 style={{ fontSize: '2rem', fontFamily: 'var(--font-serif)', color: '#d4af37' }}>Order Details: {order.id}</h1>
        <Link href="/admin/orders" style={{ textDecoration: 'none', color: '#d4af37', borderBottom: '1px solid #d4af37' }}>
          &larr; Back to Orders
        </Link>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', marginBottom: '3rem' }}>
        <div style={{ background: '#111', padding: '2rem', border: '1px solid rgba(212,175,55,0.2)' }}>
          <h3 style={{ color: '#d4af37', marginBottom: '1rem', textTransform: 'uppercase', fontSize: '0.9rem', letterSpacing: '0.1em' }}>Customer Info</h3>
          <p><strong>Name:</strong> {order.customerName}</p>
          <p><strong>Email:</strong> {order.customerEmail}</p>
          <p><strong>Phone:</strong> {order.customerPhone || 'N/A'}</p>
        </div>

        <div style={{ background: '#111', padding: '2rem', border: '1px solid rgba(212,175,55,0.2)' }}>
          <h3 style={{ color: '#d4af37', marginBottom: '1rem', textTransform: 'uppercase', fontSize: '0.9rem', letterSpacing: '0.1em' }}>Shipping Address</h3>
          <p>{order.address}</p>
          <p>{order.city}, {order.postalCode}</p>
          <p>{order.country}</p>
        </div>
      </div>

      <div style={{ background: '#111', padding: '2rem', border: '1px solid rgba(212,175,55,0.2)', marginBottom: '3rem' }}>
        <h3 style={{ color: '#d4af37', marginBottom: '1rem', textTransform: 'uppercase', fontSize: '0.9rem', letterSpacing: '0.1em' }}>Order Status & Payment</h3>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div>
            <p><strong>Status:</strong> <span style={{ padding: '0.3rem 0.6rem', background: order.status === 'PAID' ? '#2e7d32' : '#f57c00', color: '#fff', borderRadius: '4px', fontSize: '0.8rem' }}>{order.status}</span></p>
            <p style={{ marginTop: '0.5rem' }}><strong>Razorpay Order ID:</strong> {order.razorpayId || 'N/A'}</p>
            <p style={{ marginTop: '0.5rem' }}><strong>Razorpay Payment ID:</strong> {order.razorpayPaymentId || 'N/A'}</p>
          </div>
          <div style={{ textAlign: 'right' }}>
            <p><strong>Subtotal:</strong> ${(order.total - order.shippingCost).toFixed(2)}</p>
            <p><strong>Shipping:</strong> ${order.shippingCost.toFixed(2)}</p>
            <p style={{ fontSize: '1.2rem', marginTop: '0.5rem', color: '#d4af37' }}><strong>Total:</strong> ${order.total.toFixed(2)}</p>
          </div>
        </div>
      </div>

      <div style={{ background: '#111', padding: '2rem', border: '1px solid rgba(212,175,55,0.2)' }}>
        <h3 style={{ color: '#d4af37', marginBottom: '1rem', textTransform: 'uppercase', fontSize: '0.9rem', letterSpacing: '0.1em' }}>Items Ordered</h3>
        
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr style={{ borderBottom: '1px solid rgba(212,175,55,0.2)', textAlign: 'left' }}>
              <th style={{ padding: '1rem' }}>Product</th>
              <th style={{ padding: '1rem' }}>SKU</th>
              <th style={{ padding: '1rem' }}>Price</th>
              <th style={{ padding: '1rem' }}>Qty</th>
              <th style={{ padding: '1rem' }}>Total</th>
            </tr>
          </thead>
          <tbody>
            {order.orderItems.map(item => (
              <tr key={item.id} style={{ borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                <td style={{ padding: '1rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <span>{item.product.title}</span>
                </td>
                <td style={{ padding: '1rem' }}>{item.product.sku || 'N/A'}</td>
                <td style={{ padding: '1rem' }}>${item.price.toFixed(2)}</td>
                <td style={{ padding: '1rem' }}>{item.quantity}</td>
                <td style={{ padding: '1rem' }}>${(item.price * item.quantity).toFixed(2)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
