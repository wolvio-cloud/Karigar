'use client';

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
  const categoryProducts = products.filter(p => p.categorySlug === slug);
  const { currency } = useCurrency();

  const titleMap: Record<string, string> = {
    'kashmir-coats': 'Kashmir Coats',
    'kurtas': 'Elegant Kurtas',
    'sarees': 'Heritage Sarees'
  };

  return (
    <main>
      <Header />
      <div className="container" style={{ paddingTop: '10rem', paddingBottom: '6rem', minHeight: '100vh' }}>
        <h1 style={{ fontSize: '4rem', textAlign: 'center', marginBottom: '4rem' }}>
          {titleMap[slug] || 'Collection'}
        </h1>
        
        {categoryProducts.length === 0 ? (
          <p style={{ textAlign: 'center' }}>No products found in this category.</p>
        ) : (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '3rem' }}>
            {categoryProducts.map(product => (
              <Link href={`/products/${product.slug}`} key={product.id} style={{ display: 'block' }}>
                <div style={{ position: 'relative', height: '450px', borderRadius: '4px', overflow: 'hidden', marginBottom: '1.5rem' }}>
                  <Image src={product.image} alt={product.name} fill style={{ objectFit: 'cover' }} />
                </div>
                <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem', fontFamily: 'var(--font-sans)' }}>{product.name}</h3>
                <p style={{ color: 'var(--color-accent)' }}>{formatPrice(product.basePriceINR, currency)}</p>
              </Link>
            ))}
          </div>
        )}
      </div>
      <Footer />
    </main>
  );
}
