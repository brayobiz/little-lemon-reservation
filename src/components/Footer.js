import React from 'react';
import styles from './Footer.module.css';
import { Link } from 'react-router-dom'; // Import Link for navigation

function Footer() {
  return (
    <footer className={styles.footer} data-aos="fade-up">
      <div data-aos="fade-right">
        <h3>Contact Us</h3>
        <p>123 Lemon Street, Chicago, IL</p>
        <p>Phone: (123) 456-7890</p>
        <p>Email: <a href="mailto:info@littlelemon.com">info@littlelemon.com</a></p>
      </div>
      <div data-aos="fade-left">
        <h3>Quick Links</h3>
        <p><Link to="/">Home</Link></p>
        <p><Link to="/menu">Menu</Link></p>
        <p><Link to="/reservations">Reservations</Link></p>
        <p><Link to="/contact-us">Contact Us</Link></p> {/* New link */}
        <p><Link to="/login">Login</Link></p> {/* New link */}
        <p><Link to="/register">Register</Link></p> {/* New link */}
      </div>
      <p className={styles.copyright} data-aos="fade-up">
        © 2025 Little Lemon. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;