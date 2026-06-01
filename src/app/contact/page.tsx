import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function Contact() {
  return (
    <main>
      <Header />
      <div className="container" style={{ paddingTop: '8rem', paddingBottom: '6rem', maxWidth: '800px', minHeight: '80vh' }}>
        <h1 style={{ fontSize: '3rem', fontFamily: 'var(--font-serif)', marginBottom: '2rem', textAlign: 'center' }}>
          How Can We Help?
        </h1>
        <div style={{ color: 'rgba(252, 250, 248, 0.85)', lineHeight: 1.8, fontSize: '1.05rem', fontFamily: 'var(--font-sans)', fontWeight: 300, textAlign: 'center' }}>
          <p style={{ marginBottom: '4rem', maxWidth: '600px', margin: '0 auto 4rem auto' }}>
            Whether you have a question about sizing, shipping, packaging, customs, or a specific handcrafted piece, the IDFIS team is here to help.
          </p>

          <form style={{ display: 'flex', flexDirection: 'column', gap: '2rem', textAlign: 'left', background: 'var(--color-surface)', padding: '3rem', borderRadius: '8px', border: '1px solid var(--color-border)' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem', color: 'var(--color-accent)' }}>Name</label>
                <input type="text" style={{ width: '100%', padding: '1rem', background: 'transparent', border: '1px solid var(--color-border)', borderBottom: '2px solid var(--color-foreground)', color: 'var(--color-foreground)', outline: 'none' }} />
              </div>
              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem', color: 'var(--color-accent)' }}>Email</label>
                <input type="email" style={{ width: '100%', padding: '1rem', background: 'transparent', border: '1px solid var(--color-border)', borderBottom: '2px solid var(--color-foreground)', color: 'var(--color-foreground)', outline: 'none' }} />
              </div>
            </div>
            
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem', color: 'var(--color-accent)' }}>Order Number (Optional)</label>
                <input type="text" style={{ width: '100%', padding: '1rem', background: 'transparent', border: '1px solid var(--color-border)', borderBottom: '2px solid var(--color-foreground)', color: 'var(--color-foreground)', outline: 'none' }} />
              </div>
              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem', color: 'var(--color-accent)' }}>Topic</label>
                <select style={{ width: '100%', padding: '1rem', background: 'transparent', border: '1px solid var(--color-border)', borderBottom: '2px solid var(--color-foreground)', color: 'var(--color-foreground)', outline: 'none', appearance: 'none' }}>
                  <option style={{ background: 'var(--color-surface)' }}>Product Question</option>
                  <option style={{ background: 'var(--color-surface)' }}>Sizing Help</option>
                  <option style={{ background: 'var(--color-surface)' }}>Shipping & Delivery</option>
                  <option style={{ background: 'var(--color-surface)' }}>Duties & Customs</option>
                  <option style={{ background: 'var(--color-surface)' }}>Damage / Issue</option>
                  <option style={{ background: 'var(--color-surface)' }}>Wholesale / Collaboration</option>
                  <option style={{ background: 'var(--color-surface)' }}>Other</option>
                </select>
              </div>
            </div>

            <div>
              <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem', color: 'var(--color-accent)' }}>Message</label>
              <textarea rows={6} style={{ width: '100%', padding: '1rem', background: 'transparent', border: '1px solid var(--color-border)', borderBottom: '2px solid var(--color-foreground)', color: 'var(--color-foreground)', outline: 'none', resize: 'vertical' }}></textarea>
            </div>

            <button type="button" className="btn-primary" style={{ padding: '1.2rem', marginTop: '1rem' }}>Send Message</button>
            <p style={{ fontSize: '0.85rem', color: 'rgba(252, 250, 248, 0.5)', textAlign: 'center', marginTop: '1rem' }}>
              We aim to respond within 1–2 business days.<br/>
              Or reach us directly at <a href="mailto:support@idfis.com" style={{ color: 'var(--color-accent)' }}>support@idfis.com</a>
            </p>
          </form>
        </div>
      </div>
      <Footer />
    </main>
  );
}
