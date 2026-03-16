import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import WhyChooseUs from './components/WhyChooseUs';
import Partners from './components/Partners';
import Footer from './components/Footer';
import ServiceDetails from './components/ServiceDetails';
import AboutUs from './components/AboutUs';
import ContactPopup from './components/ContactPopup';
import './App.css';

function App() {
  const [activePage, setActivePage] = useState('home');
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [contactMessage, setContactMessage] = useState('');
  const [selectedServiceId, setSelectedServiceId] = useState(null);

  const openContactForm = (initialMsg = '') => {
    setContactMessage(initialMsg);
    setIsContactOpen(true);
  };

  const openServiceDetails = (serviceId = null) => {
    setSelectedServiceId(serviceId);
    setActivePage('services');
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  return (
    <div className="app-container">
      <div className="hero-section-wrapper">
        <Header 
          activePage={activePage} 
          setActivePage={setActivePage} 
          openContactForm={openContactForm}
        />
        {activePage !== 'about' && (
          <Hero 
            activePage={activePage} 
            openContactForm={openContactForm}
          />
        )}
      </div>
      <main>
        
        {activePage === 'home' && (
          <>
            <Partners />
            <Services openServiceDetails={openServiceDetails} />
            <WhyChooseUs openServiceDetails={openServiceDetails} />
          </>
        )}
        
        {activePage === 'services' && <ServiceDetails selectedServiceId={selectedServiceId} />}
        
        {activePage === 'about' && <AboutUs />}
      </main>
      <Footer setActivePage={setActivePage} openServiceDetails={openServiceDetails} />
      <ContactPopup 
        isOpen={isContactOpen} 
        onClose={() => setIsContactOpen(false)} 
        initialMessage={contactMessage} 
      />
    </div>
  );
}

export default App;
