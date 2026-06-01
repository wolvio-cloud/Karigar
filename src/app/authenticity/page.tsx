import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function AuthenticityPromise() {
  return (
    <main>
      <Header />
      <div className="container" style={{ paddingTop: '8rem', paddingBottom: '6rem', maxWidth: '800px', minHeight: '80vh' }}>
        <h1 style={{ fontSize: '3rem', fontFamily: 'var(--font-serif)', marginBottom: '2rem', textAlign: 'center' }}>
          Our Authenticity Promise
        </h1>
        <div style={{ color: 'rgba(252, 250, 248, 0.85)', lineHeight: 1.8, fontSize: '1.05rem', fontFamily: 'var(--font-sans)', fontWeight: 300 }}>
          <p style={{ marginBottom: '2rem' }}>
            IDFIS exists to bring India’s hidden craft excellence to the global luxury market. We curate pieces that reflect Indian textile heritage, artisan skill, regional craft knowledge, and timeless design.
          </p>
          <p style={{ marginBottom: '3rem' }}>
            We are not built around mass-produced imitation. We focus on craft-led products with story, quality, and cultural value.
          </p>

          <h2 style={{ fontSize: '1.5rem', color: 'var(--color-accent)', marginBottom: '1rem', marginTop: '2rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Rooted in Indian Craft</h2>
          <p style={{ marginBottom: '2rem' }}>
            Our collections are inspired by India’s rich traditions of weaving, embroidery, printing, metalwork, and handmade design.
          </p>

          <h2 style={{ fontSize: '1.5rem', color: 'var(--color-accent)', marginBottom: '1rem', marginTop: '2rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Curated, Not Crowded</h2>
          <p style={{ marginBottom: '2rem' }}>
            We do not aim to sell everything. We select pieces that match our standards for craftsmanship, material quality, visual beauty, and global appeal.
          </p>

          <h2 style={{ fontSize: '1.5rem', color: 'var(--color-accent)', marginBottom: '1rem', marginTop: '2rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Handmade Character</h2>
          <p style={{ marginBottom: '2rem' }}>
            Small differences in color, texture, print, weave, embroidery, or finish are natural in handcrafted products. These are not defects. They are signs of human skill and handmade individuality.
          </p>

          <h2 style={{ fontSize: '1.5rem', color: 'var(--color-accent)', marginBottom: '1rem', marginTop: '2rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Transparent Product Details</h2>
          <p style={{ marginBottom: '2rem' }}>
            Product pages should clearly show material, size, origin, care instructions, and handmade variation notes wherever available.
          </p>

          <h2 style={{ fontSize: '1.5rem', color: 'var(--color-accent)', marginBottom: '1rem', marginTop: '2rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Respect for Artisans</h2>
          <p style={{ marginBottom: '2rem' }}>
            IDFIS is built to celebrate the people, techniques, and cultural heritage behind Indian handmade products.
          </p>
        </div>
      </div>
      <Footer />
    </main>
  );
}
