'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useSession } from 'next-auth/react';
import { useCart } from '@/context/CartContext';
import { useCurrency } from '@/context/CurrencyContext';
import styles from './Header.module.css';
import SearchDrawer from './SearchDrawer';

export default function Header() {
  const pathname = usePathname();
  const { data: session, status } = useSession();
  const [scrolled, setScrolled] = useState(false);
  const { itemCount } = useCart();
  const { currency, setCurrency } = useCurrency();
  const [mounted, setMounted] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const headerClass = `${styles.header} ${scrolled ? styles.scrolled : ''}`;

  return (
    <>
      <header className={headerClass}>
        <div className={styles.topBar}>
          
          <div className={styles.mobileLeft}>
            <button className={styles.hamburgerBtn} onClick={() => setMobileMenuOpen(true)}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
            </button>
          </div>

          <div className={styles.navGroupLeft}>
            <Link href="/collections/all">New Arrivals</Link>
            <div className={styles.dropdownParent}>
              <Link href="/collections/all">Collections</Link>
              <div className={styles.dropdownMenu}>
                <Link href="/collections/kashmir-pashmina-sozni-heirlooms">Kashmir Pashmina & Sozni</Link>
                <Link href="/collections/kanchipuram-silk-heirlooms">Kanchipuram Silk</Link>
                <Link href="/collections/ajrakh-block-print-stories">Ajrakh Block Prints</Link>
                <Link href="/collections/tanjore-heirloom-paintings" className={styles.subLink}>Tanjore Heirloom Paintings</Link>
                <Link href="/collections/accessories" className={styles.subLink}>Artisan Accessories</Link>
                <Link href="/collections/home-decor" className={styles.subLink}>Home & Decor</Link>
                <Link href="/collections/limited-editions">Limited Editions</Link>
              </div>
            </div>
            <Link href="/artisans">Artisans</Link>
            <Link href="/our-story">Our Story</Link>
            <Link href="/care-journey">Care Journey</Link>
          </div>

          <div className={styles.logoCenter}>
            <Link href="/">
              <Image 
                src="/images/idfis-transparent.svg?v=2" 
                alt="IDFIS" 
                width={scrolled ? 180 : 280} 
                height={scrolled ? 60 : 90} 
                priority
                style={{ transition: 'all 0.3s ease' }}
              />
            </Link>
          </div>

          <div className={styles.iconGroupRight}>
            <div className={styles.currencySelectWrap}>
              <select 
                value={currency} 
                onChange={(e) => setCurrency(e.target.value as any)}
                className={styles.currencySelect}
              >
                <option value="INR">INR ₹</option>
                <option value="USD">USD $</option>
                <option value="EUR">EUR €</option>
                <option value="GBP">GBP £</option>
              </select>
            </div>
            <button className={styles.iconBtn} onClick={() => setSearchOpen(true)}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
            </button>
            <Link href={status === 'authenticated' ? '/profile' : '/login'} className={styles.iconBtn}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
            </Link>
            <Link href="/cart" className={styles.iconBtn} style={{ position: 'relative' }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path><line x1="3" y1="6" x2="21" y2="6"></line><path d="M16 10a4 4 0 0 1-8 0"></path></svg>
              {mounted && itemCount > 0 && <span className={styles.cartBadge}>{itemCount}</span>}
            </Link>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <div className={`${styles.mobileDrawer} ${mobileMenuOpen ? styles.mobileDrawerOpen : ''}`}>
        <div className={styles.mobileDrawerHeader}>
          <Image src="/images/idfis-transparent.svg" alt="IDFIS" width={140} height={40} />
          <button className={styles.closeBtn} onClick={() => setMobileMenuOpen(false)}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
          </button>
        </div>
        <nav className={styles.mobileNav}>
          <Link href="/collections/all" onClick={() => setMobileMenuOpen(false)}>New Arrivals</Link>
          <div className={styles.mobileNavCategory}>Collections</div>
          <Link href="/collections/kashmir-pashmina-sozni-heirlooms" className={styles.mobileSubLink} onClick={() => setMobileMenuOpen(false)}>Kashmir Pashmina & Sozni</Link>
          <Link href="/collections/kanchipuram-silk-heirlooms" className={styles.mobileSubLink} onClick={() => setMobileMenuOpen(false)}>Kanchipuram Silk</Link>
          <Link href="/collections/ajrakh-block-print-stories" className={styles.mobileSubLink} onClick={() => setMobileMenuOpen(false)}>Ajrakh Block Prints</Link>
          <Link href="/collections/tanjore-heirloom-paintings" className={styles.mobileSubLink} onClick={() => setMobileMenuOpen(false)}>Tanjore Heirloom Paintings</Link>
          <Link href="/collections/accessories" className={styles.mobileSubLink} onClick={() => setMobileMenuOpen(false)}>Artisan Accessories</Link>
          <Link href="/collections/home-decor" className={styles.mobileSubLink} onClick={() => setMobileMenuOpen(false)}>Home & Decor</Link>
          <Link href="/artisans" onClick={() => setMobileMenuOpen(false)}>Artisans</Link>
          <Link href="/our-story" onClick={() => setMobileMenuOpen(false)}>Our Story</Link>
          <Link href="/care-journey" onClick={() => setMobileMenuOpen(false)}>Care Journey</Link>
        </nav>
      </div>
      
      {/* Search Drawer */}
      {searchOpen && <SearchDrawer onClose={() => setSearchOpen(false)} />}
    </>
  );
}
