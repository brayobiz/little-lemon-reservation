import React from 'react';
import Hero from '../components/Hero';
import Testimonials from '../components/Testimonials';
import MainContent from '../components/MainContent';
import styles from '../components/Main.module.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function Home() {
  return (
    <main className={styles.main} data-aos="fade-up">
      <div data-aos="fade-left">
        <Hero />
      </div>
      <div data-aos="fade-up">
        <MainContent />
      </div>
      <div data-aos="fade-up">
        <Testimonials />
      </div>
    </main>
  );
}

export default Home;