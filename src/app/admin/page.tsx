import prisma from "@/lib/prisma";

export default async function AdminDashboard() {
  const orders = await prisma.order.findMany({
    orderBy: { createdAt: 'desc' }
  });
  
  const totalRevenue = orders.reduce((sum, order) => sum + order.total, 0);
  const pendingOrders = orders.filter(o => o.status === 'PENDING').length;
  const dispatchedOrders = orders.filter(o => o.status === 'DISPATCHED').length;

  return (
    <div style={{ padding: '3rem' }}>
      <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: '2rem', marginBottom: '2rem' }}>Dashboard Overview</h1>
      
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem', marginBottom: '3rem' }}>
        <div style={{ backgroundColor: 'var(--color-surface)', padding: '2rem', borderRadius: '4px', border: '1px solid rgba(252, 250, 248, 0.1)' }}>
          <p style={{ color: 'rgba(252, 250, 248, 0.6)', marginBottom: '0.5rem' }}>Total Revenue</p>
          <p style={{ fontSize: '2.5rem', fontFamily: 'var(--font-serif)', color: 'var(--color-accent)' }}>${totalRevenue.toFixed(2)}</p>
        </div>
        <div style={{ backgroundColor: 'var(--color-surface)', padding: '2rem', borderRadius: '4px', border: '1px solid rgba(252, 250, 248, 0.1)' }}>
          <p style={{ color: 'rgba(252, 250, 248, 0.6)', marginBottom: '0.5rem' }}>Total Orders</p>
          <p style={{ fontSize: '2.5rem', fontFamily: 'var(--font-serif)' }}>{orders.length}</p>
        </div>
        <div style={{ backgroundColor: 'var(--color-surface)', padding: '2rem', borderRadius: '4px', border: '1px solid rgba(252, 250, 248, 0.1)' }}>
          <p style={{ color: 'rgba(252, 250, 248, 0.6)', marginBottom: '0.5rem' }}>Pending Dispatch</p>
          <p style={{ fontSize: '2.5rem', fontFamily: 'var(--font-serif)' }}>{pendingOrders}</p>
        </div>
      </div>

      <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.5rem', marginBottom: '1.5rem' }}>Recent Orders</h2>
      
      <div style={{ backgroundColor: 'var(--color-surface)', borderRadius: '4px', overflow: 'hidden' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
          <thead>
            <tr style={{ borderBottom: '1px solid rgba(252, 250, 248, 0.1)' }}>
              <th style={{ padding: '1.5rem', color: 'rgba(252, 250, 248, 0.6)', fontWeight: 'normal' }}>Order ID</th>
              <th style={{ padding: '1.5rem', color: 'rgba(252, 250, 248, 0.6)', fontWeight: 'normal' }}>Customer</th>
              <th style={{ padding: '1.5rem', color: 'rgba(252, 250, 248, 0.6)', fontWeight: 'normal' }}>Date</th>
              <th style={{ padding: '1.5rem', color: 'rgba(252, 250, 248, 0.6)', fontWeight: 'normal' }}>Total</th>
              <th style={{ padding: '1.5rem', color: 'rgba(252, 250, 248, 0.6)', fontWeight: 'normal' }}>Status</th>
            </tr>
          </thead>
          <tbody>
            {orders.slice(0, 5).map(order => (
              <tr key={order.id} style={{ borderBottom: '1px solid rgba(252, 250, 248, 0.05)' }}>
                <td style={{ padding: '1.5rem' }}>{order.id.slice(0, 8)}</td>
                <td style={{ padding: '1.5rem' }}>{order.customerName}</td>
                <td style={{ padding: '1.5rem' }}>{new Date(order.createdAt).toLocaleDateString()}</td>
                <td style={{ padding: '1.5rem' }}>${order.total.toFixed(2)}</td>
                <td style={{ padding: '1.5rem' }}>
                  <span style={{ 
                    padding: '0.3rem 0.8rem', 
                    backgroundColor: order.status === 'PENDING' ? 'rgba(255, 255, 255, 0.1)' : 'var(--color-accent)', 
                    color: order.status === 'PENDING' ? 'var(--color-text)' : '#000',
                    fontSize: '0.7rem', 
                    textTransform: 'uppercase', 
                    letterSpacing: '0.1em',
                    borderRadius: '20px'
                  }}>
                    {order.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
