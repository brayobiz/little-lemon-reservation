import React from 'react';
import styles from '../components/Hero.module.css';

function Reservations() {
  return (
  <main data-aos="fade-up">
    <div className={styles.hero}>
      <div className={styles.textContent}>
        <h1 className={styles.title} data-aos="fade-left">Reservations</h1>
        <p className={styles.description} data-aos="fade-up">
          Book a table at Little Lemon! Please contact us at (123) 456-7890 or email us at reservations@littlelemon.com.
          {/* Add a reservation form here later */}
        </p>
      </div>
    </div>
  </main>
  );
}

export default Reservations;