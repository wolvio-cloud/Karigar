import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { formatPrice } from '@/lib/data';
import { useCart } from '@/context/CartContext';
import { useCurrency } from '@/context/CurrencyContext';

export default function TanjoreProductTemplate({ product }: { product: any }) {
  const { addToCart } = useCart();
  const { currency } = useCurrency();
  const [activeImage, setActiveImage] = useState(0);
  const [isZooming, setIsZooming] = useState(false);
  const [zoomPos, setZoomPos] = useState({ x: 50, y: 50 });
  const [activeAccordion, setActiveAccordion] = useState<string | null>('Product Story');

  let metafields: any = {};
  if (product.metafields) {
    try {
      metafields = JSON.parse(product.metafields);
    } catch (e) {}
  }

  const images = product.images && product.images.length > 0 ? product.images : ['/images/placeholder.png'];

  const toggleAccordion = (title: string) => {
    setActiveAccordion(prev => prev === title ? null : title);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    const x = ((e.pageX - left) / width) * 100;
    const y = ((e.pageY - top) / height) * 100;
    setZoomPos({ x, y });
  };

  return (
    <main style={{ backgroundColor: '#0a0a0a', color: '#fcfaf8' }}>
      <Header />
      <div className="container" style={{ paddingTop: '8rem', paddingBottom: '6rem', maxWidth: '1400px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(500px, 1fr))', gap: '5rem' }}>
          
          {/* Left: Gallery */}
          <div style={{ position: 'sticky', top: '100px', alignSelf: 'flex-start' }}>
            <div 
              style={{ position: 'relative', height: '80vh', backgroundColor: '#111', cursor: 'zoom-in', border: '1px solid rgba(212,175,55,0.2)', overflow: 'hidden' }}
              onMouseEnter={() => setIsZooming(true)}
              onMouseLeave={() => setIsZooming(false)}
              onMouseMove={handleMouseMove}
            >
              {metafields.one_of_one_status === 'Yes' && (
                <div style={{ position: 'absolute', top: '1rem', left: '1rem', background: '#fff', color: '#000', fontSize: '0.7rem', padding: '0.3rem 0.8rem', textTransform: 'uppercase', letterSpacing: '0.1em', zIndex: 10 }}>
                  One-of-One
                </div>
              )}
              {product.dispatchType && (
                <div style={{ position: 'absolute', top: metafields.one_of_one_status === 'Yes' ? '3rem' : '1rem', left: '1rem', background: '#d4af37', color: '#000', fontSize: '0.7rem', padding: '0.3rem 0.8rem', textTransform: 'uppercase', letterSpacing: '0.1em', zIndex: 10 }}>
                  {product.dispatchType}
                </div>
              )}
              {metafields.gold_foil_purity && (
                <div style={{ position: 'absolute', top: '1rem', right: '1rem', background: '#111', color: '#d4af37', border: '1px solid #d4af37', fontSize: '0.7rem', padding: '0.3rem 0.8rem', textTransform: 'uppercase', letterSpacing: '0.1em', zIndex: 10 }}>
                  {metafields.gold_foil_purity}
                </div>
              )}
              
              <img 
                src={images[activeImage]} 
                alt={product.title} 
                style={{ 
                  width: '100%',
                  height: '100%',
                  objectFit: 'contain',
                  transformOrigin: `${zoomPos.x}% ${zoomPos.y}%`,
                  transform: isZooming ? 'scale(2.5)' : 'scale(1)',
                  transition: 'transform 0.1s ease-out' 
                }} 
              />
            </div>
            
            {images.length > 1 && (
              <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem', overflowX: 'auto', paddingBottom: '1rem' }}>
                {images.map((img: string, idx: number) => (
                  <div key={idx} onClick={() => setActiveImage(idx)} style={{ position: 'relative', width: '100px', height: '120px', cursor: 'pointer', border: activeImage === idx ? '1px solid #d4af37' : '1px solid rgba(212,175,55,0.2)', opacity: activeImage === idx ? 1 : 0.6, transition: 'all 0.3s ease' }}>
                    <img src={img} alt={`Thumbnail ${idx+1}`} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Right: Details */}
          <div style={{ display: 'flex', flexDirection: 'column', paddingTop: '1rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
              <span style={{ color: '#d4af37', textTransform: 'uppercase', letterSpacing: '0.1em', fontSize: '0.85rem' }}>
                Tanjore Heirloom Art
              </span>
              <span style={{ color: 'rgba(252,250,248,0.3)' }}>|</span>
              <span style={{ color: 'rgba(252,250,248,0.7)', fontSize: '0.85rem' }}>
                {metafields.deity_or_subject || 'Traditional Art'}
              </span>
            </div>

            <h1 style={{ fontSize: '3rem', fontFamily: 'var(--font-serif)', marginBottom: '0.5rem', lineHeight: 1.1, color: '#d4af37' }}>{product.title}</h1>
            
            {product.subtitle && (
              <p style={{ fontSize: '1.1rem', color: 'rgba(252, 250, 248, 0.8)', marginBottom: '2rem', fontStyle: 'italic' }}>{product.subtitle}</p>
            )}
            
            <div style={{ display: 'flex', alignItems: 'baseline', gap: '1rem', marginBottom: '2rem' }}>
              <p style={{ fontSize: '2rem', color: '#fff', margin: 0 }}>
                {formatPrice(product.price, currency)}
              </p>
              <span style={{ fontSize: '0.85rem', color: 'rgba(252,250,248,0.5)' }}>Inclusive of all taxes</span>
            </div>

            <div style={{ background: '#111', border: '1px solid rgba(212,175,55,0.2)', padding: '1.5rem', marginBottom: '2rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
               <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '0.5rem' }}>
                 <span style={{ color: 'rgba(252,250,248,0.6)', fontSize: '0.9rem' }}>Artist / Studio</span>
                 <span style={{ color: '#d4af37', fontSize: '0.9rem', fontWeight: 600 }}>{metafields.artist_name || 'Traditional Artist'}</span>
               </div>
               <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '0.5rem' }}>
                 <span style={{ color: 'rgba(252,250,248,0.6)', fontSize: '0.9rem' }}>Dimensions (Framed)</span>
                 <span style={{ color: '#fff', fontSize: '0.9rem' }}>{metafields.framed_width_cm} x {metafields.framed_height_cm} cm</span>
               </div>
               <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                 <span style={{ color: 'rgba(252,250,248,0.6)', fontSize: '0.9rem' }}>Certificate Included</span>
                 <span style={{ color: '#fff', fontSize: '0.9rem' }}>{metafields.certificate_included || 'Yes'}</span>
               </div>
            </div>

            <div style={{ display: 'flex', gap: '1rem', marginBottom: '3rem' }}>
              <button 
                onClick={() => addToCart({
                  id: product.id,
                  title: product.title,
                  price: product.price,
                  image: images[0],
                  variant: 'Heirloom Edition'
                })}
                style={{ flex: 1, padding: '1.2rem', backgroundColor: '#d4af37', color: '#000', border: 'none', fontSize: '1rem', textTransform: 'uppercase', letterSpacing: '0.1em', cursor: 'pointer', fontWeight: 600 }}
              >
                Add to Cart
              </button>
              <button 
                onClick={() => {
                  addToCart({
                    id: product.id,
                    name: product.title,
                    slug: product.slug,
                    basePriceINR: product.price,
                    image: images[0],
                    category: product.category?.name || 'Tanjore Heirloom',
                    categorySlug: product.category?.slug || 'tanjore-heirloom-paintings',
                    sizes: ['Standard'],
                    description: product.description
                  }, 'Standard', 1);
                  window.location.href = '/checkout';
                }}
                style={{ flex: 1, padding: '1.2rem', backgroundColor: 'transparent', color: '#d4af37', border: '1px solid #d4af37', fontSize: '1rem', textTransform: 'uppercase', letterSpacing: '0.1em', cursor: 'pointer' }}
              >
                Buy Now
              </button>
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.8rem', color: 'rgba(252,250,248,0.6)', marginBottom: '3rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>✓ Secure Checkout</span>
              <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>✓ Fragile Reinforced Packaging</span>
              <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>✓ Global Shipping</span>
            </div>

            {/* Accordions */}
            <div style={{ borderTop: '1px solid rgba(212,175,55,0.2)' }}>
              {[
                { title: 'Product Story', content: product.description },
                { title: 'Artist / Studio', content: `${metafields.artist_name} (${metafields.artist_location}). Experience: ${metafields.artist_experience_years} years. Specialization: ${metafields.artist_specialization}. "${metafields.artist_quote}"` },
                { title: 'Gold Foil & Materials', content: `Purity: ${metafields.gold_foil_purity}. Base: ${metafields.base_material}. Relief: ${metafields.relief_material}. Stones: ${metafields.stone_embellishments}.` },
                { title: 'Dimensions & Frame', content: `Artwork Size: ${metafields.artwork_width_cm}x${metafields.artwork_height_cm} cm. Framed Size: ${metafields.framed_width_cm}x${metafields.framed_height_cm} cm. Frame: ${metafields.frame_material} with ${metafields.glass_or_acrylic}. Weight: ${metafields.artwork_weight_grams}g.` },
                { title: 'Care Instructions', content: product.careInstructions || metafields.care_instructions || 'Keep away from direct sunlight. Avoid moisture. Dust gently with a soft dry cloth. Do not touch gold foil directly.' },
                { title: 'Packaging & Safe Arrival', content: `Packed under ${metafields.packaging_tier || 'IDFIS Fragile Reinforced Packaging'}. Protected against surface contact, corner impact, and moisture.` }
              ].map((acc, idx) => (
                <div key={idx} style={{ borderBottom: '1px solid rgba(212,175,55,0.2)' }}>
                  <button 
                    onClick={() => toggleAccordion(acc.title)}
                    style={{ width: '100%', display: 'flex', justifyContent: 'space-between', padding: '1.5rem 0', background: 'none', border: 'none', color: activeAccordion === acc.title ? '#d4af37' : '#fff', fontSize: '1.1rem', cursor: 'pointer', textAlign: 'left', fontFamily: 'var(--font-serif)' }}
                  >
                    {acc.title}
                    <span>{activeAccordion === acc.title ? '−' : '+'}</span>
                  </button>
                  {activeAccordion === acc.title && (
                    <div style={{ paddingBottom: '1.5rem', fontSize: '0.95rem', lineHeight: 1.8, color: 'rgba(252,250,248,0.8)' }}>
                      {acc.content}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Trust Blocks - The Karigar Care Journey */}
            <div style={{ marginTop: '4rem' }}>
              <Link href="/care-journey" style={{ textDecoration: 'none' }}>
                <h4 style={{ fontSize: '1.1rem', fontFamily: 'var(--font-serif)', marginBottom: '1.5rem', color: '#fff', display: 'inline-flex', alignItems: 'center', gap: '0.5rem', borderBottom: '1px solid #fff', paddingBottom: '0.2rem' }}>
                  The IDFIS Karigar Care Journey™ ↗
                </h4>
              </Link>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                {['Craft Origin Verified', 'Quality Checked in India', 'Elite Protective Packaging', 'Transparent Shipping Cost', 'Tracked Dispatch', 'Safe Arrival Support'].map((trust, idx) => (
                  <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', fontSize: '0.8rem', opacity: 0.8 }}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#d4af37" strokeWidth="1.5"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
                    {trust}
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
