import styles from './HeroSection.module.css';

export default function HeroSection() {
  return (
    <section className={styles.heroWrapper}>
      <div className={styles.leftCol}>
        <div className={styles.heroContent}>
          <h1 className={styles.brandTitle}>I D F I S</h1>
          <p className={styles.heroTagline}>
            TIMELESS ELEGANCE.<br />
            UNCOMPROMISING CRAFT.
          </p>
          <button className={styles.shopBtn}>EXPLORE COLLECTION</button>
        </div>
        <div className={styles.pagination}>
          <span className={`${styles.dot} ${styles.active}`}></span>
          <span className={styles.dot}></span>
          <span className={styles.dot}></span>
        </div>
      </div>
      <div className={styles.rightCol}>
        <img src="/images/bento_coat.png" alt="IDFIS Collection" className={styles.heroImg} />
      </div>
    </section>
  );
}
