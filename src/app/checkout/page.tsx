'use client';

import { useState, useEffect } from 'react';
import { useCart } from '@/context/CartContext';
import { useCurrency } from '@/context/CurrencyContext';
import { formatPrice } from '@/lib/data';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function CheckoutPage() {
  const { cartTotalINR, clearCart } = useCart();
  const { currency } = useCurrency();
  const [loading, setLoading] = useState(false);
  const [scriptLoaded, setScriptLoaded] = useState(false);

  useEffect(() => {
    // Load Razorpay Script dynamically
    const script = document.createElement('script');
    script.src = 'https://checkout.razorpay.com/v1/checkout.js';
    script.onload = () => setScriptLoaded(true);
    document.body.appendChild(script);
  }, []);

  const handlePayment = async () => {
    if (!scriptLoaded) {
      alert('Payment gateway is loading. Please try again in a moment.');
      return;
    }
    
    setLoading(true);

    try {
      // Create order via our backend API
      const response = await fetch('/api/razorpay', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ amount: cartTotalINR, currency: 'INR' }), // Always process in INR or native currency
      });
      
      const order = await response.json();

      if (order.error) {
        throw new Error(order.error);
      }

      // Initialize Razorpay Checkout
      const options = {
        key: 'rzp_test_dummy_key_123', // Dummy key for scaffolding
        amount: order.amount,
        currency: order.currency,
        name: 'The Karigar House',
        description: 'Premium Artisan Purchase',
        order_id: order.id,
        handler: function (response: any) {
          alert(`Payment Successful! Payment ID: ${response.razorpay_payment_id}`);
          clearCart();
          window.location.href = '/';
        },
        prefill: {
          name: 'Guest User',
          email: 'guest@example.com',
          contact: '9999999999'
        },
        theme: {
          color: '#d4af37' // Our gold accent
        }
      };

      const rzp = new (window as any).Razorpay(options);
      rzp.on('payment.failed', function (response: any) {
        alert(`Payment Failed: ${response.error.description}`);
      });
      rzp.open();

    } catch (error) {
      console.error(error);
      alert('Error initiating checkout. Please ensure API keys are configured.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <main>
      <Header />
      <div className="container" style={{ paddingTop: '10rem', paddingBottom: '6rem', minHeight: '80vh', maxWidth: '600px' }}>
        <h1 style={{ fontSize: '3rem', marginBottom: '2rem', textAlign: 'center' }}>Secure Checkout</h1>
        
        <div style={{ background: 'var(--color-surface)', padding: '3rem', borderRadius: '8px', border: '1px solid var(--color-border)' }}>
          <h2 style={{ fontSize: '1.5rem', marginBottom: '1.5rem' }}>Order Summary</h2>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem' }}>
            <span>Subtotal</span>
            <span>{formatPrice(cartTotalINR, currency)}</span>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '2rem', paddingBottom: '2rem', borderBottom: '1px solid rgba(252,250,248,0.1)' }}>
            <span>International Shipping</span>
            <span>Calculated at next step</span>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '3rem' }}>
            <span style={{ fontSize: '1.5rem', fontFamily: 'var(--font-serif)' }}>Total</span>
            <span style={{ fontSize: '2rem', color: 'var(--color-accent)' }}>{formatPrice(cartTotalINR, currency)}</span>
          </div>
          
          <button 
            className="btn-primary" 
            style={{ width: '100%', padding: '1.2rem', fontSize: '1.1rem' }}
            onClick={handlePayment}
            disabled={loading || cartTotalINR === 0}
          >
            {loading ? 'Processing...' : 'Pay with Razorpay'}
          </button>
        </div>
      </div>
      <Footer />
    </main>
  );
}
