'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function SearchDrawer({ onClose }: { onClose: () => void }) {
  const [query, setQuery] = useState('');

  return (
    <div style={{
      position: 'fixed',
      top: 0, left: 0, width: '100%', height: '100%',
      backgroundColor: 'rgba(18, 18, 18, 0.98)',
      zIndex: 300,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: '4rem 2rem'
    }}>
      <button 
        onClick={onClose}
        style={{ position: 'absolute', top: '2rem', right: '2rem', background: 'none', border: 'none', color: 'var(--color-foreground)', cursor: 'pointer' }}
      >
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
      </button>

      <div style={{ width: '100%', maxWidth: '800px', marginTop: '4rem' }}>
        <input 
          type="text" 
          placeholder="Search sarees, coats, silk, accessories..." 
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          autoFocus
          style={{
            width: '100%',
            background: 'transparent',
            border: 'none',
            borderBottom: '2px solid var(--color-foreground)',
            color: 'var(--color-foreground)',
            fontSize: '3rem',
            fontFamily: 'var(--font-serif)',
            paddingBottom: '1rem',
            outline: 'none'
          }}
        />

        {query.length === 0 ? (
          <div style={{ marginTop: '3rem' }}>
            <p style={{ textTransform: 'uppercase', letterSpacing: '0.1em', fontSize: '0.8rem', color: 'rgba(252, 250, 248, 0.5)', marginBottom: '1.5rem' }}>Popular Searches</p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
              {['Kashmir Coats', 'Banarasi Sarees', 'Silk Kurtas', 'Artisan Gifts', 'New Arrivals'].map(term => (
                <Link key={term} href={`/collections/all`} onClick={onClose} style={{
                  padding: '0.8rem 1.5rem',
                  border: '1px solid var(--color-border)',
                  borderRadius: '30px',
                  color: 'var(--color-foreground)',
                  textDecoration: 'none',
                  fontSize: '0.9rem',
                  transition: 'all 0.2s ease'
                }}>
                  {term}
                </Link>
              ))}
            </div>
          </div>
        ) : (
          <div style={{ marginTop: '4rem', textAlign: 'center' }}>
            <p style={{ fontSize: '1.2rem', fontFamily: 'var(--font-sans)', color: 'rgba(252, 250, 248, 0.7)' }}>
              We couldn’t find a matching piece. Try searching by craft, category, material, or collection.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
