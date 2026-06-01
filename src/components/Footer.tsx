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
                <li><Link href="/care-journey">Care Journey</Link></li>
              </ul>
            </div>

            <div className={styles.navGroup}>
              <h4>Customer Care</h4>
              <ul className={styles.navLinks}>
                <li><Link href="/shipping-delivery">Shipping & Delivery</Link></li>
                <li><Link href="/care-journey">Packaging & Safe Arrival</Link></li>
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

            <div className={styles.navGroup}>
              <h4>Follow IDFIS</h4>
              <p style={{ fontSize: '0.85rem', opacity: 0.7, marginBottom: '1rem', lineHeight: 1.5, marginTop: '1rem' }}>Limited drops, artisan stories, and global styling inspiration.</p>
              <div style={{ display: 'flex', gap: '1rem' }}>
                <a href="#" target="_blank" rel="noopener noreferrer" className={styles.socialIcon}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer" className={styles.socialIcon}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer" className={styles.socialIcon}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M21.5 12A9.5 9.5 0 0 0 12 2.5a9.5 9.5 0 0 0-3.37 18.25c-.07-.63-.12-1.58.03-2.28l1.43-6s-.37-1.82c0-1.7 1-2.98 2.23-2.98 1.05 0 1.56.78 1.56 1.7 0 1.05-.67 2.62-1.02 4.07-.3.1.53 1.95 1.77 1.95 2.12 0 3.75-2.23 3.75-5.46 0-2.88-2.07-4.88-5.02-4.88-3.4 0-5.38 2.55-5.38 5.17 0 1.05.4 2.18.9 2.8.1.13.12.22.08.38l-.33 1.33c-.05.2-.17.25-.37.15-1.4-.65-2.27-2.7-2.27-4.35 0-3.53 2.57-6.78 7.42-6.78 3.9 0 6.93 2.78 6.93 6.47 0 3.88-2.45 7-5.85 7-1.13 0-2.2-.6-2.57-1.3l-.7 2.67c-.25.97-.93 2.18-1.4 2.92a9.5 9.5 0 1 0 10.9-18.7z"></path></svg>
                </a>
              </div>
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
