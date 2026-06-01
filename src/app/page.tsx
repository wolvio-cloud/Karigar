import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import CategoryShowcase from '@/components/CategoryShowcase';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Header />
      <HeroSection />

      {/* Trust Strip Under Hero */}
      <div style={{ background: 'var(--color-surface)', borderBottom: '1px solid var(--color-border)', padding: '1rem 0' }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '3rem' }}>
          {['Craft Origin Verified', 'Quality Checked in India', 'Elite Protective Packaging', 'Transparent Global Shipping', 'Tracked Dispatch'].map((trust, idx) => (
            <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.85rem', color: 'var(--color-foreground)', opacity: 0.8, textTransform: 'uppercase', letterSpacing: '0.1em' }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--color-accent)" strokeWidth="2"><polyline points="20 6 9 17 4 12"></polyline></svg>
              {trust}
            </div>
          ))}
        </div>
      </div>
      
      <CategoryShowcase />

      {/* Featured Products: New Artisan Arrivals */}
      <section style={{ padding: '8rem 2rem', backgroundColor: 'var(--color-background)' }}>
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '4rem' }}>
            <h2 style={{ fontSize: '3rem', fontFamily: 'var(--font-serif)', margin: 0 }}>New Artisan Arrivals</h2>
            <Link href="/collections/all" style={{ fontSize: '0.9rem', color: 'var(--color-accent)', textTransform: 'uppercase', letterSpacing: '0.1em', textDecoration: 'none', borderBottom: '1px solid var(--color-accent)' }}>Shop All</Link>
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
            {/* Product Card 1 */}
            <div style={{ position: 'relative', group: 'product' }}>
              <Link href="/products/midnight-pashmina-coat" style={{ textDecoration: 'none', color: 'inherit' }}>
                <div style={{ position: 'relative', aspectRatio: '3/4', overflow: 'hidden', backgroundColor: 'var(--color-surface)', marginBottom: '1.5rem' }}>
                  <div style={{ position: 'absolute', top: '1rem', left: '1rem', background: 'var(--color-accent)', color: '#000', fontSize: '0.7rem', padding: '0.2rem 0.6rem', textTransform: 'uppercase', letterSpacing: '0.1em', zIndex: 10 }}>Ready to Ship</div>
                  <img src="/images/bento_coat.png" alt="Midnight Pashmina Coat" style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease' }} />
                </div>
                <h3 style={{ fontSize: '1.2rem', fontFamily: 'var(--font-serif)', margin: '0 0 0.5rem 0' }}>Midnight Pashmina Coat</h3>
                <p style={{ fontSize: '0.85rem', color: 'rgba(252, 250, 248, 0.6)', margin: '0 0 1rem 0' }}>Kashmir-inspired winter craft</p>
                <p style={{ fontSize: '1.1rem' }}>$450.00</p>
              </Link>
            </div>
            {/* Product Card 2 */}
            <div style={{ position: 'relative' }}>
              <Link href="/products/ivory-silk-kurta" style={{ textDecoration: 'none', color: 'inherit' }}>
                <div style={{ position: 'relative', aspectRatio: '3/4', overflow: 'hidden', backgroundColor: 'var(--color-surface)', marginBottom: '1.5rem' }}>
                  <div style={{ position: 'absolute', top: '1rem', left: '1rem', background: 'var(--color-border)', color: '#fff', fontSize: '0.7rem', padding: '0.2rem 0.6rem', textTransform: 'uppercase', letterSpacing: '0.1em', zIndex: 10 }}>Made to Order</div>
                  <img src="/images/bento_kurta.png" alt="Ivory Silk Kurta" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <h3 style={{ fontSize: '1.2rem', fontFamily: 'var(--font-serif)', margin: '0 0 0.5rem 0' }}>Ivory Silk Kurta</h3>
                <p style={{ fontSize: '0.85rem', color: 'rgba(252, 250, 248, 0.6)', margin: '0 0 1rem 0' }}>Minimalist festive wear</p>
                <p style={{ fontSize: '1.1rem' }}>$185.00</p>
              </Link>
            </div>
            {/* Product Card 3 */}
            <div style={{ position: 'relative' }}>
              <Link href="/products/terracotta-banarasi" style={{ textDecoration: 'none', color: 'inherit' }}>
                <div style={{ position: 'relative', aspectRatio: '3/4', overflow: 'hidden', backgroundColor: 'var(--color-surface)', marginBottom: '1.5rem' }}>
                  <img src="/images/bento_saree.png" alt="Terracotta Banarasi Saree" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <h3 style={{ fontSize: '1.2rem', fontFamily: 'var(--font-serif)', margin: '0 0 0.5rem 0' }}>Terracotta Banarasi Saree</h3>
                <p style={{ fontSize: '0.85rem', color: 'rgba(252, 250, 248, 0.6)', margin: '0 0 1rem 0' }}>Heritage handwoven drape</p>
                <p style={{ fontSize: '1.1rem' }}>$620.00</p>
              </Link>
            </div>
            {/* Product Card 4 */}
            <div style={{ position: 'relative' }}>
              <Link href="/products/brass-table-lamp" style={{ textDecoration: 'none', color: 'inherit' }}>
                <div style={{ position: 'relative', aspectRatio: '3/4', overflow: 'hidden', backgroundColor: 'var(--color-surface)', marginBottom: '1.5rem' }}>
                  <img src="/images/bento_accessories.png" alt="Artisan Accessories" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <h3 style={{ fontSize: '1.2rem', fontFamily: 'var(--font-serif)', margin: '0 0 0.5rem 0' }}>Vintage Brass Accent</h3>
                <p style={{ fontSize: '0.85rem', color: 'rgba(252, 250, 248, 0.6)', margin: '0 0 1rem 0' }}>Hand-casted home detail</p>
                <p style={{ fontSize: '1.1rem' }}>$110.00</p>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* The Karigar Care Journey Section */}
      <section style={{ padding: '8rem 2rem', borderTop: '1px solid var(--color-border)', backgroundColor: 'var(--color-surface)' }}>
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
            <div style={{ textAlign: 'center', padding: '1rem', background: 'var(--color-background)', borderRadius: '8px' }}>
              <h3 style={{ fontSize: '1.2rem', fontFamily: 'var(--font-serif)', marginBottom: '1rem', color: 'var(--color-accent)' }}>1. Craft Origin Verified</h3>
              <p style={{ fontSize: '0.95rem', opacity: 0.7, lineHeight: 1.5 }}>Each piece is selected for its Indian craft tradition, material quality, and artisan value.</p>
            </div>
            <div style={{ textAlign: 'center', padding: '1rem', background: 'var(--color-background)', borderRadius: '8px' }}>
              <h3 style={{ fontSize: '1.2rem', fontFamily: 'var(--font-serif)', marginBottom: '1rem', color: 'var(--color-accent)' }}>2. Quality Checked</h3>
              <p style={{ fontSize: '0.95rem', opacity: 0.7, lineHeight: 1.5 }}>Inspected for finish, stitching, measurements, surface quality, and packaging readiness.</p>
            </div>
            <div style={{ textAlign: 'center', padding: '1rem', background: 'var(--color-background)', borderRadius: '8px' }}>
              <h3 style={{ fontSize: '1.2rem', fontFamily: 'var(--font-serif)', marginBottom: '1rem', color: 'var(--color-accent)' }}>3. Elite Protective Packaging</h3>
              <p style={{ fontSize: '0.95rem', opacity: 0.7, lineHeight: 1.5 }}>Products are packed according to material, weight, and fragility using layered protection.</p>
            </div>
            <div style={{ textAlign: 'center', padding: '1rem', background: 'var(--color-background)', borderRadius: '8px' }}>
              <h3 style={{ fontSize: '1.2rem', fontFamily: 'var(--font-serif)', marginBottom: '1rem', color: 'var(--color-accent)' }}>4. Transparent Shipping Cost</h3>
              <p style={{ fontSize: '0.95rem', opacity: 0.7, lineHeight: 1.5 }}>Shipping is calculated based on destination, package weight, size, and courier service.</p>
            </div>
            <div style={{ textAlign: 'center', padding: '1rem', background: 'var(--color-background)', borderRadius: '8px' }}>
              <h3 style={{ fontSize: '1.2rem', fontFamily: 'var(--font-serif)', marginBottom: '1rem', color: 'var(--color-accent)' }}>5. Tracked Dispatch</h3>
              <p style={{ fontSize: '0.95rem', opacity: 0.7, lineHeight: 1.5 }}>Customers receive tracking after dispatch and can follow the journey to their door.</p>
            </div>
            <div style={{ textAlign: 'center', padding: '1rem', background: 'var(--color-background)', borderRadius: '8px' }}>
              <h3 style={{ fontSize: '1.2rem', fontFamily: 'var(--font-serif)', marginBottom: '1rem', color: 'var(--color-accent)' }}>6. Safe Arrival Support</h3>
              <p style={{ fontSize: '0.95rem', opacity: 0.7, lineHeight: 1.5 }}>If an item arrives damaged, contact support within 48 hours for immediate assistance.</p>
            </div>
          </div>
          
          <div style={{ textAlign: 'center', marginTop: '4rem' }}>
            <Link href="/packaging-safe-arrival" className="btn-secondary" style={{ display: 'inline-block', padding: '1rem 2rem', textDecoration: 'none', border: '1px solid var(--color-border)' }}>
              See The Care Journey
            </Link>
          </div>
        </div>
      </section>

      {/* Transparent by Design Section */}
      <section style={{ padding: '8rem 2rem', backgroundColor: 'var(--color-background)' }}>
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

      {/* Artisans Preview & Reviews */}
      <section style={{ padding: '8rem 2rem', backgroundColor: 'var(--color-surface)', borderTop: '1px solid var(--color-border)' }}>
        <div className="container" style={{ maxWidth: '1200px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>
            <div>
              <h2 style={{ fontSize: '3rem', fontFamily: 'var(--font-serif)', marginBottom: '1.5rem' }}>The Hands Behind the Pieces</h2>
              <p style={{ fontSize: '1.1rem', lineHeight: 1.8, opacity: 0.8, marginBottom: '2rem' }}>
                Behind every IDFIS piece is a craft tradition, a material story, and human skill. We celebrate India’s artisans through careful curation, honest storytelling, and global presentation.
              </p>
              <Link href="/artisans" className="btn-primary" style={{ display: 'inline-block', padding: '1rem 2rem', textDecoration: 'none' }}>
                Meet the Artisans
              </Link>
            </div>
            
            <div style={{ background: 'var(--color-background)', padding: '4rem', borderRadius: '8px', textAlign: 'center', border: '1px solid var(--color-border)' }}>
              <h3 style={{ fontSize: '1.8rem', fontFamily: 'var(--font-serif)', marginBottom: '1rem' }}>Customer Stories Coming Soon</h3>
              <p style={{ fontSize: '1rem', lineHeight: 1.6, opacity: 0.7 }}>
                As IDFIS begins its global journey, this space will feature real customer experiences, styling stories, and delivery feedback from around the world.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Email Signup Block */}
      <section style={{ padding: '8rem 2rem', backgroundColor: 'var(--color-background)', borderTop: '1px solid var(--color-border)' }}>
        <div className="container" style={{ maxWidth: '600px', textAlign: 'center' }}>
          <h2 style={{ fontSize: '3rem', fontFamily: 'var(--font-serif)', marginBottom: '1rem' }}>Join the IDFIS Circle</h2>
          <p style={{ fontSize: '1.1rem', lineHeight: 1.6, opacity: 0.8, marginBottom: '3rem' }}>
            Receive early access to limited artisan drops, craft stories, styling notes, and launch offers.
          </p>
          <form style={{ display: 'flex', gap: '1rem' }}>
            <input 
              type="email" 
              placeholder="Enter your email" 
              style={{ flex: 1, padding: '1.2rem', background: 'transparent', border: '1px solid var(--color-border)', borderBottom: '2px solid var(--color-foreground)', color: 'var(--color-foreground)', outline: 'none', fontSize: '1rem' }} 
            />
            <button type="submit" className="btn-primary" style={{ padding: '1.2rem 2.5rem', whiteSpace: 'nowrap' }}>
              Join the Circle
            </button>
          </form>
          <p style={{ fontSize: '0.8rem', opacity: 0.5, marginTop: '1.5rem' }}>No spam. Only thoughtful updates from IDFIS.</p>
        </div>
      </section>

      <Footer />
    </>
  );
}
