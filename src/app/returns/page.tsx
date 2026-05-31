import Header from '@/components/Header';
import Footer from '@/components/Footer';
import styles from '../about.module.css';

export default function Returns() {
  return (
    <div className={styles.pageWrapper}>
      <Header />
      
      <div style={{ paddingTop: '8rem', textAlign: 'center' }}>
        <h1 className={styles.sectionTitle} style={{ color: 'var(--color-accent)' }}>Returns & Damage Policy</h1>
      </div>

      <div className={styles.contentContainer}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
          <div>
            <h3 style={{ fontSize: '1.8rem', fontFamily: 'var(--font-serif)', marginBottom: '1rem' }}>Our Philosophy on Returns</h3>
            <p className={styles.textBlock}>
              Because every piece is handcrafted and shipped internationally from India, standard "try and return" policies create an immense carbon footprint and logistical strain. We encourage mindful purchasing. However, if a piece does not meet your expectations, we accept returns within 14 days of delivery for store credit or refund, minus the original international shipping costs and a restocking fee.
            </p>
          </div>

          <div style={{ borderLeft: '4px solid var(--color-accent)', paddingLeft: '2rem' }}>
            <h3 style={{ fontSize: '1.8rem', fontFamily: 'var(--font-serif)', marginBottom: '1rem' }}>The 48-Hour Damage Guarantee</h3>
            <p className={styles.textBlock}>
              If your item arrives damaged despite our "Packed to Travel Safely™" protocols, you are fully protected. 
            </p>
            <ol style={{ paddingLeft: '1.5rem', lineHeight: '1.8', fontSize: '1.1rem' }}>
              <li>Contact our concierge at <strong>admin@idfis.com</strong> within 48 hours of delivery.</li>
              <li>Include clear, well-lit photos of the damaged item.</li>
              <li>Include photos of the exterior packaging (box, crating) to help us identify carrier mishandling.</li>
              <li>We will review your claim within 24 hours and authorize a free replacement or a full refund, including shipping.</li>
            </ol>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
