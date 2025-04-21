import React from 'react';
import styles from '../components/Hero.module.css'; // Reuse styles for consistency

function About() {
  return (
  <main data-aos="fade-up">
    <div className={styles.hero}> {/* Reuse the hero section style for consistency */}
      <div className={styles.textContent}>
        <h1 className={styles.title} data-aos="fade-down">About Little Lemon</h1>
        <h2 className={styles.location} data-aos="fade-right">Our Story</h2>
        <p className={styles.description} data-aos="fade-left">
          Little Lemon is a family-owned Mediterranean restaurant in Chicago, established in 2010. 
          We are passionate about bringing authentic Mediterranean flavors to our community, 
          with recipes passed down through generations, infused with a modern twist. 
          Our team is dedicated to providing a warm, welcoming dining experience for all our guests.
        </p>
      </div>
    </div>
  </main>
  );
}

export default About;