import React from 'react';
import Hero from '../components/Hero';
import MainContent from '../components/MainContent';
import styles from '../components/Main.module.css';

function Home() {
  return (
    <main className={styles.main} data-aos="fade-up">
      <div data-aos="fade-left">
        <Hero />
      </div>
      <div data-aos="fade-up">
        <MainContent />
      </div>
    </main>
  );
}

export default Home;