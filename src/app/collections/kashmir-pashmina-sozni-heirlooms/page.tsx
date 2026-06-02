'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { formatPrice } from '@/lib/data';
import { useCurrency } from '@/context/CurrencyContext';

export default function KashmirCollection() {
  const { currency } = useCurrency();
  const [products, setProducts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/products?category=kashmir-pashmina-sozni-heirlooms')
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

  const featuredProducts = products.slice(0, 6);

  return (
    <main style={{ backgroundColor: '#0a0a0a', color: '#fcfaf8', minHeight: '100vh' }}>
      <Header />
      
      {/* Hero Section */}
      <section style={{ position: 'relative', width: '100%', height: '90vh', display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>
        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0 }}>
          <Image src="/images/kashmir_hero.png" alt="Luxurious folded Kashmir shawls" fill style={{ objectFit: 'cover', opacity: 0.6 }} />
          <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'linear-gradient(to bottom, rgba(10,10,10,0.3) 0%, rgba(10,10,10,0.9) 100%)' }}></div>
        </div>
        
        <div style={{ position: 'relative', zIndex: 1, maxWidth: '800px', padding: '2rem' }}>
          <h1 style={{ fontSize: '4.5rem', fontFamily: 'var(--font-serif)', marginBottom: '1.5rem', lineHeight: 1.1, color: '#d4af37' }}>
            Kashmir Pashmina &<br/>Sozni Heirlooms
          </h1>
          <p style={{ fontSize: '1.2rem', lineHeight: 1.6, opacity: 0.9, marginBottom: '3rem', maxWidth: '600px', margin: '0 auto 3rem auto' }}>
            Woven warmth from the valley — fine shawls, stoles, and wraps crafted for elegance, gifting, and generational care.
          </p>
          <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center' }}>
            <Link href="#shop-collection" style={{ display: 'inline-block', padding: '1rem 2rem', backgroundColor: '#d4af37', color: '#000', textDecoration: 'none', textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: 600 }}>
              Shop the Collection
            </Link>
            <Link href="#craft-story" style={{ display: 'inline-block', padding: '1rem 2rem', border: '1px solid #d4af37', color: '#d4af37', textDecoration: 'none', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
              Explore the Craft Story
            </Link>
          </div>
        </div>
      </section>

      {/* Quick Craft Proof Strip */}
      <section style={{ padding: '3rem 0', borderBottom: '1px solid rgba(212,175,55,0.2)', borderTop: '1px solid rgba(212,175,55,0.2)' }}>
        <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem', justifyItems: 'center' }}>
          {[
            { icon: '🏔️', text: 'Craft-Origin Verified' },
            { icon: '✓', text: 'Quality Checked in India' },
            { icon: '📦', text: 'Elite Protective Packaging' },
            { icon: '✈️', text: 'Transparent Global Shipping' },
            { icon: '📍', text: 'Tracked Dispatch' }
          ].map((item, idx) => (
            <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '1rem', color: '#d4af37', width: '100%', justifyContent: 'flex-start', maxWidth: '280px' }}>
              <span style={{ fontSize: '1.8rem' }}>{item.icon}</span>
              <span style={{ fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.05em', lineHeight: 1.4 }}>{item.text}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Short Story Intro */}
      <section id="craft-story" style={{ padding: '8rem 2rem', backgroundColor: '#0a0a0a' }}>
        <div className="container" style={{ maxWidth: '1000px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>
            <div>
              <h2 style={{ fontSize: '3rem', fontFamily: 'var(--font-serif)', color: '#d4af37', marginBottom: '1.5rem' }}>The Warmth of the Valley</h2>
              <p style={{ fontSize: '1.2rem', lineHeight: 1.8, opacity: 0.9 }}>
                From the heart of the Himalayas comes a legacy of softness, warmth, and intricate handwork. IDFIS curates Kashmir shawls, wraps, and embroidered stoles for refined winter dressing, meaningful gifting, and heirloom care.
              </p>
            </div>
            <div>
              <Image src="/images/kashmir_story.png" alt="Elegant model draped in Kashmir shawl" width={500} height={700} style={{ width: '100%', height: 'auto', border: '1px solid rgba(212,175,55,0.2)' }} />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section id="shop-collection" style={{ padding: '6rem 2rem', backgroundColor: '#111', borderTop: '1px solid rgba(212,175,55,0.2)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
            <h2 style={{ fontSize: '3rem', fontFamily: 'var(--font-serif)', color: '#d4af37', marginBottom: '1rem' }}>Featured Shawls & Wraps</h2>
          </div>
          
          {loading ? (
            <div style={{ textAlign: 'center', padding: '4rem 0', color: '#d4af37' }}>Loading collection...</div>
          ) : (
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem' }}>
              {featuredProducts.map((product) => {
                return (
                  <div key={product.id} className="product-card group" style={{ cursor: 'pointer' }}>
                    <Link href={`/products/${product.slug}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                      <div style={{ position: 'relative', aspectRatio: '3/4', backgroundColor: '#0a0a0a', marginBottom: '1.5rem', overflow: 'hidden', border: '1px solid rgba(212,175,55,0.1)' }}>
                        <div style={{ position: 'absolute', top: '1rem', left: '1rem', background: '#d4af37', color: '#000', fontSize: '0.7rem', padding: '0.3rem 0.8rem', textTransform: 'uppercase', letterSpacing: '0.1em', zIndex: 10 }}>
                          {product.dispatchType || 'New'}
                        </div>
                        <Image src={product.images[0] || '/images/placeholder.png'} alt={product.title} fill style={{ objectFit: 'cover', transition: 'transform 0.5s ease' }} className="product-img" />
                        {product.images[1] && (
                          <Image src={product.images[1]} alt={product.title} fill style={{ objectFit: 'cover', opacity: 0, transition: 'opacity 0.5s ease' }} className="product-hover-img" />
                        )}
                      </div>
                      <h3 style={{ fontSize: '1.3rem', fontFamily: 'var(--font-serif)', margin: '0 0 0.5rem 0', color: '#d4af37' }}>{product.title}</h3>
                      <p style={{ fontSize: '0.9rem', color: 'rgba(252, 250, 248, 0.6)', margin: '0 0 0.5rem 0' }}>{product.subtitle}</p>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '1rem' }}>
                        <p style={{ fontSize: '1.2rem' }}>{formatPrice(product.price, currency)}</p>
                        <span style={{ fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: '#d4af37', borderBottom: '1px solid #d4af37' }}>View Product</span>
                      </div>
                    </Link>
                  </div>
                )
              })}
            </div>
          )}
        </div>
      </section>

      {/* Why It Feels Special */}
      <section style={{ padding: '8rem 2rem', backgroundColor: '#0a0a0a' }}>
        <div className="container" style={{ maxWidth: '1200px' }}>
          <h2 style={{ fontSize: '3rem', fontFamily: 'var(--font-serif)', color: '#d4af37', marginBottom: '4rem', textAlign: 'center' }}>Why It Feels Special</h2>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
            {[
              { icon: '✨', title: 'Lightweight Warmth', desc: 'Fine natural fibres provide warmth without unnecessary weight.' },
              { icon: '🧵', title: 'Hand Embroidery Details', desc: 'Sozni-style detailing reflects patience, precision, and heritage.' },
              { icon: '🎁', title: 'Gift-Ready Luxury', desc: 'Timeless winter pieces suited for meaningful gifting.' }
            ].map((feature, idx) => (
              <div key={idx} style={{ background: '#111', padding: '3rem', border: '1px solid rgba(212,175,55,0.1)', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
                <span style={{ fontSize: '2.5rem', color: '#d4af37', marginBottom: '1.5rem' }}>{feature.icon}</span>
                <h3 style={{ fontSize: '1.5rem', fontFamily: 'var(--font-serif)', color: '#d4af37', marginBottom: '1rem' }}>{feature.title}</h3>
                <p style={{ fontSize: '1rem', lineHeight: 1.6, opacity: 0.8 }}>{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Curated Edit Section */}
      <section style={{ padding: '6rem 2rem', backgroundColor: '#111', borderTop: '1px solid rgba(212,175,55,0.2)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '2rem' }}>
            {[
              { title: 'Winter Gifting', desc: 'Soft heirloom textiles, beautifully wrapped for meaningful occasions.', img: '/images/kashmir_curated_1.png', cta: 'Shop Winter Gifts' },
              { title: 'Heirloom Shawls', desc: 'Refined wraps and stoles designed to be cherished season after season.', img: '/images/kashmir_curated_2.png', cta: 'Explore Shawls' },
              { title: 'Premium Packaging', desc: 'Packed with care to protect softness, structure, and presentation.', img: '/images/kashmir_curated_3.png', cta: 'Explore Packaging' }
            ].map((edit, idx) => (
              <div key={idx} style={{ position: 'relative', overflow: 'hidden', aspectRatio: '4/5', border: '1px solid rgba(212,175,55,0.2)' }}>
                <Image src={edit.img} alt={edit.title} fill style={{ objectFit: 'cover', opacity: 0.7 }} />
                <div style={{ position: 'absolute', bottom: 0, left: 0, width: '100%', padding: '3rem 2rem', background: 'linear-gradient(to top, rgba(0,0,0,0.9), transparent)' }}>
                  <h3 style={{ fontSize: '2rem', fontFamily: 'var(--font-serif)', color: '#d4af37', marginBottom: '0.5rem' }}>{edit.title}</h3>
                  <p style={{ fontSize: '1rem', color: '#fff', opacity: 0.9, marginBottom: '1.5rem' }}>{edit.desc}</p>
                  <Link href="#shop-collection" style={{ display: 'inline-block', fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: '#d4af37', borderBottom: '1px solid #d4af37', textDecoration: 'none' }}>
                    {edit.cta}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Care + Packaging Section */}
      <section style={{ padding: '8rem 2rem', backgroundColor: '#0a0a0a', borderTop: '1px solid rgba(212,175,55,0.2)' }}>
        <div className="container" style={{ maxWidth: '1000px', textAlign: 'center' }}>
          <span style={{ color: '#d4af37', textTransform: 'uppercase', letterSpacing: '0.1em', fontSize: '0.85rem', marginBottom: '1rem', display: 'block' }}>Longevity & Arrival</span>
          <h2 style={{ fontSize: '3rem', fontFamily: 'var(--font-serif)', color: '#d4af37', marginBottom: '3rem' }}>Care for Your Shawl</h2>
          
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', textAlign: 'left', background: '#111', padding: '4rem', border: '1px solid rgba(212,175,55,0.2)' }}>
            <div>
              <h3 style={{ fontSize: '1.5rem', fontFamily: 'var(--font-serif)', color: '#d4af37', marginBottom: '1rem' }}>Storage & Care</h3>
              <p style={{ fontSize: '1rem', lineHeight: 1.6, opacity: 0.8 }}>
                Store your shawl folded in a breathable cloth bag, away from moisture, direct sunlight, perfume, and sharp jewellery. Air gently after use and dry clean when needed. Avoid hanging heavy shawls for long periods to preserve shape.
              </p>
            </div>
            <div>
              <h3 style={{ fontSize: '1.5rem', fontFamily: 'var(--font-serif)', color: '#d4af37', marginBottom: '1rem' }}>Packaging Reassurance</h3>
              <p style={{ fontSize: '1rem', lineHeight: 1.6, opacity: 0.8 }}>
                Each Kashmir shawl or stole is packed with soft textile protection, careful folding, moisture-conscious wrapping, and premium outer packaging suitable for international transit.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section style={{ padding: '6rem 2rem', textAlign: 'center' }}>
        <div className="container">
          <Link href="/collections/all" style={{ display: 'inline-block', padding: '1rem 3rem', backgroundColor: '#d4af37', color: '#000', textDecoration: 'none', textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: 600, marginRight: '1rem' }}>
            Explore More Heirloom Stories
          </Link>
          <Link href="/packaging-safe-arrival" style={{ display: 'inline-block', padding: '1rem 3rem', border: '1px solid #d4af37', color: '#d4af37', textDecoration: 'none', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
            Learn About IDFIS Packaging
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
