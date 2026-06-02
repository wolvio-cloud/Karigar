'use client';

import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { formatPrice } from '@/lib/data';
import { useCurrency } from '@/context/CurrencyContext';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import QuickViewModal from '@/components/QuickViewModal';

export default function CategoryListing() {
  const params = useParams();
  const slug = params.slug as string;
  const { currency } = useCurrency();
  const [categoryProducts, setCategoryProducts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  
  // States
  const [sortOption, setSortOption] = useState('Featured');
  const [filterActive, setFilterActive] = useState(false);
  const [quickViewProduct, setQuickViewProduct] = useState<any | null>(null);

  useEffect(() => {
    const url = slug === 'all' ? '/api/products' : `/api/products?category=${slug}`;
    fetch(url)
      .then(res => res.json())
      .then(data => {
        if (Array.isArray(data)) {
          setCategoryProducts(data);
        } else {
          console.error('API returned non-array:', data);
          setCategoryProducts([]);
        }
        setLoading(false);
      })
      .catch(err => {
        console.error('Fetch error:', err);
        setCategoryProducts([]);
        setLoading(false);
      });
  }, [slug]);

  const titleMap: Record<string, { title: string, desc: string }> = {
    'kashmir-coats': { title: 'Kashmir Coats', desc: 'Refined winter pieces inspired by the warmth, texture, and elegance of Indian mountain craft traditions.' },
    'kurtas': { title: 'Silk Kurtas', desc: 'Elegant silhouettes for modern festive dressing.' },
    'sarees': { title: 'Heritage Sarees', desc: 'Timeless drapes rooted in India’s textile legacy.' },
    'accessories': { title: 'Artisan Accessories', desc: 'Small details with cultural character.' },
    'home-decor': { title: 'Home & Decor', desc: 'Indian craft for refined global interiors.' },
    'textiles': { title: 'Fine Textiles', desc: 'Handwoven stoles and dupattas celebrating Indian weaving heritage.' },
    'limited-editions': { title: 'Limited Editions', desc: 'Rare drops and small-batch masterworks.' },
    'all': { title: 'New Arrivals', desc: 'Discover our latest curation of authentic Indian handcrafted pieces.' }
  };

  const currentCategory = titleMap[slug] || { title: 'Collection', desc: 'Curated handcrafted pieces.' };

  // Apply sorting safely
  const safeProducts = Array.isArray(categoryProducts) ? categoryProducts : [];
  const sortedProducts = [...safeProducts].sort((a, b) => {
    if (sortOption === 'Price: Low to High') return (a.price || 0) - (b.price || 0);
    if (sortOption === 'Price: High to Low') return (b.price || 0) - (a.price || 0);
    return 0; // default featured/newest
  });

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
          <span>Craft-led</span>
          <span style={{ opacity: 0.3 }}>|</span>
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
            <span style={{ opacity: 0.5, fontSize: '0.9rem' }}>{sortedProducts.length} Pieces</span>
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

        {/* Filter Drawer */}
        {filterActive && (
          <div style={{ display: 'flex', gap: '3rem', marginBottom: '3rem', flexWrap: 'wrap', borderBottom: '1px solid var(--color-border)', paddingBottom: '2rem' }}>
            <div style={{ minWidth: '150px' }}>
              <h4 style={{ fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '1rem', color: 'var(--color-accent)' }}>Category</h4>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, fontSize: '0.9rem', opacity: 0.8, lineHeight: 2 }}>
                <li><label style={{ cursor: 'pointer' }}><input type="checkbox" style={{ marginRight: '0.5rem' }}/> Kashmir Coats</label></li>
                <li><label style={{ cursor: 'pointer' }}><input type="checkbox" style={{ marginRight: '0.5rem' }}/> Sarees</label></li>
                <li><label style={{ cursor: 'pointer' }}><input type="checkbox" style={{ marginRight: '0.5rem' }}/> Home Decor</label></li>
              </ul>
            </div>
            <div style={{ minWidth: '150px' }}>
              <h4 style={{ fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '1rem', color: 'var(--color-accent)' }}>Availability</h4>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, fontSize: '0.9rem', opacity: 0.8, lineHeight: 2 }}>
                <li><label style={{ cursor: 'pointer' }}><input type="checkbox" style={{ marginRight: '0.5rem' }}/> Ready to Ship</label></li>
                <li><label style={{ cursor: 'pointer' }}><input type="checkbox" style={{ marginRight: '0.5rem' }}/> Made to Order</label></li>
              </ul>
            </div>
            <div style={{ minWidth: '150px' }}>
              <h4 style={{ fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '1rem', color: 'var(--color-accent)' }}>GI Status</h4>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, fontSize: '0.9rem', opacity: 0.8, lineHeight: 2 }}>
                <li><label style={{ cursor: 'pointer' }}><input type="checkbox" style={{ marginRight: '0.5rem' }}/> Verified GI Heritage</label></li>
                <li><label style={{ cursor: 'pointer' }}><input type="checkbox" style={{ marginRight: '0.5rem' }}/> Regionally Recognized</label></li>
              </ul>
            </div>
          </div>
        )}
        
        {loading ? (
          <div style={{ textAlign: 'center', padding: '4rem 0', opacity: 0.5 }}>Curating pieces...</div>
        ) : sortedProducts.length === 0 ? (
          <div style={{ gridColumn: '1 / -1', padding: '4rem 2rem', textAlign: 'center', backgroundColor: 'rgba(255,255,255,0.02)', borderRadius: '8px' }}>
            <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.5rem', color: 'var(--color-accent)', marginBottom: '1rem' }}>This collection is being curated.</h3>
            <p style={{ opacity: 0.7, maxWidth: '500px', margin: '0 auto' }}>We are currently sourcing exceptional pieces for this category. Please check back soon or explore our other collections.</p>
            <Link href="/collections/all" style={{ display: 'inline-block', marginTop: '2rem', padding: '0.8rem 2rem', textDecoration: 'none', border: '1px solid var(--color-border)', color: 'var(--color-foreground)' }}>Explore All</Link>
          </div>
        ) : (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '3rem 2rem' }}>
            {sortedProducts.map((product) => {
              const mainImg = product.images && product.images.length > 0 ? product.images[0] : '/images/placeholder.png';
              const hoverImg = product.hoverImage || (product.images && product.images.length > 1 ? product.images[1] : mainImg);

              return (
                <div key={product.id} className="product-card-container" style={{ position: 'relative', display: 'flex', flexDirection: 'column' }}>
                  <div style={{ position: 'relative', overflow: 'hidden' }}>
                    <Link href={`/products/${product.slug}`} style={{ display: 'block', textDecoration: 'none', color: 'inherit' }}>
                      <div className="img-wrapper" style={{ position: 'relative', aspectRatio: '3/4', borderRadius: '4px', overflow: 'hidden', backgroundColor: 'var(--color-surface)', marginBottom: '1rem' }}>
                        
                        {/* Badges */}
                        <div style={{ position: 'absolute', top: '1rem', left: '1rem', zIndex: 10, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                          {product.giStatus && product.giStatus !== 'Not Applicable' && (
                            <span style={{ background: '#000', color: '#fff', fontSize: '0.65rem', padding: '0.2rem 0.6rem', textTransform: 'uppercase', letterSpacing: '0.1em', border: '1px solid #333' }}>
                              {product.giStatus}
                            </span>
                          )}
                          {product.dispatchType && (
                            <span style={{ background: 'var(--color-accent)', color: '#000', fontSize: '0.65rem', padding: '0.2rem 0.6rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                              {product.dispatchType}
                            </span>
                          )}
                        </div>

                        {/* Images with crossfade hover */}
                        <Image src={mainImg} alt={product.title} fill style={{ objectFit: 'cover' }} className="img-main" />
                        {hoverImg && (
                          <Image src={hoverImg} alt={`${product.title} Alternate`} fill style={{ objectFit: 'cover' }} className="img-hover" />
                        )}
                      </div>
                    </Link>

                    {/* Quick View Button Overlay */}
                    <button 
                      className="quick-view-btn"
                      onClick={(e) => { e.preventDefault(); setQuickViewProduct(product); }}
                      style={{
                        position: 'absolute',
                        bottom: '2rem',
                        left: '50%',
                        transform: 'translateX(-50%)',
                        background: 'var(--color-surface)',
                        color: 'var(--color-foreground)',
                        border: '1px solid var(--color-border)',
                        padding: '0.8rem 2rem',
                        textTransform: 'uppercase',
                        letterSpacing: '0.1em',
                        fontSize: '0.8rem',
                        cursor: 'pointer',
                        opacity: 0,
                        transition: 'opacity 0.3s ease',
                        zIndex: 20
                      }}
                    >
                      Quick View
                    </button>
                  </div>
                  
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                    <div>
                      <h3 style={{ fontSize: '1.1rem', marginBottom: '0.2rem', fontFamily: 'var(--font-serif)', lineHeight: 1.3 }}>{product.title}</h3>
                      <p style={{ fontSize: '0.8rem', color: 'rgba(252, 250, 248, 0.6)', marginBottom: '0.5rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                        {product.subtitle || 'Indian Craft'}
                      </p>
                    </div>
                    <div style={{ textAlign: 'right' }}>
                      <p style={{ color: 'var(--color-foreground)', fontSize: '1.1rem' }}>
                        {formatPrice(product.price, currency)}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>

      {quickViewProduct && (
        <QuickViewModal product={quickViewProduct} onClose={() => setQuickViewProduct(null)} />
      )}

      {/* Global CSS adjustments */}
      <style dangerouslySetInnerHTML={{__html: `
        .product-card-container .img-hover { opacity: 0; transition: opacity 0.5s ease; }
        .product-card-container:hover .img-hover { opacity: 1; }
        .product-card-container:hover .quick-view-btn { opacity: 1 !important; }
      `}} />

      <Footer />
    </main>
  );
}
