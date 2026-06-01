'use client';

import React, { useState } from 'react';
import Link from 'next/link';

export default function TrackOrderPage() {
  const [orderNumber, setOrderNumber] = useState('');
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [trackingResult, setTrackingResult] = useState<any>(null);
  const [error, setError] = useState('');

  const handleTrack = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');
    
    try {
      // In production, this would call /api/tracking/lookup
      // We simulate an API response for now
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      if (orderNumber.toLowerCase() === 'error') {
        throw new Error('Tracking is temporarily unavailable. Please try again later or contact support with your order number.');
      }
      
      setTrackingResult({
        orderNumber: orderNumber.toUpperCase(),
        status: 'In Transit',
        courier: 'DHL Express',
        trackingNumber: 'DHL1234567890',
        estimatedDelivery: 'Oct 24 - Oct 28, 2026',
        timeline: [
          { status: 'In Transit - Customs Cleared', location: 'London, UK', time: 'Oct 20, 2026 10:45 AM' },
          { status: 'Dispatched', location: 'New Delhi, IN', time: 'Oct 18, 2026 14:30 PM' },
          { status: 'Packed Safely (Tier 2)', location: 'IDFIS Studio, IN', time: 'Oct 17, 2026 09:00 AM' },
          { status: 'Quality Check Complete', location: 'IDFIS Studio, IN', time: 'Oct 16, 2026 16:20 PM' },
          { status: 'Order Confirmed', location: 'Online', time: 'Oct 15, 2026 11:15 AM' }
        ]
      });
    } catch (err: any) {
      setError(err.message || 'Tracking unavailable');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div style={{ backgroundColor: 'var(--color-background)', minHeight: '100vh', paddingTop: '8rem', paddingBottom: '4rem' }}>
      <div className="container" style={{ maxWidth: '600px' }}>
        
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: '2.5rem', marginBottom: '1rem' }}>Track Your Order</h1>
          <p style={{ opacity: 0.8, lineHeight: 1.6 }}>
            Your IDFIS order is travelling with tracked international delivery. Tracking may take 24–48 hours to update after dispatch.
          </p>
        </div>

        <div style={{ backgroundColor: 'var(--color-surface)', padding: '3rem', borderRadius: '8px', border: '1px solid var(--color-border)' }}>
          {!trackingResult ? (
            <form onSubmit={handleTrack} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem', letterSpacing: '0.05em', textTransform: 'uppercase' }}>Order Number</label>
                <input 
                  type="text" 
                  required
                  value={orderNumber}
                  onChange={(e) => setOrderNumber(e.target.value)}
                  placeholder="e.g. IDF-12345"
                  style={{ width: '100%', padding: '1rem', backgroundColor: 'var(--color-background)', border: '1px solid var(--color-border)', color: 'var(--color-foreground)', borderRadius: '4px' }}
                />
              </div>
              
              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem', letterSpacing: '0.05em', textTransform: 'uppercase' }}>Email Address</label>
                <input 
                  type="email" 
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Used during checkout"
                  style={{ width: '100%', padding: '1rem', backgroundColor: 'var(--color-background)', border: '1px solid var(--color-border)', color: 'var(--color-foreground)', borderRadius: '4px' }}
                />
              </div>

              {error && (
                <div style={{ padding: '1rem', backgroundColor: 'rgba(255,0,0,0.1)', borderLeft: '3px solid red', fontSize: '0.9rem' }}>
                  {error}
                </div>
              )}

              <button 
                type="submit" 
                disabled={isSubmitting}
                style={{ marginTop: '1rem', width: '100%', padding: '1.2rem', backgroundColor: 'var(--color-accent)', color: '#000', border: 'none', cursor: isSubmitting ? 'not-allowed' : 'pointer', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em' }}
              >
                {isSubmitting ? 'Locating...' : 'Track Package'}
              </button>
            </form>
          ) : (
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem', paddingBottom: '1rem', borderBottom: '1px solid var(--color-border)' }}>
                <div>
                  <h2 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>Order {trackingResult.orderNumber}</h2>
                  <span style={{ display: 'inline-block', padding: '0.2rem 0.6rem', backgroundColor: 'var(--color-accent)', color: '#000', fontSize: '0.8rem', borderRadius: '4px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                    {trackingResult.status}
                  </span>
                </div>
                <button onClick={() => setTrackingResult(null)} style={{ background: 'none', border: 'none', color: 'var(--color-foreground)', textDecoration: 'underline', cursor: 'pointer' }}>Track Another</button>
              </div>

              <div style={{ marginBottom: '2rem', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', fontSize: '0.9rem' }}>
                <div>
                  <div style={{ opacity: 0.7, marginBottom: '0.2rem' }}>Courier</div>
                  <div>{trackingResult.courier}</div>
                </div>
                <div>
                  <div style={{ opacity: 0.7, marginBottom: '0.2rem' }}>Tracking Number</div>
                  <div>{trackingResult.trackingNumber}</div>
                </div>
                <div style={{ gridColumn: 'span 2', marginTop: '0.5rem' }}>
                  <div style={{ opacity: 0.7, marginBottom: '0.2rem' }}>Estimated Delivery</div>
                  <div style={{ fontSize: '1.1rem', fontWeight: 600 }}>{trackingResult.estimatedDelivery}</div>
                </div>
              </div>

              <div style={{ position: 'relative', paddingLeft: '1.5rem', borderLeft: '2px solid var(--color-border)' }}>
                {trackingResult.timeline.map((event: any, index: number) => (
                  <div key={index} style={{ position: 'relative', marginBottom: index === trackingResult.timeline.length - 1 ? 0 : '2rem' }}>
                    <div style={{ position: 'absolute', left: '-1.85rem', top: '0.2rem', width: '12px', height: '12px', borderRadius: '50%', backgroundColor: index === 0 ? 'var(--color-accent)' : 'var(--color-border)' }}></div>
                    <div style={{ fontWeight: index === 0 ? 600 : 400, color: index === 0 ? 'var(--color-foreground)' : 'rgba(255,255,255,0.7)' }}>{event.status}</div>
                    <div style={{ fontSize: '0.85rem', opacity: 0.6, marginTop: '0.3rem' }}>{event.location} • {event.time}</div>
                  </div>
                ))}
              </div>

              <div style={{ marginTop: '3rem', textAlign: 'center' }}>
                <p style={{ fontSize: '0.9rem', opacity: 0.7, marginBottom: '1rem' }}>Need help with your delivery?</p>
                <Link href="/contact" style={{ display: 'inline-block', padding: '0.8rem 2rem', border: '1px solid var(--color-border)', color: 'var(--color-foreground)', textDecoration: 'none', borderRadius: '4px', textTransform: 'uppercase', letterSpacing: '0.05em', fontSize: '0.85rem' }}>
                  Contact Support
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
