import React from 'react';
import styles from './MainContent.module.css';
import Specials from './Specials';

function MainContent() {
  return (
    <div className={styles.mainContent}>
      <div className={styles.headerSection}>
        <h2 className={styles.heading}>This week's specials!</h2>
        <button className={styles.onlineMenuButton}>Online Menu</button>
      </div>
      <Specials />
    </div>
  );
}

export default MainContent;