import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function AuthenticityPromise() {
  return (
    <main style={{ backgroundColor: 'var(--color-background)', minHeight: '100vh' }}>
      <Header />
      <div className="container" style={{ paddingTop: '10rem', paddingBottom: '6rem', maxWidth: '800px' }}>
        <span style={{ color: 'var(--color-accent)', textTransform: 'uppercase', letterSpacing: '0.1em', fontSize: '0.85rem', marginBottom: '1rem', display: 'block' }}>Our Commitment</span>
        <h1 style={{ fontSize: '3.5rem', fontFamily: 'var(--font-serif)', marginBottom: '3rem', color: 'var(--color-foreground)', lineHeight: 1.1 }}>
          The Authenticity Promise
        </h1>

        <div style={{ color: 'rgba(252, 250, 248, 0.8)', fontSize: '1.1rem', lineHeight: 1.8 }}>
          <p style={{ marginBottom: '2rem' }}>
            IDFIS is built on a foundation of profound respect for Indian craftsmanship. We recognize that true luxury lies not in mass production, but in the slow, deliberate work of human hands. 
          </p>

          <h2 style={{ fontSize: '2rem', fontFamily: 'var(--font-serif)', color: 'var(--color-accent)', marginTop: '4rem', marginBottom: '1.5rem' }}>Craft-Origin Verification</h2>
          <p style={{ marginBottom: '1.5rem' }}>
            Every heirloom piece in our collection is traced back to its geographical root. Where applicable, we explicitly state Geographical Indication (GI) status or regional craft verification. We do not use misleading terminology. When a piece is inspired by a tradition rather than crafted in its ancestral home, we transparently state it as "Regionally Recognized" or "Inspired Craft".
          </p>

          <h2 style={{ fontSize: '2rem', fontFamily: 'var(--font-serif)', color: 'var(--color-accent)', marginTop: '4rem', marginBottom: '1.5rem' }}>Material Transparency</h2>
          <p style={{ marginBottom: '1.5rem' }}>
            We believe you should know exactly what you are investing in. Whether it is Fine Kashmir wool, Mulberry silk, or Zari detailing, the material composition is stated directly on the product page.
          </p>

          <h2 style={{ fontSize: '2rem', fontFamily: 'var(--font-serif)', color: 'var(--color-accent)', marginTop: '4rem', marginBottom: '1.5rem' }}>The Mark of the Hand</h2>
          <p style={{ marginBottom: '1.5rem' }}>
            Handcrafted pieces are not uniform. You may notice slight variations in dye, weave tension, embroidery loops, or brush strokes. We do not view these as defects; we celebrate them as the undeniable signature of the artisan.
          </p>

          <div style={{ marginTop: '5rem', padding: '3rem', border: '1px solid var(--color-border)', backgroundColor: 'var(--color-surface)', textAlign: 'center' }}>
            <h3 style={{ fontSize: '1.5rem', fontFamily: 'var(--font-serif)', color: 'var(--color-accent)', marginBottom: '1rem' }}>Questions about a piece?</h3>
            <p style={{ fontSize: '0.95rem', marginBottom: '2rem' }}>Our concierges are available to discuss the provenance, material, or history of any item in our archive.</p>
            <Link href="/contact" className="btn-primary" style={{ display: 'inline-block', padding: '1rem 2rem' }}>
              Contact Concierge
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
