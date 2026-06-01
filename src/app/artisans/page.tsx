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
          src="/images/artisan_crafting.png"
          alt="Artisan Crafting"
          fill
          priority
          className={styles.heroImage}
          style={{ objectFit: 'cover', objectPosition: 'center 20%' }}
        />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(12,12,12,1) 0%, rgba(12,12,12,0.1) 100%)' }} />
        <h1 className={styles.heroTitle}>The Makers</h1>
      </section>

      <div className={styles.contentContainer}>
        <p className={styles.textBlock} style={{ textAlign: 'center', fontSize: '1.4rem', marginTop: '2rem', fontStyle: 'italic', color: 'var(--color-accent)' }}>
          Behind every elegant silhouette is a pair of hands. At IDFIS, we don't just source materials; we partner with the custodians of ancient crafts.
        </p>

        <div className={styles.gridSplit} style={{ marginTop: '8rem' }}>
          <div>
            <h3 style={{ fontSize: '2.5rem', marginBottom: '1.5rem', fontFamily: 'var(--font-serif)', color: 'var(--color-foreground)' }}>The Needleworkers of Kashmir</h3>
            <p className={styles.textBlock}>
              High in the Himalayas, the art of Sozni and Tilla embroidery is passed down through generations. Our master artisans in Kashmir spend months on a single garment, using techniques so intricate that they cannot be replicated by any machine in the world. This is the epitome of slow fashion.
            </p>
          </div>
          <div className={styles.imageWrap}>
            <Image src="/images/kashmir_embroidery.png" alt="Kashmiri Artisan Embroidery" fill style={{ objectFit: 'cover' }} />
          </div>
        </div>

        <blockquote className={styles.quoteBlock}>
          "True craft cannot be rushed. It must be felt in the fingertips and woven from the soul."
        </blockquote>

        <div className={styles.gridSplitReverse}>
          <div>
            <h3 style={{ fontSize: '2.5rem', marginBottom: '1.5rem', fontFamily: 'var(--font-serif)', color: 'var(--color-foreground)' }}>The Printers of Jaipur</h3>
            <p className={styles.textBlock}>
              In the heart of Rajasthan, the rhythmic thud of wooden blocks against fabric tells a story of organic creation. We collaborate with master dyers and block printers who use natural indigo and madder root, pressing heavily carved wooden blocks onto pure organic cotton to create our iconic contemporary prints.
            </p>
          </div>
          <div className={styles.imageWrap}>
            <Image src="/images/block_print.png" alt="Jaipur Block Printing" fill style={{ objectFit: 'cover' }} />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
