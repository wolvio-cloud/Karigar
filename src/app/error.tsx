'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import logger from '@/lib/logger';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error securely without exposing raw details to UI
    logger.error("GLOBAL_ERROR_BOUNDARY", { message: error.message, digest: error.digest });
  }, [error]);

  return (
    <>
      <Header />
      <main style={{ minHeight: '70vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', backgroundColor: 'var(--color-background)', color: 'var(--color-text)', textAlign: 'center', padding: '2rem' }}>
        <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: '2.5rem', color: 'var(--color-accent)', marginBottom: '1rem' }}>We couldn't complete this request.</h1>
        <p style={{ maxWidth: '500px', margin: '0 auto 2rem auto', opacity: 0.8, lineHeight: 1.6 }}>
          Something went wrong while loading this page. Our team has been securely notified. Please try again or return to the collections.
        </p>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
          <button onClick={() => reset()} className="btn-primary" style={{ padding: '0.8rem 2rem' }}>
            Try Again
          </button>
          <Link href="/collections/all" className="btn-secondary" style={{ padding: '0.8rem 2rem', textDecoration: 'none', display: 'inline-block', border: '1px solid rgba(212, 175, 55, 0.3)', color: 'var(--color-foreground)' }}>
            Continue Shopping
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
