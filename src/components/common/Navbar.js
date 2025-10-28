import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { translations } from '../../data/translations';
import './Navbar.css';

const Navbar = ({ language, setLanguage, accessibilitySettings, setAccessibilitySettings }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAccessibilityOpen, setIsAccessibilityOpen] = useState(false);
  const location = useLocation();
  const t = translations[language];

  const navItems = [
    { path: '/', label: t.home },
    { path: '/services', label: t.services },
    { path: '/events', label: t.events },
    { path: '/donations', label: t.donations },
    { path: '/volunteer', label: t.volunteer },
    { path: '/about', label: t.about },
    { path: '/contact', label: t.contact },
    { path: '/admin', label: t.admin }
  ];

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'es' : 'en');
  };

  const toggleAccessibility = (setting) => {
    setAccessibilitySettings(prev => ({
      ...prev,
      [setting]: !prev[setting]
    }));
  };

  return (
    <nav className={`navbar ${accessibilitySettings.highContrast ? 'high-contrast' : ''}`}>
      <div className="navbar-container">
        <Link to="/" className="navbar-brand">
          <div className="brand-logo">
            <span className="brand-text">Best Community Services</span>
          </div>
        </Link>

        <div className="navbar-menu desktop-menu">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`nav-link ${location.pathname === item.path ? 'active' : ''}`}
            >
              {item.label}
            </Link>
          ))}
        </div>

        <div className="navbar-utilities">
          <button
            className="utility-btn language-toggle"
            onClick={toggleLanguage}
            aria-label={`Switch to ${language === 'en' ? 'Spanish' : 'English'}`}
          >
            {language === 'en' ? 'ES' : 'EN'}
          </button>

          <div className="accessibility-menu">
            <button
              className="utility-btn accessibility-toggle"
              onClick={() => setIsAccessibilityOpen(!isAccessibilityOpen)}
              aria-label="Accessibility Options"
            >
              ♿
            </button>
            
            {isAccessibilityOpen && (
              <div className="accessibility-dropdown">
                <h4>{t.accessibilityOptions}</h4>
                <label className="accessibility-option">
                  <input
                    type="checkbox"
                    checked={accessibilitySettings.highContrast}
                    onChange={() => toggleAccessibility('highContrast')}
                  />
                  {t.highContrast}
                </label>
                <label className="accessibility-option">
                  <input
                    type="checkbox"
                    checked={accessibilitySettings.largeFonts}
                    onChange={() => toggleAccessibility('largeFonts')}
                  />
                  {t.largeFonts}
                </label>
              </div>
            )}
          </div>

          <button
            className="mobile-menu-toggle"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            <span className={`hamburger ${isMenuOpen ? 'open' : ''}`}>
              <span></span>
              <span></span>
              <span></span>
            </span>
          </button>
        </div>
      </div>

      <div className={`mobile-menu ${isMenuOpen ? 'open' : ''}`}>
        {navItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={`mobile-nav-link ${location.pathname === item.path ? 'active' : ''}`}
            onClick={() => setIsMenuOpen(false)}
          >
            {item.label}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;