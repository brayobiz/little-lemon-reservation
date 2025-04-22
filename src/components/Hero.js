import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Hero.module.css';

function Hero() {
  return (
    <div className={styles.hero}>
      <div className={styles.textContent}>
        <h1 className={styles.title}>Delix</h1>
        <h2 className={styles.location}>Nairobi</h2>
        <p className={styles.description}>
          We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.
        </p>
        <Link to="/reservations" data-aos="zoom-in">
          <button className={styles.reserveButton}>Reserve a table</button>
        </Link>
      </div>
      <div className={styles.heroImage}>
        <img
          src="/assets/images/f64e8d485894f9df206830063adbc400d85de711.jpg"
          alt="Delix Mediterranean restaurant chef with appetizers"
          className={styles.heroImage}
        />
      </div>
    </div>
  );
}

export default Hero;