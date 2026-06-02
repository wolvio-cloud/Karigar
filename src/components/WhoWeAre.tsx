import styles from './WhoWeAre.module.css';
import Link from 'next/link';
import Image from 'next/image';

export default function WhoWeAre() {
  return (
    <section className={styles.section}>
      <div className={`container ${styles.container}`}>
        
        <div className={styles.collageWrapper}>
          <div className={styles.collageColumn}>
            <div className={`${styles.imageBox} ${styles.tall}`}>
              <Image src="/images/bento_saree.png" alt="Heritage Banarasi Saree" width={500} height={700} style={{ width: '100%', height: '100%', objectFit: 'cover' }} className={styles.image} />
            </div>
          </div>
          <div className={`${styles.collageColumn} ${styles.offsetDown}`}>
            <div className={`${styles.imageBox} ${styles.short}`}>
              <Image src="/images/bento_kurta.png" alt="Silk Kurta Craft" width={400} height={400} style={{ width: '100%', height: '100%', objectFit: 'cover' }} className={styles.image} />
            </div>
            <div className={`${styles.imageBox} ${styles.square}`}>
              <Image src="/images/bento_accessories.png" alt="Artisan Brass Accessories" width={400} height={400} style={{ width: '100%', height: '100%', objectFit: 'cover' }} className={styles.image} />
            </div>
          </div>
        </div>

        <div className={styles.content}>
          <span className={styles.title}>WHO WE ARE</span>
          <h3 className={styles.subtitle}>Indian Craft. <br />Global Luxury. <br />Honest Origins.</h3>
          
          <div className={styles.textBlock}>
            <p>IDFIS is a purpose-led luxury Indian craft house created to bring India’s finest handcrafted traditions to global wardrobes and homes. We curate craft-led apparel, textiles, accessories, and meaningful pieces that carry the beauty of Indian heritage into modern living.</p>
            <p>Every piece is selected with care — for its material, craftsmanship, cultural value, and timeless elegance. We believe luxury should feel personal, rooted, and honest.</p>
            <p>Through transparent sourcing, quality checks, elite packaging, and global delivery support, IDFIS connects skilled Indian craftsmanship with customers around the world.</p>
          </div>
          
          <Link href="/our-story" className={styles.button}>
            Explore Our Story
          </Link>
        </div>
        
      </div>
    </section>
  );
}
