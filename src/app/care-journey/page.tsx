import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import styles from '../about.module.css';

export default function CareJourney() {
  const journeySteps = [
    {
      title: '01. Craft Origin Verification',
      description: 'Before a piece ever leaves the artisan cluster, it undergoes a rigorous provenance check. We ensure that every thread, dye, and technique aligns with authentic heritage practices. This is where the story begins—at the source.',
      image: '/images/varanasi_loom.png'
    },
    {
      title: '02. Multi-Point Quality Check',
      description: 'Upon arrival at our curatorial headquarters, each garment is inspected by hand. We look for the strength of the weave, the consistency of the block print, and the integrity of the seams, celebrating the natural variations of handmade craft while ensuring enduring quality.',
      image: '/images/craft_in_detail.png'
    },
    {
      title: '03. Elite Protective Packaging',
      description: 'Luxury is an experience, even in transit. Your piece is swathed in acid-free tissue, secured in an elegant, structured IDFIS presentation box, and sealed for international travel. Our packaging is designed to protect heirlooms.',
      image: '/images/packed_with_care_idfis.png' // Utilizing the generated HD packaging image
    },
    {
      title: '04. Tracked Global Dispatch',
      description: 'From our hands to yours, anywhere in the world. We partner with premier global couriers to ensure your package is handled with the utmost care, providing you with real-time tracking from dispatch to your doorstep.',
      image: '/images/india_to_world.png'
    },
    {
      title: '05. Concierge Arrival Support',
      description: 'The journey does not end at delivery. Our dedicated concierge team is available to assist with care instructions, styling advice, or any inquiries regarding your new heritage piece. We build relationships, not just transactions.',
      image: '/images/styled_modern_living.png'
    }
  ];

  return (
    <div className={styles.pageWrapper}>
      <Header />
      
      <section className={styles.hero} style={{ height: '60vh' }}>
        <Image 
          src="/images/luxury_packaging.png"
          alt="IDFIS Care Journey"
          fill
          priority
          className={styles.heroImage}
          style={{ objectFit: 'cover', objectPosition: 'center 40%' }}
        />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(12,12,12,1) 0%, rgba(12,12,12,0.3) 100%)' }} />
        <h1 className={styles.heroTitle} style={{ fontSize: '4rem' }}>The Karigar Care Journey™</h1>
      </section>

      <div className={styles.contentContainer} style={{ maxWidth: '1000px', padding: '6rem 2rem' }}>
        <p className={styles.textBlock} style={{ textAlign: 'center', fontSize: '1.4rem', fontStyle: 'italic', color: 'var(--color-accent)', marginBottom: '6rem' }}>
          We treat every garment not as inventory, but as a masterpiece. From the artisan's loom to your wardrobe, the Karigar Care Journey is our uncompromising commitment to preservation and luxury.
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '8rem' }}>
          {journeySteps.map((step, index) => {
            const isReverse = index % 2 !== 0;
            return (
              <div key={index} className={isReverse ? styles.gridSplitReverse : styles.gridSplit} style={{ margin: 0 }}>
                <div>
                  <h3 style={{ fontSize: '2rem', marginBottom: '1.5rem', fontFamily: 'var(--font-serif)', color: 'var(--color-foreground)' }}>
                    {step.title}
                  </h3>
                  <p className={styles.textBlock} style={{ fontSize: '1.1rem', opacity: 0.9 }}>
                    {step.description}
                  </p>
                </div>
                <div className={styles.imageWrap} style={{ height: '400px', boxShadow: '0 10px 30px rgba(0,0,0,0.5)' }}>
                  <Image src={step.image} alt={step.title} fill style={{ objectFit: 'cover' }} />
                </div>
              </div>
            );
          })}
        </div>

        <div style={{ textAlign: 'center', marginTop: '8rem', padding: '4rem 0', borderTop: '1px solid rgba(252,250,248,0.1)' }}>
          <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '2rem', marginBottom: '1.5rem', color: 'var(--color-foreground)' }}>Experience the Journey</h2>
          <a href="/collections/all" className="button-gold" style={{ display: 'inline-block', padding: '1rem 3rem' }}>
            Explore Collections
          </a>
        </div>
      </div>

      <Footer />
    </div>
  );
}
