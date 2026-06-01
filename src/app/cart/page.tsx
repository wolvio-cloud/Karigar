'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useCart } from '@/context/CartContext';
import { useCurrency } from '@/context/CurrencyContext';
import { formatPrice } from '@/lib/data';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function CartPage() {
  const { items, updateQuantity, removeFromCart, cartTotalINR } = useCart();
  const { currency } = useCurrency();

  return (
    <main>
      <Header />
      <div className="container" style={{ paddingTop: '10rem', paddingBottom: '6rem', minHeight: '80vh', maxWidth: '1000px' }}>
        <h1 style={{ fontSize: '3.5rem', marginBottom: '3rem' }}>Your Cart</h1>
        
        {items.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '4rem 0' }}>
            <p style={{ fontSize: '1.2rem', marginBottom: '2rem' }}>Your cart is empty.</p>
            <Link href="/" className="btn-primary">Continue Shopping</Link>
          </div>
        ) : (
          <div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', marginBottom: '4rem' }}>
              {items.map((item) => (
                <div key={`${item.product.id}-${item.size}`} style={{ display: 'flex', gap: '2rem', borderBottom: '1px solid var(--color-border)', paddingBottom: '2rem' }}>
                  <div style={{ position: 'relative', width: '120px', height: '160px', flexShrink: 0 }}>
                    <Image src={item.product.image} alt={item.product.name} fill style={{ objectFit: 'cover' }} />
                  </div>
                  <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                    <div>
                      <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem', fontFamily: 'var(--font-sans)' }}>{item.product.name}</h3>
                      <p style={{ color: 'rgba(252, 250, 248, 0.7)', fontSize: '0.9rem' }}>Size: {item.size}</p>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                        <button onClick={() => updateQuantity(item.product.id, item.size, item.quantity - 1)} style={{ background: 'transparent', color: 'white', border: '1px solid var(--color-border)', width: '30px', height: '30px' }}>-</button>
                        <span>{item.quantity}</span>
                        <button onClick={() => updateQuantity(item.product.id, item.size, item.quantity + 1)} style={{ background: 'transparent', color: 'white', border: '1px solid var(--color-border)', width: '30px', height: '30px' }}>+</button>
                        <button onClick={() => removeFromCart(item.product.id, item.size)} style={{ background: 'transparent', color: 'var(--color-accent)', border: 'none', marginLeft: '1rem', cursor: 'pointer', textDecoration: 'underline', fontSize: '0.9rem' }}>Remove</button>
                      </div>
                      <p style={{ fontSize: '1.2rem' }}>{formatPrice(item.product.basePriceINR * item.quantity, currency)}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '2rem', background: 'var(--color-surface)', borderRadius: '8px' }}>
              <span style={{ fontSize: '1.5rem', fontFamily: 'var(--font-serif)' }}>Total</span>
              <span style={{ fontSize: '2rem' }}>{formatPrice(cartTotalINR, currency)}</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '2rem', marginBottom: '3rem' }}>
              <Link href="/checkout" className="btn-primary" style={{ width: '300px', textAlign: 'center' }}>Proceed to Checkout</Link>
            </div>

            <div style={{ padding: '2rem', background: 'var(--color-surface)', borderRadius: '8px', border: '1px solid var(--color-border)', marginBottom: '4rem' }}>
              <h3 style={{ fontSize: '1.1rem', fontFamily: 'var(--font-serif)', marginBottom: '1rem', color: 'var(--color-accent)' }}>International Order Note</h3>
              <p style={{ fontSize: '0.9rem', color: 'rgba(252, 250, 248, 0.7)', lineHeight: 1.6, marginBottom: '2rem' }}>
                Your final shipping cost is calculated transparently based on destination, courier availability, package weight, and protective packaging requirements. Duties, VAT, or import taxes may apply depending on your country and will be shown at checkout where supported.
              </p>
              
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.85rem' }}>
                  <span>🔒</span> Secure Checkout
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.85rem' }}>
                  <span>📦</span> Tracked Dispatch
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.85rem' }}>
                  <span>✨</span> Elite Packaging
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.85rem' }}>
                  <span>✈️</span> Global Shipping
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.85rem' }}>
                  <span>🛡️</span> Safe Arrival Support
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </main>
  );
}
