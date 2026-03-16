import React, { useState } from 'react';
import './Header.css';
import logo from '../assets/logo.png';
import { HiHome } from 'react-icons/hi2';
import { TiDocumentText } from "react-icons/ti";
import { BsInfoCircleFill } from "react-icons/bs";

const Header = ({ activePage, setActivePage, openContactForm }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  
  const handleNavClick = (page, e) => {
    if (e) e.preventDefault();
    setActivePage(page);
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="header">
      <div className="container-custom header-content">
        <div className="logo-container">
          <img src={logo} alt="Kelvin Engineers" className="header-logo-img" />
        </div>
        
        {/* Toggle remains for logic if needed, but CSS will hide it to match mockup */}
        <div className={`mobile-menu-btn ${isMobileMenuOpen ? 'active' : ''}`} onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>

        {/* This button will be shown in the top row on mobile */}
        <button className="btn-premium book-repair mobile-row-btn" onClick={() => openContactForm()}>Contact Us</button>
        
        <nav className={`nav-menu ${isMobileMenuOpen ? 'mobile-open' : ''}`}>
          <a 
            href="#" 
            className={`nav-link home-link ${activePage === 'home' ? 'active' : ''}`}
            onClick={(e) => handleNavClick('home', e)}
          >
            {activePage === 'home' && <span className="icon"><HiHome /></span>} Home
          </a>
          <a 
            href="#" 
            className={`nav-link services-link ${activePage === 'services' ? 'active' : ''}`}
            onClick={(e) => handleNavClick('services', e)}
          >
            {activePage === 'services' && <span className="icon"><TiDocumentText /></span>} Our services
          </a>
          <a 
            href="#" 
            className={`nav-link about-link ${activePage === 'about' ? 'active' : ''}`}
            onClick={(e) => handleNavClick('about', e)}
          >
            {activePage === 'about' && <span className="icon"><BsInfoCircleFill /></span>} About us
          </a>
        </nav>
        
        <button className="btn-premium book-repair desktop-only-btn" onClick={() => openContactForm()}>Contact Us</button>
      </div>
    </header>
  );
};

export default Header;
