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
  const [selectedVariants, setSelectedVariants] = useState<Record<string, string>>({});
  const [activeAccordion, setActiveAccordion] = useState<string | null>('Product Story');
  const [showSizeGuide, setShowSizeGuide] = useState(false);
  const [activeImage, setActiveImage] = useState(0);
  const [isZooming, setIsZooming] = useState(false);
  const [zoomPos, setZoomPos] = useState({ x: 50, y: 50 });

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
        
        // Auto-select first variant of each type
        if (data.variants && data.variants.length > 0) {
          const initialVariants: Record<string, string> = {};
          const types = [...new Set(data.variants.map((v: any) => v.type))] as string[];
          types.forEach(type => {
            const firstOfType = data.variants.find((v: any) => v.type === type);
            if (firstOfType) initialVariants[type] = firstOfType.value;
          });
          setSelectedVariants(initialVariants);
        }

        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setLoading(false);
      });
  }, [slug]);

  if (loading) {
    return <main><Header /><div className="container" style={{ paddingTop: '10rem', textAlign: 'center', minHeight: '80vh' }}>Loading luxury piece...</div><Footer /></main>;
  }

  if (!product) {
    return <main><Header /><div className="container" style={{ paddingTop: '10rem', textAlign: 'center', minHeight: '80vh' }}>Piece not found in the archive</div><Footer /></main>;
  }

  const toggleAccordion = (title: string) => {
    setActiveAccordion(prev => prev === title ? null : title);
  };

  const images = product.images && product.images.length > 0 ? product.images : ['/images/placeholder.png'];
  const variantTypes = product.variants ? [...new Set(product.variants.map((v: any) => v.type))] as string[] : [];

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    const x = ((e.pageX - left) / width) * 100;
    const y = ((e.pageY - top) / height) * 100;
    setZoomPos({ x, y });
  };

  return (
    <main style={{ backgroundColor: 'var(--color-background)' }}>
      <Header />
      <div className="container" style={{ paddingTop: '8rem', paddingBottom: '6rem', maxWidth: '1400px' }}>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '5rem' }}>
          
          {/* Left: Image Gallery */}
          <div style={{ position: 'sticky', top: '100px', alignSelf: 'flex-start' }}>
            <div 
              style={{ position: 'relative', height: '75vh', borderRadius: '4px', overflow: 'hidden', backgroundColor: 'var(--color-surface)', cursor: 'zoom-in' }}
              onMouseEnter={() => setIsZooming(true)}
              onMouseLeave={() => setIsZooming(false)}
              onMouseMove={handleMouseMove}
            >
              {product.giStatus && product.giStatus !== 'Not Applicable' && (
                <div style={{ position: 'absolute', top: '1rem', left: '1rem', background: '#000', color: '#fff', fontSize: '0.7rem', padding: '0.3rem 0.8rem', textTransform: 'uppercase', letterSpacing: '0.1em', zIndex: 10 }}>
                  {product.giStatus}
                </div>
              )}
              {product.dispatchType && (
                <div style={{ position: 'absolute', top: product.giStatus && product.giStatus !== 'Not Applicable' ? '3rem' : '1rem', left: '1rem', background: 'var(--color-accent)', color: '#000', fontSize: '0.7rem', padding: '0.3rem 0.8rem', textTransform: 'uppercase', letterSpacing: '0.1em', zIndex: 10 }}>
                  {product.dispatchType}
                </div>
              )}
              
              <Image 
                src={images[activeImage]} 
                alt={product.title} 
                fill 
                style={{ 
                  objectFit: 'cover', 
                  transformOrigin: `${zoomPos.x}% ${zoomPos.y}%`,
                  transform: isZooming ? 'scale(2)' : 'scale(1)',
                  transition: 'transform 0.1s ease-out' 
                }} 
              />
            </div>
            
            {images.length > 1 && (
              <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem', overflowX: 'auto' }}>
                {images.map((img: string, idx: number) => (
                  <div key={idx} onClick={() => setActiveImage(idx)} style={{ position: 'relative', width: '80px', height: '100px', cursor: 'pointer', border: activeImage === idx ? '1px solid var(--color-accent)' : '1px solid transparent', opacity: activeImage === idx ? 1 : 0.6, transition: 'all 0.3s ease' }}>
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
            <h1 style={{ fontSize: '2.5rem', fontFamily: 'var(--font-serif)', marginBottom: '0.5rem', lineHeight: 1.1 }}>{product.title}</h1>
            {product.subtitle && (
              <p style={{ fontSize: '1rem', color: 'rgba(252, 250, 248, 0.7)', marginBottom: '1.5rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>{product.subtitle}</p>
            )}
            
            <p style={{ fontSize: '1.5rem', marginBottom: '1.5rem', color: 'var(--color-foreground)' }}>
              {formatPrice(product.price, currency)}
            </p>

            {/* Dynamic Variant Selectors */}
            {variantTypes.length > 0 && (
              <div style={{ marginBottom: '2rem', marginTop: '1rem' }}>
                {variantTypes.map(type => {
                  const options = product.variants.filter((v: any) => v.type === type);
                  return (
                    <div key={type} style={{ marginBottom: '1.5rem' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '1rem' }}>
                        <p style={{ textTransform: 'uppercase', fontSize: '0.85rem', letterSpacing: '0.1em' }}>{type}</p>
                        {type === 'Size' && (
                          <button onClick={() => setShowSizeGuide(true)} style={{ background: 'none', border: 'none', color: 'rgba(252, 250, 248, 0.6)', textDecoration: 'underline', cursor: 'pointer', fontSize: '0.85rem' }}>Size Guide</button>
                        )}
                      </div>
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
                        {options.map((opt: any) => (
                          <button 
                            key={opt.id}
                            onClick={() => setSelectedVariants(prev => ({...prev, [type]: opt.value}))}
                            disabled={opt.inventory === 0}
                            style={{
                              padding: '1rem 1.5rem',
                              background: selectedVariants[type] === opt.value ? 'var(--color-surface)' : 'transparent',
                              color: opt.inventory === 0 ? 'rgba(252, 250, 248, 0.3)' : 'var(--color-foreground)',
                              border: `1px solid ${selectedVariants[type] === opt.value ? 'var(--color-foreground)' : 'var(--color-border)'}`,
                              cursor: opt.inventory === 0 ? 'not-allowed' : 'pointer',
                              borderRadius: '0',
                              transition: 'all 0.2s ease',
                              fontSize: '0.9rem',
                              position: 'relative'
                            }}
                          >
                            {opt.value}
                            {opt.inventory === 0 && (
                              <div style={{ position: 'absolute', top: '50%', left: 0, right: 0, height: '1px', background: 'rgba(252, 250, 248, 0.3)', transform: 'rotate(-15deg)' }} />
                            )}
                          </button>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            )}

            {/* Add to Cart Actions */}
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
                    sizes: Object.values(selectedVariants),
                    description: product.description
                  }, selectedVariants['Size'] || 'Standard', 1);
                  alert('Added to cart securely.');
                }}
              >
                Add to Cart
              </button>
              
              <button className="btn-secondary" style={{ width: '100%', padding: '1.2rem', fontSize: '1rem', marginBottom: '2rem', border: '1px solid var(--color-border)' }}>
                ♡ Save this piece
              </button>
              
              {product.dispatchType === 'Made to Order' && (
                <p style={{ fontSize: '0.85rem', color: 'rgba(252, 250, 248, 0.7)', textAlign: 'center', lineHeight: 1.5, marginBottom: '2rem' }}>
                  This piece is made or prepared after order confirmation. Dispatch timelines may be longer.
                </p>
              )}
              
              <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '1rem', marginBottom: '3rem', opacity: 0.7 }}>
                <span style={{ fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Secure Payment</span>
                <span style={{ opacity: 0.3 }}>|</span>
                <span style={{ fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Tracked Dispatch</span>
              </div>
            </div>

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
                  </div>
                )}
              </div>

              {/* Craft Origin */}
              {(product.craftOrigin || product.material || product.technique) && (
                <div style={{ borderBottom: '1px solid var(--color-border)' }}>
                  <button onClick={() => toggleAccordion('Craft Origin')} style={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1.5rem 0', background: 'none', border: 'none', color: 'var(--color-foreground)', fontSize: '1rem', textTransform: 'uppercase', letterSpacing: '0.1em', cursor: 'pointer' }}>
                    <span>Craft Origin & Details</span>
                    <span>{activeAccordion === 'Craft Origin' ? '−' : '+'}</span>
                  </button>
                  {activeAccordion === 'Craft Origin' && (
                    <div style={{ paddingBottom: '1.5rem', color: 'rgba(252, 250, 248, 0.8)', lineHeight: 1.8, fontSize: '0.95rem' }}>
                      <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gridTemplateColumns: '1fr', gap: '0.5rem' }}>
                        {product.giStatus && <li><strong style={{color: 'var(--color-accent)'}}>GI / Craft Status:</strong> {product.giStatus}</li>}
                        {product.craftRegion && <li><strong>Craft Region:</strong> {product.craftRegion}</li>}
                        {product.artisanCluster && <li><strong>Artisan Cluster:</strong> {product.artisanCluster}</li>}
                        {product.material && <li><strong>Material:</strong> {product.material}</li>}
                        {product.technique && <li><strong>Technique:</strong> {product.technique}</li>}
                        <li><strong>Country of Origin:</strong> {product.countryOfOrigin}</li>
                      </ul>
                      <div style={{ marginTop: '1.5rem', padding: '1.5rem', background: 'var(--color-surface)', borderLeft: '2px solid var(--color-accent)' }}>
                        <h5 style={{ fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.5rem', color: 'var(--color-foreground)' }}>Handmade Character</h5>
                        <p style={{ fontSize: '0.85rem', opacity: 0.7 }}>Small variations in color, weave, print, embroidery, texture, polish, or finish are natural in handcrafted products. These differences are not defects. They are part of the individuality and beauty of handmade work.</p>
                      </div>
                    </div>
                  )}
                </div>
              )}

              {/* Care Instructions */}
              {product.careInstructions && (
                <div style={{ borderBottom: '1px solid var(--color-border)' }}>
                  <button onClick={() => toggleAccordion('Care Instructions')} style={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1.5rem 0', background: 'none', border: 'none', color: 'var(--color-foreground)', fontSize: '1rem', textTransform: 'uppercase', letterSpacing: '0.1em', cursor: 'pointer' }}>
                    <span>Care Instructions</span>
                    <span>{activeAccordion === 'Care Instructions' ? '−' : '+'}</span>
                  </button>
                  {activeAccordion === 'Care Instructions' && (
                    <div style={{ paddingBottom: '1.5rem', color: 'rgba(252, 250, 248, 0.8)', lineHeight: 1.8, fontSize: '0.95rem' }}>
                      <p>{product.careInstructions}</p>
                      <p style={{ marginTop: '1rem', fontSize: '0.85rem', fontStyle: 'italic', opacity: 0.6 }}>Includes a care note for long-term preservation.</p>
                    </div>
                  )}
                </div>
              )}

              {/* Shipping & Delivery */}
              <div style={{ borderBottom: '1px solid var(--color-border)' }}>
                <button onClick={() => toggleAccordion('Shipping')} style={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1.5rem 0', background: 'none', border: 'none', color: 'var(--color-foreground)', fontSize: '1rem', textTransform: 'uppercase', letterSpacing: '0.1em', cursor: 'pointer' }}>
                  <span>Shipping & Packaging</span>
                  <span>{activeAccordion === 'Shipping' ? '−' : '+'}</span>
                </button>
                {activeAccordion === 'Shipping' && (
                  <div style={{ paddingBottom: '1.5rem', color: 'rgba(252, 250, 248, 0.8)', lineHeight: 1.8, fontSize: '0.95rem' }}>
                    <p><strong>Shipping:</strong> {product.shippingNote || 'Shipping is calculated at checkout based on destination.'}</p>
                    <p style={{ marginTop: '1rem' }}><strong>Packaging:</strong> {product.packagingNote || 'Packed with layered protection for international travel.'}</p>
                    <p style={{ marginTop: '1rem' }}><strong>Returns:</strong> {product.returnEligibility}</p>
                  </div>
                )}
              </div>
            </div>

            {/* Trust Blocks - The Karigar Care Journey */}
            <div style={{ marginTop: '4rem' }}>
              <h4 style={{ fontSize: '1.1rem', fontFamily: 'var(--font-serif)', marginBottom: '1.5rem' }}>The IDFIS Karigar Care Journey™</h4>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                {['Craft Origin Verified', 'Quality Checked in India', 'Elite Protective Packaging', 'Transparent Shipping Cost', 'Tracked Dispatch', 'Safe Arrival Support'].map((trust, idx) => (
                  <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', fontSize: '0.8rem', opacity: 0.8 }}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--color-accent)" strokeWidth="1.5"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
                    {trust}
                  </div>
                ))}
              </div>
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
                  <td style={{ padding: '0.8rem 0' }}>S</td>
                  <td style={{ padding: '0.8rem 0' }}>34-36</td>
                  <td style={{ padding: '0.8rem 0' }}>28-30</td>
                </tr>
                <tr style={{ borderBottom: '1px solid var(--color-border)' }}>
                  <td style={{ padding: '0.8rem 0' }}>M / Standard</td>
                  <td style={{ padding: '0.8rem 0' }}>36-38</td>
                  <td style={{ padding: '0.8rem 0' }}>30-32</td>
                </tr>
                <tr style={{ borderBottom: '1px solid var(--color-border)' }}>
                  <td style={{ padding: '0.8rem 0' }}>L</td>
                  <td style={{ padding: '0.8rem 0' }}>38-40</td>
                  <td style={{ padding: '0.8rem 0' }}>32-34</td>
                </tr>
                <tr>
                  <td style={{ padding: '0.8rem 0' }}>Custom</td>
                  <td colSpan={2} style={{ padding: '0.8rem 0', opacity: 0.7 }}>Measurements collected post-order</td>
                </tr>
              </tbody>
            </table>
            <p style={{ fontSize: '0.8rem', opacity: 0.6, fontStyle: 'italic' }}>* How to measure: Keep the tape comfortably loose around the fullest part of the bust and the narrowest part of the waist. Between sizes? Choose the larger size for a relaxed fit.</p>
          </div>
        </div>
      )}

      {/* Styles */}
      <style dangerouslySetInnerHTML={{__html: `
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
