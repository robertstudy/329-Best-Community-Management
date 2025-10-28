import React from 'react';
import Card from '../components/common/Card';
import { translations } from '../data/translations';
import { events } from '../data/mockData';

const Events = ({ language, accessibilitySettings }) => {
  const t = translations[language];

  return (
    <div className={`events-page ${accessibilitySettings.highContrast ? 'high-contrast' : ''}`} style={{ minHeight: '100vh', padding: '2rem 0' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>{t.events}</h1>
          <p style={{ fontSize: '1.125rem', color: 'var(--gray-600)' }}>
            Join our upcoming community events and activities
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
          {events.map((event) => (
            <Card key={event.id} hover={true} accessibilitySettings={accessibilitySettings}>
              <img src={event.image} alt={event.title} style={{ width: '100%', height: '200px', objectFit: 'cover', borderRadius: '0.375rem', marginBottom: '1rem' }} />
              <h3 style={{ marginBottom: '0.5rem' }}>{event.title}</h3>
              <div style={{ display: 'flex', gap: '1rem', marginBottom: '1rem', fontSize: '0.875rem', color: 'var(--gray-600)' }}>
                <span>{event.date}</span>
                <span>{event.time}</span>
              </div>
              <div style={{ marginBottom: '1rem', fontSize: '0.875rem', color: 'var(--gray-600)' }}>
                 {event.location}
              </div>
              <p style={{ color: 'var(--gray-700)', marginBottom: '1rem' }}>{event.description}</p>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontSize: '0.75rem', padding: '0.25rem 0.75rem', backgroundColor: 'var(--primary-blue)', color: 'white', borderRadius: '1rem' }}>
                  {event.category}
                </span>
                <button className="btn btn-primary" style={{ fontSize: '0.875rem' }}>
                  Learn More
                </button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Events;
