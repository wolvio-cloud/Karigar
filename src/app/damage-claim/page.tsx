'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function DamageClaim() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
    }, 1500);
  };

  return (
    <main style={{ backgroundColor: 'var(--color-background)', minHeight: '100vh' }}>
      <Header />
      <div className="container" style={{ paddingTop: '10rem', paddingBottom: '6rem', maxWidth: '600px' }}>
        <h1 style={{ fontSize: '3rem', fontFamily: 'var(--font-serif)', marginBottom: '2rem', color: 'var(--color-foreground)', lineHeight: 1.1 }}>
          Damage Resolution
        </h1>
        <p style={{ color: 'rgba(252, 250, 248, 0.8)', fontSize: '1.1rem', lineHeight: 1.8, marginBottom: '3rem' }}>
          If your item arrived damaged, please submit this form within 48 hours of delivery. Our concierge team will prioritize your request.
        </p>

        {success ? (
          <div style={{ padding: '2rem', backgroundColor: 'rgba(212, 175, 55, 0.1)', border: '1px solid var(--color-border)', textAlign: 'center' }}>
            <h3 style={{ color: 'var(--color-accent)', marginBottom: '1rem', fontFamily: 'var(--font-serif)', fontSize: '1.5rem' }}>Claim Submitted</h3>
            <p style={{ opacity: 0.8 }}>Thank you for providing this information. Please remember to email your photos to concierge@idfis.com with your Order Number in the subject line. We will prioritize your resolution.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <div>
              <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--color-foreground)', fontSize: '0.9rem' }}>Order Number *</label>
              <input type="text" style={{ width: '100%', padding: '1rem', background: 'var(--color-surface)', border: '1px solid var(--color-border)', color: '#fff' }} required />
            </div>
            <div>
              <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--color-foreground)', fontSize: '0.9rem' }}>Email Address *</label>
              <input type="email" style={{ width: '100%', padding: '1rem', background: 'var(--color-surface)', border: '1px solid var(--color-border)', color: '#fff' }} required />
            </div>
            <div>
              <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--color-foreground)', fontSize: '0.9rem' }}>Description of Damage *</label>
              <textarea rows={5} style={{ width: '100%', padding: '1rem', background: 'var(--color-surface)', border: '1px solid var(--color-border)', color: '#fff' }} required></textarea>
            </div>
            <div style={{ padding: '1.5rem', border: '1px dashed var(--color-border)', textAlign: 'center', color: 'rgba(252, 250, 248, 0.6)' }}>
              Please email photos of the damaged item and packaging to concierge@idfis.com with your Order Number in the subject line.
            </div>
            <button type="submit" disabled={loading} className="btn-primary" style={{ padding: '1.2rem', marginTop: '1rem', border: 'none', cursor: loading ? 'not-allowed' : 'pointer', opacity: loading ? 0.7 : 1 }}>
              {loading ? 'Submitting Securely...' : 'Submit Claim'}
            </button>
          </form>
        )}
      </div>
      <Footer />
    </main>
  );
}
