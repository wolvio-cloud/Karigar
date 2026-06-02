import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function PackagingArrival() {
  return (
    <main style={{ backgroundColor: 'var(--color-background)', minHeight: '100vh' }}>
      <Header />
      <div className="container" style={{ paddingTop: '10rem', paddingBottom: '6rem', maxWidth: '800px' }}>
        <h1 style={{ fontSize: '3.5rem', fontFamily: 'var(--font-serif)', marginBottom: '3rem', color: 'var(--color-foreground)', lineHeight: 1.1 }}>
          Packaging & Safe Arrival
        </h1>

        <div style={{ color: 'rgba(252, 250, 248, 0.8)', fontSize: '1.1rem', lineHeight: 1.8 }}>
          
          <p style={{ marginBottom: '2rem' }}>
            The journey from an Indian artisan's workshop to your home spans thousands of miles. IDFIS employs an Elite Protective Packaging system engineered to preserve the structural and aesthetic integrity of your heirlooms.
          </p>

          <h2 style={{ fontSize: '2rem', fontFamily: 'var(--font-serif)', color: 'var(--color-accent)', marginTop: '4rem', marginBottom: '1.5rem' }}>Textiles & Apparel</h2>
          <p style={{ marginBottom: '1.5rem' }}>
            Silks, pashminas, and embroidered garments are folded with acid-free tissue to prevent creasing and color transfer. They are then placed in breathable fabric sleeves, protecting them from moisture while allowing natural fibers to breathe.
          </p>

          <h2 style={{ fontSize: '2rem', fontFamily: 'var(--font-serif)', color: 'var(--color-accent)', marginTop: '4rem', marginBottom: '1.5rem' }}>Tanjore Art & Fragile Decor</h2>
          <p style={{ marginBottom: '1.5rem' }}>
            Framed artworks containing 24k gold foil and glass require specialized transit care. 
          </p>
          <ul style={{ paddingLeft: '1.5rem', marginBottom: '1.5rem' }}>
            <li style={{ marginBottom: '0.5rem' }}><strong>Surface Protection:</strong> Direct contact with the artwork surface is prevented using elevated internal framing.</li>
            <li style={{ marginBottom: '0.5rem' }}><strong>Impact Resistance:</strong> The frame is suspended within high-density, shock-absorbing materials.</li>
            <li style={{ marginBottom: '0.5rem' }}><strong>Weather Sealing:</strong> The outer layer is sealed against moisture and humidity fluctuations common in air freight.</li>
          </ul>

          <h2 style={{ fontSize: '2rem', fontFamily: 'var(--font-serif)', color: 'var(--color-accent)', marginTop: '4rem', marginBottom: '1.5rem' }}>Unboxing Experience</h2>
          <p style={{ marginBottom: '1.5rem' }}>
            We design our packaging to be as beautiful as it is robust. Unboxing an IDFIS piece is a ritual—a moment to discover the craft notes, the provenance certificate, and finally, the piece itself.
          </p>

        </div>
      </div>
      <Footer />
    </main>
  );
}
