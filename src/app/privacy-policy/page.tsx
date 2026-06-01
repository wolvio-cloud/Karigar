import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function PrivacyPolicy() {
  return (
    <main>
      <Header />
      <div className="container" style={{ paddingTop: '8rem', paddingBottom: '6rem', maxWidth: '800px', minHeight: '80vh' }}>
        <h1 style={{ fontSize: '3rem', fontFamily: 'var(--font-serif)', marginBottom: '3rem', textAlign: 'center' }}>
          Privacy Policy
        </h1>
        <div style={{ color: 'rgba(252, 250, 248, 0.85)', lineHeight: 1.8, fontSize: '1.05rem', fontFamily: 'var(--font-sans)', fontWeight: 300 }}>
          <p style={{ marginBottom: '2rem' }}>
            At IDFIS, we take your privacy seriously. This Privacy Policy describes how your personal information is collected, used, and shared when you visit or make a purchase from idfis.com.
          </p>
          <h2 style={{ fontSize: '1.5rem', color: 'var(--color-accent)', marginBottom: '1rem', marginTop: '2rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Personal Information We Collect</h2>
          <p style={{ marginBottom: '2rem' }}>
            When you visit the Site, we automatically collect certain information about your device, including information about your web browser, IP address, time zone, and some of the cookies that are installed on your device.
          </p>
          <h2 style={{ fontSize: '1.5rem', color: 'var(--color-accent)', marginBottom: '1rem', marginTop: '2rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>How Do We Use Your Personal Information?</h2>
          <p style={{ marginBottom: '2rem' }}>
            We use the Order Information that we collect generally to fulfill any orders placed through the Site (including processing your payment information, arranging for shipping, and providing you with invoices and/or order confirmations).
          </p>
        </div>
      </div>
      <Footer />
    </main>
  );
}
