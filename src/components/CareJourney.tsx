import styles from './CareJourney.module.css';
import Link from 'next/link';

const steps = [
  {
    title: 'Craft Origin Verified',
    desc: 'Each piece is selected for its Indian craft tradition, material quality, and artisan value.'
  },
  {
    title: 'Quality Checked',
    desc: 'Inspected for finish, stitching, measurements, surface quality, and packaging readiness.'
  },
  {
    title: 'Elite Protective Packaging',
    desc: 'Products are packed according to material, weight, and fragility using layered protection.'
  },
  {
    title: 'Transparent Shipping Cost',
    desc: 'Shipping is calculated based on destination, package weight, size, and courier service.'
  },
  {
    title: 'Tracked Dispatch',
    desc: 'Customers receive tracking after dispatch and can follow the journey to their door.'
  },
  {
    title: 'Safe Arrival Support',
    desc: 'If an item arrives damaged, contact support within 48 hours for immediate assistance.'
  }
];

export default function CareJourney() {
  return (
    <section className={styles.section}>
      <div className={`container ${styles.container}`}>
        
        <div className={styles.header}>
          <span className={styles.eyebrow}>From Artisan Hands to Your Home</span>
          <h2 className={styles.title}>The IDFIS Karigar <br/>Care Journey&trade;</h2>
          <p className={styles.subtitle}>
            Every IDFIS order follows a careful journey — from craft-led sourcing and quality checks in India to elite protective packaging, transparent shipping, tracked dispatch, and safe arrival support.
          </p>
        </div>

        <div className={styles.timeline}>
          <div className={styles.line}></div>
          {steps.map((step, index) => (
            <div key={index} className={styles.step}>
              <div className={styles.node}></div>
              <div className={styles.stepNumber}>0{index + 1}</div>
              <div className={styles.stepContent}>
                <h3 className={styles.stepTitle}>{step.title}</h3>
                <p className={styles.stepDesc}>{step.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.footer}>
          <Link href="/care-journey" className={styles.button}>
            Explore Our Care Philosophy
          </Link>
        </div>

      </div>
    </section>
  );
}
