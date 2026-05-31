'use client';

import { useState, useEffect } from 'react';
import { useCart } from '@/context/CartContext';
import { useCurrency } from '@/context/CurrencyContext';
import { formatPrice } from '@/lib/data';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function CheckoutPage() {
  const { items, cartTotalINR, clearCart } = useCart();
  const { currency } = useCurrency();
  const [loading, setLoading] = useState(false);
  const [scriptLoaded, setScriptLoaded] = useState(false);

  // Form State
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    zip: '',
    country: 'US',
  });

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://checkout.razorpay.com/v1/checkout.js';
    script.onload = () => setScriptLoaded(true);
    document.body.appendChild(script);
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handlePayment = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!scriptLoaded) {
      alert('Payment gateway is loading. Please try again in a moment.');
      return;
    }
    
    setLoading(true);

    try {
      // 1. Create order via our backend API
      const orderData = {
        items: items.map(item => ({
          id: item.product.id,
          quantity: item.quantity,
          price: item.product.basePriceINR
        })),
        customerDetails: formData,
        totalAmount: cartTotalINR
      };

      const orderResponse = await fetch('/api/orders', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(orderData),
      });
      
      const internalOrder = await orderResponse.json();

      if (internalOrder.error) {
        throw new Error(internalOrder.error);
      }

      // 2. Create Razorpay Order
      const rzpResponse = await fetch('/api/razorpay', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ amount: cartTotalINR, currency: 'INR' }),
      });
      
      const rzpOrder = await rzpResponse.json();

      if (rzpOrder.error) {
        throw new Error(rzpOrder.error);
      }

      // 3. Initialize Razorpay Checkout
      const options = {
        key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID || 'rzp_test_dummy_key_123',
        amount: rzpOrder.amount,
        currency: rzpOrder.currency,
        name: 'IDFIS',
        description: 'Premium Artisan Purchase',
        order_id: rzpOrder.id,
        handler: async function (response: any) {
          // Verify payment signature on backend
          const verifyRes = await fetch('/api/razorpay/verify', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              razorpay_order_id: response.razorpay_order_id,
              razorpay_payment_id: response.razorpay_payment_id,
              razorpay_signature: response.razorpay_signature,
              internal_order_id: internalOrder.orderId
            })
          });
          
          const verifyData = await verifyRes.json();
          if (verifyData.success) {
            clearCart();
            window.location.href = '/returns'; // Just an example redirect for success
          } else {
            alert('Payment verification failed.');
          }
        },
        prefill: {
          name: `${formData.firstName} ${formData.lastName}`,
          email: formData.email,
          contact: formData.phone
        },
        theme: {
          color: '#111111'
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
      <div className="container" style={{ paddingTop: '8rem', paddingBottom: '6rem', minHeight: '80vh' }}>
        <h1 style={{ fontSize: '2.5rem', marginBottom: '3rem', textAlign: 'center', fontFamily: 'var(--font-serif)' }}>Checkout</h1>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem' }}>
          
          {/* Shipping Form */}
          <div>
            <h2 style={{ fontSize: '1.2rem', marginBottom: '1.5rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Shipping Details</h2>
            <form id="checkout-form" onSubmit={handlePayment} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div style={{ display: 'flex', gap: '1rem' }}>
                <input required type="text" name="firstName" placeholder="First Name" onChange={handleInputChange} style={{ flex: 1, padding: '1rem', border: '1px solid var(--color-border)', borderRadius: '0' }} />
                <input required type="text" name="lastName" placeholder="Last Name" onChange={handleInputChange} style={{ flex: 1, padding: '1rem', border: '1px solid var(--color-border)', borderRadius: '0' }} />
              </div>
              <input required type="email" name="email" placeholder="Email Address" onChange={handleInputChange} style={{ padding: '1rem', border: '1px solid var(--color-border)', borderRadius: '0' }} />
              <input required type="tel" name="phone" placeholder="Phone Number" onChange={handleInputChange} style={{ padding: '1rem', border: '1px solid var(--color-border)', borderRadius: '0' }} />
              <input required type="text" name="address" placeholder="Shipping Address" onChange={handleInputChange} style={{ padding: '1rem', border: '1px solid var(--color-border)', borderRadius: '0' }} />
              <div style={{ display: 'flex', gap: '1rem' }}>
                <input required type="text" name="city" placeholder="City" onChange={handleInputChange} style={{ flex: 1, padding: '1rem', border: '1px solid var(--color-border)', borderRadius: '0' }} />
                <input required type="text" name="zip" placeholder="Postal Code" onChange={handleInputChange} style={{ width: '120px', padding: '1rem', border: '1px solid var(--color-border)', borderRadius: '0' }} />
              </div>
              <select name="country" required onChange={handleInputChange} style={{ padding: '1rem', border: '1px solid var(--color-border)', borderRadius: '0', background: 'transparent' }}>
                <option value="US">United States</option>
                <option value="UK">United Kingdom</option>
                <option value="IN">India</option>
                <option value="AU">Australia</option>
              </select>
            </form>
          </div>

          {/* Order Summary */}
          <div style={{ background: 'var(--color-surface)', padding: '2.5rem', borderRadius: '0', border: '1px solid var(--color-border)' }}>
            <h2 style={{ fontSize: '1.2rem', marginBottom: '2rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Order Summary</h2>
            
            <div style={{ marginBottom: '2rem' }}>
              {items.map((item, idx) => (
                <div key={idx} style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem' }}>
                  <span style={{ fontSize: '0.9rem' }}>{item.product.name || 'Product'} x {item.quantity}</span>
                  <span style={{ fontSize: '0.9rem' }}>{formatPrice(item.product.basePriceINR * item.quantity, currency)}</span>
                </div>
              ))}
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem', borderTop: '1px solid var(--color-border)', paddingTop: '1.5rem' }}>
              <span>Subtotal</span>
              <span>{formatPrice(cartTotalINR, currency)}</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '2rem', paddingBottom: '2rem', borderBottom: '1px solid var(--color-border)' }}>
              <span>International Shipping</span>
              <span>Calculated next</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2.5rem' }}>
              <span style={{ fontSize: '1.2rem', fontFamily: 'var(--font-serif)' }}>Total</span>
              <span style={{ fontSize: '1.5rem' }}>{formatPrice(cartTotalINR, currency)}</span>
            </div>
            
            <button 
              type="submit"
              form="checkout-form"
              className="btn-primary" 
              style={{ width: '100%', padding: '1.2rem', fontSize: '0.9rem', letterSpacing: '0.1em' }}
              disabled={loading || cartTotalINR === 0}
            >
              {loading ? 'PROCESSING...' : 'COMPLETE ORDER'}
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
