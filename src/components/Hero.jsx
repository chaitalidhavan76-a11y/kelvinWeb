import React, { useState, useEffect } from 'react';
import './Hero.css';
import principalPhoto from '../assets/photo.png';

const Hero = ({ activePage, openContactForm }) => {
  const [searchQuery, setSearchQuery] = useState('');
  
  useEffect(() => {
    setSearchQuery('');
  }, [activePage]);

  const handleConnectClick = () => {
    openContactForm(searchQuery);
  };

  return (
    <>
      <section className={`hero ${activePage === 'services' ? 'services-view' : ''}`}>
        <div className="container-custom hero-content">
          <div className="hero-text-content">
            <h1 className="hero-title">
              <span className="title-top">Uncompromising</span><br />
              <span className="title-bottom">Climate Control.</span>
            </h1>
            <p className="hero-subtitle">
              Advanced diagnostics, white-glove installation,<br />
              and data-driven maintenance. We treat your HVAC<br />
              system as a precision instrument.
            </p>
            
            <div className={`search-container ${activePage === 'services' ? 'services-search-desktop' : ''}`}>
              <div className="search-box">
                <input 
                  type="text" 
                  placeholder="How can we help you?" 
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <button className="btn-connect" onClick={handleConnectClick}>
                  Lets connect <span className="arrow">→</span>
                </button>
              </div>
            </div>

            {activePage === 'services' && (
              <div className="hero-features services-features">
                <div className="feature-col">
                  <h3 className="feature-title">Installation</h3>
                  <p className="feature-desc">
                    Installation is a major part of the system it includes best quality , cost effective & safe effective manner
                  </p>
                </div>
                <div className="feature-col">
                  <h3 className="feature-title">Repair</h3>
                  <p className="feature-desc">
                    Consistent, cost-effective & efficient repair of working premises in order to enhance overall production level
                  </p>
                </div>
                <div className="feature-col">
                  <h3 className="feature-title">Maintenance</h3>
                  <p className="feature-desc">
                    Maintenance expertise to deliver smooth interrupted operations , reduce operation costs & prevent unexpected downtime
                  </p>
                </div>
              </div>
            )}
          </div>
          <div className="hero-image-content">
            <img src={principalPhoto} alt="Principal" className="hero-principal-img" />
          </div>
        </div>
      </section>

      {activePage === 'services' && (
        <div className="services-mobile-search-standalone">
          <div className="container-custom">
            <div className="search-container">
              <div className="search-box">
                <input 
                  type="text" 
                  placeholder="How can we help you?" 
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <button className="btn-connect" onClick={handleConnectClick}>
                  Lets connect <span className="arrow">→</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Hero;
