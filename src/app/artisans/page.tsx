import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import styles from '../about.module.css';

export default function TheArtisans() {
  return (
    <div className={styles.pageWrapper}>
      <Header />
      
      <section className={styles.hero}>
        <Image 
          src="/images/bento_saree.png"
          alt="Artisan Crafting"
          fill
          priority
          className={styles.heroImage}
          style={{ objectFit: 'cover', objectPosition: 'center 20%' }}
        />
        <h1 className={styles.heroTitle}>The Makers</h1>
      </section>

      <div className={styles.contentContainer}>
        <p className={styles.textBlock} style={{ textAlign: 'center', fontSize: '1.3rem', marginTop: '2rem' }}>
          Behind every elegant silhouette is a pair of hands. At IDFIS, we don't just source materials; we partner with the custodians of ancient crafts.
        </p>

        <div className={styles.gridSplit} style={{ marginTop: '6rem' }}>
          <div>
            <h3 style={{ fontSize: '2rem', marginBottom: '1.5rem', fontFamily: 'var(--font-serif)' }}>The Master Weavers</h3>
            <p className={styles.textBlock}>
              Operating out of small, family-run ateliers in Kashmir and Varanasi, our master weavers use traditional handlooms that have remained unchanged for centuries. A single Kashmir coat can take up to three months to complete, representing the pinnacle of slow, intentional creation.
            </p>
          </div>
          <div className={styles.imageWrap}>
            {/* Placeholder for weaver video/image */}
            <video autoPlay loop muted playsInline style={{ width: '100%', height: '100%', objectFit: 'cover' }}>
              <source src="https://videos.pexels.com/video-files/5091624/5091624-uhd_2160_4096_24fps.mp4" type="video/mp4" />
            </video>
          </div>
        </div>

        <blockquote className={styles.quoteBlock}>
          "True craft cannot be rushed. It must be felt."
        </blockquote>
      </div>

      <Footer />
    </div>
  );
}
