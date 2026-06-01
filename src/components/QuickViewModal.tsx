'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { formatPrice } from '@/lib/data';
import { useCart } from '@/context/CartContext';
import { useCurrency } from '@/context/CurrencyContext';

interface QuickViewModalProps {
  product: any;
  onClose: () => void;
}

export default function QuickViewModal({ product, onClose }: QuickViewModalProps) {
  const { addToCart } = useCart();
  const { currency } = useCurrency();
  const [activeImage, setActiveImage] = useState(0);
  const [selectedVariants, setSelectedVariants] = useState<Record<string, string>>({});

  const images = product.images && product.images.length > 0 ? product.images : ['/images/placeholder.png'];
  const variantTypes = product.variants ? [...new Set(product.variants.map((v: any) => v.type))] as string[] : [];

  // Initialize selected variants
  if (Object.keys(selectedVariants).length === 0 && variantTypes.length > 0) {
    const initialVariants: Record<string, string> = {};
    variantTypes.forEach(type => {
      const firstOfType = product.variants.find((v: any) => v.type === type);
      if (firstOfType) initialVariants[type] = firstOfType.value;
    });
    setSelectedVariants(initialVariants);
  }

  const handleAddToCart = () => {
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
    onClose();
  };

  return (
    <div style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', backgroundColor: 'rgba(0,0,0,0.7)', zIndex: 9999, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '1rem' }}>
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 }} onClick={onClose} />
      <div style={{ position: 'relative', width: '100%', maxWidth: '1000px', maxHeight: '90vh', background: 'var(--color-background)', borderRadius: '4px', display: 'flex', flexDirection: 'row', overflow: 'hidden', zIndex: 10000, border: '1px solid var(--color-border)' }}>
        
        {/* Close Button */}
        <button onClick={onClose} style={{ position: 'absolute', top: '1rem', right: '1.5rem', background: 'none', border: 'none', color: 'var(--color-foreground)', fontSize: '1.5rem', cursor: 'pointer', zIndex: 10 }}>×</button>

        {/* Left: Image Carousel */}
        <div style={{ flex: '1 1 50%', position: 'relative', backgroundColor: 'var(--color-surface)', display: 'flex', flexDirection: 'column' }}>
          <div style={{ position: 'relative', flex: 1, minHeight: '500px' }}>
            {product.giStatus && product.giStatus !== 'Not Applicable' && (
              <div style={{ position: 'absolute', top: '1rem', left: '1rem', background: '#000', color: '#fff', fontSize: '0.65rem', padding: '0.2rem 0.6rem', textTransform: 'uppercase', letterSpacing: '0.1em', zIndex: 10 }}>
                {product.giStatus}
              </div>
            )}
            <Image src={images[activeImage]} alt={product.title} fill style={{ objectFit: 'cover' }} />
          </div>
          {images.length > 1 && (
            <div style={{ display: 'flex', gap: '0.5rem', padding: '1rem', overflowX: 'auto', background: 'var(--color-background)' }}>
              {images.map((img: string, idx: number) => (
                <div key={idx} onClick={() => setActiveImage(idx)} style={{ position: 'relative', width: '60px', height: '80px', cursor: 'pointer', border: activeImage === idx ? '1px solid var(--color-accent)' : '1px solid transparent', opacity: activeImage === idx ? 1 : 0.6 }}>
                  <Image src={img} alt="Thumbnail" fill style={{ objectFit: 'cover' }} />
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Right: Details */}
        <div style={{ flex: '1 1 50%', padding: '3rem', overflowY: 'auto' }}>
          <span style={{ color: 'var(--color-accent)', textTransform: 'uppercase', letterSpacing: '0.1em', fontSize: '0.75rem', marginBottom: '1rem', display: 'block' }}>
            {product.category?.name || 'Indian Craft'}
          </span>
          <h2 style={{ fontSize: '2rem', fontFamily: 'var(--font-serif)', marginBottom: '0.5rem', lineHeight: 1.1 }}>{product.title}</h2>
          {product.subtitle && (
            <p style={{ fontSize: '0.9rem', color: 'rgba(252, 250, 248, 0.7)', marginBottom: '1rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>{product.subtitle}</p>
          )}
          
          <p style={{ fontSize: '1.3rem', marginBottom: '2rem', color: 'var(--color-foreground)' }}>
            {formatPrice(product.price, currency)}
          </p>

          {/* Variants */}
          {variantTypes.length > 0 && (
            <div style={{ marginBottom: '2rem' }}>
              {variantTypes.map(type => {
                const options = product.variants.filter((v: any) => v.type === type);
                return (
                  <div key={type} style={{ marginBottom: '1.5rem' }}>
                    <p style={{ textTransform: 'uppercase', fontSize: '0.8rem', letterSpacing: '0.1em', marginBottom: '0.8rem' }}>{type}</p>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                      {options.map((opt: any) => (
                        <button 
                          key={opt.id}
                          onClick={() => setSelectedVariants(prev => ({...prev, [type]: opt.value}))}
                          disabled={opt.inventory === 0}
                          style={{
                            padding: '0.8rem 1.2rem',
                            background: selectedVariants[type] === opt.value ? 'var(--color-surface)' : 'transparent',
                            color: opt.inventory === 0 ? 'rgba(252, 250, 248, 0.3)' : 'var(--color-foreground)',
                            border: \`1px solid \${selectedVariants[type] === opt.value ? 'var(--color-foreground)' : 'var(--color-border)'}\`,
                            cursor: opt.inventory === 0 ? 'not-allowed' : 'pointer',
                            fontSize: '0.85rem'
                          }}
                        >
                          {opt.value}
                        </button>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          )}

          <button 
            className="btn-primary" 
            style={{ width: '100%', padding: '1.2rem', fontSize: '1rem', marginBottom: '1rem' }}
            onClick={handleAddToCart}
          >
            Add to Cart
          </button>
          
          <Link href={\`/products/\${product.slug}\`} style={{ display: 'block', textAlign: 'center', width: '100%', padding: '1.2rem', fontSize: '1rem', border: '1px solid var(--color-border)', color: 'var(--color-foreground)', textDecoration: 'none', marginBottom: '2rem' }}>
            View Full Details
          </Link>

          <div style={{ borderTop: '1px solid var(--color-border)', paddingTop: '1.5rem' }}>
            <p style={{ fontSize: '0.85rem', color: 'rgba(252, 250, 248, 0.7)', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
              {product.shippingNote || 'Shipping calculated at checkout.'}
            </p>
            <p style={{ fontSize: '0.85rem', color: 'rgba(252, 250, 248, 0.7)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
              {product.packagingNote || 'Packed with layered protection for safe arrival.'}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
