'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useCart } from '@/context/CartContext';
import { useCurrency } from '@/context/CurrencyContext';
import { Currency } from '@/lib/data';
import styles from './Header.module.css';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const { itemCount } = useCart();
  const { currency, setCurrency } = useCurrency();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <header className={styles.header}>
      <div className={styles.topBar}>
        <div className={styles.navGroupLeft}>
          <Link href="/collections/all">PRODUCTS</Link>
          <Link href="/artisans">DESIGNERS</Link>
          <Link href="/our-story">EXPLORE</Link>
          <Link href="/faq">SUPPORT</Link>
        </div>

        <div className={styles.logoCenter}>
          <Link href="/">
            <Image 
              src="/images/idfis-transparent.svg" 
              alt="IDFIS" 
              width={220} 
              height={70} 
            />
          </Link>
        </div>

        <div className={styles.iconGroupRight}>
          <div className={styles.currencySelectWrap}>
            <span style={{ fontSize: '0.8rem', marginRight: '0.5rem' }}>{currency} {currency === 'INR' ? '₹' : currency === 'USD' ? '$' : currency === 'EUR' ? '€' : '£'}</span>
          </div>
          <button className={styles.iconBtn}>🔍</button>
          <Link href="/login" className={styles.iconBtn}>👤</Link>
          <Link href="/cart" className={styles.iconBtn}>
            🛒 {mounted && itemCount > 0 && <span className={styles.cartBadge}>{itemCount}</span>}
          </Link>
        </div>
      </div>
    </header>
  );
}
