import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import prisma from "@/lib/prisma";
import Link from "next/link";
import { LogOut } from "lucide-react";

export default async function ProfilePage() {
  const session = await getServerSession(authOptions);

  if (!session || !session.user) {
    redirect("/login");
  }

  const user = await prisma.user.findUnique({
    where: { email: session.user.email as string },
    include: {
      orders: {
        orderBy: { createdAt: 'desc' }
      }
    }
  });

  if (!user) {
    redirect("/login");
  }

  return (
    <main style={{ backgroundColor: 'var(--color-background)', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Header />
      <div className="container" style={{ flex: 1, paddingTop: '10rem', paddingBottom: '6rem', maxWidth: '1000px' }}>
        
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', borderBottom: '1px solid rgba(252, 250, 248, 0.1)', paddingBottom: '1.5rem', marginBottom: '3rem' }}>
          <div>
            <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: '2.5rem', marginBottom: '0.5rem' }}>My Profile</h1>
            <p style={{ color: 'rgba(252, 250, 248, 0.6)', fontSize: '1.1rem' }}>Welcome back, {user.name}</p>
          </div>
          
          <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
            {(user.role === 'ADMIN' as any) && (
              <Link href="/admin" className="button-gold" style={{ padding: '0.5rem 1rem', fontSize: '0.9rem' }}>
                Admin Dashboard
              </Link>
            )}
            <Link href="/api/auth/signout" style={{ color: 'var(--color-text)', display: 'flex', alignItems: 'center', gap: '0.5rem', textDecoration: 'none', border: '1px solid rgba(252, 250, 248, 0.2)', padding: '0.5rem 1rem' }}>
              <LogOut size={16} /> Sign Out
            </Link>
          </div>
        </div>

        <section>
          <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.5rem', marginBottom: '1.5rem' }}>Order History</h2>
          
          {user.orders.length === 0 ? (
            <div style={{ backgroundColor: 'var(--color-surface)', padding: '3rem', textAlign: 'center', borderRadius: '4px' }}>
              <p style={{ color: 'rgba(252, 250, 248, 0.6)', marginBottom: '1.5rem' }}>You haven't placed any orders yet.</p>
              <Link href="/collections/all" className="button-gold">Discover Collections</Link>
            </div>
          ) : (
            <div style={{ display: 'grid', gap: '1rem' }}>
              {user.orders.map((order) => (
                <div key={order.id} style={{ backgroundColor: 'var(--color-surface)', padding: '1.5rem', borderRadius: '4px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div>
                    <p style={{ fontSize: '0.8rem', color: 'rgba(252, 250, 248, 0.5)', marginBottom: '0.2rem' }}>Order #{order.id.slice(0, 8).toUpperCase()}</p>
                    <p style={{ fontSize: '1.1rem' }}>{new Date(order.createdAt).toLocaleDateString()}</p>
                  </div>
                  <div>
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
                  </div>
                  <div style={{ textAlign: 'right' }}>
                    <p style={{ fontSize: '1.2rem', fontFamily: 'var(--font-serif)' }}>${order.total.toFixed(2)}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>

      </div>
      <Footer />
    </main>
  );
}
