import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function TrackOrder() {
  return (
    <main>
      <Header />
      <div className="container" style={{ paddingTop: '8rem', paddingBottom: '6rem', maxWidth: '600px', minHeight: '80vh' }}>
        <h1 style={{ fontSize: '3rem', fontFamily: 'var(--font-serif)', marginBottom: '2rem', textAlign: 'center' }}>
          Track Your Order
        </h1>
        <div style={{ color: 'rgba(252, 250, 248, 0.85)', lineHeight: 1.8, fontSize: '1.05rem', fontFamily: 'var(--font-sans)', fontWeight: 300, textAlign: 'center' }}>
          <p style={{ marginBottom: '3rem' }}>
            Once your IDFIS order is dispatched, you will receive a tracking link by email. Use the link to follow your package from dispatch to delivery.
          </p>

          <form style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', textAlign: 'left' }}>
            <div>
              <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--color-accent)' }}>Order Number</label>
              <input type="text" placeholder="e.g. #IDF1024" style={{ width: '100%', padding: '1rem', background: 'transparent', border: '1px solid var(--color-border)', color: 'var(--color-foreground)', outline: 'none' }} />
            </div>
            <div>
              <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--color-accent)' }}>Email Address</label>
              <input type="email" placeholder="Email used at checkout" style={{ width: '100%', padding: '1rem', background: 'transparent', border: '1px solid var(--color-border)', color: 'var(--color-foreground)', outline: 'none' }} />
            </div>
            <button type="button" className="btn-primary" style={{ padding: '1.2rem', marginTop: '1rem' }}>Track Package</button>
          </form>

          <p style={{ fontSize: '0.85rem', color: 'rgba(252, 250, 248, 0.5)', marginTop: '3rem', fontStyle: 'italic' }}>
            Note: Tracking may take 24–48 hours to update after dispatch.
          </p>
        </div>
      </div>
      <Footer />
    </main>
  );
}
