'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import styles from './login.module.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function LoginPage() {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      if (isLogin) {
        const res = await signIn('credentials', {
          redirect: false,
          email,
          password
        });
        if (res?.error) {
          setError(res.error);
        } else {
          router.push('/profile');
          router.refresh();
        }
      } else {
        const res = await fetch('/api/auth/register', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ name, email, password })
        });
        if (res.ok) {
          const signRes = await signIn('credentials', {
            redirect: false,
            email,
            password
          });
          if (signRes?.error) {
            setError(signRes.error);
          } else {
            router.push('/profile');
            router.refresh();
          }
        } else {
          const data = await res.json();
          setError(data.message || 'Registration failed');
        }
      }
    } catch (err) {
      setError('An unexpected error occurred');
    } finally {
      setLoading(false);
    }
  };

  return (
    <main style={{ backgroundColor: 'var(--color-background)', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Header />
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

          <form onSubmit={handleSubmit}>
            {error && <div style={{ color: 'red', marginBottom: '1rem', textAlign: 'center', fontSize: '0.9rem' }}>{error}</div>}
            
            {!isLogin && (
              <div className={styles.formGroup}>
                <label className={styles.label}>Full Name</label>
                <input 
                  type="text" 
                  className={styles.input} 
                  placeholder="John Doe" 
                  value={name}
                  onChange={e => setName(e.target.value)}
                  required 
                />
              </div>
            )}
            
            <div className={styles.formGroup}>
              <label className={styles.label}>Email Address</label>
              <input 
                type="email" 
                className={styles.input} 
                placeholder="you@example.com" 
                value={email}
                onChange={e => setEmail(e.target.value)}
                required 
              />
            </div>

            <div className={styles.formGroup}>
              <label className={styles.label}>Password</label>
              <input 
                type="password" 
                className={styles.input} 
                placeholder="••••••••" 
                value={password}
                onChange={e => setPassword(e.target.value)}
                required 
              />
              {isLogin && (
                <Link href="#" className={styles.forgotPassword}>Forgot Password?</Link>
              )}
            </div>

            <button type="submit" className="btn-primary" style={{ width: '100%' }} disabled={loading}>
              {loading ? 'Processing...' : (isLogin ? 'Sign In' : 'Create Account')}
            </button>
          </form>

          <div className={styles.divider}>Or</div>

          <button className={styles.socialBtn} type="button" onClick={() => signIn('google', { callbackUrl: '/profile' })}>
            Continue with Google
          </button>

          <p className={styles.toggleText}>
            {isLogin ? "Don't have an account? " : "Already have an account? "}
            <span 
              className={styles.toggleLink}
              onClick={() => {
                setIsLogin(!isLogin);
                setError('');
              }}
            >
              {isLogin ? 'Sign Up' : 'Log In'}
            </span>
          </p>
        </div>
      </div>
      <Footer />
    </main>
  );
}
