import React from 'react';
import styles from './Header.module.css';
import logo from '../assets/images/aa38384d3942a55696d8070552aed2f4c190fc14.jpg';

function Header() {
  return (
    <header className={styles.header}>
      <img
        src={logo}
        alt="Little Lemon Logo"
        className={styles.logo}
      />
    </header>
  );
}

export default Header;