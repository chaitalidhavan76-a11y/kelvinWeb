import React from 'react';
import './AboutUs.css';
import card1 from '../assets/card1 (1).jpg'; // Technician on coil
import card2 from '../assets/card1 (2).jpg'; // Outdoor units
import card3 from '../assets/card1 (3).jpg'; // Technician on ladder
import card4 from '../assets/card4.png'; // Rating card image
import img1 from '../assets/img1.png'; // Mission image
import img2 from '../assets/img2.png'; // Legacy image
import lineImg from '../assets/Line.png'; // Bottom curved line

const AboutUs = () => {
  return (
    <>
      <section className="about-us">
        <div className="container-custom about-container">
          <div className="about-left">
            <div className="about-grid-mockup">
              <div className="grid-main-img">
                <img src={card1} alt="Kelvin Services" className="about-img-large" />
              </div>
              <div className="grid-stack-images">
                <img src={card2} alt="HVAC Systems" className="about-img-small top" />
                <img src={card3} alt="Service Maintenance" className="about-img-small bottom" />
              </div>
              <div className="ratings-card-img-container">
                <img src={card4} alt="Best Ratings" className="ratings-img" />
              </div>
            </div>
          </div>
          
          <div className="about-right">
            <div className="about-text-content">
              <span className="about-tag">A B I T</span>
              <h2 className="about-title serif-font">ABOUT US</h2>
              <p className="about-description">
                From humble beginnings in 2001 to serving more than 500 projects in North and East India, we have come a long way delivering on client expectations and providing world class services to clients in several industries
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="about-extended">
        <div className="container-custom mission-container">
          <div className="mission-left">
            <div className="curved-image-wrapper">
              <img src={img2} alt="Mission and Values" className="curved-frame-img" />
            </div>
          </div>
          <div className="mission-right">
            <div className="extended-content-box">
              <h2 className="extended-section-title">Our Mission And Values</h2>
              
              <div className="mission-sub-block">
                <h4 className="sub-heading">Mission</h4>
                <p className="extended-text">
                  Our mission is simple: to provide the highest level of service, integrity, and expertise in the HVAC market. We are committed to putting our clients first and ensuring that their HVAC experience is smooth, successful, and enjoyable. Our core values of transparency, honesty, and customer-centricity drive everything we do.
                </p>
              </div>

              <div className="mission-sub-block">
                <h4 className="sub-heading">Values</h4>
                <p className="extended-text">
                  Our core values lies in providing top notch quality with utmost honesty. We believe in establishing long-term client relationships by striving for excellence that doesn't fade with time. We believe in honesty and openness so that our relationships with clients, business partners, employees and communities are based on trust and transparency
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="container-custom legacy-container">
          <div className="legacy-left">
            <div className="extended-content-box">
              <h2 className="extended-section-title">A Legacy Of Excellence</h2>
              <p className="extended-text">
                Founded in 2001 by Mr. Ajit Agrawal, Kelvin Engineers has a rich history of serving over 500 establishments. Over the years, we have faced countless challenges enabling us to develop superior capabilities fueling our hunger for excellence and driving customer satisfaction. Our commitment to excellence for straight 25 years has earned us numerous awards and recognitions in the HVAC industry.
              </p>
            </div>
          </div>
          <div className="legacy-right">
            <div className="curved-image-wrapper">
              <img src={img1} alt="Legacy of Excellence" className="curved-frame-img" />
            </div>
          </div>
        </div>

        <div className="curved-decoration-bottom">
          <img src={lineImg} alt="decoration" className="bottom-line-asset" />
        </div>
      </section>
    </>
  );
};

export default AboutUs;
