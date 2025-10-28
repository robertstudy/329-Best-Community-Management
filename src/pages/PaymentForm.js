import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Card from '../components/common/Card';
import { translations } from '../data/translations';

const PaymentForm = ({ language, accessibilitySettings }) => {
  const t = translations[language];
  const [paymentMethod, setPaymentMethod] = useState('stripe');

  return (
    <div className={`payment-page ${accessibilitySettings.highContrast ? 'high-contrast' : ''}`} style={{ minHeight: '100vh', padding: '2rem 0', backgroundColor: 'var(--neutral-light)' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Payment</h1>
          <p style={{ fontSize: '1.125rem', color: 'var(--gray-600)' }}>
            Complete your payment to confirm your booking
          </p>
        </div>

        <Card accessibilitySettings={accessibilitySettings} style={{ maxWidth: '600px', margin: '0 auto', padding: '2rem' }}>
          <h2 style={{ marginBottom: '1.5rem' }}>Payment Method</h2>
          
          <div style={{ marginBottom: '2rem' }}>
            <div style={{ display: 'flex', gap: '1rem', marginBottom: '1rem' }}>
              <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer' }}>
                <input 
                  type="radio" 
                  value="stripe" 
                  checked={paymentMethod === 'stripe'} 
                  onChange={(e) => setPaymentMethod(e.target.value)} 
                />
                <img src="" alt="Stripe" />
                Credit/Debit Card
              </label>
            </div>
            <div style={{ display: 'flex', gap: '1rem' }}>
              <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer' }}>
                <input 
                  type="radio" 
                  value="paypal" 
                  checked={paymentMethod === 'paypal'} 
                  onChange={(e) => setPaymentMethod(e.target.value)} 
                />
                <img src="" alt="PayPal" />
                PayPal
              </label>
            </div>
          </div>

          <div style={{ padding: '2rem', backgroundColor: 'var(--gray-100)', borderRadius: '0.375rem', textAlign: 'center', marginBottom: '2rem' }}>
            <h3 style={{ marginBottom: '1rem' }}>Payment Integration Placeholder</h3>
            <p style={{ color: 'var(--gray-600)', marginBottom: '1rem' }}>
              This is a mock payment form. In a real application, this would integrate with payment processors like Stripe or PayPal.
            </p>
            <p style={{ fontSize: '0.875rem', color: 'var(--gray-500)' }}>
              No actual payment will be processed
            </p>
          </div>

          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
            <Link to="/booking" className="btn btn-outline">
              Back to Booking
            </Link>
            <Link to="/booking-confirmation" className="btn btn-primary">
              Complete Payment (Mock)
            </Link>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default PaymentForm;
