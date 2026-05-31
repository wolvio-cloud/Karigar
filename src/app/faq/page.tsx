'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import styles from '../about.module.css';

export default function FAQ() {
  return (
    <div className={styles.pageWrapper}>
      <Header />
      
      <div style={{ paddingTop: '8rem', textAlign: 'center' }}>
        <h1 className={styles.sectionTitle} style={{ color: 'var(--color-accent)' }}>FAQ & Support</h1>
      </div>

      <div className={styles.contentContainer} style={{ maxWidth: '800px' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          <div style={{ padding: '2rem', background: 'var(--color-surface)', borderRadius: 'var(--radius-md)' }}>
            <h4 style={{ fontSize: '1.2rem', fontWeight: 600, marginBottom: '1rem' }}>Are your products genuinely handmade?</h4>
            <p className={styles.textBlock} style={{ marginBottom: 0 }}>
              Yes. Every single item in our collection is handcrafted by artisans across India. Minor variations in color, weave, or polish are natural hallmarks of the handmade process and are not considered defects.
            </p>
          </div>
          
          <div style={{ padding: '2rem', background: 'var(--color-surface)', borderRadius: 'var(--radius-md)' }}>
            <h4 style={{ fontSize: '1.2rem', fontWeight: 600, marginBottom: '1rem' }}>How long will it take to receive my order?</h4>
            <p className={styles.textBlock} style={{ marginBottom: 0 }}>
              Once your order is placed, it undergoes a 2-day quality inspection. International shipping via our premium courier partners typically takes 5-8 business days depending on customs clearance in your country.
            </p>
          </div>

          <div style={{ padding: '2rem', background: 'var(--color-surface)', borderRadius: 'var(--radius-md)' }}>
            <h4 style={{ fontSize: '1.2rem', fontWeight: 600, marginBottom: '1rem' }}>Do I have to pay customs duties?</h4>
            <p className={styles.textBlock} style={{ marginBottom: 0 }}>
              Yes. We ship DDU (Delivered Duty Unpaid). Your local customs authority may charge import taxes or duties, which must be paid by the recipient prior to final delivery.
            </p>
          </div>
        </div>

        <div style={{ textAlign: 'center', marginTop: '6rem' }}>
          <p className={styles.textBlock}>Still have questions?</p>
          <a href="/contact" className="btn-primary" style={{ padding: '1rem 2rem', display: 'inline-block', textDecoration: 'none' }}>Contact Concierge</a>
        </div>
      </div>

      <Footer />
    </div>
  );
}
