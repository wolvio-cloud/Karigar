import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import styles from '../about.module.css';

export default function OurStory() {
  return (
    <div className={styles.pageWrapper}>
      <Header />
      
      <section className={styles.hero}>
        <Image 
          src="/images/story_hero.png"
          alt="IDFIS Architecture"
          fill
          priority
          className={styles.heroImage}
          style={{ objectFit: 'cover', objectPosition: 'center 30%' }}
        />
        <h1 className={styles.heroTitle}>Our Story</h1>
      </section>

      <div className={styles.contentContainer}>
        <h2 className={styles.sectionTitle}>Less, but better.</h2>
        <p className={styles.textBlock}>
          IDFIS was born from a singular vision: to elevate authentic Indian craft into the modern, global luxury narrative. We believe that true luxury lies in the time, intention, and heritage woven into a piece, not in mass production.
        </p>
        <p className={styles.textBlock}>
          Our journey started in the heart of India's artisan clusters, where generational knowledge of weaving, dyeing, and block printing is passed down like sacred texts. We sought to bridge the gap between this profound heritage and the modern minimalist aesthetic.
        </p>

        <blockquote className={styles.quoteBlock}>
          "We focus on the most important elements of each garment, and let go of everything superfluous."
        </blockquote>

        <div className={styles.gridSplit}>
          <div className={styles.imageWrap}>
            <Image src="/images/sustainability_nature.png" alt="Detail shot" fill style={{ objectFit: 'cover' }} />
          </div>
          <div>
            <h3 style={{ fontSize: '2rem', marginBottom: '1.5rem', fontFamily: 'var(--font-serif)' }}>The Philosophy</h3>
            <p className={styles.textBlock}>
              Every IDFIS piece is an investment. We reject the seasonal cycle of fast fashion in favor of timeless silhouettes. Our Kashmir coats and heritage sarees are designed to be heirlooms, aging gracefully and carrying stories across generations.
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
