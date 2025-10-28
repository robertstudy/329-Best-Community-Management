import React from 'react';
import './Card.css';

const Card = ({ 
  children, 
  className = '', 
  onClick, 
  hover = false, 
  accessibilitySettings = {} 
}) => {
  const cardClasses = [
    'card',
    hover ? 'card-hover' : '',
    accessibilitySettings.highContrast ? 'high-contrast' : '',
    className
  ].filter(Boolean).join(' ');

  return (
    <div 
      className={cardClasses}
      onClick={onClick}
      role={onClick ? 'button' : undefined}
      tabIndex={onClick ? 0 : undefined}
      onKeyDown={onClick ? (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onClick();
        }
      } : undefined}
    >
      {children}
    </div>
  );
};

export default Card;
