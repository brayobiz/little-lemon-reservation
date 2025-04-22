import React from 'react';
import styles from './Header.module.css';
import logo from '../public/assets/images/image-1.jpg';

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