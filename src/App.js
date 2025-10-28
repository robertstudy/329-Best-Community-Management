import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/common/Navbar';
import Footer from './components/common/Footer';

import Home from './pages/Home';
import Services from './pages/Services';
import Events from './pages/Events';
import Donations from './pages/Donations';
import Volunteer from './pages/Volunteer';
import About from './pages/About';
import Contact from './pages/Contact';
import AdminDashboard from './pages/admin/AdminDashboard';
import BookingForm from './pages/BookingForm';
import BookingConfirmation from './pages/BookingConfirmation';
import PaymentForm from './pages/PaymentForm';

import './App.css';

function App() {
  const [language, setLanguage] = useState('en');
  const [accessibilitySettings, setAccessibilitySettings] = useState({
    highContrast: false,
    largeFonts: false
  });

  useEffect(() => {
    const root = document.documentElement;
    
    if (accessibilitySettings.highContrast) {
      root.classList.add('high-contrast');
    } else {
      root.classList.remove('high-contrast');
    }
    
    if (accessibilitySettings.largeFonts) {
      root.classList.add('large-fonts');
    } else {
      root.classList.remove('large-fonts');
    }
  }, [accessibilitySettings]);

  const appClasses = [
    'App',
    accessibilitySettings.highContrast ? 'high-contrast' : '',
    accessibilitySettings.largeFonts ? 'large-fonts' : ''
  ].filter(Boolean).join(' ');

  return (
    <Router>
      <div className={appClasses}>
        <Navbar 
          language={language}
          setLanguage={setLanguage}
          accessibilitySettings={accessibilitySettings}
          setAccessibilitySettings={setAccessibilitySettings}
        />
        
        <main className="main-content">
          <Routes>
            <Route path="/" element={
              <Home 
                language={language} 
                accessibilitySettings={accessibilitySettings} 
              />
            } />
            <Route path="/services" element={
              <Services 
                language={language} 
                accessibilitySettings={accessibilitySettings} 
              />
            } />
            <Route path="/events" element={
              <Events 
                language={language} 
                accessibilitySettings={accessibilitySettings} 
              />
            } />
            <Route path="/donations" element={
              <Donations 
                language={language} 
                accessibilitySettings={accessibilitySettings} 
              />
            } />
            <Route path="/volunteer" element={
              <Volunteer 
                language={language} 
                accessibilitySettings={accessibilitySettings} 
              />
            } />
            <Route path="/about" element={
              <About 
                language={language} 
                accessibilitySettings={accessibilitySettings} 
              />
            } />
            <Route path="/contact" element={
              <Contact 
                language={language} 
                accessibilitySettings={accessibilitySettings} 
              />
            } />
            <Route path="/admin" element={
              <AdminDashboard 
                language={language} 
                accessibilitySettings={accessibilitySettings} 
              />
            } />
            <Route path="/booking" element={
              <BookingForm 
                language={language} 
                accessibilitySettings={accessibilitySettings} 
              />
            } />
            <Route path="/booking-confirmation" element={
              <BookingConfirmation 
                language={language} 
                accessibilitySettings={accessibilitySettings} 
              />
            } />
            <Route path="/payment" element={
              <PaymentForm 
                language={language} 
                accessibilitySettings={accessibilitySettings} 
              />
            } />
          </Routes>
        </main>
        
        <Footer 
          language={language}
          accessibilitySettings={accessibilitySettings}
        />
      </div>
    </Router>
  );
}

export default App;
