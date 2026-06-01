import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function TermsOfService() {
  return (
    <main>
      <Header />
      <div className="container" style={{ paddingTop: '8rem', paddingBottom: '6rem', maxWidth: '800px', minHeight: '80vh' }}>
        <h1 style={{ fontSize: '3rem', fontFamily: 'var(--font-serif)', marginBottom: '3rem', textAlign: 'center' }}>
          Terms of Service
        </h1>
        <div style={{ color: 'rgba(252, 250, 248, 0.85)', lineHeight: 1.8, fontSize: '1.05rem', fontFamily: 'var(--font-sans)', fontWeight: 300 }}>
          <p style={{ marginBottom: '2rem' }}>
            This website is operated by IDFIS. Throughout the site, the terms “we”, “us” and “our” refer to IDFIS.
          </p>
          <h2 style={{ fontSize: '1.5rem', color: 'var(--color-accent)', marginBottom: '1rem', marginTop: '2rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>General Conditions</h2>
          <p style={{ marginBottom: '2rem' }}>
            We reserve the right to refuse service to anyone for any reason at any time. You understand that your content (not including credit card information), may be transferred unencrypted and involve transmissions over various networks.
          </p>
          <h2 style={{ fontSize: '1.5rem', color: 'var(--color-accent)', marginBottom: '1rem', marginTop: '2rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Products or Services</h2>
          <p style={{ marginBottom: '2rem' }}>
            Certain products or services may be available exclusively online through the website. These products or services may have limited quantities and are subject to return or exchange only according to our Return Policy. Small variations in handcrafted products are natural and not considered defects.
          </p>
        </div>
      </div>
      <Footer />
    </main>
  );
}
