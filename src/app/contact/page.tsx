'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import styles from '../about.module.css';
import { useState } from 'react';

export default function ContactUs() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className={styles.pageWrapper}>
      <Header />
      
      <div style={{ paddingTop: '8rem' }}>
        <h1 className={styles.sectionTitle}>Contact Us</h1>
      </div>

      <div className={styles.contactGrid}>
        <div>
          <h3 style={{ fontSize: '2rem', marginBottom: '1.5rem', fontFamily: 'var(--font-serif)' }}>Get in touch</h3>
          <p className={styles.textBlock} style={{ marginBottom: '3rem' }}>
            Whether you have a question about our heritage sarees, need styling advice for your Kashmir coat, or want to inquire about a custom commission, our concierge team is here to assist you.
          </p>
          
          <div style={{ marginBottom: '2rem' }}>
            <h4 style={{ fontFamily: 'var(--font-sans)', fontWeight: 600, fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.5rem' }}>Boutique & Atelier</h4>
            <p className={styles.textBlock} style={{ fontSize: '1rem' }}>
              2/234 Thotta saalai, Sedapalayam<br />
              Palladam, 641664<br />
              Tiruppur, Tamil Nadu, India
            </p>
          </div>

          <div>
            <h4 style={{ fontFamily: 'var(--font-sans)', fontWeight: 600, fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.5rem' }}>Direct Inquiries</h4>
            <p className={styles.textBlock} style={{ fontSize: '1rem' }}>
              admin@idfis.com
            </p>
          </div>
        </div>

        <div style={{ background: 'var(--color-surface)', padding: '3rem', borderRadius: '4px' }}>
          {submitted ? (
            <div style={{ textAlign: 'center', padding: '4rem 0' }}>
              <h3 style={{ fontSize: '2rem', marginBottom: '1rem', fontFamily: 'var(--font-serif)' }}>Message Sent</h3>
              <p className={styles.textBlock}>Thank you for reaching out. Our concierge will be in touch shortly.</p>
            </div>
          ) : (
            <form className={styles.contactForm} onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}>
              <input type="text" className={styles.input} placeholder="Your Name" required />
              <input type="email" className={styles.input} placeholder="Your Email Address" required />
              <select className={styles.input} required defaultValue="">
                <option value="" disabled>Subject of Inquiry</option>
                <option value="order">Order Status</option>
                <option value="styling">Styling Advice</option>
                <option value="custom">Custom Commission</option>
                <option value="other">Other</option>
              </select>
              <textarea className={styles.textarea} placeholder="How can we assist you?" required></textarea>
              <button type="submit" className="btn-primary" style={{ marginTop: '1rem' }}>Send Message</button>
            </form>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
}
