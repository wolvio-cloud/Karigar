import Link from 'next/link';
import Image from 'next/image';
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
        <Image src="/images/kanchipuram_hero.png" alt="IDFIS Collection" width={800} height={800} style={{ width: '100%', height: '100%', objectFit: 'cover' }} className={styles.heroImg} />
      </div>
    </section>
  );
}
