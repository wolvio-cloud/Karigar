import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function FAQ() {
  return (
    <main style={{ backgroundColor: 'var(--color-background)', minHeight: '100vh' }}>
      <Header />
      <div className="container" style={{ paddingTop: '10rem', paddingBottom: '6rem', maxWidth: '800px' }}>
        <h1 style={{ fontSize: '3.5rem', fontFamily: 'var(--font-serif)', marginBottom: '3rem', color: 'var(--color-foreground)', lineHeight: 1.1 }}>
          Frequently Asked Questions
        </h1>

        <div style={{ color: 'rgba(252, 250, 248, 0.8)', fontSize: '1.1rem', lineHeight: 1.8 }}>
          
          <div style={{ marginBottom: '3rem', borderBottom: '1px solid var(--color-border)', paddingBottom: '2rem' }}>
            <h3 style={{ fontSize: '1.5rem', fontFamily: 'var(--font-serif)', color: 'var(--color-accent)', marginBottom: '1rem' }}>Are your products genuinely handmade?</h3>
            <p>Yes. IDFIS strictly curates handcrafted items from verified artisan clusters across India. We provide transparency on the origin, materials, and techniques used for every piece.</p>
          </div>

          <div style={{ marginBottom: '3rem', borderBottom: '1px solid var(--color-border)', paddingBottom: '2rem' }}>
            <h3 style={{ fontSize: '1.5rem', fontFamily: 'var(--font-serif)', color: 'var(--color-accent)', marginBottom: '1rem' }}>Do you ship internationally?</h3>
            <p>Yes, we ship to most global destinations. International shipments are securely packed and tracked. Please note that customs duties and taxes are the responsibility of the buyer.</p>
          </div>

          <div style={{ marginBottom: '3rem', borderBottom: '1px solid var(--color-border)', paddingBottom: '2rem' }}>
            <h3 style={{ fontSize: '1.5rem', fontFamily: 'var(--font-serif)', color: 'var(--color-accent)', marginBottom: '1rem' }}>What if my item arrives damaged?</h3>
            <p>We use Elite Protective Packaging, but in the rare event of transit damage, you must report it within 48 hours of delivery using our <Link href="/damage-claim" style={{ color: 'var(--color-accent)' }}>Damage Resolution Portal</Link>.</p>
          </div>

          <div style={{ marginBottom: '3rem', borderBottom: '1px solid var(--color-border)', paddingBottom: '2rem' }}>
            <h3 style={{ fontSize: '1.5rem', fontFamily: 'var(--font-serif)', color: 'var(--color-accent)', marginBottom: '1rem' }}>Can I return a piece if I change my mind?</h3>
            <p>Due to the bespoke and delicate nature of our handcrafted heirlooms, we do not accept returns for change of mind. Please read our full <Link href="/returns-damage-policy" style={{ color: 'var(--color-accent)' }}>Returns Policy</Link> for details.</p>
          </div>

        </div>
      </div>
      <Footer />
    </main>
  );
}
