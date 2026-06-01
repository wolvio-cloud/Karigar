'use client';

import { useState, useEffect } from 'react';
import styles from './AnnouncementBar.module.css';

const messages = [
  "Authentic Indian craft, curated for the global luxury wardrobe.",
  "Tracked dispatch within 48 hours for eligible ready-to-ship orders.",
  "Transparent international shipping calculated at checkout.",
  "Elite protective packaging for every order."
];

export default function AnnouncementBar() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % messages.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className={styles.announcement}>
      <div className={styles.content}>
        {messages.map((msg, idx) => (
          <span 
            key={idx} 
            className={idx === currentIndex ? styles.active : styles.hidden}
          >
            {msg}
          </span>
        ))}
      </div>
    </div>
  );
}
