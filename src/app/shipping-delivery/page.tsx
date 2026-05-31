import Header from '@/components/Header';
import Footer from '@/components/Footer';
import styles from '../about.module.css';

export default function ShippingDelivery() {
  return (
    <div className={styles.pageWrapper}>
      <Header />
      
      <div style={{ paddingTop: '8rem', textAlign: 'center' }}>
        <h1 className={styles.sectionTitle} style={{ color: 'var(--color-accent)' }}>Shipping & Delivery</h1>
        <p className={styles.textBlock} style={{ maxWidth: '600px', margin: '0 auto' }}>
          Radical transparency in international logistics. We do not hide our shipping costs behind inflated product prices.
        </p>
      </div>

      <div className={styles.contentContainer}>
        <div style={{ background: 'var(--color-surface)', padding: '3rem', borderRadius: 'var(--radius-lg)', marginTop: '4rem' }}>
          <h3 style={{ fontSize: '1.8rem', fontFamily: 'var(--font-serif)', marginBottom: '1.5rem' }}>How We Calculate Shipping</h3>
          <p className={styles.textBlock}>
            Shipping handcrafted items globally requires care, not flat rates. Your shipping cost is calculated dynamically at checkout based on four critical factors:
          </p>
          <ul style={{ paddingLeft: '1.5rem', lineHeight: '1.8', fontSize: '1.1rem', marginBottom: '2rem' }}>
            <li><strong>Destination:</strong> Distance from our atelier in Tamil Nadu, India.</li>
            <li><strong>Product Weight & Volume:</strong> A heavy brass artifact ships differently than a lightweight silk scarf.</li>
            <li><strong>Courier Service:</strong> We partner only with premium logistics providers (DHL, FedEx) to ensure secure chain of custody.</li>
            <li><strong>Protective Requirements:</strong> Fragile items require custom crating, which is factored into the shipping weight.</li>
          </ul>
        </div>

        <div className={styles.gridSplit} style={{ marginTop: '4rem' }}>
          <div>
            <h3 style={{ fontSize: '1.8rem', fontFamily: 'var(--font-serif)', marginBottom: '1.5rem' }}>Tracked Every Step</h3>
            <p className={styles.textBlock}>
              The moment your piece leaves our atelier, it is assigned a tracking number. You will receive email notifications at every major transit hub until the package reaches your doorstep. 
            </p>
            <p className={styles.textBlock}>
              <em>Average international transit times are 5-8 business days following a 2-day quality inspection period.</em>
            </p>
          </div>
          <div style={{ background: 'var(--color-accent)', color: 'white', padding: '3rem', borderRadius: 'var(--radius-lg)', textAlign: 'center' }}>
             <h3 style={{ fontSize: '1.8rem', fontFamily: 'var(--font-serif)', marginBottom: '1.5rem' }}>Customs & Duties</h3>
             <p style={{ fontSize: '1.1rem', lineHeight: '1.6' }}>
               For seamless delivery, all international orders are shipped DDU (Delivered Duty Unpaid). Any local import duties or taxes are calculated by your local customs authority and are the responsibility of the recipient.
             </p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
