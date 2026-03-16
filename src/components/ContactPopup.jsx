import React, { useState, useEffect } from 'react';
import './ContactPopup.css';

const ContactPopup = ({ isOpen, onClose, initialMessage }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    contactNo: '',
    message: ''
  });

  useEffect(() => {
    if (isOpen) {
      setFormData({
        name: '',
        email: '',
        contactNo: '',
        message: initialMessage || ''
      });
      setSubmitStatus({ loading: false, success: false, error: null });
    }
  }, [isOpen, initialMessage]);

  const [submitStatus, setSubmitStatus] = useState({
    loading: false,
    success: false,
    error: null
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitStatus({ loading: true, success: false, error: null });

    try {
      // Logic for sending email via Node.js backend (server.js)
      const response = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus({ loading: false, success: true, error: null });
        setTimeout(() => onClose(), 2000);
      } else {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to send email');
      }
    } catch (err) {
      setSubmitStatus({ loading: false, success: false, error: err.message });
    }
  };

  if (!isOpen) return null;

  return (
    <div className="contact-popup-overlay" onClick={onClose}>
      <div className="contact-popup-container" onClick={e => e.stopPropagation()}>
        <button className="close-popup-btn" onClick={onClose}>×</button>
        
        <h2 className="contact-popup-title">Contact Us</h2>
        
        <form className="contact-popup-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <input 
              type="text" 
              name="name" 
              placeholder="Enter name" 
              className="popup-input"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          
          <div className="form-group">
            <input 
              type="email" 
              name="email" 
              placeholder="Email ID" 
              className="popup-input"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          
          <div className="form-group">
            <input 
              type="tel" 
              name="contactNo" 
              placeholder="Contact No." 
              className="popup-input"
              value={formData.contactNo}
              onChange={handleChange}
              required
            />
          </div>
          
          <div className="form-group">
            <textarea 
              name="message" 
              placeholder="Type Message" 
              className="popup-textarea"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          
          <div className="popup-submit-wrapper">
            <button 
              type="submit" 
              className={`popup-submit-btn ${submitStatus.loading ? 'loading' : ''}`}
              disabled={submitStatus.loading || submitStatus.success}
            >
              {submitStatus.loading ? 'Sending...' : submitStatus.success ? 'Sent!' : 'Submit'}
            </button>
          </div>
          {submitStatus.success && <p className="submit-success-msg">Message sent successfully!</p>}
          {submitStatus.error && <p className="submit-error-msg">{submitStatus.error}</p>}
        </form>
      </div>
    </div>
  );
};

export default ContactPopup;
