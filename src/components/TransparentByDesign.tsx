import styles from './TransparentByDesign.module.css';
import { Gem, CheckCircle, PackageOpen, Globe2, FileCheck, HeartHandshake } from 'lucide-react';

const features = [
  {
    title: 'Product Craft Value',
    desc: 'Artisan work, material, technique, and finishing. We source directly from the hands that make them, ensuring authenticity and fair value.',
    icon: <Gem strokeWidth={1} className={styles.icon} />,
    gridClass: styles.boxLarge
  },
  {
    title: 'Quality Check',
    desc: 'Detailed inspection before dispatch.',
    icon: <CheckCircle strokeWidth={1} className={styles.icon} />,
    gridClass: styles.boxStandard
  },
  {
    title: 'Elite Packaging',
    desc: 'Protective wrapping, cushioning, and box strength.',
    icon: <PackageOpen strokeWidth={1} className={styles.icon} />,
    gridClass: styles.boxStandard
  },
  {
    title: 'International Logistics',
    desc: 'Secure courier movement from India to your destination country.',
    icon: <Globe2 strokeWidth={1} className={styles.icon} />,
    gridClass: styles.boxStandard
  },
  {
    title: 'Customs Handling',
    desc: 'Export documentation and country processing.',
    icon: <FileCheck strokeWidth={1} className={styles.icon} />,
    gridClass: styles.boxStandard
  },
  {
    title: 'Customer Support',
    desc: 'Tracking help, delivery support, and safe-arrival assistance.',
    icon: <HeartHandshake strokeWidth={1} className={styles.icon} />,
    gridClass: styles.boxStandard
  }
];

export default function TransparentByDesign() {
  return (
    <section className={styles.section}>
      <div className={`container ${styles.container}`}>
        
        <div className={styles.header}>
          <span className={styles.eyebrow}>RADICAL HONESTY</span>
          <h2 className={styles.title}>Transparent by Design</h2>
          <p className={styles.subtitle}>
            We believe trust begins with absolute clarity. Explore exactly how we manage your purchase from the artisan's workshop to your door.
          </p>
        </div>

        <div className={styles.bentoGrid}>
          {features.map((feature, index) => (
            <div key={index} className={`${styles.bentoBox} ${feature.gridClass}`}>
              <div className={styles.boxContent}>
                {feature.icon}
                <h3 className={styles.boxTitle}>{feature.title}</h3>
                <p className={styles.boxDesc}>{feature.desc}</p>
              </div>
              
              {/* Decorative hover effect layer */}
              <div className={styles.hoverGlow}></div>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
}
