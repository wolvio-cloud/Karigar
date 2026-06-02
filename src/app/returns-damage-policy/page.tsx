import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function ReturnsDamagePolicy() {
  return (
    <main style={{ backgroundColor: 'var(--color-background)', minHeight: '100vh' }}>
      <Header />
      <div className="container" style={{ paddingTop: '10rem', paddingBottom: '6rem', maxWidth: '800px' }}>
        <h1 style={{ fontSize: '3.5rem', fontFamily: 'var(--font-serif)', marginBottom: '3rem', color: 'var(--color-foreground)', lineHeight: 1.1 }}>
          Returns & Damage Policy
        </h1>

        <div style={{ color: 'rgba(252, 250, 248, 0.8)', fontSize: '1.1rem', lineHeight: 1.8 }}>
          
          <p style={{ marginBottom: '2rem' }}>
            Given the delicate, handmade, and often bespoke nature of IDFIS products, we operate a strict returns policy to protect the integrity of the artwork and textiles. 
          </p>

          <h2 style={{ fontSize: '2rem', fontFamily: 'var(--font-serif)', color: 'var(--color-accent)', marginTop: '4rem', marginBottom: '1.5rem' }}>General Returns</h2>
          <p style={{ marginBottom: '1.5rem' }}>
            We do not accept returns for "change of mind." True handmade items possess inherent irregularities (e.g., uneven dye spots, slight weave variations, or organic textures in wood/metal). These are not defects and do not qualify an item for return.
          </p>
          <p style={{ marginBottom: '1.5rem' }}>
            Apparel and textiles may be exchanged for a different size within 7 days of delivery, provided they are unworn, unwashed, and in their original packaging. The customer is responsible for return shipping costs. Made-to-order, custom, and one-of-one art pieces are strictly final sale.
          </p>

          <h2 style={{ fontSize: '2rem', fontFamily: 'var(--font-serif)', color: 'var(--color-accent)', marginTop: '4rem', marginBottom: '1.5rem' }}>Damage Claims</h2>
          <p style={{ marginBottom: '1.5rem' }}>
            We take extreme care in our packaging process. However, if your item arrives damaged in transit, you must report it within <strong>48 hours of delivery</strong>.
          </p>
          <ul style={{ paddingLeft: '1.5rem', marginBottom: '1.5rem' }}>
            <li style={{ marginBottom: '0.5rem' }}>Retain all original packaging materials.</li>
            <li style={{ marginBottom: '0.5rem' }}>Take clear photographs of the damaged shipping box (outside and inside) and the damaged item.</li>
            <li style={{ marginBottom: '0.5rem' }}>Submit a claim via our Damage Resolution portal or email concierge immediately.</li>
          </ul>

          <div style={{ marginTop: '5rem', padding: '3rem', border: '1px solid var(--color-border)', backgroundColor: 'var(--color-surface)', textAlign: 'center' }}>
            <h3 style={{ fontSize: '1.5rem', fontFamily: 'var(--font-serif)', color: 'var(--color-accent)', marginBottom: '1rem' }}>Initiate a Claim</h3>
            <p style={{ fontSize: '0.95rem', marginBottom: '2rem' }}>Please have your order number and photographs ready.</p>
            <Link href="/damage-claim" className="btn-primary" style={{ display: 'inline-block', padding: '1rem 2rem' }}>
              Damage Resolution Portal
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
