import React from 'react';
import { Link } from 'react-router-dom';
import styles from './MainContent.module.css';
import Specials from './Specials';

function MainContent() {
  return (
    <div className={styles.mainContent}>
      <div className={styles.headerSection}>
        <h2 className={styles.heading}>This week's specials!</h2>
        <Link to="/menu">
          <button className={styles.onlineMenuButton}>Online Menu</button>
        </Link>
      </div>
      <Specials />
    </div>
  );
}

export default MainContent;