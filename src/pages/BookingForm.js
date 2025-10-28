import React, { useState, useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import Card from '../components/common/Card';
import { translations } from '../data/translations';
import { services } from '../data/mockData';
import './BookingForm.css';

const BookingForm = ({ language, accessibilitySettings }) => {
  const t = translations[language];
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const serviceId = searchParams.get('service');

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    serviceId: serviceId || '',
    preferredDate: '',
    preferredTime: '',
    specialRequests: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const selectedService = services.find(s => s.id === parseInt(formData.serviceId));

  useEffect(() => {
    if (serviceId) {
      setFormData(prev => ({ ...prev, serviceId }));
    }
  }, [serviceId]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    }

    if (!formData.serviceId) {
      newErrors.serviceId = 'Please select a service';
    }

    if (!formData.preferredDate) {
      newErrors.preferredDate = 'Please select a preferred date';
    }

    if (!formData.preferredTime) {
      newErrors.preferredTime = 'Please select a preferred time';
    }

    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const newErrors = validateForm();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsSubmitting(true);
    
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      navigate('/booking-confirmation', { 
        state: { 
          bookingData: formData,
          service: selectedService 
        }
      });
    } catch (error) {
      console.error('Booking failed:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const timeSlots = [
    '9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM',
    '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM'
  ];

  return (
    <div className={`booking-page ${accessibilitySettings.highContrast ? 'high-contrast' : ''}`}>
      <div className="container">
        <div className="booking-header">
          <h1 className="page-title">{t.bookingTitle}</h1>
          <p className="page-description">
            Fill out the form below to book your service. We'll confirm your appointment within 24 hours.
          </p>
        </div>

        <div className="booking-content">
          <div className="booking-form-section">
            <Card accessibilitySettings={accessibilitySettings} className="booking-form-card">
              <form onSubmit={handleSubmit} className="booking-form">
                <h2 className="form-title">{t.bookingForm}</h2>

                <div className="form-section">
                  <h3 className="section-title">Personal Information</h3>
                  
                  <div className="form-group">
                    <label htmlFor="fullName" className="form-label">
                      {t.fullName} *
                    </label>
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      className={`form-input ${errors.fullName ? 'error' : ''}`}
                      placeholder="Enter your full name"
                    />
                    {errors.fullName && (
                      <span className="error-message">{errors.fullName}</span>
                    )}
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="email" className="form-label">
                        {t.email} *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className={`form-input ${errors.email ? 'error' : ''}`}
                        placeholder="your.email@example.com"
                      />
                      {errors.email && (
                        <span className="error-message">{errors.email}</span>
                      )}
                    </div>

                    <div className="form-group">
                      <label htmlFor="phone" className="form-label">
                        {t.phone} *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className={`form-input ${errors.phone ? 'error' : ''}`}
                        placeholder="(555) 123-4567"
                      />
                      {errors.phone && (
                        <span className="error-message">{errors.phone}</span>
                      )}
                    </div>
                  </div>
                </div>

                <div className="form-section">
                  <h3 className="section-title">Service Details</h3>
                  
                  <div className="form-group">
                    <label htmlFor="serviceId" className="form-label">
                      {t.serviceSelection} *
                    </label>
                    <select
                      id="serviceId"
                      name="serviceId"
                      value={formData.serviceId}
                      onChange={handleInputChange}
                      className={`form-select ${errors.serviceId ? 'error' : ''}`}
                    >
                      <option value="">Select a service</option>
                      {services.map((service) => (
                        <option key={service.id} value={service.id}>
                          {service.name} - {service.price}
                        </option>
                      ))}
                    </select>
                    {errors.serviceId && (
                      <span className="error-message">{errors.serviceId}</span>
                    )}
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="preferredDate" className="form-label">
                        {t.preferredDate} *
                      </label>
                      <input
                        type="date"
                        id="preferredDate"
                        name="preferredDate"
                        value={formData.preferredDate}
                        onChange={handleInputChange}
                        className={`form-input ${errors.preferredDate ? 'error' : ''}`}
                        min={new Date().toISOString().split('T')[0]}
                      />
                      {errors.preferredDate && (
                        <span className="error-message">{errors.preferredDate}</span>
                      )}
                    </div>

                    <div className="form-group">
                      <label htmlFor="preferredTime" className="form-label">
                        {t.preferredTime} *
                      </label>
                      <select
                        id="preferredTime"
                        name="preferredTime"
                        value={formData.preferredTime}
                        onChange={handleInputChange}
                        className={`form-select ${errors.preferredTime ? 'error' : ''}`}
                      >
                        <option value="">Select a time</option>
                        {timeSlots.map((time) => (
                          <option key={time} value={time}>
                            {time}
                          </option>
                        ))}
                      </select>
                      {errors.preferredTime && (
                        <span className="error-message">{errors.preferredTime}</span>
                      )}
                    </div>
                  </div>
                </div>

                <div className="form-section">
                  <div className="form-group">
                    <label htmlFor="specialRequests" className="form-label">
                      {t.specialRequests}
                    </label>
                    <textarea
                      id="specialRequests"
                      name="specialRequests"
                      value={formData.specialRequests}
                      onChange={handleInputChange}
                      className="form-textarea"
                      placeholder="Any special requests or additional information..."
                      rows="4"
                    />
                  </div>
                </div>

                <div className="form-actions">
                  <button
                    type="button"
                    onClick={() => navigate(-1)}
                    className="btn btn-outline"
                    disabled={isSubmitting}
                  >
                    {t.cancel}
                  </button>
                  <button
                    type="submit"
                    className="btn btn-primary"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <span className="loading-text">
                        <span className="loading-spinner"></span>
                        Submitting...
                      </span>
                    ) : (
                      t.submit
                    )}
                  </button>
                </div>
              </form>
            </Card>
          </div>

          {selectedService && (
            <div className="booking-summary-section">
              <Card accessibilitySettings={accessibilitySettings} className="booking-summary-card">
                <h3 className="summary-title">Booking Summary</h3>
                <div className="summary-service">
                  <img 
                    src={selectedService.image} 
                    alt={selectedService.name}
                    className="summary-image"
                  />
                  <div className="summary-info">
                    <h4 className="summary-service-name">{selectedService.name}</h4>
                    <p className="summary-service-price">{selectedService.price}</p>
                    <p className="summary-service-duration">{selectedService.duration}</p>
                  </div>
                </div>
                
                {formData.preferredDate && formData.preferredTime && (
                  <div className="summary-details">
                    <div className="summary-detail">
                      <span className="detail-label">Date:</span>
                      <span className="detail-value">
                        {new Date(formData.preferredDate).toLocaleDateString()}
                      </span>
                    </div>
                    <div className="summary-detail">
                      <span className="detail-label">Time:</span>
                      <span className="detail-value">{formData.preferredTime}</span>
                    </div>
                  </div>
                )}
              </Card>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BookingForm;