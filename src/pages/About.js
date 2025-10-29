import React from 'react';
import Card from '../components/common/Card';
import { translations } from '../data/translations';

const About = ({ language, accessibilitySettings }) => {
  const t = translations[language];

  return (
    <div className={`about-page ${accessibilitySettings.highContrast ? 'high-contrast' : ''}`} style={{ minHeight: '100vh', padding: '2rem 0' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>{t.about}</h1>
          <p style={{ fontSize: '1.125rem', color: 'var(--gray-600)', maxWidth: '600px', margin: '0 auto' }}>
            Learn more about our mission, values, and the impact we're making in our community
          </p>
        </div>

        <div style={{ marginBottom: '3rem' }}>
          <Card accessibilitySettings={accessibilitySettings} style={{ padding: '2rem' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', alignItems: 'center' }}>
              <div>
                <h2 style={{ marginBottom: '1rem' }}>{t.missionTitle}</h2>
                <p style={{ lineHeight: '1.6', marginBottom: '1rem' }}>
                  {t.missionText}
                </p>
                <p style={{ lineHeight: '1.6', color: 'var(--gray-600)' }}>
                  Since our founding in 2014, we have been committed to providing comprehensive community services 
                  that address the diverse needs of our neighbors. From educational programs to essential services, 
                  we work tirelessly to build a stronger, more connected community.
                </p>
              </div>
              <div>
                <img 
                  src="/pictures/about/community-center.jpg" 
                  alt="Community Center"
                  style={{ width: '100%', height: 'auto', borderRadius: '0.5rem' }}
                />
              </div>
            </div>
          </Card>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem', marginBottom: '3rem' }}>
          <Card accessibilitySettings={accessibilitySettings} style={{ padding: '1.5rem', textAlign: 'center' }}>
            <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🎯</div>
            <h3 style={{ marginBottom: '1rem' }}>Our Vision</h3>
            <p style={{ color: 'var(--gray-600)' }}>
              A thriving community where everyone has access to the resources and support they need to succeed.
            </p>
          </Card>

          <Card accessibilitySettings={accessibilitySettings} style={{ padding: '1.5rem', textAlign: 'center' }}>
            <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>💝</div>
            <h3 style={{ marginBottom: '1rem' }}>Our Values</h3>
            <p style={{ color: 'var(--gray-600)' }}>
              Compassion, integrity, inclusivity, and excellence guide everything we do in service of our community.
            </p>
          </Card>

          <Card accessibilitySettings={accessibilitySettings} style={{ padding: '1.5rem', textAlign: 'center' }}>
            <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🌟</div>
            <h3 style={{ marginBottom: '1rem' }}>Our Impact</h3>
            <p style={{ color: 'var(--gray-600)' }}>
              Over 500 families served, 25+ programs offered, and countless lives touched through our services.
            </p>
          </Card>
        </div>

        <Card accessibilitySettings={accessibilitySettings} style={{ padding: '2rem', marginBottom: '3rem' }}>
          <h2 style={{ textAlign: 'center', marginBottom: '2rem' }}>Our Team</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem' }}>
            {[
              { name: 'Maria Rodriguez', role: 'Executive Director', image: '/pictures/about/team/maria.jpg' },
                { name: 'John Smith', role: 'Program Manager', image: '/pictures/about/team/john.jpg' },
              { name: 'Sarah Johnson', role: 'Community Outreach', image: '/pictures/about/team/sarah.jpg' },
              { name: 'David Chen', role: 'Operations Manager', image: '/pictures/about/team/david.jpg' }
            ].map((member, index) => (
              <div key={index} style={{ textAlign: 'center' }}>
                <img 
                  src={member.image} 
                  alt={member.name}
                  style={{ width: '120px', height: '120px', borderRadius: '50%', marginBottom: '1rem' }}
                />
                <h4 style={{ marginBottom: '0.5rem' }}>{member.name}</h4>
                <p style={{ color: 'var(--gray-600)', fontSize: '0.875rem' }}>{member.role}</p>
              </div>
            ))}
          </div>
        </Card>

        <Card accessibilitySettings={accessibilitySettings} style={{ padding: '2rem', textAlign: 'center' }}>
          <h2 style={{ marginBottom: '1rem' }}>Get Involved</h2>
          <p style={{ marginBottom: '2rem', color: 'var(--gray-600)' }}>
            Ready to make a difference in your community? There are many ways to get involved with our mission.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <button className="btn btn-primary">Volunteer With Us</button>
            <button className="btn btn-secondary">Make a Donation</button>
            <button className="btn btn-outline">Contact Us</button>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default About;