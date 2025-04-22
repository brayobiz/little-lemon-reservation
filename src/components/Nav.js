import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Nav.module.css';

function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={styles.nav}>
      <div className={styles.navHeader}>
        <div className={`${styles.hamburger} ${isMenuOpen ? styles.hamburgerOpen : ''}`} onClick={toggleMenu}>
          <span className={styles.hamburgerLine}></span>
          <span className={styles.hamburgerLine}></span>
          <span className={styles.hamburgerLine}></span>
        </div>
        <img src="/assets/images/image-1.jpg" alt="Little Lemon Logo" className={styles.logo} />
      </div>
      <ul className={`${styles.navList} ${isMenuOpen ? styles.navListOpen : ''}`}>
        <li>
          <Link to="/" onClick={toggleMenu}>Home</Link>
        </li>
        <li>
          <Link to="/about" onClick={toggleMenu}>About</Link>
        </li>
        <li>
          <Link to="/menu" onClick={toggleMenu}>Menu</Link>
        </li>
        <li>
          <Link to="/reservations" onClick={toggleMenu}>Reservations</Link>
        </li>
        <li>
          <Link to="/order-online" onClick={toggleMenu}>Order Online</Link>
        </li>
        <li>
          <Link to="/contact-us" onClick={toggleMenu}>Contact Us</Link>
        </li>
        <li>
          <Link to="/login" onClick={toggleMenu}>Login</Link>
        </li>
        <li>
          <Link to="/register" onClick={toggleMenu}>Register</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;