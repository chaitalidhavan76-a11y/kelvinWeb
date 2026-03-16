import React from 'react';
import './Testimonials.css';

const Testimonials = () => {
  const reviews = [
    {
      name: "Rachael, UK",
      text: "Your app brings so much peace and tolerance to our home.",
      context: "on meditation's positive effect on family life",
      highlight: false
    },
    {
      name: "Peter, Belgium",
      text: "I came to learn that the storyline in my head ... was holding me back.",
      context: "on what he learned when sitting with himself",
      highlight: false
    },
    {
      name: "Keri, UK",
      text: "Headspace provides me with ... a connection to myself, and a disconnection from negative thoughts, feelings, and sensations.",
      context: "on finding her happy place",
      highlight: true
    },
    {
      name: "Davide, London",
      text: "Changing my routine has always been difficult, but this has helped me stay consistent.",
      context: "on using meditation for focus",
      highlight: false
    }
  ];

  return (
    <section className="testimonials">
      <div className="container-custom">
        <div className="testimonials-header">
          <h2 className="section-title serif-font">What our clients are saying?</h2>
          <p className="section-subtitle">Don’t believe us? Hear from our clients</p>
        </div>
        
        <div className="testimonials-grid">
          <div className="scroll-track">
            {[...reviews, ...reviews].map((review, index) => (
              <div key={index} className={`testimonial-card ${review.highlight ? 'highlight' : ''}`}>
                <div className="quote-icon">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C20.1216 16 21.017 15.1046 21.017 14V9C21.017 7.89543 20.1216 7 19.017 7H16.017C14.9124 7 14.017 7.89543 14.017 9V14C14.017 14.7431 14.4172 15.3926 15.0116 15.7424C14.3833 16.3989 14.017 17.2023 14.017 18V21H11.017V18C11.017 17.2023 10.6507 16.3989 10.0224 15.7424C10.6168 15.3926 11.017 14.7431 11.017 14V9C11.017 7.89543 10.1216 7 9.017 7H6.017C4.91243 7 4.017 7.89543 4.017 9V14C4.017 15.1046 4.91243 16 6.017 16H9.017C10.1216 16 11.017 16.8954 11.017 18V21H14.017Z" />
                  </svg>
                </div>
                <p className="review-text">{review.text}</p>
                <div className="reviewer-info">
                  <p className="reviewer-name">{review.name}</p>
                  <p className="review-context">{review.context}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
