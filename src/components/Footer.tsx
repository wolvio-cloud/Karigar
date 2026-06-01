import Link from 'next/link';
import Image from 'next/image';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.brand}>
          <div className={styles.logo}>
            <Image 
              src="/images/idfis-transparent.svg" 
              alt="IDFIS" 
              width={160} 
              height={50} 
            />
          </div>
          <p className={styles.description}>
            Less but better. Focus on the most important elements of each garment, and let go of everything superfluous.
          </p>
          <form className={styles.newsletter}>
            <input type="email" placeholder="Your email address" className={styles.input} />
            <button type="submit" className="btn-primary" style={{ padding: '1rem' }}>Join</button>
          </form>
        </div>

        <div className={styles.navGroup}>
          <h4>Shop</h4>
          <ul className={styles.navLinks}>
            <li><Link href="/collections/kashmir-coats">Kashmir Coats</Link></li>
            <li><Link href="/collections/kurtas">Elegant Kurtas</Link></li>
            <li><Link href="/collections/sarees">Heritage Sarees</Link></li>
            <li><Link href="/collections/accessories">Artisan Accessories</Link></li>
          </ul>
        </div>

        <div className={styles.navGroup}>
          <h4>The Karigar Care Journey™</h4>
          <ul className={styles.navLinks}>
            <li><Link href="/shipping-delivery">Shipping & Delivery</Link></li>
            <li><Link href="/packaging-safe-arrival">Packaging & Safe Arrival</Link></li>
            <li><Link href="/authenticity">Authenticity Promise</Link></li>
            <li><Link href="/returns-damage-policy">Returns & Damage Policy</Link></li>
            <li><Link href="/faq">FAQ</Link></li>
          </ul>
        </div>

        <div className={styles.navGroup}>
          <h4>About IDFIS</h4>
          <ul className={styles.navLinks}>
            <li><Link href="/our-story">Our Story</Link></li>
            <li><Link href="/artisans">Artisans</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </div>
      </div>

      <div className={styles.bottom} style={{ borderTop: '1px solid var(--color-border)', paddingTop: '2rem', marginTop: '2rem' }}>
        <p style={{ fontFamily: 'var(--font-serif)', fontSize: '1.2rem', color: 'var(--color-accent)', marginBottom: '1rem' }}>
          Indian craft heritage, curated for the global luxury wardrobe.
        </p>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <p style={{ opacity: 0.6, fontSize: '0.85rem' }}>&copy; {new Date().getFullYear()} IDFIS.</p>
          <div style={{ display: 'flex', gap: '1.5rem', opacity: 0.6, fontSize: '0.85rem' }}>
            <Link href="/privacy">Privacy Policy</Link>
            <Link href="/terms">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
