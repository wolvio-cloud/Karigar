'use client';

import React, { useState } from 'react';
import Link from 'next/link';

export default function DamageClaimPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate upload and submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSuccess(true);
  };

  return (
    <div style={{ backgroundColor: 'var(--color-background)', minHeight: '100vh', paddingTop: '8rem', paddingBottom: '4rem' }}>
      <div className="container" style={{ maxWidth: '800px' }}>
        
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: '2.5rem', marginBottom: '1rem' }}>Safe Arrival Claim</h1>
          <p style={{ opacity: 0.8, lineHeight: 1.6, maxWidth: '600px', margin: '0 auto' }}>
            To help us resolve transit damage quickly, please upload clear photos of the item, inner packaging, outer packaging, and shipping label within 48 hours of delivery.
          </p>
        </div>

        <div style={{ backgroundColor: 'var(--color-surface)', padding: '3rem', borderRadius: '8px', border: '1px solid var(--color-border)' }}>
          {isSuccess ? (
            <div style={{ textAlign: 'center', padding: '2rem 0' }}>
              <div style={{ width: '60px', height: '60px', borderRadius: '50%', backgroundColor: 'var(--color-accent)', color: '#000', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '2rem', margin: '0 auto 2rem' }}>✓</div>
              <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.8rem', marginBottom: '1rem' }}>Claim Received</h2>
              <p style={{ opacity: 0.8, lineHeight: 1.6, marginBottom: '2rem' }}>
                Our team is reviewing your photos and order details. We will respond with the next steps as soon as possible.
              </p>
              <Link href="/" style={{ padding: '1rem 2rem', border: '1px solid var(--color-border)', color: 'var(--color-foreground)', textDecoration: 'none', textTransform: 'uppercase', letterSpacing: '0.05em', fontSize: '0.9rem' }}>
                Return to Store
              </Link>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
                <div>
                  <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem', letterSpacing: '0.05em', textTransform: 'uppercase' }}>Order Number *</label>
                  <input type="text" required placeholder="IDF-12345" style={{ width: '100%', padding: '1rem', backgroundColor: 'var(--color-background)', border: '1px solid var(--color-border)', color: 'var(--color-foreground)', borderRadius: '4px' }} />
                </div>
                <div>
                  <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem', letterSpacing: '0.05em', textTransform: 'uppercase' }}>Email Address *</label>
                  <input type="email" required placeholder="Used at checkout" style={{ width: '100%', padding: '1rem', backgroundColor: 'var(--color-background)', border: '1px solid var(--color-border)', color: 'var(--color-foreground)', borderRadius: '4px' }} />
                </div>
              </div>

              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem', letterSpacing: '0.05em', textTransform: 'uppercase' }}>Product Name *</label>
                <input type="text" required placeholder="Which item was damaged?" style={{ width: '100%', padding: '1rem', backgroundColor: 'var(--color-background)', border: '1px solid var(--color-border)', color: 'var(--color-foreground)', borderRadius: '4px' }} />
              </div>

              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem', letterSpacing: '0.05em', textTransform: 'uppercase' }}>Description of Issue *</label>
                <textarea required rows={4} placeholder="Please describe the damage and condition of the outer box..." style={{ width: '100%', padding: '1rem', backgroundColor: 'var(--color-background)', border: '1px solid var(--color-border)', color: 'var(--color-foreground)', borderRadius: '4px', resize: 'vertical' }}></textarea>
              </div>

              <div>
                <h3 style={{ fontSize: '1.2rem', fontFamily: 'var(--font-serif)', marginBottom: '1.5rem', paddingTop: '1rem', borderTop: '1px solid var(--color-border)' }}>Photo Evidence</h3>
                <p style={{ fontSize: '0.85rem', opacity: 0.7, marginBottom: '1.5rem' }}>For a quick resolution, please provide clear, well-lit photos. We need to see the damage and how the item was packed for courier insurance claims.</p>
                
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem' }}>
                  {/* Photo upload inputs */}
                  {['Product Damage', 'Inner Packaging', 'Outer Shipping Box', 'Shipping Label'].map((label, i) => (
                    <div key={i} style={{ border: '1px dashed var(--color-border)', padding: '1.5rem', textAlign: 'center', borderRadius: '4px' }}>
                      <label style={{ display: 'block', cursor: 'pointer' }}>
                        <div style={{ marginBottom: '0.5rem', fontSize: '1.5rem', opacity: 0.5 }}>📸</div>
                        <div style={{ fontSize: '0.9rem', marginBottom: '0.5rem', fontWeight: 600 }}>{label} *</div>
                        <div style={{ fontSize: '0.75rem', opacity: 0.6 }}>Click to upload</div>
                        <input type="file" required accept="image/*" style={{ display: 'none' }} />
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              <div style={{ marginTop: '1rem' }}>
                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  style={{ width: '100%', padding: '1.2rem', backgroundColor: 'var(--color-accent)', color: '#000', border: 'none', cursor: isSubmitting ? 'not-allowed' : 'pointer', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em' }}
                >
                  {isSubmitting ? 'Submitting Claim...' : 'Submit Claim'}
                </button>
                <p style={{ textAlign: 'center', fontSize: '0.8rem', opacity: 0.6, marginTop: '1rem' }}>
                  By submitting this form, you confirm the details are accurate. IDFIS handles data securely.
                </p>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
