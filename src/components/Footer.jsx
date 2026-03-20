import React from 'react';
import './Footer.css';
import logoImg from '../assets/logo.png';
import { LuArrowUp } from 'react-icons/lu';

const Footer = ({ setActivePage, openServiceDetails }) => {

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavClick = (page, e) => {
    e.preventDefault();

    if (page === 'services') {
      openServiceDetails(null);
    } else {
      setActivePage(page);
    }

    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="container-custom">
        <div className="footer-grid">
          {/* Column 1: Logo & Scroll Arrow */}
          <div className="footer-col col-1">
            <div className="footer-logo-container">
              <img
                src={logoImg}
                alt="Kelvin Engineers"
                className="footer-brand-logo"
                onClick={() => handleNavClick('home', { preventDefault: () => { } })}
              />
            </div>
            <div className="footer-action-container">
              <button className="scroll-up-btn-circular" onClick={scrollToTop} aria-label="Scroll to top">
                <LuArrowUp className="up-icon-small" />
              </button>
            </div>
          </div>

          {/* Column 2: Home Link */}
          <div className="footer-col col-2">
            <nav className="footer-nav-col">
              <a href="#" className="footer-nav-link" onClick={(e) => handleNavClick('home', e)}>Home</a>
            </nav>
            {/* Empty for spacing in row 2 desktop */}
            <div className="footer-info-block desktop-spacer"></div>
          </div>

          {/* Column 3: Services & Contact */}
          <div className="footer-col col-3">
            <nav className="footer-nav-col">
              <a href="#" className="footer-nav-link" onClick={(e) => handleNavClick('services', e)}>Services</a>
            </nav>
            <div className="footer-info-block footer-contact">
              <span className="contact-label-gray">Contact us</span>
              <div className="contact-numbers">
                <p>9810188126, 9718057230</p>
                <p>011-45101800</p>
              </div>
              <div className="contact-emails">
                <p>kelvinengineers@gmail.com</p>
                <p>ajit.agrawal@kelvinengineers.com</p>
                <p>projects@kelvinengineers.com</p>
                <p>info@kelvinengineers.com</p>
              </div>
            </div>
          </div>

          {/* Column 4: About Us & Address */}
          <div className="footer-col col-4">
            <nav className="footer-nav-col">
              <a href="#" className="footer-nav-link" onClick={(e) => handleNavClick('about', e)}>About Us</a>
            </nav>
            <div className="footer-info-block footer-address">
              <p className="address-text-footer">
                Aggarwal tower, H-6/104, Netaji Subhash Place,
                Pitampura,<br /> Delhi 110034
              </p>
            </div>
          </div>
        </div>

        <div className="footer-bottom-copyright">
          <p>© 2023 — Copyright</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;