import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
import Link from "next/link";
import { LayoutDashboard, ShoppingBag, Settings, LogOut, ArrowLeft } from "lucide-react";

export default async function AdminLayout({ children }: { children: React.ReactNode }) {
  const session = await getServerSession(authOptions);

  if (!session || !session.user || (session.user as any).role !== 'ADMIN') {
    redirect("/"); // Redirect unauthorized users back home
  }

  return (
    <div style={{ display: 'flex', minHeight: '100vh', backgroundColor: 'var(--color-background)' }}>
      {/* Sidebar */}
      <aside style={{ width: '250px', backgroundColor: 'var(--color-surface)', borderRight: '1px solid rgba(252, 250, 248, 0.1)', display: 'flex', flexDirection: 'column' }}>
        <div style={{ padding: '2rem', borderBottom: '1px solid rgba(252, 250, 248, 0.1)' }}>
          <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.5rem', color: 'var(--color-accent)' }}>IDFIS Admin</h2>
        </div>
        
        <nav style={{ padding: '2rem 1rem', display: 'flex', flexDirection: 'column', gap: '1rem', flex: 1 }}>
          <Link href="/admin" style={{ display: 'flex', alignItems: 'center', gap: '1rem', textDecoration: 'none', color: 'var(--color-text)', padding: '0.8rem', borderRadius: '4px', backgroundColor: 'rgba(255,255,255,0.05)' }}>
            <LayoutDashboard size={20} /> Dashboard
          </Link>
          <Link href="/admin/orders" style={{ display: 'flex', alignItems: 'center', gap: '1rem', textDecoration: 'none', color: 'var(--color-text)', padding: '0.8rem', borderRadius: '4px' }}>
            <ShoppingBag size={20} /> Orders
          </Link>
          <Link href="#" style={{ display: 'flex', alignItems: 'center', gap: '1rem', textDecoration: 'none', color: 'var(--color-text)', padding: '0.8rem', borderRadius: '4px', opacity: 0.5 }}>
            <Settings size={20} /> Settings
          </Link>
        </nav>

        <div style={{ padding: '2rem 1rem', borderTop: '1px solid rgba(252, 250, 248, 0.1)' }}>
          <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '1rem', textDecoration: 'none', color: 'rgba(252, 250, 248, 0.6)', padding: '0.8rem', marginBottom: '0.5rem' }}>
            <ArrowLeft size={20} /> Back to Store
          </Link>
          <Link href="/api/auth/signout" style={{ display: 'flex', alignItems: 'center', gap: '1rem', textDecoration: 'none', color: 'var(--color-text)', padding: '0.8rem' }}>
            <LogOut size={20} /> Sign Out
          </Link>
        </div>
      </aside>

      {/* Main Content */}
      <main style={{ flex: 1, overflowY: 'auto' }}>
        {children}
      </main>
    </div>
  );
}
