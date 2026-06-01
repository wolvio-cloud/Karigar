import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function PackagingSafeArrival() {
  return (
    <main>
      <Header />
      <div className="container" style={{ paddingTop: '8rem', paddingBottom: '6rem', maxWidth: '800px', minHeight: '80vh' }}>
        <h1 style={{ fontSize: '3rem', fontFamily: 'var(--font-serif)', marginBottom: '2rem', textAlign: 'center' }}>
          Packed to Travel Safely
        </h1>
        <div style={{ color: 'rgba(252, 250, 248, 0.85)', lineHeight: 1.8, fontSize: '1.05rem', fontFamily: 'var(--font-sans)', fontWeight: 300 }}>
          <p style={{ marginBottom: '3rem' }}>
            Every IDFIS order is packed with the care it deserves. Handmade products often travel long distances, so we choose packaging based on the item’s material, weight, shape, and fragility. Our goal is simple: your piece should arrive beautifully, safely, and ready to be treasured.
          </p>

          <h2 style={{ fontSize: '1.5rem', color: 'var(--color-accent)', marginBottom: '1rem', marginTop: '2rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>For Sarees, Kurtas & Premium Garments</h2>
          <p style={{ marginBottom: '2rem' }}>
            Garments are carefully folded, wrapped to reduce friction and moisture exposure, and packed in protective outer packaging suitable for international transit.
          </p>

          <h2 style={{ fontSize: '1.5rem', color: 'var(--color-accent)', marginBottom: '1rem', marginTop: '2rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>For Kashmir Coats & Heavier Apparel</h2>
          <p style={{ marginBottom: '2rem' }}>
            Coats and heavier pieces are packed to protect structure, reduce unnecessary compression, and support safe handling through courier networks.
          </p>

          <h2 style={{ fontSize: '1.5rem', color: 'var(--color-accent)', marginBottom: '1rem', marginTop: '2rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>For Artisan Accessories</h2>
          <p style={{ marginBottom: '2rem' }}>
            Accessories are wrapped individually, cushioned where needed, and packed to reduce movement inside the parcel.
          </p>

          <h2 style={{ fontSize: '1.5rem', color: 'var(--color-accent)', marginBottom: '1rem', marginTop: '2rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>For Brass, Wood & Decor Pieces</h2>
          <p style={{ marginBottom: '2rem' }}>
            Decor pieces are protected with layered wrapping, cushioning, and rigid boxing based on their weight and surface finish.
          </p>

          <h2 style={{ fontSize: '1.5rem', color: 'var(--color-accent)', marginBottom: '1rem', marginTop: '2rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>For Fragile Handmade Items</h2>
          <p style={{ marginBottom: '2rem' }}>
            Fragile items receive additional cushioning, reinforced boxing, and handling labels where required.
          </p>

          <div style={{ padding: '2rem', border: '1px solid var(--color-accent)', backgroundColor: 'rgba(212, 175, 55, 0.05)', borderRadius: '4px', marginTop: '3rem' }}>
            <h2 style={{ fontSize: '1.5rem', color: 'var(--color-accent)', marginBottom: '1rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Safe Arrival Promise</h2>
            <p style={{ marginBottom: '1rem' }}>
              If your order arrives damaged, please contact us within 48 hours of delivery with clear photos of:
            </p>
            <ul style={{ marginBottom: '1rem', paddingLeft: '1.5rem', listStyleType: 'square' }}>
              <li>The product</li>
              <li>The inner packaging</li>
              <li>The outer packaging</li>
              <li>The shipping label</li>
            </ul>
            <p style={{ margin: 0 }}>
              We will review the issue and help with a replacement, store credit, or refund depending on the item, destination, and damage condition.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
