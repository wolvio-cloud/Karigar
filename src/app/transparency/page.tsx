import Header from '@/components/Header';
import Footer from '@/components/Footer';
import styles from '../about.module.css';

export default function Transparency() {
  return (
    <div className={styles.pageWrapper}>
      <Header />
      
      <div style={{ paddingTop: '8rem', textAlign: 'center' }}>
        <h1 className={styles.sectionTitle} style={{ color: 'var(--color-accent)' }}>Radical Transparency</h1>
        <p className={styles.textBlock} style={{ maxWidth: '600px', margin: '0 auto' }}>
          Luxury without secrets. We believe you have the right to know exactly what you are paying for, and who your purchase supports.
        </p>
      </div>

      <div className={styles.contentContainer}>
        <div style={{ background: 'var(--color-surface)', padding: '4rem', borderRadius: 'var(--radius-lg)', marginTop: '4rem', display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          <div>
            <h3 style={{ fontSize: '1.8rem', fontFamily: 'var(--font-serif)', marginBottom: '1rem' }}>Cost Breakdown</h3>
            <p className={styles.textBlock}>
              Traditional retail applies a 5x to 8x markup to cover middlemen, physical boutiques, and extensive marketing. By operating on a direct-to-consumer model from India, we eliminate these intermediaries. Our pricing directly reflects the raw materials, the artisan's intensive labor, quality control, and sustainable packaging. 
            </p>
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1rem', textAlign: 'center' }}>
            <div style={{ padding: '1.5rem', background: 'white', borderRadius: '4px' }}>
              <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'var(--color-accent)' }}>45%</div>
              <div style={{ fontSize: '0.9rem', marginTop: '0.5rem' }}>Artisan Wages & Craft</div>
            </div>
            <div style={{ padding: '1.5rem', background: 'white', borderRadius: '4px' }}>
              <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'var(--color-accent)' }}>25%</div>
              <div style={{ fontSize: '0.9rem', marginTop: '0.5rem' }}>Raw Materials</div>
            </div>
            <div style={{ padding: '1.5rem', background: 'white', borderRadius: '4px' }}>
              <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'var(--color-accent)' }}>15%</div>
              <div style={{ fontSize: '0.9rem', marginTop: '0.5rem' }}>Packaging & QC</div>
            </div>
            <div style={{ padding: '1.5rem', background: 'white', borderRadius: '4px' }}>
              <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'var(--color-accent)' }}>15%</div>
              <div style={{ fontSize: '0.9rem', marginTop: '0.5rem' }}>Operations</div>
            </div>
          </div>
        </div>

        <blockquote className={styles.quoteBlock} style={{ margin: '4rem 0' }}>
          "True sustainability begins with fair compensation."
        </blockquote>
      </div>

      <Footer />
    </div>
  );
}
