import Header from '@/components/Header';
import Footer from '@/components/Footer';
import styles from '../about.module.css';

export default function PackagingSafeArrival() {
  return (
    <div className={styles.pageWrapper}>
      <Header />
      
      <div style={{ paddingTop: '8rem', textAlign: 'center' }}>
        <h1 className={styles.sectionTitle} style={{ color: 'var(--color-accent)' }}>Packed to Travel Safely™</h1>
        <p className={styles.textBlock} style={{ maxWidth: '600px', margin: '0 auto' }}>
          Our zero-compromise approach to packaging ensures your heirloom piece arrives exactly as it left our artisan's hands.
        </p>
      </div>

      <div style={{ position: 'relative', width: '100%', height: '50vh', marginBottom: '4rem' }}>
        <img 
          src="/images/luxury_packaging.png" 
          alt="Luxury Packaging" 
          style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
        />
      </div>

      <div className={styles.contentContainer}>
        <div className={styles.gridSplit}>
          <div>
            <h3 style={{ fontSize: '1.8rem', fontFamily: 'var(--font-serif)', marginBottom: '1.5rem' }}>Textiles & Sarees</h3>
            <p className={styles.textBlock}>
              Our heritage textiles, including Kashmir coats and sarees, are folded with acid-free tissue paper to prevent creasing and preserve natural dyes. They are then sealed in a protective, weather-resistant cotton muslin bag before being boxed in our rigid signature packaging.
            </p>
          </div>
          <div>
            <h3 style={{ fontSize: '1.8rem', fontFamily: 'var(--font-serif)', marginBottom: '1.5rem' }}>Brass & Wood Decor</h3>
            <p className={styles.textBlock}>
              Fragile and heavy items require architectural packaging. Brass items are polished, wrapped in anti-tarnish cloth, and nested in custom-cut foam inserts. Wooden decor is wrapped in padded corrugated layers and braced within reinforced double-walled export boxes to absorb transit shocks.
            </p>
          </div>
        </div>

        <div style={{ background: '#f8d7da', color: '#721c24', padding: '3rem', borderRadius: 'var(--radius-lg)', textAlign: 'center', marginTop: '4rem' }}>
             <h3 style={{ fontSize: '1.8rem', fontFamily: 'var(--font-serif)', marginBottom: '1.5rem' }}>The Safe Arrival Guarantee</h3>
             <p style={{ fontSize: '1.1rem', lineHeight: '1.6', maxWidth: '700px', margin: '0 auto' }}>
               Despite our rigorous packaging, international transit can sometimes be unpredictable. <strong>If your item arrives damaged, we stand by you.</strong> Simply contact our support team within 48 hours of delivery with clear photos of the damaged item and the exterior packaging. We will immediately initiate a replacement or full refund process. No complex hurdles, just dedicated support.
             </p>
        </div>
      </div>

      <Footer />
    </div>
  );
}
