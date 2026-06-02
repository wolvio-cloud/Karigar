'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { formatPrice } from '@/lib/data';
import { useCurrency } from '@/context/CurrencyContext';

export default function TanjoreCollection() {
  const { currency } = useCurrency();
  const [products, setProducts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/products?category=tanjore-heirloom-paintings')
      .then(res => res.json())
      .then(data => {
        if (Array.isArray(data)) {
          setProducts(data);
        } else {
          setProducts([]);
        }
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setProducts([]);
        setLoading(false);
      });
  }, []);

  const featuredProducts = products.slice(0, 3);

  return (
    <main style={{ backgroundColor: '#0a0a0a', color: '#fcfaf8', minHeight: '100vh' }}>
      <Header />
      
      {/* Hero Section */}
      <section style={{ position: 'relative', width: '100%', height: '90vh', display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>
        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0 }}>
          <img src="/images/tanjore_hero.png" alt="Tanjore Detail" style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.6 }} />
          <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'linear-gradient(to bottom, rgba(10,10,10,0.3) 0%, rgba(10,10,10,0.9) 100%)' }}></div>
        </div>
        
        <div style={{ position: 'relative', zIndex: 1, maxWidth: '800px', padding: '2rem' }}>
          <h1 style={{ fontSize: '4.5rem', fontFamily: 'var(--font-serif)', marginBottom: '1.5rem', lineHeight: 1.1, color: '#d4af37' }}>
            Not a Painting.<br/>An Heirloom.
          </h1>
          <p style={{ fontSize: '1.2rem', lineHeight: 1.6, opacity: 0.9, marginBottom: '3rem', maxWidth: '600px', margin: '0 auto 3rem auto' }}>
            Tanjore paintings are traditional South Indian artworks known for raised relief work, luminous gold foil, vivid color, and devotional presence. Each IDFIS piece is curated for material quality, artist skill, and long-term beauty.
          </p>
          <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center' }}>
            <Link href="#shop-collection" style={{ display: 'inline-block', padding: '1rem 2rem', backgroundColor: '#d4af37', color: '#000', textDecoration: 'none', textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: 600 }}>
              Shop Tanjore Heirlooms
            </Link>
            <Link href="#master-artist" style={{ display: 'inline-block', padding: '1rem 2rem', border: '1px solid #d4af37', color: '#d4af37', textDecoration: 'none', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
              Meet the Master Artist
            </Link>
          </div>
        </div>
      </section>

      {/* Quick Craft Proof Strip */}
      <section style={{ padding: '3rem 0', borderBottom: '1px solid rgba(212,175,55,0.2)', borderTop: '1px solid rgba(212,175,55,0.2)' }}>
        <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem', justifyItems: 'center' }}>
          {[
            { icon: '🏛️', text: 'Thanjavur Craft Tradition' },
            { icon: '✨', text: 'Gold Foil Where Specified' },
            { icon: '👁️', text: 'Hand-Drawn Expression' },
            { icon: '💠', text: 'Raised Relief Work' },
            { icon: '📦', text: 'Fragile Reinforced Packaging' },
            { icon: '📜', text: 'Certificate Where Available' }
          ].map((item, idx) => (
            <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '1rem', color: '#d4af37', width: '100%', justifyContent: 'flex-start', maxWidth: '280px' }}>
              <span style={{ fontSize: '1.8rem' }}>{item.icon}</span>
              <span style={{ fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.05em', lineHeight: 1.4 }}>{item.text}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Paintings for Sale */}
      <section style={{ padding: '8rem 2rem' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
            <h2 style={{ fontSize: '3rem', fontFamily: 'var(--font-serif)', color: '#d4af37', marginBottom: '1rem' }}>Featured Tanjore Heirlooms</h2>
            <p style={{ fontSize: '1.1rem', opacity: 0.8, maxWidth: '600px', margin: '0 auto' }}>Curated artworks selected for expression, gold work, material quality, and heirloom presence.</p>
          </div>
          
          {loading ? (
            <div style={{ textAlign: 'center', padding: '4rem 0', color: '#d4af37' }}>Loading heirloom pieces...</div>
          ) : (
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '4rem' }}>
              {featuredProducts.map((product) => {
                let metafields: any = {};
                if (product.metafields) {
                  try { metafields = JSON.parse(product.metafields); } catch(e){}
                }
                return (
                  <div key={product.id} className="product-card group" style={{ cursor: 'pointer' }}>
                    <Link href={`/products/${product.slug}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                      <div style={{ position: 'relative', aspectRatio: '3/4', backgroundColor: '#111', marginBottom: '1.5rem', overflow: 'hidden', border: '1px solid rgba(212,175,55,0.2)' }}>
                        <div style={{ position: 'absolute', top: '1rem', left: '1rem', background: '#d4af37', color: '#000', fontSize: '0.7rem', padding: '0.3rem 0.8rem', textTransform: 'uppercase', letterSpacing: '0.1em', zIndex: 10 }}>
                          {metafields.gold_foil_purity || 'Authentic'}
                        </div>
                        {metafields.one_of_one_status === 'Yes' && (
                          <div style={{ position: 'absolute', top: '3rem', left: '1rem', background: '#fff', color: '#000', fontSize: '0.7rem', padding: '0.3rem 0.8rem', textTransform: 'uppercase', letterSpacing: '0.1em', zIndex: 10 }}>
                            One-of-One
                          </div>
                        )}
                        <img src={product.images[0] || '/images/placeholder.png'} alt={product.title} style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease' }} className="product-img" />
                        {product.images[1] && (
                          <img src={product.images[1]} alt={product.title} style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover', opacity: 0, transition: 'opacity 0.5s ease' }} className="product-hover-img" />
                        )}
                      </div>
                      <h3 style={{ fontSize: '1.4rem', fontFamily: 'var(--font-serif)', margin: '0 0 0.5rem 0', color: '#d4af37' }}>{product.title}</h3>
                      <p style={{ fontSize: '0.9rem', color: 'rgba(252, 250, 248, 0.6)', margin: '0 0 0.5rem 0' }}>{product.subtitle}</p>
                      {metafields.artwork_width_cm && (
                        <p style={{ fontSize: '0.8rem', opacity: 0.5, marginBottom: '1rem' }}>Size: {metafields.artwork_width_cm} x {metafields.artwork_height_cm} cm</p>
                      )}
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '1rem' }}>
                        <p style={{ fontSize: '1.2rem' }}>{formatPrice(product.price, currency)}</p>
                        <span style={{ fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: '#d4af37', borderBottom: '1px solid #d4af37' }}>View Artwork</span>
                      </div>
                    </Link>
                  </div>
                )
              })}
            </div>
          )}
        </div>
      </section>

      {/* Meet the Master Artist */}
      <section id="master-artist" style={{ padding: '8rem 2rem', backgroundColor: '#111', borderTop: '1px solid rgba(212,175,55,0.2)' }}>
        <div className="container" style={{ maxWidth: '1000px' }}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
            <span style={{ color: '#d4af37', textTransform: 'uppercase', letterSpacing: '0.1em', fontSize: '0.85rem', marginBottom: '1rem' }}>Artist Profile</span>
            <h2 style={{ fontSize: '3rem', fontFamily: 'var(--font-serif)', color: '#d4af37', marginBottom: '1.5rem' }}>The Master’s Hand Behind the Work</h2>
            <p style={{ fontSize: '1.1rem', lineHeight: 1.8, opacity: 0.8, marginBottom: '4rem', maxWidth: '700px' }}>
              Each fine Tanjore painting carries the discipline of trained hands, years of practice, and an eye for expression, proportion, color, and gold work.
            </p>
            
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center', textAlign: 'left', background: '#1a1a1a', padding: '3rem', border: '1px solid rgba(212,175,55,0.2)' }}>
              <div>
                <img src="/images/tanjore_artist.png" alt="Master Artisan" style={{ width: '100%', height: 'auto', border: '1px solid rgba(212,175,55,0.2)' }} />
              </div>
              <div>
                <h3 style={{ fontSize: '2rem', fontFamily: 'var(--font-serif)', color: '#d4af37', marginBottom: '0.5rem' }}>Master V. Ramanathan</h3>
                <p style={{ fontSize: '0.9rem', color: '#d4af37', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '2rem' }}>Thanjavur, Tamil Nadu</p>
                
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', marginBottom: '2rem', borderBottom: '1px solid rgba(212,175,55,0.2)', paddingBottom: '2rem' }}>
                  <div>
                    <span style={{ display: 'block', fontSize: '0.7rem', opacity: 0.5, textTransform: 'uppercase' }}>Experience</span>
                    <span style={{ fontSize: '1rem' }}>35+ Years</span>
                  </div>
                  <div>
                    <span style={{ display: 'block', fontSize: '0.7rem', opacity: 0.5, textTransform: 'uppercase' }}>Specialization</span>
                    <span style={{ fontSize: '1rem' }}>Divine Expression</span>
                  </div>
                  <div>
                    <span style={{ display: 'block', fontSize: '0.7rem', opacity: 0.5, textTransform: 'uppercase' }}>Status</span>
                    <span style={{ fontSize: '1rem', color: '#d4af37' }}>Verified Artisan</span>
                  </div>
                  <div>
                    <span style={{ display: 'block', fontSize: '0.7rem', opacity: 0.5, textTransform: 'uppercase' }}>Works Available</span>
                    <span style={{ fontSize: '1rem' }}>Limited Edition</span>
                  </div>
                </div>
                
                <p style={{ fontSize: '1.1rem', fontStyle: 'italic', lineHeight: 1.6, opacity: 0.9, marginBottom: '2rem' }}>
                  "With over 25 years of experience in traditional Tanjore painting, the artist brings discipline, proportion, and devotional expression into every piece. The face, ornaments, relief work, colors, and frame are considered carefully so the artwork feels alive, not mechanically repeated."
                </p>
                
                <Link href="#shop-collection" style={{ display: 'inline-block', padding: '1rem 2rem', backgroundColor: '#d4af37', color: '#000', textDecoration: 'none', textTransform: 'uppercase', letterSpacing: '0.1em', fontSize: '0.9rem', fontWeight: 600 }}>
                  View Artist's Works
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Every Detail Matters */}
      <section style={{ padding: '8rem 2rem' }}>
        <div className="container" style={{ maxWidth: '1200px' }}>
          <h2 style={{ fontSize: '3rem', fontFamily: 'var(--font-serif)', color: '#d4af37', marginBottom: '4rem', textAlign: 'center' }}>What Makes a Tanjore Painting Exceptional?</h2>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '2rem' }}>
            {[
              { title: 'The Face & Expression', desc: 'In a fine Tanjore painting, the face is not mechanically repeated. The eyes, smile, posture, and divine expression are drawn with intention, giving the painting life and presence.', img: '/images/tanjore_detail_face.png' },
              { title: 'Gold Foil Purity', desc: 'The luminous surface comes from gold foil applied by hand over raised relief work. IDFIS clearly states the gold purity for each artwork where verified.', img: '/images/tanjore_detail_gold.png' },
              { title: 'Raised Relief Work', desc: 'Traditional raised work gives Tanjore paintings their sculptural depth and jewel-like richness.', img: '/images/tanjore_detail_relief.png' },
              { title: 'Base & Materials', desc: 'The board, cloth, adhesives, stones, colors, and finishing affect strength, beauty, and longevity.', img: '/images/tanjore_detail_base.png' },
              { title: 'Frame Quality', desc: 'The frame protects the painting and completes its heirloom presentation.', img: '/images/tanjore_detail_frame.png' },
              { title: 'Artist Training', desc: 'A trained artist brings proportion, patience, and discipline into every stage of the painting.', img: '/images/tanjore_artist_training.png' }
            ].map((feature, idx) => (
              <div key={idx} style={{ background: '#111', padding: '3rem', border: '1px solid rgba(212,175,55,0.1)', display: 'flex', flexDirection: 'column' }}>
                {feature.img && <img src={feature.img} alt={feature.title} style={{ width: '100%', height: '200px', objectFit: 'cover', marginBottom: '2rem', border: '1px solid rgba(212,175,55,0.3)' }} />}
                <h3 style={{ fontSize: '1.5rem', fontFamily: 'var(--font-serif)', color: '#d4af37', marginBottom: '1rem' }}>{feature.title}</h3>
                <p style={{ fontSize: '1rem', lineHeight: 1.6, opacity: 0.8 }}>{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Shop the Full Collection */}
      <section id="shop-collection" style={{ padding: '8rem 2rem', backgroundColor: '#111', borderTop: '1px solid rgba(212,175,55,0.2)' }}>
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '4rem', borderBottom: '1px solid rgba(212,175,55,0.2)', paddingBottom: '2rem' }}>
            <h2 style={{ fontSize: '3rem', fontFamily: 'var(--font-serif)', margin: 0, color: '#d4af37' }}>Shop Tanjore Heirloom Paintings</h2>
            <div style={{ display: 'flex', gap: '2rem' }}>
              <select style={{ background: 'transparent', border: 'none', color: '#d4af37', fontSize: '0.9rem', outline: 'none', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                <option value="Filters">Filters</option>
                <option value="Deity">Deity / Theme</option>
                <option value="Size">Size</option>
                <option value="Gold">Gold Foil Purity</option>
              </select>
              <select style={{ background: 'transparent', border: 'none', color: '#d4af37', fontSize: '0.9rem', outline: 'none', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                <option value="Sort">Sort By</option>
                <option value="Featured">Featured</option>
                <option value="Newest">Newest</option>
                <option value="PriceLow">Price: Low to High</option>
              </select>
            </div>
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem' }}>
            {products.map((product) => {
              let metafields: any = {};
              if (product.metafields) {
                try { metafields = JSON.parse(product.metafields); } catch(e){}
              }
              return (
                <div key={product.id} className="product-card group" style={{ cursor: 'pointer' }}>
                  <Link href={`/products/${product.slug}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                    <div style={{ position: 'relative', aspectRatio: '3/4', backgroundColor: '#0a0a0a', marginBottom: '1.5rem', overflow: 'hidden', border: '1px solid rgba(212,175,55,0.1)' }}>
                      <div style={{ position: 'absolute', top: '1rem', left: '1rem', background: '#d4af37', color: '#000', fontSize: '0.7rem', padding: '0.3rem 0.8rem', textTransform: 'uppercase', letterSpacing: '0.1em', zIndex: 10 }}>
                        {product.dispatchType}
                      </div>
                      <img src={product.images[0] || '/images/placeholder.png'} alt={product.title} style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease' }} className="product-img" />
                    </div>
                    <h3 style={{ fontSize: '1.2rem', fontFamily: 'var(--font-serif)', margin: '0 0 0.5rem 0', color: '#d4af37' }}>{product.title}</h3>
                    <p style={{ fontSize: '0.85rem', color: 'rgba(252, 250, 248, 0.6)', margin: '0 0 0.5rem 0' }}>{metafields.deity_or_subject || 'Tanjore Art'}</p>
                    <p style={{ fontSize: '1.1rem' }}>{formatPrice(product.price, currency)}</p>
                  </Link>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Preservation & Packaging */}
      <section style={{ padding: '8rem 2rem' }}>
        <div className="container" style={{ maxWidth: '1200px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '6rem' }}>
            
            {/* Preservation */}
            <div>
              <h2 style={{ fontSize: '2.5rem', fontFamily: 'var(--font-serif)', color: '#d4af37', marginBottom: '1.5rem' }}>Preserved With Care,<br/>Treasured for Generations</h2>
              <p style={{ fontSize: '1.1rem', lineHeight: 1.6, opacity: 0.8, marginBottom: '2rem' }}>
                When created with quality materials and preserved with care, a fine Tanjore painting can remain beautiful for decades and may become a generational heirloom. Longevity depends on materials, framing, environment, and care.
              </p>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                {[
                  'Keep away from direct sunlight.',
                  'Avoid moisture and damp walls.',
                  'Do not clean with water or chemicals.',
                  'Dust gently with a soft dry cloth.',
                  'Avoid touching the gold foil directly.',
                  'Do not place near heat, incense smoke, or kitchen fumes.',
                  'Keep framed and protected.',
                  'Use professional restoration if damaged.',
                  'Keep packaging for future transport if possible.'
                ].map((instruction, idx) => (
                  <li key={idx} style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem', fontSize: '0.95rem', opacity: 0.9 }}>
                    <span style={{ color: '#d4af37' }}>•</span> {instruction}
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Packaging */}
            <div style={{ background: '#111', padding: '4rem', border: '1px solid rgba(212,175,55,0.2)' }}>
              <h2 style={{ fontSize: '2.5rem', fontFamily: 'var(--font-serif)', color: '#d4af37', marginBottom: '1.5rem' }}>Packed for a Fragile Heirloom Journey</h2>
              <p style={{ fontSize: '1.1rem', lineHeight: 1.6, opacity: 0.8, marginBottom: '3rem' }}>
                Because Tanjore paintings contain delicate relief work, gold foil, stones, and framing, each piece is packed under IDFIS Fragile Reinforced Packaging. The artwork is protected against surface contact, corner impact, vibration, and moisture exposure before international dispatch.
              </p>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '3rem' }}>
                {[
                  'Surface protection layer',
                  'Frame and corner protection',
                  'Moisture-resistant inner wrap',
                  'Rigid reinforced carton',
                  'Shock-absorbing cushioning',
                  'Fragile handling label',
                  'Optional insurance',
                  'Tracking after dispatch'
                ].map((step, idx) => (
                  <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.9rem', color: '#d4af37' }}>
                    <span>✓</span> <span style={{ opacity: 0.8 }}>{step}</span>
                  </div>
                ))}
              </div>
              <Link href="/packaging-safe-arrival" style={{ display: 'inline-block', padding: '1rem 2rem', border: '1px solid #d4af37', color: '#d4af37', textDecoration: 'none', textTransform: 'uppercase', letterSpacing: '0.1em', fontSize: '0.9rem' }}>
                Read Our Safe Arrival Promise
              </Link>
            </div>
            
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
