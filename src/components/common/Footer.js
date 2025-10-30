import React from 'react';
import { translations } from '../../data/translations';
import './Footer.css';

const Footer = ({ language, accessibilitySettings }) => {
  const t = translations[language];

  const quickLinks = [
    { path: '/', label: t.home },
    { path: '/services', label: t.services },
    { path: '/events', label: t.events },
    { path: '/volunteer', label: t.volunteer },
    { path: '/donations', label: t.donations },
    { path: '/contact', label: t.contact }
  ];

  return (
    <footer className={`footer ${accessibilitySettings.highContrast ? 'high-contrast' : ''}`}>
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <h3 className="footer-title">{t.footerAbout}</h3>
            <p className="footer-description">
              {t.footerDescription}
            </p>
          </div>

          <div className="footer-section">
            <h3 className="footer-title">{t.contactInfo}</h3>
            <div className="contact-info">
              <div className="contact-item">
                <div>
                  <p>123 Main Street</p>
                  <p>Ames, IA 50010</p>
                </div>
              </div>
              <div className="contact-item">
                <div>
                  <p>(515) 555-1234</p>
                  <p>Mon-Fri: 8AM-6PM</p>
                </div>
              </div>
              <div className="contact-item">
                <div>
                  <p>info@bestcommunity.org</p>
                  <p>support@bestcommunity.org</p>
                </div>
              </div>
            </div>
          </div>

          <div className="footer-section">
            <h3 className="footer-title">Service Hours</h3>
            <div className="hours-info">
              <div className="hours-item">
                <span className="day">Monday - Friday</span>
                <span className="time">8:00 AM - 6:00 PM</span>
              </div>
              <div className="hours-item">
                <span className="day">Saturday</span>
                <span className="time">9:00 AM - 4:00 PM</span>
              </div>
              <div className="hours-item">
                <span className="day">Sunday</span>
                <span className="time">Closed</span>
              </div>
              <div className="hours-item emergency">
                <span className="day">Emergency Services</span>
                <span className="time">24/7 Available</span>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <div className="copyright">
              <p>&copy; 2025 Best Community Services. All rights reserved.</p>
            </div>
            <div className="legal-links">
              <a href="#" className="legal-link">{t.privacyPolicy}</a>
              <span className="separator">|</span>
              <a href="#" className="legal-link">{t.accessibilityStatement}</a>
              <span className="separator">|</span>
              <a href="#" className="legal-link">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;