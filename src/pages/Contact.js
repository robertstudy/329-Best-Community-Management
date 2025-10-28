import React, { useState } from 'react';
import Card from '../components/common/Card';
import { translations } from '../data/translations';

const Contact = ({ language, accessibilitySettings }) => {
  const t = translations[language];
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
  };

  return (
    <div className={`contact-page ${accessibilitySettings.highContrast ? 'high-contrast' : ''}`} style={{ minHeight: '100vh', padding: '2rem 0' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>{t.contact}</h1>
          <p style={{ fontSize: '1.125rem', color: 'var(--gray-600)' }}>
            Get in touch with us - we're here to help and answer your questions
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '2rem' }}>
          <Card accessibilitySettings={accessibilitySettings} style={{ padding: '2rem' }}>
            <h2 style={{ marginBottom: '1.5rem' }}>Send us a Message</h2>
            <form onSubmit={handleSubmit}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="form-input"
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="form-input"
                  required
                />
              </div>
              
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number (Optional)"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="form-input"
                />
                <select
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  className="form-select"
                  required
                >
                  <option value="">Select Subject</option>
                  <option value="general">General Inquiry</option>
                  <option value="services">Services Information</option>
                  <option value="volunteer">Volunteer Opportunities</option>
                  <option value="donation">Donation Questions</option>
                  <option value="feedback">Feedback</option>
                </select>
              </div>

              <textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleInputChange}
                className="form-textarea"
                rows="6"
                style={{ marginBottom: '1rem' }}
                required
              />

              <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>
                Send Message
              </button>
            </form>
          </Card>

          <div>
            <Card accessibilitySettings={accessibilitySettings} style={{ padding: '1.5rem', marginBottom: '1rem' }}>
              <h3 style={{ marginBottom: '1rem' }}>Contact Information</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <div>
                    <div style={{ fontWeight: '500' }}>Address</div>
                    <div style={{ fontSize: '0.875rem', color: 'var(--gray-600)' }}>
                      123 Community Street<br />
                      Your City, State 12345
                    </div>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <div>
                    <div style={{ fontWeight: '500' }}>Phone</div>
                    <div style={{ fontSize: '0.875rem', color: 'var(--gray-600)' }}>
                      (555) 123-4567
                    </div>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <div>
                    <div style={{ fontWeight: '500' }}>Email</div>
                    <div style={{ fontSize: '0.875rem', color: 'var(--gray-600)' }}>
                      info@bestcommunity.org
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            <Card accessibilitySettings={accessibilitySettings} style={{ padding: '1.5rem', marginBottom: '1rem' }}>
              <h3 style={{ marginBottom: '1rem' }}>Office Hours</h3>
              <div style={{ fontSize: '0.875rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                  <span>Monday - Friday</span>
                  <span>8:00 AM - 6:00 PM</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                  <span>Saturday</span>
                  <span>9:00 AM - 4:00 PM</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                  <span>Sunday</span>
                  <span>Closed</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', color: 'var(--secondary-green)', fontWeight: '500' }}>
                  <span>Emergency</span>
                  <span>24/7</span>
                </div>
              </div>
            </Card>

            <Card accessibilitySettings={accessibilitySettings} style={{ padding: '1.5rem' }}>
              <h3 style={{ marginBottom: '1rem' }}>Quick Actions</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <a href="tel:(555)123-4567" className="btn btn-outline" style={{ fontSize: '0.875rem' }}>
                  Call Us Now
                </a>
                <a href="mailto:info@bestcommunity.org" className="btn btn-outline" style={{ fontSize: '0.875rem' }}>
                  Send Email
                </a>
                <button className="btn btn-outline" style={{ fontSize: '0.875rem' }}>
                  Get Directions
                </button>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;