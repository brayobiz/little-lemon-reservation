import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import styles from './ContactDetails.module.css';

function ContactDetails() {
  const location = useLocation();
  const navigate = useNavigate();
  const [contactData, setContactData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    specialRequests: '',
  });
  const [showMessage, setShowMessage] = useState(false);

  const reservationData = location.state || {};
  const { seating = 'Indoor', date = 'Select Date', time = '6:00 pm', partySize = '10 Diners', occasion = 'Birthday' } = reservationData;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setContactData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Reservation Data:', { ...reservationData, ...contactData });
    setShowMessage(true);
    setTimeout(() => {
      setShowMessage(false);
      navigate('/');
    }, 5000);
  };

  return (
    <div className={styles.contactDetailsContainer} data-aos="fade-up">
      {showMessage && (
        <div className={styles.successMessageOverlay}>
          <div className={styles.successMessage} data-aos="fade-in">
            Your Reservation has been confirmed check your email
          </div>
        </div>
      )}
      <form onSubmit={handleSubmit} className={styles.form} data-aos="fade-up">
        <div className={styles.formRow}>
          <div className={styles.formGroup}>
            <label htmlFor="firstName">
              First Name <span className={styles.required}>*</span>
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={contactData.firstName}
              onChange={handleChange}
              placeholder="First name"
              required
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="lastName">
              Last Name <span className={styles.required}>*</span>
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={contactData.lastName}
              onChange={handleChange}
              placeholder="Last name"
              required
            />
          </div>
        </div>
        <div className={styles.formRow}>
          <div className={styles.formGroup}>
            <label htmlFor="email">
              Email <span className={styles.required}>*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={contactData.email}
              onChange={handleChange}
              placeholder="you@company.com"
              required
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="phone">
              Phone Number <span className={styles.required}>*</span>
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={contactData.phone}
              onChange={handleChange}
              placeholder="Kenya"
              required
            />
          </div>
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="specialRequests">Special Requests</label>
          <textarea
            id="specialRequests"
            name="specialRequests"
            value={contactData.specialRequests}
            onChange={handleChange}
            placeholder="Write your requests here"
            rows="3"
          />
        </div>
        <div className={styles.reservationSummary}>
          <div className={styles.summaryItem}>
            <span className={styles.icon}>📅</span> {date}
          </div>
          <div className={styles.summaryItem}>
            <span className={styles.icon}>⏰</span> {time}
          </div>
          <div className={styles.summaryItem}>
            <span className={styles.icon}>👥</span> {partySize}
          </div>
          <div className={styles.summaryItem}>
            <span className={styles.icon}>🥂</span> {occasion}
          </div>
          <div className={styles.summaryItem}>
            <span className={styles.icon}>🏠</span> {seating} seating
          </div>
        </div>
        <div className={styles.privacyPolicy}>
          <input type="checkbox" id="privacyPolicy" required />
          <label htmlFor="privacyPolicy">
            You agree to our friendly <a href="/privacy-policy">privacy policy</a>.
          </label>
        </div>
        <button type="submit" className={styles.submitButton}>
          Confirm Reservation
        </button>
      </form>
    </div>
  );
}

export default ContactDetails;