'use client';

import logger from '@/lib/logger';
import { useEffect } from 'react';

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    logger.error("FATAL_GLOBAL_ERROR", { message: error.message, digest: error.digest });
  }, [error]);

  return (
    <html lang="en">
      <body style={{ margin: 0, padding: 0, backgroundColor: '#0a0a0a', color: '#fcfaf8', fontFamily: 'sans-serif' }}>
        <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '2rem' }}>
          <h1 style={{ fontSize: '2.5rem', color: '#d4af37', marginBottom: '1rem', fontFamily: 'serif' }}>An unexpected error occurred.</h1>
          <p style={{ maxWidth: '500px', margin: '0 auto 2rem auto', opacity: 0.8, lineHeight: 1.6 }}>
            We sincerely apologize, but we could not complete your request. Please try refreshing the page.
          </p>
          <button onClick={() => reset()} style={{ padding: '0.8rem 2rem', backgroundColor: '#d4af37', color: '#0a0a0a', border: 'none', cursor: 'pointer', fontSize: '1rem' }}>
            Refresh Page
          </button>
        </div>
      </body>
    </html>
  );
}
