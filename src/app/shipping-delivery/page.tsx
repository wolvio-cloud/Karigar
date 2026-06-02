import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function ShippingDelivery() {
  return (
    <main style={{ backgroundColor: 'var(--color-background)', minHeight: '100vh' }}>
      <Header />
      <div className="container" style={{ paddingTop: '10rem', paddingBottom: '6rem', maxWidth: '800px' }}>
        <h1 style={{ fontSize: '3.5rem', fontFamily: 'var(--font-serif)', marginBottom: '3rem', color: 'var(--color-foreground)', lineHeight: 1.1 }}>
          Shipping & Delivery
        </h1>

        <div style={{ color: 'rgba(252, 250, 248, 0.8)', fontSize: '1.1rem', lineHeight: 1.8 }}>
          <p style={{ marginBottom: '2rem' }}>
            IDFIS curates and ships authentic Indian heirlooms globally. We partner with premium logistics providers to ensure that your carefully chosen pieces arrive safely, securely, and within the expected timeframe.
          </p>

          <h2 style={{ fontSize: '2rem', fontFamily: 'var(--font-serif)', color: 'var(--color-accent)', marginTop: '4rem', marginBottom: '1.5rem' }}>Global Dispatch</h2>
          <p style={{ marginBottom: '1.5rem' }}>
            We ship to most major international destinations directly from our curation hubs in India. Every shipment is fully tracked from the moment it leaves our facility to the moment it reaches your door.
          </p>
          <ul style={{ paddingLeft: '1.5rem', marginBottom: '1.5rem' }}>
            <li style={{ marginBottom: '0.5rem' }}><strong>Ready to Ship:</strong> Dispatched within 2-4 business days.</li>
            <li style={{ marginBottom: '0.5rem' }}><strong>Made to Order:</strong> Crafting timelines vary by piece and are clearly stated on the product page (typically 4-8 weeks).</li>
          </ul>

          <h2 style={{ fontSize: '2rem', fontFamily: 'var(--font-serif)', color: 'var(--color-accent)', marginTop: '4rem', marginBottom: '1.5rem' }}>Taxes & Customs Duties</h2>
          <p style={{ marginBottom: '1.5rem' }}>
            Please note that international shipments may be subject to import taxes, customs duties, and fees levied by the destination country. <strong>These charges are the buyer's responsibility</strong> and are not included in the item price or shipping cost. We recommend checking your local customs policies before placing an order.
          </p>

          <h2 style={{ fontSize: '2rem', fontFamily: 'var(--font-serif)', color: 'var(--color-accent)', marginTop: '4rem', marginBottom: '1.5rem' }}>Transit Protection</h2>
          <p style={{ marginBottom: '1.5rem' }}>
            Every IDFIS order is packed with Elite Protective Packaging tailored to the specific medium—be it delicate silk, heavy brass, or fragile Tanjore glass. We insure all high-value shipments against total loss or severe damage in transit.
          </p>

          <div style={{ marginTop: '5rem', padding: '3rem', border: '1px solid var(--color-border)', backgroundColor: 'var(--color-surface)', textAlign: 'center' }}>
            <h3 style={{ fontSize: '1.5rem', fontFamily: 'var(--font-serif)', color: 'var(--color-accent)', marginBottom: '1rem' }}>Need assistance with a delivery?</h3>
            <p style={{ fontSize: '0.95rem', marginBottom: '2rem' }}>Contact our support team with your order number.</p>
            <Link href="/contact" className="btn-primary" style={{ display: 'inline-block', padding: '1rem 2rem' }}>
              Track / Support
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
