import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function RefundPolicy() {
  return (
    <main>
      <Header />
      <div className="container" style={{ paddingTop: '8rem', paddingBottom: '6rem', maxWidth: '800px', minHeight: '80vh' }}>
        <h1 style={{ fontSize: '3rem', fontFamily: 'var(--font-serif)', marginBottom: '3rem', textAlign: 'center' }}>
          Refund Policy
        </h1>
        <div style={{ color: 'rgba(252, 250, 248, 0.85)', lineHeight: 1.8, fontSize: '1.05rem', fontFamily: 'var(--font-sans)', fontWeight: 300 }}>
          <p style={{ marginBottom: '2rem' }}>
            Please see our <Link href="/returns-damage-policy" style={{ color: 'var(--color-accent)', textDecoration: 'underline' }}>Returns & Damage Policy</Link> for full details on eligibility.
          </p>
          <h2 style={{ fontSize: '1.5rem', color: 'var(--color-accent)', marginBottom: '1rem', marginTop: '2rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Refund Processing</h2>
          <p style={{ marginBottom: '2rem' }}>
            Once your return is received and inspected, we will send you an email to notify you that we have received your returned item. We will also notify you of the approval or rejection of your refund.
          </p>
          <h2 style={{ fontSize: '1.5rem', color: 'var(--color-accent)', marginBottom: '1rem', marginTop: '2rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Late or Missing Refunds</h2>
          <p style={{ marginBottom: '2rem' }}>
            If you haven’t received a refund yet, first check your bank account again. Then contact your credit card company, it may take some time before your refund is officially posted.
          </p>
        </div>
      </div>
      <Footer />
    </main>
  );
}
