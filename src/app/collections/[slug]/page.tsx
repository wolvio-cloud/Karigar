'use client';

import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { formatPrice } from '@/lib/data';
import { useCurrency } from '@/context/CurrencyContext';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function CategoryListing() {
  const params = useParams();
  const slug = params.slug as string;
  const { currency } = useCurrency();
  const [categoryProducts, setCategoryProducts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  
  // Filter States
  const [sortOption, setSortOption] = useState('Featured');
  const [filterActive, setFilterActive] = useState(false);

  useEffect(() => {
    // If slug is 'all', fetch everything, else fetch by category
    const url = slug === 'all' ? '/api/products' : `/api/products?category=${slug}`;
    fetch(url)
      .then(res => res.json())
      .then(data => {
        setCategoryProducts(data);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setLoading(false);
      });
  }, [slug]);

  const titleMap: Record<string, { title: string, desc: string }> = {
    'kashmir-coats': { title: 'Kashmir Coats', desc: 'Refined winter pieces inspired by the warmth, texture, and elegance of Indian mountain craft traditions.' },
    'kurtas': { title: 'Silk Kurtas', desc: 'Elegant silhouettes for modern festive dressing.' },
    'sarees': { title: 'Heritage Sarees', desc: 'Timeless drapes rooted in India’s textile legacy.' },
    'accessories': { title: 'Artisan Accessories', desc: 'Small details with cultural character.' },
    'gifts': { title: 'Gifts', desc: 'Curated artisanal gifts for the global wardrobe.' },
    'limited-editions': { title: 'Limited Editions', desc: 'Rare drops and small-batch masterworks.' },
    'all': { title: 'New Arrivals', desc: 'Discover our latest curation of authentic Indian handcrafted pieces.' }
  };

  const currentCategory = titleMap[slug] || { title: 'Collection', desc: 'Curated handcrafted pieces.' };

  return (
    <main style={{ backgroundColor: 'var(--color-background)', minHeight: '100vh' }}>
      <Header />
      
      {/* Editorial Banner */}
      <div style={{ position: 'relative', width: '100%', minHeight: '40vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '6rem 2rem 4rem 2rem', borderBottom: '1px solid var(--color-border)' }}>
        <h1 style={{ fontSize: '3.5rem', fontFamily: 'var(--font-serif)', marginBottom: '1rem', color: 'var(--color-foreground)' }}>
          {currentCategory.title}
        </h1>
        <p style={{ fontSize: '1.1rem', maxWidth: '600px', opacity: 0.8, lineHeight: 1.6, marginBottom: '2rem' }}>
          {currentCategory.desc}
        </p>
        <div style={{ fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--color-accent)', display: 'flex', gap: '1.5rem', flexWrap: 'wrap', justifyContent: 'center' }}>
          <span>Quality checked in India</span>
          <span style={{ opacity: 0.3 }}>|</span>
          <span>Packed with care</span>
          <span style={{ opacity: 0.3 }}>|</span>
          <span>Shipped globally</span>
        </div>
      </div>

      <div className="container" style={{ padding: '2rem', maxWidth: '1400px' }}>
        
        {/* Filters Toolbar */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingBottom: '2rem', borderBottom: '1px solid var(--color-border)', marginBottom: '3rem', flexWrap: 'wrap', gap: '1rem' }}>
          <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
            <button 
              onClick={() => setFilterActive(!filterActive)} 
              style={{ background: 'none', border: 'none', color: 'var(--color-foreground)', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"></polygon></svg>
              Filter
            </button>
            <span style={{ opacity: 0.5, fontSize: '0.9rem' }}>{categoryProducts.length} Pieces</span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <label style={{ fontSize: '0.9rem', opacity: 0.7 }}>Sort By</label>
            <select 
              value={sortOption}
              onChange={(e) => setSortOption(e.target.value)}
              style={{ background: 'transparent', border: 'none', color: 'var(--color-foreground)', fontSize: '0.9rem', cursor: 'pointer', outline: 'none', appearance: 'none', paddingRight: '1rem' }}
            >
              <option value="Featured" style={{ background: 'var(--color-surface)' }}>Featured</option>
              <option value="Newest" style={{ background: 'var(--color-surface)' }}>Newest</option>
              <option value="Price: Low to High" style={{ background: 'var(--color-surface)' }}>Price: Low to High</option>
              <option value="Price: High to Low" style={{ background: 'var(--color-surface)' }}>Price: High to Low</option>
            </select>
          </div>
        </div>

        {/* Filter Drawer / Panel (Visually represented) */}
        {filterActive && (
          <div style={{ display: 'flex', gap: '2rem', marginBottom: '3rem', flexWrap: 'wrap' }}>
            <div style={{ minWidth: '150px' }}>
              <h4 style={{ fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '1rem', color: 'var(--color-accent)' }}>Category</h4>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, fontSize: '0.9rem', opacity: 0.8, lineHeight: 2 }}>
                <li><label><input type="checkbox" style={{ marginRight: '0.5rem' }}/> All</label></li>
                <li><label><input type="checkbox" style={{ marginRight: '0.5rem' }}/> Coats</label></li>
                <li><label><input type="checkbox" style={{ marginRight: '0.5rem' }}/> Sarees</label></li>
              </ul>
            </div>
            <div style={{ minWidth: '150px' }}>
              <h4 style={{ fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '1rem', color: 'var(--color-accent)' }}>Availability</h4>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, fontSize: '0.9rem', opacity: 0.8, lineHeight: 2 }}>
                <li><label><input type="checkbox" style={{ marginRight: '0.5rem' }}/> In Stock</label></li>
                <li><label><input type="checkbox" style={{ marginRight: '0.5rem' }}/> Ready to Ship</label></li>
                <li><label><input type="checkbox" style={{ marginRight: '0.5rem' }}/> Made to Order</label></li>
              </ul>
            </div>
          </div>
        )}
        
        {loading ? (
          <div style={{ textAlign: 'center', padding: '4rem 0', opacity: 0.5 }}>Loading collection...</div>
        ) : categoryProducts.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '8rem 0' }}>
            <p style={{ fontSize: '1.2rem', fontFamily: 'var(--font-serif)', marginBottom: '1rem' }}>This collection is being curated.</p>
            <p style={{ opacity: 0.7, marginBottom: '2rem' }}>Please check back soon for our next artisan drop.</p>
            <Link href="/collections/all" className="btn-secondary" style={{ padding: '1rem 2rem', textDecoration: 'none', border: '1px solid var(--color-border)' }}>Explore All Pieces</Link>
          </div>
        ) : (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '3rem 2rem' }}>
            {categoryProducts.map((product, idx) => {
              // Simulate out of stock for specific id or randomly
              const isOutOfStock = product.id === '3'; // Hardcoded simulation
              const isReadyToShip = idx % 2 === 0;

              return (
                <div key={product.id} style={{ position: 'relative', display: 'flex', flexDirection: 'column' }}>
                  <Link href={`/products/${product.slug}`} style={{ display: 'block', textDecoration: 'none', color: 'inherit', position: 'relative', overflow: 'hidden', group: 'productCard' }}>
                    <div style={{ position: 'relative', aspectRatio: '3/4', borderRadius: '4px', overflow: 'hidden', backgroundColor: 'var(--color-surface)', marginBottom: '1rem' }}>
                      {/* Badges */}
                      <div style={{ position: 'absolute', top: '1rem', left: '1rem', zIndex: 10, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                        {isOutOfStock && <span style={{ background: '#000', color: '#fff', fontSize: '0.7rem', padding: '0.2rem 0.6rem', textTransform: 'uppercase', letterSpacing: '0.1em', border: '1px solid #fff' }}>Archive</span>}
                        {!isOutOfStock && isReadyToShip && <span style={{ background: 'var(--color-accent)', color: '#000', fontSize: '0.7rem', padding: '0.2rem 0.6rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Ready to Ship</span>}
                      </div>

                      {/* Image */}
                      <Image 
                        src={product.images && product.images.length > 0 ? product.images[0] : '/images/placeholder.png'} 
                        alt={product.title} 
                        fill 
                        style={{ objectFit: 'cover', transition: 'transform 0.5s ease', opacity: isOutOfStock ? 0.6 : 1 }} 
                        className="hoverZoom"
                      />
                    </div>
                    
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                      <div>
                        <h3 style={{ fontSize: '1.2rem', marginBottom: '0.2rem', fontFamily: 'var(--font-serif)' }}>{product.title}</h3>
                        <p style={{ fontSize: '0.8rem', color: 'rgba(252, 250, 248, 0.6)', marginBottom: '0.5rem' }}>Indian Craft</p>
                      </div>
                      <div style={{ textAlign: 'right' }}>
                        <p style={{ color: isOutOfStock ? 'rgba(252, 250, 248, 0.5)' : 'var(--color-foreground)', fontSize: '1.1rem' }}>
                          {isOutOfStock ? 'Currently Unavailable' : formatPrice(product.price, currency)}
                        </p>
                      </div>
                    </div>
                  </Link>
                </div>
              );
            })}
          </div>
        )}
      </div>

      {/* Global CSS adjustments for hover zoom */}
      <style dangerouslySetInnerHTML={{__html: `
        .hoverZoom:hover { transform: scale(1.05); }
      `}} />

      <Footer />
    </main>
  );
}
