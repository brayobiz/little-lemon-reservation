import React from 'react';
import Slider from 'react-slick';
import styles from '../components/Testimonials.module.css';

function Testimonials() {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    centerMode: false, // Disable centerMode to prevent partial slide overlap
    variableWidth: false, // Ensure consistent slide widths
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className={styles.testimonials}>
      <h2 data-aos="fade-down">What Our Customers Say</h2>
      <Slider {...sliderSettings} className={styles.testimonialSlider} data-aos="fade-up">
        <div className={styles.testimonialCard}>
          <img src="/assets/images/eve_o.jpg" alt="Eve O." className={styles.customerImage} />
          <div className={styles.stars}>★★★★★</div>
          <p>
            "Delix made my family dinner so special! The shawarma was delicious, and delivery to Westlands was super quick. Highly recommend!"
          </p>
          <h4>— Eve O., Nairobi</h4>
        </div>
        <div className={styles.testimonialCard}>
          <img src="/assets/images/james_m.png" alt="Brian K." className={styles.customerImage} />
          <div className={styles.stars}>★★★★★</div>
          <p>
            "I ordered a Greek salad and falafel for lunch, and everything was fresh and flavorful. Delix is my go-to for Mediterranean food in Nairobi!"
          </p>
          <h4>— Brian K., Kilimani</h4>
        </div>
        <div className={styles.testimonialCard}>
          <img src="/assets/images/sarah_n.jpg" alt="Sarah N." className={styles.customerImage} />
          <div className={styles.stars}>★★★★☆</div>
          <p>
            "The food was amazing, especially the hummus! Delivery took a bit longer than expected, but the quality made up for it. Will order again."
          </p>
          <h4>— Sarah N., Karen</h4>
        </div>
        <div className={styles.testimonialCard}>
          <img src="/assets/images/david_o.jpg" alt="David O." className={styles.customerImage} />
          <div className={styles.stars}>★★★★★</div>
          <p>
            "Catered a small event with Delix, and our guests loved the kebabs and tabbouleh. Great service and easy ordering process!"
          </p>
          <h4>— David O., Lavington</h4>
        </div>
      </Slider>
    </section>
  );
}

export default Testimonials;