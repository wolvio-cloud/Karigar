import prisma from "@/lib/prisma";

export default async function AdminOrdersPage() {
  const orders = await prisma.order.findMany({
    orderBy: { createdAt: 'desc' }
  });

  return (
    <div style={{ padding: '3rem' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
        <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: '2rem' }}>All Orders</h1>
        <div style={{ color: 'rgba(252, 250, 248, 0.6)' }}>{orders.length} total orders</div>
      </div>
      
      <div style={{ backgroundColor: 'var(--color-surface)', borderRadius: '4px', overflow: 'hidden' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
          <thead>
            <tr style={{ borderBottom: '1px solid rgba(252, 250, 248, 0.1)' }}>
              <th style={{ padding: '1.5rem', color: 'rgba(252, 250, 248, 0.6)', fontWeight: 'normal' }}>Order ID</th>
              <th style={{ padding: '1.5rem', color: 'rgba(252, 250, 248, 0.6)', fontWeight: 'normal' }}>Customer Details</th>
              <th style={{ padding: '1.5rem', color: 'rgba(252, 250, 248, 0.6)', fontWeight: 'normal' }}>Address</th>
              <th style={{ padding: '1.5rem', color: 'rgba(252, 250, 248, 0.6)', fontWeight: 'normal' }}>Total</th>
              <th style={{ padding: '1.5rem', color: 'rgba(252, 250, 248, 0.6)', fontWeight: 'normal' }}>Status</th>
            </tr>
          </thead>
          <tbody>
            {orders.map(order => (
              <tr key={order.id} style={{ borderBottom: '1px solid rgba(252, 250, 248, 0.05)', verticalAlign: 'top' }}>
                <td style={{ padding: '1.5rem' }}>
                  <div style={{ fontWeight: 'bold', marginBottom: '0.5rem' }}>{order.id.slice(0, 8)}</div>
                  <div style={{ fontSize: '0.8rem', color: 'rgba(252, 250, 248, 0.5)' }}>{new Date(order.createdAt).toLocaleDateString()}</div>
                </td>
                <td style={{ padding: '1.5rem' }}>
                  <div style={{ marginBottom: '0.2rem' }}>{order.customerName}</div>
                  <div style={{ fontSize: '0.85rem', color: 'rgba(252, 250, 248, 0.6)' }}>{order.customerEmail}</div>
                  <div style={{ fontSize: '0.85rem', color: 'rgba(252, 250, 248, 0.6)' }}>{order.customerPhone}</div>
                </td>
                <td style={{ padding: '1.5rem' }}>
                  <div style={{ fontSize: '0.9rem' }}>{order.address}</div>
                  <div style={{ fontSize: '0.85rem', color: 'rgba(252, 250, 248, 0.6)' }}>{order.city}, {order.postalCode}</div>
                  <div style={{ fontSize: '0.85rem', color: 'rgba(252, 250, 248, 0.6)' }}>{order.country}</div>
                </td>
                <td style={{ padding: '1.5rem', fontWeight: 'bold' }}>${order.total.toFixed(2)}</td>
                <td style={{ padding: '1.5rem' }}>
                  <span style={{ 
                    display: 'inline-block',
                    padding: '0.3rem 0.8rem', 
                    backgroundColor: order.status === 'PENDING' ? 'rgba(255, 255, 255, 0.1)' : 'var(--color-accent)', 
                    color: order.status === 'PENDING' ? 'var(--color-text)' : '#000',
                    fontSize: '0.7rem', 
                    textTransform: 'uppercase', 
                    letterSpacing: '0.1em',
                    borderRadius: '20px',
                    marginBottom: '1rem'
                  }}>
                    {order.status}
                  </span>
                  {order.status !== 'DISPATCHED' && (
                    <form action={async () => {
                      'use server';
                      await prisma.order.update({
                        where: { id: order.id },
                        data: { status: 'DISPATCHED' }
                      });
                    }}>
                      <button type="submit" style={{ 
                        background: 'none', 
                        border: '1px solid rgba(252, 250, 248, 0.2)', 
                        color: 'var(--color-text)', 
                        padding: '0.3rem 0.8rem', 
                        fontSize: '0.7rem', 
                        cursor: 'pointer',
                        display: 'block'
                      }}>
                        Mark Dispatched
                      </button>
                    </form>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
