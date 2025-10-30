import React from 'react';
import Card from '../components/common/Card';
import { translations } from '../data/translations';
import { events } from '../data/mockData';
import './Events.css';

import healthFairImg from '../assets/images/events/fair.webp';
import foodDriveImg from '../assets/images/events/food-drive.webp';
import seniorDanceImg from '../assets/images/events/senior-dance.webp';
import artExhibitImg from '../assets/images/events/youth-art.webp';
import workshopImg from '../assets/images/events/workshop.webp';


const imageByCategory = (category = '') => {
  const c = category.toLowerCase();
  if (c.includes('health')) return healthFairImg;
  if (c.includes('charity')) return foodDriveImg;
  if (c.includes('social')) return seniorDanceImg;
  if (c.includes('arts')) return artExhibitImg;
  if (c.includes('education')) return workshopImg;
  return workshopImg;
};

const Events = ({ language, accessibilitySettings }) => {
  const t = translations[language];

  return (
    <div className={`events-page ${accessibilitySettings.highContrast ? 'high-contrast' : ''}`}>
      <div className="container">
        <header className="events-hero">
          <h1 className="events-title">{t.events}</h1>
          <p className="events-subtitle">Join our upcoming community events and activities</p>
        </header>

        <div className="events-grid">
          {events.map((event) => {
            const imgSrc = event.image || imageByCategory(event.category || event.title);
            const dateLabel = [event.date, event.time].filter(Boolean).join(' · ');
            return (
              <Card
                key={event.id}
                hover={true}
                accessibilitySettings={accessibilitySettings}
                className="event-card"
              >
                <div className="event-media">
                  <img
                    src={imgSrc}
                    alt={event.title}
                    className="event-img"
                    loading="lazy"
                    width={1200}
                    height={800}
                  />
                  {dateLabel && <span className="event-date-badge">{dateLabel}</span>}
                </div>

                <div className="event-body">
                  <h3 className="event-title">{event.title}</h3>

                  <div className="event-meta">
                    {event.date && <span>{event.date}</span>}
                    {event.time && <span>{event.time}</span>}
                  </div>

                  {event.location && <div className="event-location">{event.location}</div>}

                  {event.description && <p>{event.description}</p>}

                  <div className="event-footer">
                    <span className="event-chip">{event.category || 'Community'}</span>
                    <button className="btn btn-primary" style={{ fontSize: '.875rem' }}>
                      Learn More
                    </button>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Events;
