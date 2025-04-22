import React from 'react';
import styles from './Footer.module.css';
import { Link } from 'react-router-dom'; // Import Link for navigation



  
function Footer() {
    // Function to scroll to the top of the page smoothly
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
  
  return (
    <footer className={styles.footer} data-aos="fade-up">
      <div data-aos="fade-right">
        <h3>Visit Us</h3>
        <p>00100 Moi Avenue Street, Nairobi, Kenya</p>
        <p>Phone: +254112774925</p>
        <p>Email: <a href="mailto:vexorprime159@gmail.com">vexorprime159@gmail.com</a></p>
      </div>
      <div data-aos="fade-left">
        <h3>Quick Links</h3>
        <p><Link to="/"><a href="/" onClick={(e) => { e.preventDefault(); scrollToTop(); }}>
                Home
              </a></Link></p>
        <p><Link to="/menu">Menu</Link></p>
        <p><Link to="/reservations">Reservations</Link></p>
        <p><Link to="/contact-us">Contact Us</Link></p>
        <p><Link to="/login">Login</Link></p>
        <p><Link to="/register">Register</Link></p>
      </div>
      <p className={styles.copyright} data-aos="fade-up">
        © 2025 Vexor Properties. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;