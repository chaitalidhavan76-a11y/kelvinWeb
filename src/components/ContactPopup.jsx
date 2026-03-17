import React, { useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import './ContactPopup.css';

const ContactPopup = ({ isOpen, onClose, initialMessage }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    contactNo: '',
    message: ''
  });

  // EmailJS Configuration - REPLACE THESE WITH YOUR ACTUAL IDS
  const SERVICE_ID = 'service_s8we57r';
  const TEMPLATE_ID = 'template_ewykrrf'; // Updated with your Template ID
  const PUBLIC_KEY = '6M4-dVbhFQRteO88d';   // Your Public Key

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
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        contact_no: formData.contactNo,
        message: formData.message,
        to_name: 'Kelvin',
      };

      const response = await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        templateParams,
        PUBLIC_KEY
      );

      if (response.status === 200) {
        setSubmitStatus({ loading: false, success: true, error: null });
        setTimeout(() => onClose(), 2000);
      } else {
        throw new Error('Failed to send email');
      }
    } catch (err) {
      console.error('EmailJS Error:', err);
      setSubmitStatus({ 
        loading: false, 
        success: false, 
        error: err.text || err.message || 'Failed to send email' 
      });
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
            <label className="popup-label">Name</label>
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
            <label className="popup-label">Email ID</label>
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
            <label className="popup-label">Contact No.</label>
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
            <label className="popup-label">Message</label>
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
