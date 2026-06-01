import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import TrustMarquee from '@/components/TrustMarquee';
import CategoryShowcase from '@/components/CategoryShowcase';
import WhoWeAre from '@/components/WhoWeAre';
import TransparentByDesign from '@/components/TransparentByDesign';
import CareJourney from '@/components/CareJourney';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Header />
      <HeroSection />

      {/* Trust Marquee Under Hero */}
      <TrustMarquee />
      
      <CategoryShowcase />

      {/* Who We Are */}
      <WhoWeAre />

      {/* Trust Seals Row */}
      <section style={{ padding: '6rem 2rem', backgroundColor: 'var(--color-surface)', borderBottom: '1px solid var(--color-border)', borderTop: '1px solid var(--color-border)' }}>
        <div className="container" style={{ maxWidth: '1200px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '3rem', textAlign: 'center' }}>
            <div className="trust-seal-group">
              <div style={{ width: '50px', height: '50px', margin: '0 auto 1.5rem auto', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '50%', border: '1px solid var(--color-accent)' }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--color-accent)" strokeWidth="1"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>
              </div>
              <h4 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.2rem', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '1rem', color: 'var(--color-foreground)' }}>Indian Craft Heritage</h4>
              <p style={{ fontSize: '0.8rem', opacity: 0.6, lineHeight: 1.6, maxWidth: '200px', margin: '0 auto' }}>Rooted in India’s textile, craft, and artisan traditions.</p>
            </div>
            <div className="trust-seal-group">
              <div style={{ width: '50px', height: '50px', margin: '0 auto 1.5rem auto', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '50%', border: '1px solid var(--color-accent)' }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--color-accent)" strokeWidth="1"><path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"></path><circle cx="7" cy="7" r="2"></circle></svg>
              </div>
              <h4 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.2rem', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '1rem', color: 'var(--color-foreground)' }}>Artisan-Led Curation</h4>
              <p style={{ fontSize: '0.8rem', opacity: 0.6, lineHeight: 1.6, maxWidth: '200px', margin: '0 auto' }}>Selected for craftsmanship, material value, and cultural detail.</p>
            </div>
            <div className="trust-seal-group">
              <div style={{ width: '50px', height: '50px', margin: '0 auto 1.5rem auto', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '50%', border: '1px solid var(--color-accent)' }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--color-accent)" strokeWidth="1"><path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"></path></svg>
              </div>
              <h4 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.2rem', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '1rem', color: 'var(--color-foreground)' }}>Sustainable Intention</h4>
              <p style={{ fontSize: '0.8rem', opacity: 0.6, lineHeight: 1.6, maxWidth: '200px', margin: '0 auto' }}>Small-batch pieces chosen with care, purpose, and longevity.</p>
            </div>
            <div className="trust-seal-group">
              <div style={{ width: '50px', height: '50px', margin: '0 auto 1.5rem auto', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '50%', border: '1px solid var(--color-accent)' }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--color-accent)" strokeWidth="1"><line x1="16.5" y1="9.4" x2="7.5" y2="4.21"></line><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg>
              </div>
              <h4 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.2rem', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '1rem', color: 'var(--color-foreground)' }}>Transparent Delivery</h4>
              <p style={{ fontSize: '0.8rem', opacity: 0.6, lineHeight: 1.6, maxWidth: '200px', margin: '0 auto' }}>Clear shipping, careful packaging, and tracked dispatch.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products: New Artisan Arrivals */}
      <section style={{ padding: '8rem 2rem', backgroundColor: 'var(--color-background)' }}>
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '4rem' }}>
            <h2 style={{ fontSize: '3rem', fontFamily: 'var(--font-serif)', margin: 0 }}>New Artisan Arrivals</h2>
            <Link href="/collections/all" style={{ fontSize: '0.9rem', color: 'var(--color-accent)', textTransform: 'uppercase', letterSpacing: '0.1em', textDecoration: 'none', borderBottom: '1px solid var(--color-accent)' }}>Shop All</Link>
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem' }}>
            {/* Product Card 1 */}
            <div className="product-card group" style={{ cursor: 'pointer' }}>
              <Link href="/products/heritage-kashmiri-pashmina-wrap" style={{ textDecoration: 'none', color: 'inherit' }}>
                <div style={{ position: 'relative', aspectRatio: '3/4', backgroundColor: 'var(--color-surface)', marginBottom: '1.5rem', overflow: 'hidden' }}>
                  <img src="/images/story_hero.png" alt="Heritage Kashmiri Pashmina Wrap" style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease' }} className="product-img" />
                </div>
                <h3 style={{ fontSize: '1.2rem', fontFamily: 'var(--font-serif)', margin: '0 0 0.5rem 0' }}>Heritage Kashmiri Pashmina</h3>
                <p style={{ fontSize: '0.85rem', color: 'rgba(252, 250, 248, 0.6)', margin: '0 0 1rem 0' }}>Hand-spun pure cashmere</p>
                <p style={{ fontSize: '1.1rem' }}>$580.00</p>
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
      <CareJourney />

      {/* Transparent by Design Section */}
      <TransparentByDesign />

      {/* Artisans Preview & Reviews */}
      <section style={{ padding: '8rem 2rem', backgroundColor: 'var(--color-surface)', borderTop: '1px solid var(--color-border)' }}>
        <div className="container" style={{ maxWidth: '1200px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem', alignItems: 'center' }}>
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

      {/* Find Us On Social */}
      <section style={{ padding: '6rem 2rem', backgroundColor: 'var(--color-surface)', borderTop: '1px solid var(--color-border)' }}>
        <div className="container" style={{ maxWidth: '1200px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem', alignItems: 'center' }}>
            <div>
              <h2 style={{ fontSize: '2.5rem', fontFamily: 'var(--font-serif)', marginBottom: '1.5rem', color: 'var(--color-foreground)' }}>FIND US ON</h2>
              <p style={{ fontSize: '1.1rem', lineHeight: 1.6, opacity: 0.8, fontWeight: 300 }}>
                Follow the IDFIS journey — from artisan stories and limited drops to styling notes and behind-the-scenes craft moments.
              </p>
            </div>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', paddingLeft: '2rem', borderLeft: '1px solid var(--color-border)' }}>
              <p style={{ fontSize: '0.9rem', opacity: 0.7, fontStyle: 'italic', marginBottom: '1rem' }}>Discover new drops, craft stories, packaging moments, and styling inspiration.</p>
              
              <Link href="#" style={{ display: 'flex', alignItems: 'center', gap: '1rem', textDecoration: 'none', color: 'var(--color-foreground)', fontSize: '1.1rem', textTransform: 'uppercase', letterSpacing: '0.05em' }} className="social-link-hover">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--color-accent)" strokeWidth="1.5"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                Follow on Instagram
              </Link>
              <Link href="#" style={{ display: 'flex', alignItems: 'center', gap: '1rem', textDecoration: 'none', color: 'var(--color-foreground)', fontSize: '1.1rem', textTransform: 'uppercase', letterSpacing: '0.05em' }} className="social-link-hover">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--color-accent)" strokeWidth="1.5"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
                Follow on Facebook
              </Link>
              <Link href="#" style={{ display: 'flex', alignItems: 'center', gap: '1rem', textDecoration: 'none', color: 'var(--color-foreground)', fontSize: '1.1rem', textTransform: 'uppercase', letterSpacing: '0.05em' }} className="social-link-hover">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--color-accent)" strokeWidth="1.5"><path d="M21.5 12A9.5 9.5 0 0 0 12 2.5a9.5 9.5 0 0 0-3.37 18.25c-.07-.63-.12-1.58.03-2.28l1.43-6s-.37-.73-.37-1.82c0-1.7 1-2.98 2.23-2.98 1.05 0 1.56.78 1.56 1.7 0 1.05-.67 2.62-1.02 4.07-.3.1.53 1.95 1.77 1.95 2.12 0 3.75-2.23 3.75-5.46 0-2.88-2.07-4.88-5.02-4.88-3.4 0-5.38 2.55-5.38 5.17 0 1.05.4 2.18.9 2.8.1.13.12.22.08.38l-.33 1.33c-.05.2-.17.25-.37.15-1.4-.65-2.27-2.7-2.27-4.35 0-3.53 2.57-6.78 7.42-6.78 3.9 0 6.93 2.78 6.93 6.47 0 3.88-2.45 7-5.85 7-1.13 0-2.2-.6-2.57-1.3l-.7 2.67c-.25.97-.93 2.18-1.4 2.92a9.5 9.5 0 1 0 10.9-18.7z"></path></svg>
                Follow on Pinterest
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* From Our Craft Journal */}
      <section style={{ padding: '4rem 2rem 8rem 2rem', backgroundColor: 'var(--color-surface)' }}>
        <div className="container" style={{ maxWidth: '1400px' }}>
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 style={{ fontSize: '2.5rem', fontFamily: 'var(--font-serif)', marginBottom: '1rem', color: 'var(--color-foreground)' }}>From Our Craft Journal</h2>
            <p style={{ fontSize: '1.1rem', opacity: 0.8, maxWidth: '600px', margin: '0 auto', lineHeight: 1.6 }}>A glimpse into artisan processes, product details, packaging care, and the stories behind each collection.</p>
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem' }}>
            <div style={{ position: 'relative', aspectRatio: '1/1', backgroundColor: 'var(--color-surface)', overflow: 'hidden' }}>
              <div style={{ position: 'absolute', top: '1.5rem', width: '100%', display: 'flex', justifyContent: 'center', zIndex: 10, opacity: 0.85 }}>
                <img src="/images/idfis-transparent.svg" alt="IDFIS" style={{ width: '60px' }} />
              </div>
              <img src="/images/craft_in_detail.png" alt="Craft in Detail" style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease' }} className="social-grid-img" />
              <div style={{ position: 'absolute', bottom: 0, left: 0, width: '100%', padding: '2rem 1.5rem 1.5rem 1.5rem', background: 'linear-gradient(to top, rgba(0,0,0,0.8), transparent)', zIndex: 10 }}>
                <h4 style={{ color: '#fff', margin: 0, fontSize: '1.1rem', fontFamily: 'var(--font-serif)' }}>Craft in Detail</h4>
              </div>
            </div>
            <div style={{ position: 'relative', aspectRatio: '1/1', backgroundColor: 'var(--color-surface)', overflow: 'hidden' }}>
              <div style={{ position: 'absolute', top: '1.5rem', width: '100%', display: 'flex', justifyContent: 'center', zIndex: 10, opacity: 0.85 }}>
                <img src="/images/idfis-transparent.svg" alt="IDFIS" style={{ width: '60px' }} />
              </div>
              <img src="/images/packed_with_care_idfis.png" alt="Packed With Care" style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease' }} className="social-grid-img" />
              <div style={{ position: 'absolute', bottom: 0, left: 0, width: '100%', padding: '2rem 1.5rem 1.5rem 1.5rem', background: 'linear-gradient(to top, rgba(0,0,0,0.8), transparent)', zIndex: 10 }}>
                <h4 style={{ color: '#fff', margin: 0, fontSize: '1.1rem', fontFamily: 'var(--font-serif)' }}>Packed With Care</h4>
              </div>
            </div>
            <div style={{ position: 'relative', aspectRatio: '1/1', backgroundColor: 'var(--color-surface)', overflow: 'hidden' }}>
              <div style={{ position: 'absolute', top: '1.5rem', width: '100%', display: 'flex', justifyContent: 'center', zIndex: 10, opacity: 0.85 }}>
                <img src="/images/idfis-transparent.svg" alt="IDFIS" style={{ width: '60px' }} />
              </div>
              <img src="/images/styled_modern_living.png" alt="Styled for Modern Living" style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease' }} className="social-grid-img" />
              <div style={{ position: 'absolute', bottom: 0, left: 0, width: '100%', padding: '2rem 1.5rem 1.5rem 1.5rem', background: 'linear-gradient(to top, rgba(0,0,0,0.8), transparent)', zIndex: 10 }}>
                <h4 style={{ color: '#fff', margin: 0, fontSize: '1.1rem', fontFamily: 'var(--font-serif)' }}>Styled for Modern Living</h4>
              </div>
            </div>
            <div style={{ position: 'relative', aspectRatio: '1/1', backgroundColor: 'var(--color-surface)', overflow: 'hidden' }}>
              <div style={{ position: 'absolute', top: '1.5rem', width: '100%', display: 'flex', justifyContent: 'center', zIndex: 10, opacity: 0.85 }}>
                <img src="/images/idfis-transparent.svg" alt="IDFIS" style={{ width: '60px' }} />
              </div>
              <img src="/images/story_hero.png" alt="From India to the World" style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease' }} className="social-grid-img" />
              <div style={{ position: 'absolute', bottom: 0, left: 0, width: '100%', padding: '2rem 1.5rem 1.5rem 1.5rem', background: 'linear-gradient(to top, rgba(0,0,0,0.8), transparent)', zIndex: 10 }}>
                <h4 style={{ color: '#fff', margin: 0, fontSize: '1.1rem', fontFamily: 'var(--font-serif)' }}>From India to the World</h4>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style dangerouslySetInnerHTML={{__html: `
        .social-link-hover { transition: opacity 0.3s ease; }
        .social-link-hover:hover { opacity: 0.6; }
        .social-grid-img:hover { transform: scale(1.05); }
        .trust-seal-group:hover svg { stroke: var(--color-foreground); transition: stroke 0.3s ease; }
      `}} />

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
