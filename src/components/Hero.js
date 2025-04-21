import React from 'react';
import styles from './Hero.module.css';
import heroImage from '../assets/images/f64e8d485894f9df206830063adbc400d85de711.jpg';

function Hero() {
  return (
    <div className={styles.hero}>
      <div className={styles.textContent}>
        <h1 className={styles.title}>Little Lemon</h1>
        <h2 className={styles.location}>Chicago</h2>
        <p className={styles.description}>
          We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.
        </p>
        <button className={styles.reserveButton}>Reserve a table</button>
      </div>
      <div className={styles.heroImage}>
         <img
        src={heroImage}
        alt="Chef with appetizers"
        className={styles.heroImage}
      />
      </div>
    </div>
  );
}

export default Hero;