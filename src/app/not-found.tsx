import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function NotFound() {
  return (
    <>
      <Header />
      <main style={{ minHeight: '70vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', backgroundColor: 'var(--color-background)', color: 'var(--color-text)', textAlign: 'center', padding: '2rem' }}>
        <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: '2.5rem', color: 'var(--color-accent)', marginBottom: '1rem' }}>Piece Not Found.</h1>
        <p style={{ maxWidth: '500px', margin: '0 auto 2rem auto', opacity: 0.8, lineHeight: 1.6 }}>
          This page or piece may no longer be available in our collection.
        </p>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
          <Link href="/collections/all" className="btn-primary" style={{ padding: '0.8rem 2rem', textDecoration: 'none', display: 'inline-block' }}>
            Explore Collections
          </Link>
          <Link href="/contact" className="btn-secondary" style={{ padding: '0.8rem 2rem', textDecoration: 'none', display: 'inline-block', border: '1px solid rgba(212, 175, 55, 0.3)', color: 'var(--color-foreground)' }}>
            Contact Support
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
