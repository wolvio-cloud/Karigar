'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function Contact() {
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
          Contact IDFIS Concierge
        </h1>
        <p style={{ color: 'rgba(252, 250, 248, 0.8)', fontSize: '1.1rem', lineHeight: 1.8, marginBottom: '3rem' }}>
          For inquiries regarding provenance, bespoke orders, or shipping assistance, please reach out to our dedicated concierge.
        </p>

        {success ? (
          <div style={{ padding: '2rem', backgroundColor: 'rgba(212, 175, 55, 0.1)', border: '1px solid var(--color-border)', textAlign: 'center' }}>
            <h3 style={{ color: 'var(--color-accent)', marginBottom: '1rem', fontFamily: 'var(--font-serif)', fontSize: '1.5rem' }}>Message Received</h3>
            <p style={{ opacity: 0.8 }}>Thank you. Our concierge team will get back to you within 24 hours.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <div>
              <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--color-foreground)', fontSize: '0.9rem' }}>Name *</label>
              <input type="text" style={{ width: '100%', padding: '1rem', background: 'var(--color-surface)', border: '1px solid var(--color-border)', color: '#fff' }} required />
            </div>
            <div>
              <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--color-foreground)', fontSize: '0.9rem' }}>Email Address *</label>
              <input type="email" style={{ width: '100%', padding: '1rem', background: 'var(--color-surface)', border: '1px solid var(--color-border)', color: '#fff' }} required />
            </div>
            <div>
              <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--color-foreground)', fontSize: '0.9rem' }}>Message *</label>
              <textarea rows={6} style={{ width: '100%', padding: '1rem', background: 'var(--color-surface)', border: '1px solid var(--color-border)', color: '#fff' }} required></textarea>
            </div>
            
            <button type="submit" disabled={loading} className="btn-primary" style={{ padding: '1.2rem', marginTop: '1rem', border: 'none', cursor: loading ? 'not-allowed' : 'pointer', opacity: loading ? 0.7 : 1 }}>
              {loading ? 'Sending Securely...' : 'Send Message'}
            </button>
          </form>
        )}

        <div style={{ marginTop: '4rem', paddingTop: '2rem', borderTop: '1px solid var(--color-border)', color: 'rgba(252, 250, 248, 0.8)' }}>
          <p style={{ marginBottom: '0.5rem' }}><strong>Email:</strong> concierge@idfis.com</p>
          <p><strong>Hours:</strong> Monday – Friday, 10:00 AM – 6:00 PM IST</p>
        </div>
      </div>
      <Footer />
    </main>
  );
}
