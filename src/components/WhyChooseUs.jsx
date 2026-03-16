import React from 'react';
import './WhyChooseUs.css';
import imgPhoto from '../assets/img.png';
import linesImg from '../assets/Lines.png';

const WhyChooseUs = ({ openServiceDetails }) => {
  return (
    <section className="why-choose-us">
      <div className="container-custom">
        <div className="why-header">
          <h2 className="section-title serif-font">Why choose us?</h2>
          <p className="section-subtitle">
            We prevent downtime, reduce risk, and keep critical
            systems running smoothly.
          </p>
        </div>
        
        <div className="why-content">
          <img src={linesImg} alt="Decorative Curve" className="dotted-curve" />
          
          <div className="why-main-layout">
            <div className="feature-column left">
              <div className="feature-item">
                <h3 className="feature-title">Local Experts</h3>
                <p className="feature-text">
                  <span className="feature-highlight">Local Knowledge That Matters</span><br />
                  Completed projects in Delhi, Bihar, MP, Uttarakhand among others through local knowledge
                </p>
              </div>
              
              <div className="feature-item">
                <h3 className="feature-title">Personalized Service</h3>
                <p className="feature-text">
                  <span className="feature-highlight">Tailored To Your Needs</span><br />
                  We provide customized solutions to meet your unique HVAC requirements
                </p>
              </div>
            </div>
            
            <div className="center-visual">
              <div className="visual-container">
                <img src={imgPhoto} alt="Team" className="main-team-image" />
              </div>
            </div>
            
            <div className="feature-column right">
              <div className="feature-item">
                <h3 className="feature-title">Proven Success</h3>
                <p className="feature-text">
                  <span className="feature-highlight">Your Success Is Our Priority</span><br />
                  Successful completion of 500+ projects from 25 years of experience
                </p>
              </div>
              
              <div className="feature-item">
                <h3 className="feature-title">Industry Recognition</h3>
                <p className="feature-text">
                  <span className="feature-highlight">Trusted By Many</span><br />
                  We are proud members of ISHRAE and have received accolades for our outstanding service
                </p>
              </div>
            </div>
          </div>
          
          {/* Explore Button Section with Connectors */}
          <div className="explore-section">
            <div className="line-wrapper line-left">
              <div className="connector-line"></div>
            </div>
            
            <div className="explore-btn-container">
              <div className="explore-circle" onClick={() => openServiceDetails()}>
                <span className="explore-text">Explore</span>
                <span className="explore-arrow">→</span>
              </div>
            </div>
            
            <div className="line-wrapper line-right">
              <div className="connector-line"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
