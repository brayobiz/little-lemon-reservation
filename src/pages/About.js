import React from 'react';
import styles from '../components/Hero.module.css'; // Reuse styles for consistency

function About() {
  return (
    <main data-aos="fade-up">
      <div className={styles.hero}>
        <div className={styles.textContent}>
          <h1 className={styles.title} data-aos="fade-down">About Delix</h1>
          <h2 className={styles.location} data-aos="fade-right">Our Story</h2>
          <p className={styles.description} data-aos="fade-left">
            Welcome to <strong>Delix</strong>, Nairobi’s premier online Mediterranean restaurant, proudly based in the heart of Kenya’s vibrant capital! Established in 2025, we are a family-owned business passionate about bringing the authentic flavors of the Mediterranean to your doorstep, infused with a modern Kenyan twist. Our journey began with a dream to share recipes passed down through generations, blending traditional Mediterranean spices with fresh, local Kenyan ingredients sourced from Nairobi markets.
            <br /><br />
            We specialize in Mediterranean cuisine, offering a delightful range of dishes like creamy hummus, falafel, grilled kebabs, and fresh tabbouleh. Whether you’re craving a hearty shawarma wrap or a refreshing Greek salad, every dish is prepared with love and care. We cater to diverse dietary preferences, with vegetarian, vegan, and halal options available, ensuring everyone can enjoy a taste of Delix.
            <br /><br />
            As an online-only restaurant, ordering is simple: visit our website, browse our menu, and place your order in a few clicks. We prepare your meal fresh and deliver it hot to your door, covering areas across Nairobi, including Westlands, Kilimani, Lavington, and Karen, typically within 45–60 minutes. We’re open daily from <strong>10:00 AM to 10:00 PM</strong>, perfect for lunch, dinner, or a late-night craving. We also offer catering for events—just let us know!
            <br /><br />
            Our team is committed to providing a warm, welcoming experience, even virtually. Have a question? Reach us at <strong>+254 112774925</strong> or <strong>vexorprime159@gmail.com</strong>. Follow us on X  and Facebook for updates on new dishes and special offers. At Delix, we believe food is a celebration of culture and community—order today and experience the flavors of the Mediterranean, right here in Nairobi!
          </p>
        </div>
      </div>
    </main>
  );
}

export default About;