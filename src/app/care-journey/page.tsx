import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function CareJourney() {
  return (
    <main style={{ backgroundColor: 'var(--color-background)', minHeight: '100vh' }}>
      <Header />
      <div className="container" style={{ paddingTop: '10rem', paddingBottom: '6rem', maxWidth: '900px' }}>
        <span style={{ color: 'var(--color-accent)', textTransform: 'uppercase', letterSpacing: '0.1em', fontSize: '0.85rem', marginBottom: '1rem', display: 'block' }}>The IDFIS Protocol</span>
        <h1 style={{ fontSize: '3.5rem', fontFamily: 'var(--font-serif)', marginBottom: '2rem', color: 'var(--color-foreground)', lineHeight: 1.1 }}>
          The Karigar Care Journey™
        </h1>
        
        <p style={{ fontSize: '1.2rem', color: 'rgba(252, 250, 248, 0.8)', lineHeight: 1.6, marginBottom: '5rem', maxWidth: '700px' }}>
          Acquiring an Indian heirloom is not a transaction; it is a transfer of custody. Our Care Journey ensures that every piece travels from the artisan's hands to your home with the utmost reverence.
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '3rem' }}>
          
          <div style={{ display: 'flex', gap: '2rem', alignItems: 'flex-start', paddingBottom: '3rem', borderBottom: '1px solid var(--color-border)' }}>
            <div style={{ fontSize: '2.5rem', color: 'var(--color-accent)', fontWeight: 'bold', fontFamily: 'var(--font-serif)' }}>01</div>
            <div>
              <h3 style={{ fontSize: '1.5rem', fontFamily: 'var(--font-serif)', color: 'var(--color-accent)', marginBottom: '1rem' }}>Craft-Origin Verification</h3>
              <p style={{ color: 'rgba(252, 250, 248, 0.8)', lineHeight: 1.6 }}>Before a piece enters the IDFIS archive, its geographical and historical roots are verified. We document the artisan cluster, the technique, and the materials used.</p>
            </div>
          </div>

          <div style={{ display: 'flex', gap: '2rem', alignItems: 'flex-start', paddingBottom: '3rem', borderBottom: '1px solid var(--color-border)' }}>
            <div style={{ fontSize: '2.5rem', color: 'var(--color-accent)', fontWeight: 'bold', fontFamily: 'var(--font-serif)' }}>02</div>
            <div>
              <h3 style={{ fontSize: '1.5rem', fontFamily: 'var(--font-serif)', color: 'var(--color-accent)', marginBottom: '1rem' }}>Quality Checked in India</h3>
              <p style={{ color: 'rgba(252, 250, 248, 0.8)', lineHeight: 1.6 }}>Every textile, painting, and artifact undergoes a rigorous inspection at our Indian curation center. We check for structural integrity while respecting the natural variations of handmade work.</p>
            </div>
          </div>

          <div style={{ display: 'flex', gap: '2rem', alignItems: 'flex-start', paddingBottom: '3rem', borderBottom: '1px solid var(--color-border)' }}>
            <div style={{ fontSize: '2.5rem', color: 'var(--color-accent)', fontWeight: 'bold', fontFamily: 'var(--font-serif)' }}>03</div>
            <div>
              <h3 style={{ fontSize: '1.5rem', fontFamily: 'var(--font-serif)', color: 'var(--color-accent)', marginBottom: '1rem' }}>Elite Protective Packaging</h3>
              <p style={{ color: 'rgba(252, 250, 248, 0.8)', lineHeight: 1.6 }}>To survive international transit, your piece is swathed in protective layers. Textiles are placed in breathable fabric bags; art and fragile items are encased in reinforced, impact-resistant structures.</p>
            </div>
          </div>

          <div style={{ display: 'flex', gap: '2rem', alignItems: 'flex-start', paddingBottom: '3rem', borderBottom: '1px solid var(--color-border)' }}>
            <div style={{ fontSize: '2.5rem', color: 'var(--color-accent)', fontWeight: 'bold', fontFamily: 'var(--font-serif)' }}>04</div>
            <div>
              <h3 style={{ fontSize: '1.5rem', fontFamily: 'var(--font-serif)', color: 'var(--color-accent)', marginBottom: '1rem' }}>Transparent Shipping & Tracked Dispatch</h3>
              <p style={{ color: 'rgba(252, 250, 248, 0.8)', lineHeight: 1.6 }}>We partner with premium global couriers to ensure end-to-end tracking. Dispatch timelines and shipping costs are communicated clearly before checkout.</p>
            </div>
          </div>

          <div style={{ display: 'flex', gap: '2rem', alignItems: 'flex-start' }}>
            <div style={{ fontSize: '2.5rem', color: 'var(--color-accent)', fontWeight: 'bold', fontFamily: 'var(--font-serif)' }}>05</div>
            <div>
              <h3 style={{ fontSize: '1.5rem', fontFamily: 'var(--font-serif)', color: 'var(--color-accent)', marginBottom: '1rem' }}>Safe Arrival Support</h3>
              <p style={{ color: 'rgba(252, 250, 248, 0.8)', lineHeight: 1.6 }}>Our responsibility ends only when the piece rests safely in your hands. Should any damage occur during international transit, our dedicated concierge team resolves the claim swiftly.</p>
            </div>
          </div>

        </div>
        
        <div style={{ marginTop: '5rem', textAlign: 'center' }}>
          <Link href="/collections/all" className="btn-primary" style={{ display: 'inline-block', padding: '1rem 3rem' }}>
            Explore the Collections
          </Link>
        </div>

      </div>
      <Footer />
    </main>
  );
}
