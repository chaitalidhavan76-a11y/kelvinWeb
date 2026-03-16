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

    // Set a timer to show "Server is waking up" message if it takes too long (Render cold start)
    const wakeupTimer = setTimeout(() => {
      setSubmitStatus(prev => ({ ...prev, loading: true, info: 'Server is starting up, this might take 30-60 seconds...' }));
    }, 3000);

    try {
      const response = await fetch('https://kelvinweb-92t8.onrender.com/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      clearTimeout(wakeupTimer);

      if (response.ok) {
        setSubmitStatus({ loading: false, success: true, error: null });
        setTimeout(() => onClose(), 2000);
      } else {
        const errorData = await response.json();
        const detailedError = errorData.details ? `${errorData.error}: ${errorData.details}` : (errorData.error || 'Failed to send email');
        throw new Error(detailedError);
      }
    } catch (err) {
      clearTimeout(wakeupTimer);
      console.error('Frontend Error during email submission:', err);
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
          {submitStatus.info && submitStatus.loading && <p className="submit-info-msg" style={{ color: '#666', fontSize: '0.8rem', textAlign: 'center', marginTop: '10px' }}>{submitStatus.info}</p>}
          {submitStatus.success && <p className="submit-success-msg">Message sent successfully!</p>}
          {submitStatus.error && <p className="submit-error-msg">{submitStatus.error}</p>}
        </form>
      </div>
    </div>
  );
};

export default ContactPopup;
