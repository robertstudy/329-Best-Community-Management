import React, { useState } from 'react';
import Card from '../components/common/Card';
import { translations } from '../data/translations';

const Donations = ({ language, accessibilitySettings }) => {
  const t = translations[language];
  const [donationType, setDonationType] = useState('known');
  const [amount, setAmount] = useState('');
  const [customAmount, setCustomAmount] = useState('');

  const predefinedAmounts = [25, 50, 100, 250, 500];

  return (
    <div className={`donations-page ${accessibilitySettings.highContrast ? 'high-contrast' : ''}`} style={{ minHeight: '100vh', padding: '2rem 0', backgroundColor: 'var(--neutral-light)' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>{t.donateTitle}</h1>
          <p style={{ fontSize: '1.125rem', color: 'var(--gray-600)' }}>
            Your generous donations help us serve our community better
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '2rem', alignItems: 'start' }}>
          <Card accessibilitySettings={accessibilitySettings} style={{ padding: '2rem' }}>
            <h2 style={{ marginBottom: '1.5rem' }}>Donation Form</h2>
            
            <div style={{ marginBottom: '2rem' }}>
              <label style={{ display: 'block', marginBottom: '1rem', fontWeight: '500' }}>
                {t.donorType}
              </label>
              <div style={{ display: 'flex', gap: '1rem' }}>
                <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <input 
                    type="radio" 
                    value="known" 
                    checked={donationType === 'known'} 
                    onChange={(e) => setDonationType(e.target.value)} 
                  />
                  {t.knownDonor}
                </label>
                <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <input 
                    type="radio" 
                    value="anonymous" 
                    checked={donationType === 'anonymous'} 
                    onChange={(e) => setDonationType(e.target.value)} 
                  />
                  {t.anonymousDonor}
                </label>
              </div>
            </div>

            <div style={{ marginBottom: '2rem' }}>
              <label style={{ display: 'block', marginBottom: '1rem', fontWeight: '500' }}>
                {t.donationAmount}
              </label>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(80px, 1fr))', gap: '0.5rem', marginBottom: '1rem' }}>
                {predefinedAmounts.map((preAmount) => (
                  <button
                    key={preAmount}
                    className={`btn ${amount === preAmount.toString() ? 'btn-primary' : 'btn-outline'}`}
                    onClick={() => {
                      setAmount(preAmount.toString());
                      setCustomAmount('');
                    }}
                    style={{ fontSize: '0.875rem' }}
                  >
                    ${preAmount}
                  </button>
                ))}
              </div>
              <input
                type="number"
                placeholder="Enter custom amount"
                value={customAmount}
                onChange={(e) => {
                  setCustomAmount(e.target.value);
                  setAmount('');
                }}
                className="form-input"
                style={{ marginTop: '0.5rem' }}
              />
            </div>

            <div style={{ marginBottom: '2rem' }}>
              <label style={{ display: 'block', marginBottom: '1rem', fontWeight: '500' }}>
                {t.donationPurpose}
              </label>
              <select className="form-select">
                <option value="general">{t.generalFund}</option>
                <option value="youth">{t.youthPrograms}</option>
                <option value="senior">{t.seniorServices}</option>
                <option value="emergency">{t.emergencyFund}</option>
              </select>
            </div>

            {donationType === 'known' && (
              <div style={{ marginBottom: '2rem' }}>
                <h3 style={{ marginBottom: '1rem' }}>Contact Information</h3>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
                  <input type="text" placeholder="First Name" className="form-input" />
                  <input type="text" placeholder="Last Name" className="form-input" />
                </div>
                <input type="email" placeholder="Email Address" className="form-input" style={{ marginBottom: '1rem' }} />
                <input type="tel" placeholder="Phone Number" className="form-input" />
              </div>
            )}

            <div style={{ padding: '1.5rem', backgroundColor: 'var(--gray-100)', borderRadius: '0.375rem', textAlign: 'center', marginBottom: '2rem' }}>
              <h3 style={{ marginBottom: '1rem' }}>Payment Processing Placeholder</h3>
              <p style={{ color: 'var(--gray-600)', marginBottom: '1rem' }}>
                This would integrate with payment processors like Stripe or PayPal
              </p>
            </div>

            <button className="btn btn-primary" style={{ width: '100%' }}>
              Complete Donation (Mock)
            </button>
          </Card>

          <Card accessibilitySettings={accessibilitySettings} style={{ padding: '1.5rem' }}>
            <h3 style={{ marginBottom: '1rem' }}>Impact of Your Donation</h3>
            <div style={{ marginBottom: '1.5rem' }}>
              <div style={{ marginBottom: '1rem' }}>
                <strong>$25</strong> - Provides a meal for a family in need
              </div>
              <div style={{ marginBottom: '1rem' }}>
                <strong>$50</strong> - Sponsors a child for arts & crafts workshop
              </div>
              <div style={{ marginBottom: '1rem' }}>
                <strong>$100</strong> - Covers transportation for seniors for a month
              </div>
              <div style={{ marginBottom: '1rem' }}>
                <strong>$250</strong> - Funds Spanish classes for 10 students
              </div>
            </div>
            
            <div style={{ padding: '1rem', backgroundColor: 'var(--secondary-green)', color: 'white', borderRadius: '0.375rem', textAlign: 'center' }}>
              <h4 style={{ marginBottom: '0.5rem' }}>Total Raised This Year</h4>
              <div style={{ fontSize: '2rem', fontWeight: 'bold' }}>$15,750</div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Donations;