'use client';

import { useParams } from 'next/navigation';
import Image from 'next/image';
import { products, formatPrice } from '@/lib/data';
import { useCart } from '@/context/CartContext';
import { useCurrency } from '@/context/CurrencyContext';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useState, useEffect } from 'react';

export default function ProductDetail() {
  const params = useParams();
  const slug = params.slug as string;
  
  const [product, setProduct] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [selectedSize, setSelectedSize] = useState('Standard');

  const { addToCart } = useCart();
  const { currency } = useCurrency();

  useEffect(() => {
    fetch(`/api/products?slug=${slug}`)
      .then(res => {
        if (!res.ok) throw new Error('Not found');
        return res.json();
      })
      .then(data => {
        setProduct(data);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setLoading(false);
      });
  }, [slug]);

  if (loading) {
    return <main><Header /><div className="container" style={{ paddingTop: '10rem', textAlign: 'center' }}>Loading product details...</div><Footer /></main>;
  }

  if (!product) {
    return <main><Header /><div className="container" style={{ paddingTop: '10rem', textAlign: 'center' }}>Product not found</div><Footer /></main>;
  }

  return (
    <main>
      <Header />
      <div className="container" style={{ paddingTop: '8rem', paddingBottom: '6rem', minHeight: '100vh' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '4rem' }}>
          
          <div style={{ position: 'relative', height: '70vh', borderRadius: '8px', overflow: 'hidden' }}>
            <Image src={product.images && product.images.length > 0 ? product.images[0] : '/images/placeholder.png'} alt={product.title} fill style={{ objectFit: 'cover' }} />
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <span style={{ color: 'var(--color-accent)', textTransform: 'uppercase', letterSpacing: '0.1em', fontSize: '0.9rem', marginBottom: '1rem' }}>
              {product.category?.name || 'Collection'}
            </span>
            <h1 style={{ fontSize: '3.5rem', marginBottom: '1.5rem', lineHeight: 1.1 }}>{product.title}</h1>
            <p style={{ fontSize: '1.5rem', marginBottom: '2rem' }}>
              {formatPrice(product.price, currency)}
            </p>
            <div style={{ color: 'rgba(252, 250, 248, 0.8)', lineHeight: 1.8, marginBottom: '3rem' }}>
              <p style={{ marginBottom: '1.5rem' }}>{product.description}</p>
              
              {/* Block 2: Craft & Material Details */}
              <div style={{ borderTop: '1px solid var(--color-border)', borderBottom: '1px solid var(--color-border)', padding: '1.5rem 0', marginTop: '2rem' }}>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', fontSize: '0.9rem' }}>
                  <li><strong>Material:</strong> Premium Authentic Blend</li>
                  <li><strong>Craft Technique:</strong> Regional Hand-finished</li>
                  <li><strong>Origin:</strong> Artisanal Clusters</li>
                  <li><strong>Size/Fit:</strong> Standard Global Sizing</li>
                  <li><strong>Country of Origin:</strong> India</li>
                  <li><strong>Care Instructions:</strong> Dry Clean Only</li>
                </ul>
                <p style={{ fontSize: '0.85rem', color: 'rgba(252, 250, 248, 0.6)', marginTop: '1rem', fontStyle: 'italic' }}>
                  Note: Small differences in color, texture, or finish are natural in handcrafted products. These are not defects, but signs of human skill and handmade individuality.
                </p>
              </div>
            </div>

            <div style={{ marginBottom: '2rem' }}>
              <p style={{ textTransform: 'uppercase', fontSize: '0.9rem', letterSpacing: '0.1em', marginBottom: '1rem' }}>Size</p>
              <div style={{ display: 'flex', gap: '1rem' }}>
                {['Standard', 'Custom'].map(size => (
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
              style={{ width: '100%', padding: '1.2rem', fontSize: '1rem', marginBottom: '2rem' }}
              onClick={() => {
                addToCart({
                  id: product.id,
                  name: product.title,
                  slug: product.slug,
                  basePriceINR: product.price,
                  image: product.images && product.images.length > 0 ? product.images[0] : '/images/placeholder.png',
                  category: product.category?.name || 'Collection',
                  categorySlug: product.category?.slug || '',
                  sizes: ['Standard', 'Custom'],
                  description: product.description
                }, selectedSize, 1);
                alert('Added to cart!');
              }}
            >
              Add to Cart
            </button>

            {/* Block 3: Shipping Transparency */}
            <div style={{ marginBottom: '2rem' }}>
              <h4 style={{ fontSize: '1rem', fontFamily: 'var(--font-serif)', marginBottom: '0.5rem', color: 'var(--color-accent)' }}>Shipping Transparency</h4>
              <p style={{ fontSize: '0.9rem', color: 'rgba(252, 250, 248, 0.7)', lineHeight: 1.6 }}>
                Shipping is calculated at checkout based on your delivery country, product weight, package size, courier service, and protective packaging needs. We do not hide logistics costs inside inflated product prices.
              </p>
            </div>

            {/* Block 4: Elite Protective Packaging */}
            <div style={{ marginBottom: '3rem' }}>
              <h4 style={{ fontSize: '1rem', fontFamily: 'var(--font-serif)', marginBottom: '0.5rem', color: 'var(--color-accent)' }}>Elite Protective Packaging</h4>
              <p style={{ fontSize: '0.9rem', color: 'rgba(252, 250, 248, 0.7)', lineHeight: 1.6 }}>
                Your item is folded, wrapped, cushioned, and boxed according to its material and fragility. Premium garments are packed to reduce unnecessary creasing, moisture exposure, and transit damage.
              </p>
            </div>

            {/* Block 5: The IDFIS Karigar Care Journey™ */}
            <div style={{ 
              padding: '2rem', 
              background: 'var(--color-surface)', 
              borderRadius: 'var(--radius-md)',
              border: '1px solid var(--color-border)'
            }}>
              <h3 style={{ fontSize: '1.2rem', fontFamily: 'var(--font-serif)', marginBottom: '1.5rem', borderBottom: '1px solid var(--color-border)', paddingBottom: '0.5rem', color: 'var(--color-accent)' }}>
                The IDFIS Karigar Care Journey™
              </h3>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.85rem' }}>
                  <span>✓</span> Craft Verified
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.85rem' }}>
                  <span>✓</span> Quality Checked
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.85rem' }}>
                  <span>✓</span> Safely Packed
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.85rem' }}>
                  <span>✓</span> Transparent Shipping
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.85rem' }}>
                  <span>✓</span> Tracked Dispatch
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.85rem' }}>
                  <span>✓</span> Arrival Support
                </li>
              </ul>
              <div style={{ textAlign: 'center', marginTop: '1.5rem' }}>
                <a href="/packaging-safe-arrival" style={{ fontSize: '0.85rem', textDecoration: 'underline', color: 'var(--color-accent)' }}>Learn about our process</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
