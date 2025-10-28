import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Card from '../components/common/Card';
import Modal from '../components/common/Modal';
import { translations } from '../data/translations';
import { services } from '../data/mockData';
import './Services.css';

const Services = ({ language, accessibilitySettings }) => {
  const t = translations[language];
  const [activeTab, setActiveTab] = useState('event-based');
  const [selectedService, setSelectedService] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const tabs = [
    { id: 'event-based', label: t.eventBasedServices },
    { id: 'educational', label: t.educationalServices },
    { id: 'external', label: t.externalServices }
  ];

  const filteredServices = services.filter(service => service.category === activeTab);

  const handleServiceClick = (service) => {
    setSelectedService(service);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedService(null);
  };

  return (
    <div className={`services-page ${accessibilitySettings.highContrast ? 'high-contrast' : ''}`}>
      <section className="services-header">
        <div className="container">
          <div className="header-content">
            <h1 className="page-title">{t.servicesTitle}</h1>
            <p className="page-description">
              Discover our comprehensive range of community services designed to support and enrich the lives of our community members.
            </p>
          </div>
        </div>
      </section>

      <section className="services-content">
        <div className="container">
          <div className="service-tabs">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                className={`tab-button ${activeTab === tab.id ? 'active' : ''}`}
                onClick={() => setActiveTab(tab.id)}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div className="services-grid">
            {filteredServices.map((service) => (
              <Card 
                key={service.id}
                hover={true}
                accessibilitySettings={accessibilitySettings}
                className="service-card"
                onClick={() => handleServiceClick(service)}
              >
                <div className="service-image">
                  <img 
                    src={service.image} 
                    alt={service.name}
                    className="service-img"
                  />
                </div>
                <div className="service-info">
                  <h3 className="service-name">{service.name}</h3>
                  <p className="service-description">{service.description}</p>
                  <div className="service-details">
                    <div className="service-detail">
                      <span className="detail-label">{t.price}:</span>
                      <span className="detail-value">{service.price}</span>
                    </div>
                    <div className="service-detail">
                      <span className="detail-label">{t.duration}:</span>
                      <span className="detail-value">{service.duration}</span>
                    </div>
                  </div>
                  <div className="service-actions">
                    <button className="btn btn-primary service-btn">
                      {t.serviceDetails}
                    </button>
                    <Link 
                      to={`/booking?service=${service.id}`}
                      className="btn btn-outline service-btn"
                    >
                      {t.bookNow}
                    </Link>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {filteredServices.length === 0 && (
            <div className="empty-state">
              <div className="empty-icon">📋</div>
              <h3>No services found</h3>
              <p>There are no services available in this category at the moment.</p>
            </div>
          )}
        </div>
      </section>

      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        title={selectedService?.name}
        size="large"
        accessibilitySettings={accessibilitySettings}
      >
        {selectedService && (
          <div className="service-modal-content">
            <div className="modal-service-image">
              <img 
                src={selectedService.image} 
                alt={selectedService.name}
                className="modal-service-img"
              />
            </div>
            <div className="modal-service-info">
              <p className="modal-service-description">
                {selectedService.description}
              </p>
              
              <div className="modal-service-details">
                <div className="detail-row">
                  <span className="detail-label">{t.price}:</span>
                  <span className="detail-value">{selectedService.price}</span>
                </div>
                <div className="detail-row">
                  <span className="detail-label">{t.duration}:</span>
                  <span className="detail-value">{selectedService.duration}</span>
                </div>
              </div>

              <div className="modal-service-features">
                <h4>{t.features}:</h4>
                <ul className="features-list">
                  {selectedService.features.map((feature, index) => (
                    <li key={index} className="feature-item">
                      <span className="feature-icon">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="modal-service-actions">
                <Link 
                  to={`/booking?service=${selectedService.id}`}
                  className="btn btn-primary"
                  onClick={closeModal}
                >
                  {t.bookNow}
                </Link>
                <button 
                  className="btn btn-outline"
                  onClick={closeModal}
                >
                  {t.cancel}
                </button>
              </div>
            </div>
          </div>
        )}
      </Modal>

      <section className="services-cta">
        <div className="container">
          <div className="cta-content">
            <h2>Need Help Choosing a Service?</h2>
            <p>Our friendly staff is here to help you find the perfect service for your needs.</p>
            <div className="cta-actions">
              <Link to="/contact" className="btn btn-primary">
                {t.contact}
              </Link>
              <a href="tel:(555)123-4567" className="btn btn-outline">
                Call (555) 123-4567
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
