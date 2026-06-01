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
            <span style={{ fontFamily: 'var(--font-sans)', fontSize: '0.8rem', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '1rem', color: 'var(--color-accent)' }}>From Artisan Hands to Your Home</span>
            <h2 style={{ fontSize: '4rem', fontFamily: 'var(--font-serif)', color: 'var(--color-foreground)', textAlign: 'center', lineHeight: 1.1, margin: 0 }}>
              The IDFIS Karigar <br/>Care Journey™
            </h2>
            <p style={{ fontSize: '1.2rem', maxWidth: '800px', textAlign: 'center', marginTop: '2rem', color: 'var(--color-foreground)', opacity: 0.8, fontFamily: 'var(--font-sans)', fontWeight: 300, lineHeight: 1.6 }}>
              Every IDFIS order follows a careful journey — from craft-led sourcing and quality checks in India to elite protective packaging, transparent shipping, tracked dispatch, and safe arrival support.
            </p>
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem', borderTop: '1px solid var(--color-border)', paddingTop: '4rem' }}>
            <div style={{ textAlign: 'center', padding: '1rem', background: 'var(--color-surface)', borderRadius: '8px' }}>
              <h3 style={{ fontSize: '1.2rem', fontFamily: 'var(--font-serif)', marginBottom: '1rem', color: 'var(--color-accent)' }}>1. Craft Origin Verified</h3>
              <p style={{ fontSize: '0.95rem', opacity: 0.7, lineHeight: 1.5 }}>Each piece is selected for its Indian craft tradition, material quality, and artisan value.</p>
            </div>
            <div style={{ textAlign: 'center', padding: '1rem', background: 'var(--color-surface)', borderRadius: '8px' }}>
              <h3 style={{ fontSize: '1.2rem', fontFamily: 'var(--font-serif)', marginBottom: '1rem', color: 'var(--color-accent)' }}>2. Quality Checked</h3>
              <p style={{ fontSize: '0.95rem', opacity: 0.7, lineHeight: 1.5 }}>Inspected for finish, stitching, measurements, surface quality, and packaging readiness.</p>
            </div>
            <div style={{ textAlign: 'center', padding: '1rem', background: 'var(--color-surface)', borderRadius: '8px' }}>
              <h3 style={{ fontSize: '1.2rem', fontFamily: 'var(--font-serif)', marginBottom: '1rem', color: 'var(--color-accent)' }}>3. Elite Protective Packaging</h3>
              <p style={{ fontSize: '0.95rem', opacity: 0.7, lineHeight: 1.5 }}>Products are packed according to material, weight, and fragility using layered protection.</p>
            </div>
            <div style={{ textAlign: 'center', padding: '1rem', background: 'var(--color-surface)', borderRadius: '8px' }}>
              <h3 style={{ fontSize: '1.2rem', fontFamily: 'var(--font-serif)', marginBottom: '1rem', color: 'var(--color-accent)' }}>4. Transparent Shipping Cost</h3>
              <p style={{ fontSize: '0.95rem', opacity: 0.7, lineHeight: 1.5 }}>Shipping is calculated based on destination, package weight, size, and courier service.</p>
            </div>
            <div style={{ textAlign: 'center', padding: '1rem', background: 'var(--color-surface)', borderRadius: '8px' }}>
              <h3 style={{ fontSize: '1.2rem', fontFamily: 'var(--font-serif)', marginBottom: '1rem', color: 'var(--color-accent)' }}>5. Tracked Dispatch</h3>
              <p style={{ fontSize: '0.95rem', opacity: 0.7, lineHeight: 1.5 }}>Customers receive tracking after dispatch and can follow the journey to their door.</p>
            </div>
            <div style={{ textAlign: 'center', padding: '1rem', background: 'var(--color-surface)', borderRadius: '8px' }}>
              <h3 style={{ fontSize: '1.2rem', fontFamily: 'var(--font-serif)', marginBottom: '1rem', color: 'var(--color-accent)' }}>6. Safe Arrival Support</h3>
              <p style={{ fontSize: '0.95rem', opacity: 0.7, lineHeight: 1.5 }}>If an item arrives damaged, contact support within 48 hours for immediate assistance.</p>
            </div>
          </div>
          
          <div style={{ textAlign: 'center', marginTop: '4rem' }}>
            <a href="/packaging-safe-arrival" className="btn-primary" style={{ display: 'inline-block', padding: '1rem 2rem', textDecoration: 'none' }}>
              See Our Care Journey
            </a>
          </div>
        </div>
      </section>

      {/* Transparent by Design Section */}
      <section style={{ padding: '8rem 2rem', backgroundColor: 'var(--color-surface)' }}>
        <div className="container" style={{ maxWidth: '1200px' }}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '5rem' }}>
            <h2 style={{ fontSize: '3.5rem', fontFamily: 'var(--font-serif)', color: 'var(--color-foreground)', textAlign: 'center', margin: 0, marginBottom: '1rem' }}>
              Transparent by Design
            </h2>
            <p style={{ fontSize: '1.2rem', maxWidth: '600px', textAlign: 'center', color: 'var(--color-foreground)', opacity: 0.8, fontWeight: 300, lineHeight: 1.6 }}>
              We believe trust begins with clarity. Your purchase supports craft value, quality control, premium packaging, international logistics, and customer care.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', maxWidth: '800px', margin: '0 auto' }}>
            <div style={{ padding: '2rem', borderBottom: '1px solid var(--color-border)' }}>
              <h4 style={{ fontSize: '1.1rem', color: 'var(--color-accent)', marginBottom: '0.5rem' }}>Product Craft Value</h4>
              <p style={{ fontSize: '0.9rem', opacity: 0.7 }}>Artisan work, material, technique, and finishing.</p>
            </div>
            <div style={{ padding: '2rem', borderBottom: '1px solid var(--color-border)' }}>
              <h4 style={{ fontSize: '1.1rem', color: 'var(--color-accent)', marginBottom: '0.5rem' }}>Quality Check</h4>
              <p style={{ fontSize: '0.9rem', opacity: 0.7 }}>Inspection before dispatch.</p>
            </div>
            <div style={{ padding: '2rem', borderBottom: '1px solid var(--color-border)' }}>
              <h4 style={{ fontSize: '1.1rem', color: 'var(--color-accent)', marginBottom: '0.5rem' }}>Elite Packaging</h4>
              <p style={{ fontSize: '0.9rem', opacity: 0.7 }}>Protective wrapping, cushioning, garment care, and box strength.</p>
            </div>
            <div style={{ padding: '2rem', borderBottom: '1px solid var(--color-border)' }}>
              <h4 style={{ fontSize: '1.1rem', color: 'var(--color-accent)', marginBottom: '0.5rem' }}>International Logistics</h4>
              <p style={{ fontSize: '0.9rem', opacity: 0.7 }}>Courier movement from India to your destination country.</p>
            </div>
            <div style={{ padding: '2rem' }}>
              <h4 style={{ fontSize: '1.1rem', color: 'var(--color-accent)', marginBottom: '0.5rem' }}>Customs Handling</h4>
              <p style={{ fontSize: '0.9rem', opacity: 0.7 }}>Export documentation and destination-country processing.</p>
            </div>
            <div style={{ padding: '2rem' }}>
              <h4 style={{ fontSize: '1.1rem', color: 'var(--color-accent)', marginBottom: '0.5rem' }}>Customer Support</h4>
              <p style={{ fontSize: '0.9rem', opacity: 0.7 }}>Tracking help, delivery support, and safe-arrival assistance.</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
