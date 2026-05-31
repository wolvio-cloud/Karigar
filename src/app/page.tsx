import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import CategoryShowcase from '@/components/CategoryShowcase';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Header />
      <HeroSection />
      
      <CategoryShowcase />

      {/* The Karigar Care Journey Section */}
      <section style={{ padding: '8rem 2rem', borderTop: '1px solid var(--color-border)', backgroundColor: 'var(--color-background)' }}>
        <div className="container" style={{ maxWidth: '1200px' }}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '6rem' }}>
            <span style={{ fontFamily: 'var(--font-sans)', fontSize: '0.8rem', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '1rem', color: 'var(--color-accent)' }}>The Guarantee</span>
            <h2 style={{ fontSize: '4rem', fontFamily: 'var(--font-serif)', color: 'var(--color-foreground)', textAlign: 'center', lineHeight: 1.1, margin: 0 }}>
              The Karigar <br/>Care Journey™
            </h2>
            <p style={{ fontSize: '1.2rem', maxWidth: '600px', textAlign: 'center', marginTop: '2rem', color: 'var(--color-foreground)', opacity: 0.8, fontFamily: 'var(--font-sans)', fontWeight: 300, lineHeight: 1.6 }}>
              We believe in radical transparency. From the artisan's loom in India to your doorstep anywhere in the world, your piece is tracked, protected, and guaranteed.
            </p>
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem', borderTop: '1px solid var(--color-border)', paddingTop: '4rem' }}>
            <div style={{ textAlign: 'center', padding: '0 1rem' }}>
              <div style={{ marginBottom: '2rem', color: 'var(--color-foreground)' }}>
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg>
              </div>
              <h3 style={{ fontSize: '1.5rem', fontFamily: 'var(--font-serif)', marginBottom: '1rem', fontWeight: 400 }}>Packed to Travel Safely</h3>
              <p style={{ fontSize: '0.95rem', fontFamily: 'var(--font-sans)', opacity: 0.7, lineHeight: 1.5 }}>Custom crating and climate-sealed packaging for international transit.</p>
            </div>
            
            <div style={{ textAlign: 'center', padding: '0 1rem' }}>
              <div style={{ marginBottom: '2rem', color: 'var(--color-foreground)' }}>
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.2-1.1.6L3 8l6 4-3 3-3-1-2 2 4 4 2-2-1-3 3-3 4 6l1.2-.7c.4-.2.7-.6.6-1.1z"></path></svg>
              </div>
              <h3 style={{ fontSize: '1.5rem', fontFamily: 'var(--font-serif)', marginBottom: '1rem', fontWeight: 400 }}>Transparent Logistics</h3>
              <p style={{ fontSize: '0.95rem', fontFamily: 'var(--font-sans)', opacity: 0.7, lineHeight: 1.5 }}>Real-time tracking and zero hidden shipping markups.</p>
            </div>
            
            <div style={{ textAlign: 'center', padding: '0 1rem' }}>
              <div style={{ marginBottom: '2rem', color: 'var(--color-foreground)' }}>
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
              </div>
              <h3 style={{ fontSize: '1.5rem', fontFamily: 'var(--font-serif)', marginBottom: '1rem', fontWeight: 400 }}>48-Hour Guarantee</h3>
              <p style={{ fontSize: '0.95rem', fontFamily: 'var(--font-sans)', opacity: 0.7, lineHeight: 1.5 }}>If your item arrives damaged, we resolve it within 48 hours.</p>
            </div>
          </div>
          
          <div style={{ textAlign: 'center', marginTop: '5rem' }}>
            <a href="/transparency" style={{ display: 'inline-block', borderBottom: '1px solid var(--color-foreground)', paddingBottom: '4px', textDecoration: 'none', color: 'var(--color-foreground)', fontFamily: 'var(--font-sans)', fontSize: '0.85rem', letterSpacing: '0.1em', fontWeight: 500, transition: 'opacity 0.2s ease' }}>
              DISCOVER OUR PROCESS
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
