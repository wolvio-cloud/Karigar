import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function FAQ() {
  return (
    <main>
      <Header />
      <div className="container" style={{ paddingTop: '8rem', paddingBottom: '6rem', maxWidth: '800px', minHeight: '80vh' }}>
        <h1 style={{ fontSize: '3rem', fontFamily: 'var(--font-serif)', marginBottom: '3rem', textAlign: 'center' }}>
          FAQ & Support
        </h1>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', color: 'rgba(252, 250, 248, 0.85)', lineHeight: 1.8, fontSize: '1.05rem', fontFamily: 'var(--font-sans)', fontWeight: 300 }}>
          
          <div>
            <h3 style={{ fontSize: '1.2rem', color: 'var(--color-foreground)', marginBottom: '0.5rem', fontWeight: 500 }}>Are IDFIS products authentic Indian handcrafted products?</h3>
            <p>Yes. IDFIS focuses on Indian craft-led products, including artisan-made or artisan-finished apparel, textiles, accessories, and decor. Each collection is curated for craftsmanship, material quality, and cultural value.</p>
          </div>

          <div>
            <h3 style={{ fontSize: '1.2rem', color: 'var(--color-foreground)', marginBottom: '0.5rem', fontWeight: 500 }}>Where are your products shipped from?</h3>
            <p>Most orders are shipped from India.</p>
          </div>

          <div>
            <h3 style={{ fontSize: '1.2rem', color: 'var(--color-foreground)', marginBottom: '0.5rem', fontWeight: 500 }}>Do you ship internationally?</h3>
            <p>Yes. We ship to selected international destinations including India, the US, UK, Europe, Canada, Australia, UAE, Singapore, and other supported regions.</p>
          </div>

          <div>
            <h3 style={{ fontSize: '1.2rem', color: 'var(--color-foreground)', marginBottom: '0.5rem', fontWeight: 500 }}>How is shipping cost calculated?</h3>
            <p>Shipping is calculated based on destination country, product weight, package size, courier service, and protective packaging requirements.</p>
          </div>

          <div>
            <h3 style={{ fontSize: '1.2rem', color: 'var(--color-foreground)', marginBottom: '0.5rem', fontWeight: 500 }}>Why is shipping not always free?</h3>
            <p>International logistics have real costs. We prefer to show shipping transparently instead of hiding the full logistics cost inside every product price.</p>
          </div>

          <div>
            <h3 style={{ fontSize: '1.2rem', color: 'var(--color-foreground)', marginBottom: '0.5rem', fontWeight: 500 }}>Will I receive tracking?</h3>
            <p>Yes. Once your order is dispatched, you will receive a tracking link by email.</p>
          </div>

          <div>
            <h3 style={{ fontSize: '1.2rem', color: 'var(--color-foreground)', marginBottom: '0.5rem', fontWeight: 500 }}>Do you offer 48-hour delivery?</h3>
            <p>No. We offer tracked dispatch within 48 hours for eligible ready-to-ship orders. International delivery timelines vary by destination and customs clearance.</p>
          </div>

          <div>
            <h3 style={{ fontSize: '1.2rem', color: 'var(--color-foreground)', marginBottom: '0.5rem', fontWeight: 500 }}>Will I have to pay customs duties or taxes?</h3>
            <p>Depending on your country, customs duties, VAT, import taxes, or courier handling charges may apply. Where supported, these may appear at checkout. Otherwise, your local customs authority or courier may request payment before delivery.</p>
          </div>

          <div>
            <h3 style={{ fontSize: '1.2rem', color: 'var(--color-foreground)', marginBottom: '0.5rem', fontWeight: 500 }}>How are products packed?</h3>
            <p>Every product is packed based on material, weight, and fragility. Garments, coats, accessories, decor, and fragile items each receive suitable protective packaging.</p>
          </div>

          <div>
            <h3 style={{ fontSize: '1.2rem', color: 'var(--color-foreground)', marginBottom: '0.5rem', fontWeight: 500 }}>What if my order arrives damaged?</h3>
            <p>Contact us within 48 hours of delivery with photos of the product, packaging, and shipping label. We will review the issue and help make it right.</p>
          </div>

          <div>
            <h3 style={{ fontSize: '1.2rem', color: 'var(--color-foreground)', marginBottom: '0.5rem', fontWeight: 500 }}>Are small variations normal?</h3>
            <p>Yes. Handmade products may have small variations in color, texture, pattern, weave, print, embroidery, or finish. These are part of the handmade character.</p>
          </div>

          <div>
            <h3 style={{ fontSize: '1.2rem', color: 'var(--color-foreground)', marginBottom: '0.5rem', fontWeight: 500 }}>Can I return a product?</h3>
            <p>Returns may be accepted depending on the product category, destination, and item condition. Returned products must be unused, unworn, unwashed, undamaged, and in original packaging.</p>
          </div>

        </div>
      </div>
      <Footer />
    </main>
  );
}
