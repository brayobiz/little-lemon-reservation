import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Reservations.module.css';

function Reservations() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    seating: 'indoor',
    date: '',
    time: '',
    partySize: '',
    occasion: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Pass the form data to the Contact Details page
    navigate('/reservations/contact-details', { state: formData });
  };

  return (
    <div className={styles.reservationsContainer} data-aos="fade-up">
      <h1 data-aos="fade-down">Reservations</h1>
      <form onSubmit={handleSubmit} className={styles.form} data-aos="fade-up">
        <div className={styles.seatingOptions}>
          <label className={styles.radioLabel}>
            <input
              type="radio"
              name="seating"
              value="indoor"
              checked={formData.seating === 'indoor'}
              onChange={handleChange}
            />
            Indoor seating
          </label>
          <label className={styles.radioLabel}>
            <input
              type="radio"
              name="seating"
              value="outdoor"
              checked={formData.seating === 'outdoor'}
              onChange={handleChange}
            />
            Outdoor seating
          </label>
        </div>
        <div className={styles.formRow}>
          <div className={styles.formGroup}>
            <label htmlFor="date">
              <span className={styles.icon}>📅</span> Date
            </label>
            <input
              type="date"
              id="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              required
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="partySize">
              <span className={styles.icon}>👥</span> No. of Diners
            </label>
            <select
              id="partySize"
              name="partySize"
              value={formData.partySize}
              onChange={handleChange}
              required
            >
              <option value="">Select</option>
              {[...Array(10)].map((_, i) => (
                <option key={i + 1} value={i + 1}>
                  {i + 1}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className={styles.formRow}>
          <div className={styles.formGroup}>
            <label htmlFor="occasion">
              <span className={styles.icon}>🥂</span> Occasion
            </label>
            <select
              id="occasion"
              name="occasion"
              value={formData.occasion}
              onChange={handleChange}
            >
              <option value="">Select an occasion</option>
              <option value="birthday">Birthday</option>
              <option value="anniversary">Anniversary</option>
              <option value="date">Date</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="time">
              <span className={styles.icon}>⏰</span> Select time
            </label>
            <select
              id="time"
              name="time"
              value={formData.time}
              onChange={handleChange}
              required
            >
              <option value="">Select a time</option>
              <option value="17:00">5:00 PM</option>
              <option value="18:00">6:00 PM</option>
              <option value="19:00">7:00 PM</option>
              <option value="20:00">8:00 PM</option>
              <option value="21:00">9:00 PM</option>
            </select>
          </div>
        </div>
        <button type="submit" className={styles.submitButton}>
          Reserve a Table
        </button>
      </form>
      <div className={styles.imageGallery} data-aos="fade-up">
        <img src="/assets/images/images.jpeg" alt="Restaurant interior" />
        <img src="/assets/images/hotel.jpeg" alt="Chef preparing food" />
        <img src="/assets/images/download.jpeg" alt="Food presentation" />
      </div>
    </div>
  );
}

export default Reservations;