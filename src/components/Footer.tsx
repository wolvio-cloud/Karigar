import Link from 'next/link';
import Image from 'next/image';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.topSection}>
          <div className={styles.brandColumn}>
            <div className={styles.logo}>
              <Image 
                src="/images/idfis-transparent.svg" 
                alt="IDFIS" 
                width={180} 
                height={60} 
              />
            </div>
            <p className={styles.tagline}>
              Indian craft heritage, curated for the global luxury wardrobe.
            </p>
            <div className={styles.newsletter}>
              <h4>Join the IDFIS Circle</h4>
              <p className={styles.newsletterDesc}>Limited drops, craft stories, and thoughtful updates.</p>
              <form style={{ display: 'flex', gap: '0.5rem', marginTop: '1rem' }}>
                <input type="email" placeholder="Enter your email" className={styles.input} />
                <button type="submit" className="btn-primary" style={{ padding: '0.8rem 1.5rem', minWidth: 'auto', fontSize: '0.85rem' }}>Join the Circle</button>
              </form>
              <p className={styles.privacyNote}>No spam. Only thoughtful updates from IDFIS.</p>
            </div>
          </div>

          <div className={styles.linksGrid}>
            <div className={styles.navGroup}>
              <h4>Shop</h4>
              <ul className={styles.navLinks}>
                <li><Link href="/collections/all">New Arrivals</Link></li>
                <li><Link href="/collections/kashmir-coats">Kashmir Coats</Link></li>
                <li><Link href="/collections/sarees">Heritage Sarees</Link></li>
                <li><Link href="/collections/kurtas">Silk Kurtas</Link></li>
                <li><Link href="/collections/accessories">Artisan Accessories</Link></li>
                <li><Link href="/collections/gifts">Gifts</Link></li>
              </ul>
            </div>

            <div className={styles.navGroup}>
              <h4>About IDFIS</h4>
              <ul className={styles.navLinks}>
                <li><Link href="/our-story">Our Story</Link></li>
                <li><Link href="/artisans">Artisans</Link></li>
                <li><Link href="/authenticity">Authenticity Promise</Link></li>
                <li><Link href="/packaging-safe-arrival">Care Journey</Link></li>
              </ul>
            </div>

            <div className={styles.navGroup}>
              <h4>Customer Care</h4>
              <ul className={styles.navLinks}>
                <li><Link href="/shipping-delivery">Shipping & Delivery</Link></li>
                <li><Link href="/packaging-safe-arrival">Packaging & Safe Arrival</Link></li>
                <li><Link href="/returns-damage-policy">Returns & Damage Policy</Link></li>
                <li><Link href="/faq">FAQ</Link></li>
                <li><Link href="/contact">Contact</Link></li>
                <li><Link href="/track-order">Track Order</Link></li>
              </ul>
            </div>

            <div className={styles.navGroup}>
              <h4>Legal</h4>
              <ul className={styles.navLinks}>
                <li><Link href="/privacy-policy">Privacy Policy</Link></li>
                <li><Link href="/terms-of-service">Terms of Service</Link></li>
                <li><Link href="/refund-policy">Refund Policy</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.bottom}>
        <div className={styles.bottomContainer}>
          <p className={styles.copyright}>&copy; {new Date().getFullYear()} IDFIS.</p>
          <div className={styles.bottomLinks}>
            <span>Secured by IDFIS Global Commerce</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
