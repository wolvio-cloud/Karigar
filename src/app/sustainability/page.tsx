import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import styles from '../about.module.css';

export default function Sustainability() {
  return (
    <div className={styles.pageWrapper}>
      <Header />
      
      <div className={styles.hero} style={{ height: '50vh', backgroundColor: '#F9F8F6' }}>
        <h1 className={styles.heroTitle} style={{ color: '#111', textShadow: 'none' }}>Sustainability</h1>
      </div>

      <div className={styles.contentContainer}>
        <div className={styles.gridSplit} style={{ marginTop: '0' }}>
          <div className={styles.imageWrap}>
             <Image 
              src="/images/sustainability_nature.png"
              alt="Raw cotton and dyes"
              fill
              style={{ objectFit: 'cover' }}
            />
          </div>
          <div>
            <h3 style={{ fontSize: '2rem', marginBottom: '1.5rem', fontFamily: 'var(--font-serif)' }}>Earth to Elegance</h3>
            <p className={styles.textBlock}>
              Our commitment to sustainability is rooted in our reverence for natural materials. We use exclusively organic cotton, ethically sourced silks, and unblended wools. 
            </p>
            <p className={styles.textBlock}>
              By avoiding synthetic fibers, we ensure that our garments not only feel extraordinary against the skin but can eventually return to the earth without leaving a trace.
            </p>
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2rem', textAlign: 'center', marginTop: '6rem' }}>
          <div>
            <h4 style={{ fontFamily: 'var(--font-sans)', fontWeight: 600, fontSize: '1.2rem', marginBottom: '1rem' }}>Zero Plastic</h4>
            <p className={styles.textBlock} style={{ fontSize: '0.9rem' }}>From our production line to our packaging, we are 100% plastic-free.</p>
          </div>
          <div>
            <h4 style={{ fontFamily: 'var(--font-sans)', fontWeight: 600, fontSize: '1.2rem', marginBottom: '1rem' }}>Natural Dyes</h4>
            <p className={styles.textBlock} style={{ fontSize: '0.9rem' }}>We utilize plant-based indigo, madder, and marigold for our vibrant hues.</p>
          </div>
          <div>
            <h4 style={{ fontFamily: 'var(--font-sans)', fontWeight: 600, fontSize: '1.2rem', marginBottom: '1rem' }}>Fair Wages</h4>
            <p className={styles.textBlock} style={{ fontSize: '0.9rem' }}>We operate on a direct-trade model, ensuring artisans set their own prices.</p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
