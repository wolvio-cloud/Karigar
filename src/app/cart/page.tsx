'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useCart } from '@/context/CartContext';
import { useCurrency } from '@/context/CurrencyContext';
import { formatPrice } from '@/lib/data';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useState } from 'react';

export default function CartPage() {
  const { items, updateQuantity, removeFromCart, cartTotalINR } = useCart();
  const { currency } = useCurrency();
  const [giftNote, setGiftNote] = useState('');
  const [orderNote, setOrderNote] = useState('');

  return (
    <main style={{ backgroundColor: 'var(--color-background)' }}>
      <Header />
      <div className="container" style={{ paddingTop: '8rem', paddingBottom: '6rem', minHeight: '80vh', maxWidth: '1200px' }}>
        
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h1 style={{ fontSize: '3rem', fontFamily: 'var(--font-serif)', marginBottom: '0.5rem' }}>Your Selection</h1>
          <p style={{ fontSize: '1.1rem', color: 'rgba(252, 250, 248, 0.7)' }}>Craft-led pieces, packed with care from India.</p>
        </div>
        
        {items.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '6rem 0', background: 'var(--color-surface)', borderRadius: '8px', border: '1px solid var(--color-border)' }}>
            <p style={{ fontSize: '1.2rem', fontFamily: 'var(--font-serif)', marginBottom: '2rem' }}>Your cart is waiting for something meaningful.<br/>Explore handcrafted pieces selected from India’s artisan heritage.</p>
            <Link href="/collections/all" className="btn-primary" style={{ padding: '1rem 2rem' }}>Explore Collections</Link>
          </div>
        ) : (
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 380px', gap: '4rem' }}>
            {/* Left: Cart Items */}
            <div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
                {items.map((item) => (
                  <div key={`${item.product.id}-${item.size}`} style={{ display: 'flex', gap: '2rem', borderBottom: '1px solid var(--color-border)', paddingBottom: '3rem' }}>
                    <div style={{ position: 'relative', width: '150px', aspectRatio: '3/4', flexShrink: 0, backgroundColor: 'var(--color-surface)' }}>
                      <Image src={item.product.image} alt={item.product.name} fill style={{ objectFit: 'cover' }} />
                    </div>
                    <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <div>
                          <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem', fontFamily: 'var(--font-serif)' }}>{item.product.name}</h3>
                          <p style={{ color: 'rgba(252, 250, 248, 0.7)', fontSize: '0.9rem', marginBottom: '0.5rem' }}>Size: {item.size}</p>
                          <p style={{ color: 'var(--color-accent)', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Ready to Ship</p>
                        </div>
                        <p style={{ fontSize: '1.2rem' }}>{formatPrice(item.product.basePriceINR * item.quantity, currency)}</p>
                      </div>
                      
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '2rem' }}>
                        <div style={{ display: 'flex', alignItems: 'center', border: '1px solid var(--color-border)' }}>
                          <button onClick={() => updateQuantity(item.product.id, item.size, item.quantity - 1)} style={{ background: 'transparent', color: 'white', border: 'none', width: '40px', height: '40px', cursor: 'pointer' }}>-</button>
                          <span style={{ width: '40px', textAlign: 'center', fontSize: '0.9rem' }}>{item.quantity}</span>
                          <button onClick={() => updateQuantity(item.product.id, item.size, item.quantity + 1)} style={{ background: 'transparent', color: 'white', border: 'none', width: '40px', height: '40px', cursor: 'pointer' }}>+</button>
                        </div>
                        <button onClick={() => removeFromCart(item.product.id, item.size)} style={{ background: 'transparent', color: 'rgba(252, 250, 248, 0.5)', border: 'none', cursor: 'pointer', textDecoration: 'underline', fontSize: '0.85rem' }}>Remove</button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Gift & Order Notes */}
              <div style={{ marginTop: '3rem', display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                <div>
                  <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.9rem', color: 'var(--color-accent)', marginBottom: '1rem', cursor: 'pointer' }}>
                    <input type="checkbox" style={{ accentColor: 'var(--color-accent)' }} /> Add a gift note for this order
                  </label>
                  <textarea 
                    value={giftNote}
                    onChange={(e) => setGiftNote(e.target.value)}
                    placeholder="Your handwritten message..."
                    rows={3}
                    style={{ width: '100%', padding: '1rem', background: 'var(--color-surface)', border: '1px solid var(--color-border)', color: 'var(--color-foreground)', outline: 'none', resize: 'vertical' }}
                  ></textarea>
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: '0.9rem', color: 'rgba(252, 250, 248, 0.8)', marginBottom: '1rem' }}>
                    Order Instructions (Optional)
                  </label>
                  <textarea 
                    value={orderNote}
                    onChange={(e) => setOrderNote(e.target.value)}
                    placeholder="Any special instructions for your order?"
                    rows={2}
                    style={{ width: '100%', padding: '1rem', background: 'transparent', border: '1px solid var(--color-border)', color: 'var(--color-foreground)', outline: 'none', resize: 'vertical' }}
                  ></textarea>
                </div>
              </div>
            </div>
            
            {/* Right: Summary & Checkout */}
            <div>
              <div style={{ position: 'sticky', top: '120px', padding: '2rem', background: 'var(--color-surface)', borderRadius: '8px', border: '1px solid var(--color-border)' }}>
                <h3 style={{ fontSize: '1.5rem', fontFamily: 'var(--font-serif)', marginBottom: '2rem', borderBottom: '1px solid var(--color-border)', paddingBottom: '1rem' }}>Summary</h3>
                
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem', fontSize: '1.1rem' }}>
                  <span>Subtotal</span>
                  <span>{formatPrice(cartTotalINR, currency)}</span>
                </div>
                
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '2rem', fontSize: '0.9rem', opacity: 0.7 }}>
                  <span>Shipping</span>
                  <span>Calculated at checkout</span>
                </div>
                
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1.5rem 0', borderTop: '1px solid var(--color-border)', borderBottom: '1px solid var(--color-border)', marginBottom: '2rem' }}>
                  <span style={{ fontSize: '1.2rem', fontFamily: 'var(--font-serif)' }}>Total</span>
                  <span style={{ fontSize: '1.8rem' }}>{formatPrice(cartTotalINR, currency)}</span>
                </div>
                
                <Link href="/checkout" className="btn-primary" style={{ display: 'block', width: '100%', textAlign: 'center', padding: '1.2rem', marginBottom: '1rem' }}>Checkout Securely</Link>
                <p style={{ fontSize: '0.8rem', color: 'rgba(252, 250, 248, 0.5)', textAlign: 'center', lineHeight: 1.5, marginBottom: '2rem' }}>
                  Payments are processed securely. Shipping and applicable duties are calculated at checkout.
                </p>

                {/* International Order Note */}
                <div style={{ padding: '1.5rem', background: 'rgba(252, 250, 248, 0.03)', borderRadius: '4px', marginBottom: '2rem' }}>
                  <h4 style={{ fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '1rem', color: 'var(--color-accent)' }}>International Order Note</h4>
                  <p style={{ fontSize: '0.85rem', color: 'rgba(252, 250, 248, 0.7)', lineHeight: 1.6 }}>
                    Your final shipping cost is calculated transparently based on destination, courier availability, package weight, and protective packaging requirements. Duties, VAT, or import taxes may apply depending on your country and will be shown at checkout where supported.
                  </p>
                </div>

                {/* Badges */}
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  {[
                    { icon: '🔒', text: 'Secure Checkout' },
                    { icon: '📦', text: 'Tracked Dispatch' },
                    { icon: '✨', text: 'Elite Packaging' },
                    { icon: '✈️', text: 'Global Shipping' },
                    { icon: '🛡️', text: 'Safe Arrival Support' }
                  ].map((badge, idx) => (
                    <li key={idx} style={{ display: 'flex', alignItems: 'center', gap: '1rem', fontSize: '0.85rem', color: 'rgba(252, 250, 248, 0.8)' }}>
                      <span>{badge.icon}</span> {badge.text}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

          </div>
        )}
      </div>
      <Footer />
    </main>
  );
}
