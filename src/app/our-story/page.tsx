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
          alt="IDFIS Heritage"
          fill
          priority
          className={styles.heroImage}
          style={{ objectFit: 'cover', objectPosition: 'center 30%' }}
        />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(12,12,12,1) 0%, rgba(12,12,12,0.1) 100%)' }} />
        <h1 className={styles.heroTitle}>A Heritage Reborn</h1>
      </section>

      <div className={styles.contentContainer}>
        <h2 className={styles.sectionTitle}>The Soul of Slow Luxury</h2>
        <p className={styles.textBlock}>
          IDFIS was born from a singular vision: to elevate authentic Indian craft into the modern, global luxury narrative. We believe that true luxury lies in the time, intention, and heritage woven into a piece, not in mass production. Our aesthetic is rooted in minimalism, but our soul is steeped in centuries of deep, textural history.
        </p>

        <div className={styles.gridSplit}>
          <div className={styles.imageWrap}>
            <Image src="/images/heritage_archway.png" alt="Heritage Palace Archway" fill style={{ objectFit: 'cover' }} />
          </div>
          <div>
            <h3 style={{ fontSize: '2rem', marginBottom: '1.5rem', fontFamily: 'var(--font-serif)', color: 'var(--color-accent)' }}>Sacred Architecture</h3>
            <p className={styles.textBlock}>
              Our journey begins in the ancient corridors of India's architectural marvels. The symmetry, the light filtering through intricate jali work, and the silence of enduring stone inspire the silhouettes of our garments. We design for the modern era, but we build on the foundations of royalty.
            </p>
          </div>
        </div>

        <blockquote className={styles.quoteBlock}>
          "We focus on the essential, letting go of the superfluous to reveal the timeless."
        </blockquote>

        <div className={styles.gridSplitReverse}>
          <div className={styles.imageWrap}>
            <Image src="/images/sustainability_nature.png" alt="Detail shot" fill style={{ objectFit: 'cover' }} />
          </div>
          <div>
            <h3 style={{ fontSize: '2rem', marginBottom: '1.5rem', fontFamily: 'var(--font-serif)', color: 'var(--color-accent)' }}>The Philosophy</h3>
            <p className={styles.textBlock}>
              Every IDFIS piece is an investment in time. We reject the seasonal cycle of fast fashion in favor of timeless silhouettes. Our Kashmir coats and heritage sarees are designed to be heirlooms, aging gracefully and carrying stories across generations.
            </p>
          </div>
        </div>
      </div>

      <section className={styles.parallaxSection}>
        <Image 
          src="/images/varanasi_loom.png"
          alt="Ancient Varanasi Loom"
          fill
          className={styles.parallaxImage}
        />
        <div className={styles.parallaxContent}>
          <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '2.5rem', marginBottom: '1rem', color: '#fff' }}>Rooted in Varanasi</h2>
          <p style={{ fontFamily: 'var(--font-sans)', fontSize: '1.2rem', color: 'rgba(255,255,255,0.8)', lineHeight: 1.8 }}>
            Our silks are born on looms that have operated for generations along the banks of the Ganges. This is not just weaving; it is a spiritual practice passed down through bloodlines.
          </p>
        </div>
      </section>

      <div className={styles.contentContainer} style={{ paddingTop: '2rem' }}>
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <p className={styles.textBlock} style={{ fontSize: '1.4rem', fontStyle: 'italic', color: 'var(--color-accent)' }}>
            Experience the craftsmanship firsthand.
          </p>
          <a href="/artisans" className="button-gold" style={{ display: 'inline-block', marginTop: '1rem' }}>
            Meet The Makers
          </a>
        </div>
      </div>

      <Footer />
    </div>
  );
}
