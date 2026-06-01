import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function ReturnsDamagePolicy() {
  return (
    <main>
      <Header />
      <div className="container" style={{ paddingTop: '8rem', paddingBottom: '6rem', maxWidth: '800px', minHeight: '80vh' }}>
        <h1 style={{ fontSize: '3rem', fontFamily: 'var(--font-serif)', marginBottom: '2rem', textAlign: 'center' }}>
          Returns & Safe Arrival Policy
        </h1>
        <div style={{ color: 'rgba(252, 250, 248, 0.85)', lineHeight: 1.8, fontSize: '1.05rem', fontFamily: 'var(--font-sans)', fontWeight: 300 }}>
          
          <h2 style={{ fontSize: '1.5rem', color: 'var(--color-accent)', marginBottom: '1rem', marginTop: '2rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Returns</h2>
          <p style={{ marginBottom: '2rem' }}>
            Because many IDFIS products are handmade, limited-batch, or internationally shipped, returns are handled carefully and may depend on the product category, destination, and condition of the item.
            <br /><br />
            Returned products must be unused, unworn, unwashed, undamaged, and in original packaging.
          </p>

          <h2 style={{ fontSize: '1.5rem', color: 'var(--color-accent)', marginBottom: '1rem', marginTop: '2rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Damaged Items</h2>
          <p style={{ marginBottom: '2rem' }}>
            If your order arrives damaged, contact us within 48 hours of delivery with photos of the product, inner packaging, outer packaging, and shipping label.
          </p>

          <h2 style={{ fontSize: '1.5rem', color: 'var(--color-accent)', marginBottom: '1rem', marginTop: '2rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Handmade Variations Are Not Defects</h2>
          <p style={{ marginBottom: '1rem' }}>
            The following are natural in handmade products and are not considered defects:
          </p>
          <ul style={{ marginBottom: '2rem', paddingLeft: '1.5rem', listStyleType: 'square' }}>
            <li>Slight color variation</li>
            <li>Minor print or weave irregularity</li>
            <li>Small size variation</li>
            <li>Natural texture differences</li>
            <li>Hand-finished surface differences</li>
            <li>Embroidery or pattern variation</li>
          </ul>

          <h2 style={{ fontSize: '1.5rem', color: 'var(--color-accent)', marginBottom: '1rem', marginTop: '2rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Non-Returnable Items</h2>
          <p style={{ marginBottom: '1rem' }}>
            The following may not be eligible for return:
          </p>
          <ul style={{ marginBottom: '2rem', paddingLeft: '1.5rem', listStyleType: 'square' }}>
            <li>Custom-size items</li>
            <li>Made-to-order products</li>
            <li>Final sale products</li>
            <li>Used, worn, or washed garments</li>
            <li>Products damaged after delivery</li>
            <li>Items returned without original packaging</li>
          </ul>

          <h2 style={{ fontSize: '1.5rem', color: 'var(--color-accent)', marginBottom: '1rem', marginTop: '2rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Duties & Shipping Charges</h2>
          <p style={{ marginBottom: '2rem' }}>
            Original shipping fees, customs duties, VAT, import taxes, and courier handling charges may not be refundable unless required by applicable law.
          </p>

        </div>
      </div>
      <Footer />
    </main>
  );
}
