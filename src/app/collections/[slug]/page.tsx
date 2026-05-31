'use client';

import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { products, formatPrice } from '@/lib/data';
import { useCurrency } from '@/context/CurrencyContext';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function CategoryListing() {
  const params = useParams();
  const slug = params.slug as string;
  const { currency } = useCurrency();
  const [categoryProducts, setCategoryProducts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`/api/products?category=${slug}`)
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

  const titleMap: Record<string, string> = {
    'kashmir-coats': 'Kashmir Coats',
    'kurtas': 'Elegant Kurtas',
    'sarees': 'Heritage Sarees',
    'accessories': 'Artisan Accessories'
  };

  return (
    <main>
      <Header />
      <div className="container" style={{ paddingTop: '10rem', paddingBottom: '6rem', minHeight: '100vh' }}>
        <h1 style={{ fontSize: '4rem', textAlign: 'center', marginBottom: '4rem' }}>
          {titleMap[slug] || 'Collection'}
        </h1>
        
        {loading ? (
          <p style={{ textAlign: 'center' }}>Loading collection...</p>
        ) : categoryProducts.length === 0 ? (
          <p style={{ textAlign: 'center' }}>No products found in this category.</p>
        ) : (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '3rem' }}>
            {categoryProducts.map(product => (
              <Link href={`/products/${product.slug}`} key={product.id} style={{ display: 'block' }}>
                <div style={{ position: 'relative', height: '450px', borderRadius: '4px', overflow: 'hidden', marginBottom: '1.5rem' }}>
                  <Image src={product.images && product.images.length > 0 ? product.images[0] : '/images/placeholder.png'} alt={product.title} fill style={{ objectFit: 'cover' }} />
                </div>
                <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem', fontFamily: 'var(--font-sans)' }}>{product.title}</h3>
                <p style={{ color: 'var(--color-accent)' }}>{formatPrice(product.price, currency)}</p>
              </Link>
            ))}
          </div>
        )}
      </div>
      <Footer />
    </main>
  );
}
