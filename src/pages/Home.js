import React from 'react';
import { Link } from 'react-router-dom';
import Card from '../components/common/Card';
import { translations } from '../data/translations';
import { testimonials, announcements } from '../data/mockData';
import './Home.css';
import heroSupport from '../assets/images/hero-support.webp';


const Home = ({ language, accessibilitySettings }) => {
  const t = translations[language];

  const quickNavItems = [
    {
      title: t.services,
      description: "Explore our comprehensive community services",
      link: "/services",
      color: "primary"
    },
    {
      title: t.donations,
      description: "Support our mission with a donation",
      link: "/donations",
      color: "secondary"
    },
    {
      title: t.events,
      description: "Join our upcoming community events",
      link: "/events",
      color: "primary"
    },
    {
      title: t.volunteer,
      description: "Volunteer and make a difference",
      link: "/volunteer",
      color: "secondary"
    }
  ];

  return (
    <div className={`home-page ${accessibilitySettings.highContrast ? 'high-contrast' : ''}`}>
      <section className="hero-section">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">{t.heroTitle}</h1>
            <p className="hero-subtitle">{t.heroSubtitle}</p>
            <div className="hero-actions">
              <Link to="/services" className="btn btn-primary">
                {t.services}
              </Link>
              <Link to="/about" className="btn btn-primary">
                {t.learnMore}
              </Link>
            </div>
          </div>
          <div className="hero-image">
           <img
                src={heroSupport}
                alt="Volunteers assisting residents at a community help desk"
                className="hero-img"
              />

          </div>
        </div>
      </section>

      <section className="mission-section">
        <div className="container">
          <div className="mission-content">
            <h2 className="section-title">{t.missionTitle}</h2>
            <p className="mission-text">{t.missionText}</p>
            <div className="mission-stats">
              <div className="stat-item">
                <span className="stat-number">500+</span>
                <span className="stat-label">Families Served</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">50+</span>
                <span className="stat-label">Active Volunteers</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">25+</span>
                <span className="stat-label">Community Programs</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">10+</span>
                <span className="stat-label">Years of Service</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="quick-nav-section">
        <div className="container">
          <h2 className="section-title text-center">{t.quickNavTitle}</h2>
          <div className="quick-nav-grid">
            {quickNavItems.map((item, index) => (
              <Card 
                key={index} 
                hover={true} 
                accessibilitySettings={accessibilitySettings}
                className="quick-nav-card"
              >
                <Link to={item.link} className="quick-nav-link">
                  <div className="quick-nav-icon">{item.icon}</div>
                  <h3 className="quick-nav-title">{item.title}</h3>
                  <p className="quick-nav-description">{item.description}</p>
                  <span className={`quick-nav-arrow btn btn-${item.color}`}>
                    {t.learnMore} →
                  </span>
                </Link>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="testimonials-section">
        <div className="container">
          <h2 className="section-title text-center">{t.testimonialsTitle}</h2>
          <div className="testimonials-grid">
            {testimonials.slice(0, 3).map((testimonial) => (
              <Card 
                key={testimonial.id} 
                accessibilitySettings={accessibilitySettings}
                className="testimonial-card"
              >
                <div className="testimonial-content">
                  <div className="testimonial-rating">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <span key={i} className="star">⭐</span>
                    ))}
                  </div>
                  <blockquote className="testimonial-quote">
                    "{testimonial.comment}"
                  </blockquote>
                  <div className="testimonial-author">
                    <strong>{testimonial.name}</strong>
                    <span className="testimonial-service">{testimonial.service}</span>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="news-section">
        <div className="container">
          <div className="news-header">
            <h2 className="section-title">{t.newsTitle}</h2>
            <Link to="/events" className="btn btn-outline">View All</Link>
          </div>
          <div className="news-grid">
            {announcements.slice(0, 3).map((announcement) => (
              <Card 
                key={announcement.id} 
                hover={true}
                accessibilitySettings={accessibilitySettings}
                className="news-card"
              >
                <div className="news-content">
                  <div className="news-meta">
                    <span className={`news-priority priority-${announcement.priority}`}>
                      {announcement.priority.toUpperCase()}
                    </span>
                    <span className="news-date">
                      {new Date(announcement.date).toLocaleDateString()}
                    </span>
                  </div>
                  <h3 className="news-title">{announcement.title}</h3>
                  <p className="news-excerpt">{announcement.content}</p>
                  <div className="news-category">
                    <span className="category-tag">{announcement.category}</span>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2 className="cta-title">Ready to Get Involved?</h2>
            <p className="cta-description">
              Join our community and help us make a difference in people's lives.
            </p>
            <div className="cta-actions">
              <Link to="/volunteer" className="btn btn-primary">
                {t.volunteer}
              </Link>
              <Link to="/donations" className="btn btn-secondary">
                {t.donations}
              </Link>
              <Link to="/contact" className="btn btn-outline">
                {t.contact}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
