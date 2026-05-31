'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './login.module.css';

export default function LoginPage() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className={styles.loginWrapper}>
      <div className={styles.bgBlob} />
      
      <div className={styles.loginCard}>
        <div className={styles.header}>
          <Link href="/" className={styles.logo}>
            <Image 
              src="/images/idfis-gold-lockup-parchment.svg" 
              alt="IDFIS Logo" 
              width={180} 
              height={60} 
              priority
            />
          </Link>
          <h1 className={styles.title}>{isLogin ? 'Welcome Back' : 'Create Account'}</h1>
          <p className={styles.subtitle}>
            {isLogin 
              ? 'Enter your details to access your IDFIS account.' 
              : 'Join our exclusive artisan circle.'}
          </p>
        </div>

        <form onSubmit={(e) => e.preventDefault()}>
          {!isLogin && (
            <div className={styles.formGroup}>
              <label className={styles.label}>Full Name</label>
              <input type="text" className={styles.input} placeholder="John Doe" required />
            </div>
          )}
          
          <div className={styles.formGroup}>
            <label className={styles.label}>Email Address</label>
            <input type="email" className={styles.input} placeholder="you@example.com" required />
          </div>

          <div className={styles.formGroup}>
            <label className={styles.label}>Password</label>
            <input type="password" className={styles.input} placeholder="••••••••" required />
            {isLogin && (
              <Link href="#" className={styles.forgotPassword}>Forgot Password?</Link>
            )}
          </div>

          <button type="submit" className="btn-primary" style={{ width: '100%' }}>
            {isLogin ? 'Sign In' : 'Create Account'}
          </button>
        </form>

        <div className={styles.divider}>Or</div>

        <button className={styles.socialBtn}>
          Continue with Google
        </button>
        <button className={styles.socialBtn}>
          Continue with Apple
        </button>

        <p className={styles.toggleText}>
          {isLogin ? "Don't have an account? " : "Already have an account? "}
          <span 
            className={styles.toggleLink}
            onClick={() => setIsLogin(!isLogin)}
          >
            {isLogin ? 'Sign Up' : 'Log In'}
          </span>
        </p>
      </div>
    </div>
  );
}
