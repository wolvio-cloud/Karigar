'use client';

import { useParams } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { formatPrice } from '@/lib/data';
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
  const [activeAccordion, setActiveAccordion] = useState<string | null>('Product Story');
  const [showSizeGuide, setShowSizeGuide] = useState(false);
  const [activeImage, setActiveImage] = useState(0);

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
    return <main><Header /><div className="container" style={{ paddingTop: '10rem', textAlign: 'center', minHeight: '80vh' }}>Loading product details...</div><Footer /></main>;
  }

  if (!product) {
    return <main><Header /><div className="container" style={{ paddingTop: '10rem', textAlign: 'center', minHeight: '80vh' }}>Product not found</div><Footer /></main>;
  }

  const isOutOfStock = product.id === '3'; // Hardcoded simulation for out of stock
  const isMadeToOrder = product.id === '2'; // Hardcoded simulation for made to order
  const isLowStock = product.id === '1'; // Hardcoded simulation

  const toggleAccordion = (title: string) => {
    setActiveAccordion(prev => prev === title ? null : title);
  };

  const images = product.images && product.images.length > 0 ? product.images : ['/images/placeholder.png'];

  return (
    <main style={{ backgroundColor: 'var(--color-background)' }}>
      <Header />
      <div className="container" style={{ paddingTop: '8rem', paddingBottom: '6rem', maxWidth: '1400px' }}>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '5rem' }}>
          
          {/* Left: Image Gallery */}
          <div style={{ position: 'sticky', top: '100px', alignSelf: 'flex-start' }}>
            <div style={{ position: 'relative', height: '75vh', borderRadius: '4px', overflow: 'hidden', backgroundColor: 'var(--color-surface)' }}>
              {isOutOfStock && <div style={{ position: 'absolute', top: '1rem', left: '1rem', background: '#000', color: '#fff', fontSize: '0.8rem', padding: '0.3rem 0.8rem', textTransform: 'uppercase', letterSpacing: '0.1em', zIndex: 10, border: '1px solid #fff' }}>Currently Unavailable</div>}
              {!isOutOfStock && isMadeToOrder && <div style={{ position: 'absolute', top: '1rem', left: '1rem', background: 'var(--color-border)', color: '#fff', fontSize: '0.8rem', padding: '0.3rem 0.8rem', textTransform: 'uppercase', letterSpacing: '0.1em', zIndex: 10 }}>Made to Order</div>}
              {!isOutOfStock && !isMadeToOrder && <div style={{ position: 'absolute', top: '1rem', left: '1rem', background: 'var(--color-accent)', color: '#000', fontSize: '0.8rem', padding: '0.3rem 0.8rem', textTransform: 'uppercase', letterSpacing: '0.1em', zIndex: 10 }}>Ready to Ship</div>}
              
              <Image 
                src={images[activeImage]} 
                alt={product.title} 
                fill 
                style={{ objectFit: 'cover', transition: 'transform 0.5s ease', cursor: 'zoom-in' }} 
                className="productMainImage"
              />
            </div>
            
            {images.length > 1 && (
              <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem', overflowX: 'auto' }}>
                {images.map((img: string, idx: number) => (
                  <div key={idx} onClick={() => setActiveImage(idx)} style={{ position: 'relative', width: '80px', height: '100px', cursor: 'pointer', border: activeImage === idx ? '1px solid var(--color-accent)' : '1px solid transparent', opacity: activeImage === idx ? 1 : 0.6 }}>
                    <Image src={img} alt={`Thumbnail ${idx+1}`} fill style={{ objectFit: 'cover' }} />
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Right: Product Details */}
          <div style={{ display: 'flex', flexDirection: 'column', paddingTop: '2rem' }}>
            <span style={{ color: 'var(--color-accent)', textTransform: 'uppercase', letterSpacing: '0.1em', fontSize: '0.85rem', marginBottom: '1rem' }}>
              {product.category?.name || 'Indian Craft'}
            </span>
            <h1 style={{ fontSize: '3rem', fontFamily: 'var(--font-serif)', marginBottom: '1rem', lineHeight: 1.1 }}>{product.title}</h1>
            
            <p style={{ fontSize: '1.5rem', marginBottom: '1rem', color: isOutOfStock ? 'rgba(252, 250, 248, 0.5)' : 'var(--color-foreground)' }}>
              {isOutOfStock ? 'Currently Unavailable' : formatPrice(product.price, currency)}
            </p>

            {!isOutOfStock && isLowStock && (
              <p style={{ color: 'var(--color-accent)', fontSize: '0.9rem', marginBottom: '1rem', fontStyle: 'italic' }}>
                Only a few pieces remain from this small-batch drop.
              </p>
            )}

            {/* Size Selector */}
            <div style={{ marginBottom: '2rem', marginTop: '2rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '1rem' }}>
                <p style={{ textTransform: 'uppercase', fontSize: '0.85rem', letterSpacing: '0.1em' }}>Size</p>
                <button onClick={() => setShowSizeGuide(true)} style={{ background: 'none', border: 'none', color: 'rgba(252, 250, 248, 0.6)', textDecoration: 'underline', cursor: 'pointer', fontSize: '0.85rem' }}>Size Guide</button>
              </div>
              <div style={{ display: 'flex', gap: '1rem' }}>
                {['Standard', 'Custom'].map(size => (
                  <button 
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    style={{
                      flex: 1,
                      padding: '1rem',
                      background: selectedSize === size ? 'var(--color-surface)' : 'transparent',
                      color: 'var(--color-foreground)',
                      border: `1px solid ${selectedSize === size ? 'var(--color-foreground)' : 'var(--color-border)'}`,
                      cursor: 'pointer',
                      borderRadius: '0',
                      transition: 'all 0.2s ease',
                      fontSize: '0.9rem'
                    }}
                  >
                    {size}
                  </button>
                ))}
              </div>
              <p style={{ fontSize: '0.8rem', color: 'rgba(252, 250, 248, 0.5)', marginTop: '0.8rem' }}>
                Between sizes? Choose the larger size for a more relaxed fit.
              </p>
            </div>

            {/* Add to Cart Actions */}
            {!isOutOfStock ? (
              <div className="mobileStickyCart">
                <button 
                  className="btn-primary" 
                  style={{ width: '100%', padding: '1.2rem', fontSize: '1rem', marginBottom: '1rem' }}
                  onClick={() => {
                    addToCart({
                      id: product.id,
                      name: product.title,
                      slug: product.slug,
                      basePriceINR: product.price,
                      image: images[0],
                      category: product.category?.name || 'Collection',
                      categorySlug: product.category?.slug || '',
                      sizes: ['Standard', 'Custom'],
                      description: product.description
                    }, selectedSize, 1);
                    // Minimal toast ideally, using alert for now
                    alert('Added to cart securely.');
                  }}
                >
                  Add to Cart
                </button>
                {isMadeToOrder && (
                  <p style={{ fontSize: '0.85rem', color: 'rgba(252, 250, 248, 0.7)', textAlign: 'center', lineHeight: 1.5, marginBottom: '2rem' }}>
                    This piece is made or prepared after order confirmation. Dispatch timelines may be longer and will be shown before checkout where applicable.
                  </p>
                )}
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '1rem', marginBottom: '3rem', opacity: 0.7 }}>
                  <span style={{ fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Secure Payment</span>
                  <span style={{ opacity: 0.3 }}>|</span>
                  <span style={{ fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Tracked Dispatch</span>
                </div>
              </div>
            ) : (
              <div style={{ marginBottom: '3rem' }}>
                <p style={{ fontSize: '0.95rem', color: 'rgba(252, 250, 248, 0.8)', marginBottom: '1rem' }}>
                  This piece is currently unavailable. Join the waitlist to be notified if it returns in a future artisan drop.
                </p>
                <div style={{ display: 'flex', gap: '1rem' }}>
                  <input type="email" placeholder="Enter your email" style={{ flex: 1, padding: '1rem', background: 'transparent', border: '1px solid var(--color-border)', color: 'var(--color-foreground)', outline: 'none' }} />
                  <button className="btn-secondary" style={{ padding: '1rem 2rem', border: '1px solid var(--color-border)' }}>Notify Me</button>
                </div>
              </div>
            )}

            {/* Accordions */}
            <div style={{ borderTop: '1px solid var(--color-border)' }}>
              
              {/* Product Story */}
              <div style={{ borderBottom: '1px solid var(--color-border)' }}>
                <button onClick={() => toggleAccordion('Product Story')} style={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1.5rem 0', background: 'none', border: 'none', color: 'var(--color-foreground)', fontSize: '1rem', textTransform: 'uppercase', letterSpacing: '0.1em', cursor: 'pointer' }}>
                  <span>Product Story</span>
                  <span>{activeAccordion === 'Product Story' ? '−' : '+'}</span>
                </button>
                {activeAccordion === 'Product Story' && (
                  <div style={{ paddingBottom: '1.5rem', color: 'rgba(252, 250, 248, 0.8)', lineHeight: 1.8, fontSize: '0.95rem' }}>
                    <p>{product.description}</p>
                    <p style={{ marginTop: '1rem' }}>The {product.title} is inspired by regional textile traditions and designed for modern global wardrobes. Its refined silhouette, deep tone, and hand-finished details make it a timeless statement piece.</p>
                  </div>
                )}
              </div>

              {/* Material & Craft */}
              <div style={{ borderBottom: '1px solid var(--color-border)' }}>
                <button onClick={() => toggleAccordion('Material & Craft')} style={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1.5rem 0', background: 'none', border: 'none', color: 'var(--color-foreground)', fontSize: '1rem', textTransform: 'uppercase', letterSpacing: '0.1em', cursor: 'pointer' }}>
                  <span>Material & Craft</span>
                  <span>{activeAccordion === 'Material & Craft' ? '−' : '+'}</span>
                </button>
                {activeAccordion === 'Material & Craft' && (
                  <div style={{ paddingBottom: '1.5rem', color: 'rgba(252, 250, 248, 0.8)', lineHeight: 1.8, fontSize: '0.95rem' }}>
                    <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gridTemplateColumns: '1fr', gap: '0.5rem' }}>
                      <li><strong>Material:</strong> Premium Authentic Blend</li>
                      <li><strong>Craft Technique:</strong> Regional Hand-finished</li>
                      <li><strong>Origin:</strong> Artisanal Clusters</li>
                      <li><strong>Country of Origin:</strong> India</li>
                    </ul>
                    <div style={{ marginTop: '1.5rem', padding: '1rem', background: 'var(--color-surface)', borderRadius: '4px' }}>
                      <h5 style={{ fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.5rem', color: 'var(--color-accent)' }}>Handmade Note</h5>
                      <p style={{ fontSize: '0.85rem', opacity: 0.7 }}>Small variations in color, texture, embroidery, weave, print, or finish are natural in handcrafted products and make each piece unique.</p>
                    </div>
                  </div>
                )}
              </div>

              {/* Care Instructions */}
              <div style={{ borderBottom: '1px solid var(--color-border)' }}>
                <button onClick={() => toggleAccordion('Care Instructions')} style={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1.5rem 0', background: 'none', border: 'none', color: 'var(--color-foreground)', fontSize: '1rem', textTransform: 'uppercase', letterSpacing: '0.1em', cursor: 'pointer' }}>
                  <span>Care Instructions</span>
                  <span>{activeAccordion === 'Care Instructions' ? '−' : '+'}</span>
                </button>
                {activeAccordion === 'Care Instructions' && (
                  <div style={{ paddingBottom: '1.5rem', color: 'rgba(252, 250, 248, 0.8)', lineHeight: 1.8, fontSize: '0.95rem' }}>
                    <p>Dry clean only. Store in a cool, dry place away from direct sunlight. Fold rather than hang to maintain shape, especially for heavier or embellished items.</p>
                  </div>
                )}
              </div>

              {/* Shipping & Duties */}
              <div style={{ borderBottom: '1px solid var(--color-border)' }}>
                <button onClick={() => toggleAccordion('Shipping & Duties')} style={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1.5rem 0', background: 'none', border: 'none', color: 'var(--color-foreground)', fontSize: '1rem', textTransform: 'uppercase', letterSpacing: '0.1em', cursor: 'pointer' }}>
                  <span>Shipping & Duties</span>
                  <span>{activeAccordion === 'Shipping & Duties' ? '−' : '+'}</span>
                </button>
                {activeAccordion === 'Shipping & Duties' && (
                  <div style={{ paddingBottom: '1.5rem', color: 'rgba(252, 250, 248, 0.8)', lineHeight: 1.8, fontSize: '0.95rem' }}>
                    <p><strong>Shipping Transparency:</strong> Shipping is calculated at checkout based on your delivery country, product weight, package size, courier service, and protective packaging needs. We do not hide logistics costs inside inflated product prices.</p>
                    <p style={{ marginTop: '1rem' }}><strong>Delivery Promise:</strong> Tracked dispatch within 48 hours for eligible ready-to-ship orders. International delivery timelines vary by destination and customs clearance.</p>
                  </div>
                )}
              </div>

              {/* Packaging & Safe Arrival */}
              <div style={{ borderBottom: '1px solid var(--color-border)' }}>
                <button onClick={() => toggleAccordion('Packaging')} style={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1.5rem 0', background: 'none', border: 'none', color: 'var(--color-foreground)', fontSize: '1rem', textTransform: 'uppercase', letterSpacing: '0.1em', cursor: 'pointer' }}>
                  <span>Packaging & Safe Arrival</span>
                  <span>{activeAccordion === 'Packaging' ? '−' : '+'}</span>
                </button>
                {activeAccordion === 'Packaging' && (
                  <div style={{ paddingBottom: '1.5rem', color: 'rgba(252, 250, 248, 0.8)', lineHeight: 1.8, fontSize: '0.95rem' }}>
                    <p><strong>Elite Protective Packaging:</strong> Your item is folded, wrapped, cushioned, and boxed according to its material and fragility. Premium garments are packed to reduce unnecessary creasing, moisture exposure, and transit damage.</p>
                  </div>
                )}
              </div>
            </div>

            {/* Trust Icons Row */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.5rem', marginTop: '3rem', paddingTop: '3rem', borderTop: '1px solid var(--color-border)' }}>
              {['Craft Verified', 'Quality Checked', 'Safely Packed', 'Transparent Shipping', 'Tracked Dispatch', 'Arrival Support'].map((trust, idx) => (
                <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.75rem', opacity: 0.7, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--color-accent)" strokeWidth="2"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  {trust}
                </div>
              ))}
            </div>

          </div>
        </div>

        {/* You May Also Treasure */}
        <div style={{ marginTop: '8rem', borderTop: '1px solid var(--color-border)', paddingTop: '6rem' }}>
          <h2 style={{ fontSize: '2.5rem', fontFamily: 'var(--font-serif)', marginBottom: '3rem', textAlign: 'center' }}>You May Also Treasure</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
            {/* Related items mock */}
            {[
              { id: 'rel1', title: 'Midnight Pashmina Coat', img: '/images/bento_coat.png', price: 450 },
              { id: 'rel2', title: 'Ivory Silk Kurta', img: '/images/bento_kurta.png', price: 185 },
              { id: 'rel3', title: 'Terracotta Banarasi Saree', img: '/images/bento_saree.png', price: 620 },
              { id: 'rel4', title: 'Vintage Brass Accent', img: '/images/bento_accessories.png', price: 110 }
            ].map(item => (
              <div key={item.id}>
                <Link href={`/collections/all`} style={{ textDecoration: 'none', color: 'inherit' }}>
                  <div style={{ position: 'relative', aspectRatio: '3/4', overflow: 'hidden', backgroundColor: 'var(--color-surface)', marginBottom: '1rem' }}>
                    <Image src={item.img} alt={item.title} fill style={{ objectFit: 'cover' }} className="hoverZoom" />
                  </div>
                  <h3 style={{ fontSize: '1.1rem', fontFamily: 'var(--font-serif)', margin: '0 0 0.5rem 0' }}>{item.title}</h3>
                  <p style={{ fontSize: '1rem', opacity: 0.8 }}>{formatPrice(item.price, currency)}</p>
                </Link>
              </div>
            ))}
          </div>
        </div>
        
        {/* Recently Viewed */}
        <div style={{ marginTop: '6rem', paddingTop: '4rem' }}>
          <h2 style={{ fontSize: '2rem', fontFamily: 'var(--font-serif)', marginBottom: '2rem' }}>Recently Viewed Pieces</h2>
          <div style={{ display: 'flex', gap: '2rem', overflowX: 'auto', paddingBottom: '1rem' }}>
            <div style={{ minWidth: '150px', maxWidth: '150px' }}>
              <Link href={`/collections/all`} style={{ textDecoration: 'none', color: 'inherit' }}>
                <div style={{ position: 'relative', aspectRatio: '3/4', backgroundColor: 'var(--color-surface)', marginBottom: '0.5rem' }}>
                  <Image src="/images/bento_coat.png" alt="Viewed" fill style={{ objectFit: 'cover' }} />
                </div>
                <p style={{ fontSize: '0.8rem', opacity: 0.7, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>Midnight Pashmina Coat</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
      
      {/* Size Guide Modal */}
      {showSizeGuide && (
        <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(0,0,0,0.8)', zIndex: 1000, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '2rem' }}>
          <div style={{ background: 'var(--color-surface)', padding: '3rem', width: '100%', maxWidth: '600px', position: 'relative', borderRadius: '8px', border: '1px solid var(--color-border)' }}>
            <button onClick={() => setShowSizeGuide(false)} style={{ position: 'absolute', top: '1.5rem', right: '1.5rem', background: 'none', border: 'none', color: 'var(--color-foreground)', cursor: 'pointer', fontSize: '1.5rem' }}>×</button>
            <h3 style={{ fontSize: '2rem', fontFamily: 'var(--font-serif)', marginBottom: '2rem' }}>Size Guide</h3>
            <p style={{ fontSize: '0.95rem', opacity: 0.8, lineHeight: 1.6, marginBottom: '2rem' }}>
              Our garments are designed for a comfortable, draped fit true to Indian silhouettes.
            </p>
            <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', marginBottom: '2rem', fontSize: '0.9rem' }}>
              <thead>
                <tr style={{ borderBottom: '1px solid var(--color-border)' }}>
                  <th style={{ padding: '0.8rem 0', opacity: 0.7 }}>Size</th>
                  <th style={{ padding: '0.8rem 0', opacity: 0.7 }}>Bust (in)</th>
                  <th style={{ padding: '0.8rem 0', opacity: 0.7 }}>Waist (in)</th>
                </tr>
              </thead>
              <tbody>
                <tr style={{ borderBottom: '1px solid var(--color-border)' }}>
                  <td style={{ padding: '0.8rem 0' }}>Standard / M</td>
                  <td style={{ padding: '0.8rem 0' }}>36-38</td>
                  <td style={{ padding: '0.8rem 0' }}>30-32</td>
                </tr>
                <tr>
                  <td style={{ padding: '0.8rem 0' }}>Custom</td>
                  <td colSpan={2} style={{ padding: '0.8rem 0', opacity: 0.7 }}>Measurements collected post-order</td>
                </tr>
              </tbody>
            </table>
            <p style={{ fontSize: '0.8rem', opacity: 0.6, fontStyle: 'italic' }}>* How to measure: Keep the tape comfortably loose around the fullest part of the bust and the narrowest part of the waist.</p>
          </div>
        </div>
      )}

      {/* Styles */}
      <style dangerouslySetInnerHTML={{__html: `
        .productMainImage:hover { transform: scale(1.2); }
        .hoverZoom:hover { transform: scale(1.05); }
        
        @media (max-width: 768px) {
          .mobileStickyCart {
            position: fixed;
            bottom: 0;
            left: 0;
            width: 100%;
            background: var(--color-surface);
            padding: 1rem 1.5rem;
            box-shadow: 0 -4px 20px rgba(0,0,0,0.5);
            z-index: 100;
            border-top: 1px solid var(--color-border);
          }
          .mobileStickyCart p, .mobileStickyCart div {
            display: none;
          }
          .mobileStickyCart button {
            margin-bottom: 0 !important;
          }
        }
      `}} />

      <Footer />
    </main>
  );
}
