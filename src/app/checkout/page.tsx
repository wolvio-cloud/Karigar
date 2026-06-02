'use client';

import { useState, useEffect } from 'react';
import { useCart } from '@/context/CartContext';
import { useCurrency } from '@/context/CurrencyContext';
import { useRouter } from 'next/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Script from 'next/script';
import Image from 'next/image';

import { exchangeRates, formatPrice } from '@/lib/data';

export default function CheckoutPage() {
  const { items, clearCart, cartTotalINR } = useCart();
  const { currency } = useCurrency();
  const exchangeRate = exchangeRates[currency];
  const router = useRouter();
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    postalCode: '',
    country: 'United States'
  });
  
  const [loading, setLoading] = useState(false);
  const [shippingLoading, setShippingLoading] = useState(false);
  const [shippingCostINR, setShippingCostINR] = useState(0);
  const [shippingMessage, setShippingMessage] = useState('Calculating...');

  useEffect(() => {
    async function calculateShipping() {
      if (items.length === 0) return;
      setShippingLoading(true);
      setShippingMessage('Calculating...');
      try {
        const res = await fetch('/api/shipping/rates', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ country: formData.country, items })
        });
        if (res.ok) {
          const data = await res.json();
          setShippingCostINR(data.shippingCostINR);
          setShippingMessage(data.message);
        } else {
          setShippingMessage('Standard Courier Rate');
          setShippingCostINR(4000); // fallback
        }
      } catch (err) {
        setShippingMessage('Standard Courier Rate');
        setShippingCostINR(4000); // fallback
      } finally {
        setShippingLoading(false);
      }
    }
    
    // Add a slight debounce
    const timer = setTimeout(() => {
      calculateShipping();
    }, 500);
    
    return () => clearTimeout(timer);
  }, [formData.country, items]);

  const subtotal = cartTotalINR * exchangeRate;
  const shipping = shippingCostINR * exchangeRate;
  const total = subtotal + shipping;
  const currencySymbol = currency === 'USD' ? '$' : '₹';

  if (items.length === 0) {
    return (
      <main style={{ backgroundColor: 'var(--color-background)', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
        <Header />
        <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
          <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '2rem', marginBottom: '1rem' }}>Your Cart is Empty</h2>
          <button onClick={() => router.push('/collections/all')} className="button-gold">Continue Shopping</button>
        </div>
        <Footer />
      </main>
    );
  }

  const handlePayment = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Check if we are using dummy keys (for local development testing)
      const isDummyKey = !process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID || process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID.includes('dummy');

      if (isDummyKey) {
        // Bypass Razorpay API and simulate a successful payment locally
        setTimeout(async () => {
          const verifyRes = await fetch('/api/checkout/verify', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              razorpay_order_id: `order_dummy_${Date.now()}`,
              razorpay_payment_id: `pay_dummy_${Date.now()}`,
              razorpay_signature: "dummy_signature",
              customerDetails: formData,
              cartItems: items.map(i => ({ productId: i.product.id, quantity: i.quantity, price: i.product.basePriceINR })),
              totalAmount: total,
              shippingCost: shippingCostINR
            })
          });

          if (verifyRes.ok) {
            clearCart();
            router.push('/profile');
          } else {
            alert("Payment verification failed.");
          }
          setLoading(false);
        }, 1500);
        return; // exit early
      }

      const response = await fetch('/api/checkout/razorpay', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          currency,
          cartItems: items.map(i => ({ id: i.product.id, quantity: i.quantity })),
          shippingCostINR 
        })
      });
      
      const result = await response.json();

      if (!result.success || !result.data || !result.data.id) {
        throw new Error(result.error?.message || "Failed to initialize payment securely.");
      }

      const order = result.data;

      const options = {
        key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
        amount: order.amount,
        currency: order.currency || "USD",
        name: "IDFIS Luxury",
        description: "Global Artisan Order",
        order_id: order.id,
        handler: async function (response: any) {
          const verifyRes = await fetch('/api/checkout/verify', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              razorpay_order_id: response.razorpay_order_id,
              razorpay_payment_id: response.razorpay_payment_id,
              razorpay_signature: response.razorpay_signature,
              customerDetails: formData,
              cartItems: items.map(i => ({ productId: i.product.id, quantity: i.quantity, price: i.product.basePriceINR })),
              totalAmount: total,
              shippingCost: shippingCostINR
            })
          });

          const verifyData = await verifyRes.json();

          if (verifyData.success) {
            clearCart();
            router.push('/profile');
          } else {
            alert(verifyData.error?.message || "Payment verification failed. Please contact support if money was deducted.");
          }
        },
        prefill: {
          name: formData.name,
          email: formData.email,
          contact: formData.phone
        },
        theme: {
          color: "#c2a373"
        }
      };

      const rzp = new (window as any).Razorpay(options);
      rzp.on('payment.failed', function (response: any){
        alert("Payment could not be completed. If money was deducted, please contact IDFIS support with your payment reference.");
      });
      rzp.open();
      
    } catch (error) {
      console.error(error);
      alert("Something went wrong");
    } finally {
      if (!(!process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID || process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID.includes('dummy'))) {
        setLoading(false);
      }
    }
  };

  return (
    <main style={{ backgroundColor: 'var(--color-background)', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Header />
      <Script src="https://checkout.razorpay.com/v1/checkout.js" />
      
      <div className="container" style={{ flex: 1, paddingTop: '8rem', paddingBottom: '6rem', maxWidth: '1200px', display: 'grid', gridTemplateColumns: '1.5fr 1fr', gap: '4rem' }}>
        
        <div>
          <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: '2rem', marginBottom: '2rem' }}>Secure Checkout</h1>
          
          <form onSubmit={handlePayment} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <h3 style={{ fontSize: '1.2rem', borderBottom: '1px solid rgba(252, 250, 248, 0.1)', paddingBottom: '0.5rem' }}>Contact Information</h3>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem', color: 'rgba(252, 250, 248, 0.7)' }}>Full Name</label>
                <input required type="text" value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} style={{ width: '100%', padding: '0.8rem', backgroundColor: 'var(--color-surface)', border: '1px solid rgba(252, 250, 248, 0.1)', color: 'var(--color-text)' }} />
              </div>
              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem', color: 'rgba(252, 250, 248, 0.7)' }}>Phone</label>
                <input required type="text" value={formData.phone} onChange={e => setFormData({...formData, phone: e.target.value})} style={{ width: '100%', padding: '0.8rem', backgroundColor: 'var(--color-surface)', border: '1px solid rgba(252, 250, 248, 0.1)', color: 'var(--color-text)' }} />
              </div>
            </div>
            <div>
              <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem', color: 'rgba(252, 250, 248, 0.7)' }}>Email</label>
              <input required type="email" value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} style={{ width: '100%', padding: '0.8rem', backgroundColor: 'var(--color-surface)', border: '1px solid rgba(252, 250, 248, 0.1)', color: 'var(--color-text)' }} />
            </div>

            <h3 style={{ fontSize: '1.2rem', borderBottom: '1px solid rgba(252, 250, 248, 0.1)', paddingBottom: '0.5rem', marginTop: '1rem' }}>Shipping Address</h3>
            <div>
              <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem', color: 'rgba(252, 250, 248, 0.7)' }}>Country</label>
              <select required value={formData.country} onChange={e => setFormData({...formData, country: e.target.value})} style={{ width: '100%', padding: '0.8rem', backgroundColor: 'var(--color-surface)', border: '1px solid rgba(252, 250, 248, 0.1)', color: 'var(--color-text)' }}>
                <option value="United States">United States</option>
                <option value="United Kingdom">United Kingdom</option>
                <option value="India">India</option>
                <option value="Canada">Canada</option>
                <option value="Australia">Australia</option>
                <option value="United Arab Emirates">United Arab Emirates</option>
                <option value="Singapore">Singapore</option>
                <option value="France">France</option>
                <option value="Germany">Germany</option>
              </select>
            </div>
            <div>
              <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem', color: 'rgba(252, 250, 248, 0.7)' }}>Address</label>
              <input required type="text" value={formData.address} onChange={e => setFormData({...formData, address: e.target.value})} style={{ width: '100%', padding: '0.8rem', backgroundColor: 'var(--color-surface)', border: '1px solid rgba(252, 250, 248, 0.1)', color: 'var(--color-text)' }} />
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem', color: 'rgba(252, 250, 248, 0.7)' }}>City</label>
                <input required type="text" value={formData.city} onChange={e => setFormData({...formData, city: e.target.value})} style={{ width: '100%', padding: '0.8rem', backgroundColor: 'var(--color-surface)', border: '1px solid rgba(252, 250, 248, 0.1)', color: 'var(--color-text)' }} />
              </div>
              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem', color: 'rgba(252, 250, 248, 0.7)' }}>Postal Code</label>
                <input required type="text" value={formData.postalCode} onChange={e => setFormData({...formData, postalCode: e.target.value})} style={{ width: '100%', padding: '0.8rem', backgroundColor: 'var(--color-surface)', border: '1px solid rgba(252, 250, 248, 0.1)', color: 'var(--color-text)' }} />
              </div>
            </div>
            
            <button type="submit" className="button-gold" style={{ marginTop: '2rem', width: '100%', padding: '1rem' }} disabled={loading || shippingLoading}>
              {loading || shippingLoading ? 'Processing...' : `Pay ${currencySymbol}${total.toFixed(2)}`}
            </button>
            <div style={{ textAlign: 'center', marginTop: '0.5rem', fontSize: '0.8rem', color: 'rgba(252, 250, 248, 0.5)' }}>
              Secure 256-bit SSL encryption.
            </div>
          </form>
        </div>

        <div style={{ backgroundColor: 'var(--color-surface)', padding: '2rem', borderRadius: '4px', height: 'fit-content' }}>
          <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.5rem', marginBottom: '1.5rem' }}>Order Summary</h3>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', marginBottom: '2rem' }}>
            {items.map((item) => {
              const itemPrice = item.product.basePriceINR * exchangeRate;
              return (
                <div key={`${item.product.id}-${item.size}`} style={{ display: 'flex', gap: '1rem' }}>
                  <div style={{ width: '60px', height: '80px', backgroundColor: 'rgba(255,255,255,0.05)', position: 'relative' }}>
                    {item.product.image && <Image src={item.product.image} alt={item.product.name} fill style={{ objectFit: 'cover' }} />}
                    <div style={{ position: 'absolute', top: '-8px', right: '-8px', backgroundColor: 'var(--color-accent)', color: '#000', width: '20px', height: '20px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.7rem', fontWeight: 'bold' }}>
                      {item.quantity}
                    </div>
                  </div>
                  <div style={{ flex: 1 }}>
                    <p style={{ fontSize: '0.9rem', marginBottom: '0.2rem' }}>{item.product.name}</p>
                    <p style={{ fontSize: '0.8rem', color: 'rgba(252, 250, 248, 0.6)' }}>Size: {item.size}</p>
                  </div>
                  <div>
                    <p style={{ fontSize: '0.9rem' }}>{currencySymbol}{(itemPrice * item.quantity).toFixed(2)}</p>
                  </div>
                </div>
              );
            })}
          </div>

          <div style={{ borderTop: '1px solid rgba(252, 250, 248, 0.1)', paddingTop: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.9rem', color: 'rgba(252, 250, 248, 0.7)' }}>
              <span>Subtotal</span>
              <span>{currencySymbol}{subtotal.toFixed(2)}</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.9rem', color: 'rgba(252, 250, 248, 0.7)' }}>
              <span>Shipping ({formData.country})</span>
              <span>
                {shippingLoading ? (
                  <span style={{ fontStyle: 'italic', opacity: 0.7 }}>Calculating...</span>
                ) : (
                  shippingCostINR === 0 ? <span style={{ color: 'var(--color-accent)' }}>Complimentary</span> : `${currencySymbol}${shipping.toFixed(2)}`
                )}
              </span>
            </div>
            {shippingMessage && !shippingLoading && (
               <div style={{ fontSize: '0.75rem', color: 'rgba(252, 250, 248, 0.5)', textAlign: 'right', marginTop: '-0.5rem' }}>
                 {shippingMessage}
               </div>
            )}
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '1.2rem', marginTop: '1rem', fontWeight: 'bold' }}>
              <span>Total</span>
              <span>{currencySymbol}{total.toFixed(2)}</span>
            </div>
          </div>
        </div>

      </div>
      <Footer />
    </main>
  );
}
