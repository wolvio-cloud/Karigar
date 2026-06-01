import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function NotFound() {
  return (
    <main>
      <Header />
      <div className="container" style={{ paddingTop: '12rem', paddingBottom: '12rem', maxWidth: '600px', minHeight: '80vh', textAlign: 'center' }}>
        <h1 style={{ fontSize: '3.5rem', fontFamily: 'var(--font-serif)', marginBottom: '2rem' }}>
          This Piece Couldn't Be Found
        </h1>
        <p style={{ color: 'rgba(252, 250, 248, 0.7)', lineHeight: 1.8, fontSize: '1.1rem', fontFamily: 'var(--font-sans)', marginBottom: '4rem' }}>
          The page you’re looking for may have moved, sold out, or returned to the artisan archive.
        </p>
        <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center' }}>
          <Link href="/collections/all" className="btn-primary" style={{ padding: '1rem 2rem' }}>
            Explore New Arrivals
          </Link>
          <Link href="/" style={{ padding: '1rem 2rem', border: '1px solid var(--color-border)', color: 'var(--color-foreground)', textDecoration: 'none' }}>
            Return Home
          </Link>
        </div>
      </div>
      <Footer />
    </main>
  );
}
