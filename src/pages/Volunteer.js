import React from 'react';
import Card from '../components/common/Card';
import { translations } from '../data/translations';
import { volunteers } from '../data/mockData';

const Volunteer = ({ language, accessibilitySettings }) => {
  const t = translations[language];

  return (
    <div className={`volunteer-page ${accessibilitySettings.highContrast ? 'high-contrast' : ''}`} style={{ minHeight: '100vh', padding: '2rem 0' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>{t.volunteerTitle}</h1>
          <p style={{ fontSize: '1.125rem', color: 'var(--gray-600)' }}>
            Join our team of dedicated volunteers and make a difference in your community
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '2rem', marginBottom: '3rem' }}>
          <Card accessibilitySettings={accessibilitySettings} style={{ padding: '2rem' }}>
            <h2 style={{ marginBottom: '1.5rem' }}>{t.volunteerRegistration}</h2>
            <form>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
                <input type="text" placeholder="First Name" className="form-input" />
                <input type="text" placeholder="Last Name" className="form-input" />
              </div>
              <input type="email" placeholder="Email Address" className="form-input" style={{ marginBottom: '1rem' }} />
              <input type="tel" placeholder="Phone Number" className="form-input" style={{ marginBottom: '1rem' }} />
              
              <div style={{ marginBottom: '1rem' }}>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>
                  {t.skills}
                </label>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '0.5rem' }}>
                  {['Translation', 'Teaching', 'Transportation', 'Event Planning', 'Cooking', 'Administration'].map((skill) => (
                    <label key={skill} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <input type="checkbox" />
                      {skill}
                    </label>
                  ))}
                </div>
              </div>

              <div style={{ marginBottom: '1rem' }}>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>
                  {t.availability}
                </label>
                <select className="form-select">
                  <option>Weekdays</option>
                  <option>Weekends</option>
                  <option>Evenings</option>
                  <option>Flexible</option>
                </select>
              </div>

              <textarea 
                placeholder="Tell us why you want to volunteer..."
                className="form-textarea"
                style={{ marginBottom: '1rem' }}
              />

              <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>
                {t.submit}
              </button>
            </form>
          </Card>

          <div>
            <Card accessibilitySettings={accessibilitySettings} style={{ padding: '1.5rem', marginBottom: '1rem' }}>
              <h3 style={{ marginBottom: '1rem' }}>Volunteer Opportunities</h3>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                <li style={{ padding: '0.5rem 0', borderBottom: '1px solid var(--gray-200)' }}>Teaching & Tutoring</li>
                <li style={{ padding: '0.5rem 0', borderBottom: '1px solid var(--gray-200)' }}>Transportation Services</li>
                <li style={{ padding: '0.5rem 0', borderBottom: '1px solid var(--gray-200)' }}>Arts & Crafts Instruction</li>
                <li style={{ padding: '0.5rem 0', borderBottom: '1px solid var(--gray-200)' }}>Translation Services</li>
                <li style={{ padding: '0.5rem 0', borderBottom: '1px solid var(--gray-200)' }}>Meal Preparation</li>
                <li style={{ padding: '0.5rem 0' }}> Administrative Support</li>
              </ul>
            </Card>

            <Card accessibilitySettings={accessibilitySettings} style={{ padding: '1.5rem' }}>
              <h3 style={{ marginBottom: '1rem' }}>Volunteer Stats</h3>
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '2rem', fontWeight: 'bold', color: 'var(--primary-blue)' }}>45</div>
                <div style={{ fontSize: '0.875rem', color: 'var(--gray-600)', marginBottom: '1rem' }}>Active Volunteers</div>
                
                <div style={{ fontSize: '2rem', fontWeight: 'bold', color: 'var(--secondary-green)' }}>1,250</div>
                <div style={{ fontSize: '0.875rem', color: 'var(--gray-600)' }}>Hours This Year</div>
              </div>
            </Card>
          </div>
        </div>

        <Card accessibilitySettings={accessibilitySettings} style={{ padding: '2rem' }}>
          <h2 style={{ marginBottom: '1.5rem' }}>Our Volunteers</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1rem' }}>
            {volunteers.map((volunteer) => (
              <div key={volunteer.id} style={{ padding: '1rem', border: '1px solid var(--gray-200)', borderRadius: '0.375rem' }}>
                <h4 style={{ marginBottom: '0.5rem' }}>{volunteer.name}</h4>
                <div style={{ fontSize: '0.875rem', color: 'var(--gray-600)', marginBottom: '0.5rem' }}>
                  {volunteer.skills.join(', ')}
                </div>
                <div style={{ fontSize: '0.875rem', color: 'var(--gray-600)', marginBottom: '0.5rem' }}>
                  Available: {volunteer.availability}
                </div>
                <div style={{ fontSize: '0.875rem', fontWeight: '600', color: 'var(--primary-blue)' }}>
                  {volunteer.hoursLogged} hours logged
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Volunteer;
