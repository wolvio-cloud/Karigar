'use client';

import { useParams } from 'next/navigation';
import Image from 'next/image';
import { products, formatPrice } from '@/lib/data';
import { useCart } from '@/context/CartContext';
import { useCurrency } from '@/context/CurrencyContext';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useState } from 'react';

export default function ProductDetail() {
  const params = useParams();
  const slug = params.slug as string;
  const product = products.find(p => p.slug === slug);
  
  const { addToCart } = useCart();
  const { currency } = useCurrency();
  const [selectedSize, setSelectedSize] = useState(product?.sizes[0] || '');

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <main>
      <Header />
      <div className="container" style={{ paddingTop: '8rem', paddingBottom: '6rem', minHeight: '100vh' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '4rem' }}>
          
          <div style={{ position: 'relative', height: '70vh', borderRadius: '8px', overflow: 'hidden' }}>
            <Image src={product.image} alt={product.name} fill style={{ objectFit: 'cover' }} />
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <span style={{ color: 'var(--color-accent)', textTransform: 'uppercase', letterSpacing: '0.1em', fontSize: '0.9rem', marginBottom: '1rem' }}>
              {product.category}
            </span>
            <h1 style={{ fontSize: '3.5rem', marginBottom: '1.5rem', lineHeight: 1.1 }}>{product.name}</h1>
            <p style={{ fontSize: '1.5rem', marginBottom: '2rem' }}>
              {formatPrice(product.basePriceINR, currency)}
            </p>
            <p style={{ color: 'rgba(252, 250, 248, 0.8)', lineHeight: 1.8, marginBottom: '3rem' }}>
              {product.description}
            </p>

            <div style={{ marginBottom: '2rem' }}>
              <p style={{ textTransform: 'uppercase', fontSize: '0.9rem', letterSpacing: '0.1em', marginBottom: '1rem' }}>Size</p>
              <div style={{ display: 'flex', gap: '1rem' }}>
                {product.sizes.map(size => (
                  <button 
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    style={{
                      padding: '0.5rem 1rem',
                      background: selectedSize === size ? 'var(--color-accent)' : 'transparent',
                      color: selectedSize === size ? '#000' : 'var(--color-foreground)',
                      border: `1px solid ${selectedSize === size ? 'var(--color-accent)' : 'var(--color-border)'}`,
                      cursor: 'pointer',
                      borderRadius: '4px'
                    }}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            <button 
              className="btn-primary" 
              style={{ width: '100%', padding: '1.2rem', fontSize: '1rem', marginBottom: '3rem' }}
              onClick={() => {
                addToCart(product, selectedSize, 1);
                alert('Added to cart!');
              }}
            >
              Add to Cart
            </button>

            {/* The Karigar Care Journey Trust Block */}
            <div style={{ 
              marginTop: '3rem', 
              padding: '2rem', 
              background: 'var(--color-surface)', 
              borderRadius: 'var(--radius-md)',
              border: '1px solid var(--color-border)'
            }}>
              <h3 style={{ fontSize: '1.2rem', fontFamily: 'var(--font-serif)', marginBottom: '1.5rem', borderBottom: '1px solid var(--color-border)', paddingBottom: '0.5rem' }}>
                The Karigar Care Journey™
              </h3>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <li style={{ display: 'flex', alignItems: 'center', gap: '1rem', fontSize: '0.9rem' }}>
                  <span style={{ color: 'var(--color-foreground)' }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
                  </span>
                  <span><strong>Authentic Indian Craft:</strong> Sourced directly from regional artisans.</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '1rem', fontSize: '0.9rem' }}>
                  <span style={{ color: 'var(--color-foreground)' }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg>
                  </span>
                  <span><strong>Packed to Travel Safely™:</strong> Custom packaging for international transit.</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '1rem', fontSize: '0.9rem' }}>
                  <span style={{ color: 'var(--color-foreground)' }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.2-1.1.6L3 8l6 4-3 3-3-1-2 2 4 4 2-2-1-3 3-3 4 6l1.2-.7c.4-.2.7-.6.6-1.1z"></path></svg>
                  </span>
                  <span><strong>Tracked Delivery:</strong> Transparent logistics with zero hidden markups.</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '1rem', fontSize: '0.9rem' }}>
                  <span style={{ color: 'var(--color-foreground)' }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
                  </span>
                  <span><strong>48-Hour Guarantee:</strong> Resolve damage issues within 48 hours.</span>
                </li>
              </ul>
              <div style={{ textAlign: 'center', marginTop: '1.5rem' }}>
                <a href="/packaging-safe-arrival" style={{ fontSize: '0.85rem', textDecoration: 'underline', color: 'var(--color-accent)' }}>Learn about our packaging</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
