import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import Card from '../components/common/Card';
import { translations } from '../data/translations';

const BookingConfirmation = ({ language, accessibilitySettings }) => {
  const t = translations[language];
  const location = useLocation();
  const { bookingData, service } = location.state || {};

  if (!bookingData || !service) {
    return (
      <div className="container" style={{ padding: '2rem 0', textAlign: 'center' }}>
        <h1>Booking Not Found</h1>
        <p>We couldn't find your booking information.</p>
        <Link to="/services" className="btn btn-primary">
          Back to Services
        </Link>
      </div>
    );
  }

  return (
    <div className={`confirmation-page ${accessibilitySettings.highContrast ? 'high-contrast' : ''}`} style={{ minHeight: '100vh', padding: '2rem 0', backgroundColor: 'var(--neutral-light)' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <div style={{ fontSize: '4rem', marginBottom: '1rem' }}></div>
          <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem', color: 'var(--secondary-green)' }}>
            {t.bookingConfirmation}
          </h1>
          <p style={{ fontSize: '1.125rem', color: 'var(--gray-600)' }}>
            {t.thankYouBooking}
          </p>
        </div>

        <Card accessibilitySettings={accessibilitySettings} style={{ maxWidth: '600px', margin: '0 auto', padding: '2rem' }}>
          <h2 style={{ marginBottom: '1.5rem', color: 'var(--gray-900)' }}>Booking Details</h2>
          
          <div style={{ marginBottom: '2rem' }}>
            <h3 style={{ marginBottom: '1rem' }}>Service Information</h3>
            <div style={{ display: 'flex', gap: '1rem', marginBottom: '1rem' }}>
              <img src={service.image} alt={service.name} style={{ width: '100px', height: '75px', objectFit: 'cover', borderRadius: '0.375rem' }} />
              <div>
                <h4 style={{ marginBottom: '0.5rem' }}>{service.name}</h4>
                <p style={{ color: 'var(--primary-blue)', fontWeight: '600' }}>{service.price}</p>
                <p style={{ color: 'var(--gray-600)', fontSize: '0.875rem' }}>{service.duration}</p>
              </div>
            </div>
          </div>

          <div style={{ marginBottom: '2rem' }}>
            <h3 style={{ marginBottom: '1rem' }}>Contact Information</h3>
            <div style={{ display: 'grid', gap: '0.5rem' }}>
              <div><strong>Name:</strong> {bookingData.fullName}</div>
              <div><strong>Email:</strong> {bookingData.email}</div>
              <div><strong>Phone:</strong> {bookingData.phone}</div>
            </div>
          </div>

          <div style={{ marginBottom: '2rem' }}>
            <h3 style={{ marginBottom: '1rem' }}>Appointment Details</h3>
            <div style={{ display: 'grid', gap: '0.5rem' }}>
              <div><strong>Date:</strong> {new Date(bookingData.preferredDate).toLocaleDateString()}</div>
              <div><strong>Time:</strong> {bookingData.preferredTime}</div>
              {bookingData.specialRequests && (
                <div><strong>Special Requests:</strong> {bookingData.specialRequests}</div>
              )}
            </div>
          </div>

          <div style={{ padding: '1rem', backgroundColor: 'var(--gray-100)', borderRadius: '0.375rem', marginBottom: '2rem' }}>
            <h4 style={{ marginBottom: '0.5rem' }}>What's Next?</h4>
            <ul style={{ paddingLeft: '1.5rem', margin: 0 }}>
              <li>We'll contact you within 24 hours to confirm your appointment</li>
              <li>You'll receive a confirmation email with all the details</li>
              <li>If you need to make changes, please call us at (555) 123-4567</li>
            </ul>
          </div>

          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/" className="btn btn-primary">
              Back to Home
            </Link>
            <Link to="/services" className="btn btn-outline">
              Book Another Service
            </Link>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default BookingConfirmation;
