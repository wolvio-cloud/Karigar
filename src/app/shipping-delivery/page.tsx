import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function ShippingDelivery() {
  return (
    <main>
      <Header />
      <div className="container" style={{ paddingTop: '8rem', paddingBottom: '6rem', maxWidth: '800px', minHeight: '80vh' }}>
        <h1 style={{ fontSize: '3rem', fontFamily: 'var(--font-serif)', marginBottom: '2rem', textAlign: 'center' }}>
          Transparent Global Shipping
        </h1>
        <div style={{ color: 'rgba(252, 250, 248, 0.85)', lineHeight: 1.8, fontSize: '1.05rem', fontFamily: 'var(--font-sans)', fontWeight: 300 }}>
          <p style={{ marginBottom: '2rem' }}>
            At IDFIS, we believe international shipping should be clear, honest, and easy to understand. Your shipping cost is calculated based on your delivery country, product weight, package size, courier availability, and the protective packaging required for your order.
          </p>
          <p style={{ marginBottom: '3rem' }}>
            We do not hide logistics costs inside inflated product prices. Instead, we show shipping transparently at checkout wherever possible.
          </p>

          <h2 style={{ fontSize: '1.5rem', color: 'var(--color-accent)', marginBottom: '1rem', marginTop: '2rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Where We Ship</h2>
          <p style={{ marginBottom: '2rem' }}>
            We ship from India to selected international destinations, including India, the United States, United Kingdom, Europe, Canada, Australia, UAE, Singapore, and other supported regions.
          </p>

          <h2 style={{ fontSize: '1.5rem', color: 'var(--color-accent)', marginBottom: '1rem', marginTop: '2rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>How Shipping Is Calculated</h2>
          <p style={{ marginBottom: '1rem' }}>Shipping may depend on:</p>
          <ul style={{ marginBottom: '2rem', paddingLeft: '1.5rem', listStyleType: 'square' }}>
            <li>Destination country</li>
            <li>Product weight</li>
            <li>Package dimensions</li>
            <li>Courier service</li>
            <li>Fragile or premium packaging requirements</li>
            <li>Customs handling and export documentation</li>
          </ul>

          <h2 style={{ fontSize: '1.5rem', color: 'var(--color-accent)', marginBottom: '1rem', marginTop: '2rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Tracking</h2>
          <p style={{ marginBottom: '2rem' }}>
            Once your order is dispatched, you will receive a tracking link by email. We provide quality-checked, securely packed, and dispatched with tracking within 48 hours for eligible ready-to-ship orders.
          </p>

          <h2 style={{ fontSize: '1.5rem', color: 'var(--color-accent)', marginBottom: '1rem', marginTop: '2rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Duties, VAT & Import Taxes</h2>
          <p style={{ marginBottom: '2rem' }}>
            Depending on your country, customs duties, VAT, import taxes, or courier handling charges may apply. Where supported, these may be shown at checkout. If not collected at checkout, your local customs authority or courier may request payment before delivery.
          </p>

          <h2 style={{ fontSize: '1.5rem', color: 'var(--color-accent)', marginBottom: '1rem', marginTop: '2rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Estimated Delivery After Dispatch</h2>
          <ul style={{ marginBottom: '2rem', paddingLeft: '1.5rem', listStyleType: 'none', marginLeft: '-1.5rem' }}>
            <li><strong>India:</strong> 3–7 business days</li>
            <li><strong>United States:</strong> 7–14 business days</li>
            <li><strong>United Kingdom:</strong> 6–12 business days</li>
            <li><strong>Europe:</strong> 7–15 business days</li>
            <li><strong>Canada/Australia:</strong> 8–18 business days</li>
            <li><strong>UAE/Singapore:</strong> 5–10 business days</li>
          </ul>

          <div style={{ padding: '1.5rem', border: '1px solid var(--color-border)', backgroundColor: 'var(--color-surface)', borderRadius: '4px' }}>
            <p style={{ margin: 0, fontSize: '0.9rem', fontStyle: 'italic' }}>
              Note: International delivery timelines vary by destination, courier availability, and customs clearance. These are estimated timelines and may vary due to customs clearance, weather, holidays, or courier delays.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
