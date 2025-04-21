import React from 'react';
import styles from '../components/Hero.module.css';

function OrderOnline() {
  return (
  <main data-aos="fade-up">
    <div className={styles.hero}>
      <div className={styles.textContent}>
        <h1 className={styles.title} data-aos="fade-down">Order Online</h1>
        <p className={styles.description} data-aos="fade-up">
          Order your favorite Mediterranean dishes from Little Lemon! 
          Online ordering is coming soon. For now, please call us at (123) 456-7890 to place an order.
        </p>
      </div>
    </div>
  </main>
  );
}

export default OrderOnline;