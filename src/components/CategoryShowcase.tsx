import styles from './CategoryShowcase.module.css';
import Link from 'next/link';

export default function CategoryShowcase() {
  return (
    <section className="container section">
      <div className={styles.bentoGrid}>
        {/* Left Main Card - Coats */}
        <Link href="/collections/kashmir-coats" className={`${styles.card} ${styles.mainCard}`}>
          <img src="/images/bento_coat.png" alt="Kashmir Coats" className={styles.productImg} />
          <div className={styles.cardContent}>
            <h3>KASHMIR COATS</h3>
            <p>Warmth, refinement, and Indian winter craft.</p>
            <span className={styles.arrow}>→</span>
          </div>
        </Link>

        {/* Right Column */}
        <div className={styles.rightCol}>
          {/* Top Wide Card - Sarees */}
          <Link href="/collections/sarees" className={`${styles.card} ${styles.wideCard}`}>
            <img src="/images/bento_saree.png" alt="Sarees" className={styles.productImg} />
            <div className={styles.cardContent}>
              <h3>HERITAGE SAREES</h3>
              <p>Timeless drapes rooted in India’s textile legacy.</p>
              <span className={styles.arrow}>→</span>
            </div>
          </Link>

          {/* Bottom Row - Kurtas & Accessories */}
          <div className={styles.bottomRow}>
            <Link href="/collections/kurtas" className={`${styles.card} ${styles.squareCard1}`}>
              <img src="/images/bento_kurta.png" alt="Kurtas" className={styles.productImg} />
              <div className={styles.cardContent}>
                <h3>SILK KURTAS</h3>
                <p>Elegant silhouettes for modern festive dressing.</p>
                <span className={styles.arrow}>→</span>
              </div>
            </Link>

            <Link href="/collections/accessories" className={`${styles.card} ${styles.squareCard2}`}>
              <img src="/images/bento_accessories.png" alt="Accessories" className={styles.productImg} />
              <div className={styles.cardContent}>
                <h3>ARTISAN ACCESSORIES</h3>
                <p>Small details with cultural character.</p>
                <span className={styles.arrow}>→</span>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
