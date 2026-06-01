import Link from 'next/link';
import styles from './HeroSection.module.css';

export default function HeroSection() {
  return (
    <section className={styles.heroWrapper}>
      <div className={styles.leftCol}>
        <div className={styles.heroContent}>
          <p className={styles.eyebrow}>ROYAL HERITAGE, LUXE REALM</p>
          <h1 className={styles.brandTitle}>India’s Handcrafted Heritage, Curated for the Global Luxury Wardrobe</h1>
          <p className={styles.heroTagline}>
            Discover craft-led sarees, coats, silk kurtas, accessories, and meaningful pieces made with Indian artistry, refined for modern global living.
          </p>
          <div className={styles.btnGroup}>
            <Link href="/collections/all" className="btn-primary" style={{ textDecoration: 'none', padding: '1rem 2rem', display: 'inline-block' }}>
              Shop New Arrivals
            </Link>
            <Link href="/our-story" className="btn-secondary" style={{ textDecoration: 'none', padding: '1rem 2rem', display: 'inline-block', border: '1px solid var(--color-border)', color: 'var(--color-foreground)', marginLeft: '1rem' }}>
              Explore Our Story
            </Link>
          </div>
        </div>
      </div>
      <div className={styles.rightCol}>
        <img src="/images/bento_coat.png" alt="IDFIS Collection" className={styles.heroImg} />
      </div>
    </section>
  );
}
