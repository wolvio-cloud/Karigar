import styles from './TrustMarquee.module.css';

const trustPoints = [
  'Craft Origin Verified',
  'Quality Checked in India',
  'Elite Protective Packaging',
  'Transparent Global Shipping',
  'Tracked Dispatch',
];

export default function TrustMarquee() {
  return (
    <div className={styles.marqueeWrapper}>
      <div className={styles.marqueeContent}>
        {/* Duplicate the list multiple times to ensure seamless infinite scrolling */}
        {[...Array(4)].map((_, arrayIndex) => (
          <div key={arrayIndex} className={styles.marqueeGroup}>
            {trustPoints.map((point, idx) => (
              <div key={`${arrayIndex}-${idx}`} className={styles.trustItem}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--color-accent)" strokeWidth="1.5" className={styles.icon}>
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                </svg>
                <span className={styles.text}>{point}</span>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
