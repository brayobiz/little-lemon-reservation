import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from './ContactUs.module.css';
import Main from '../components/Main.module.css';

function ContactUs() {
  const [formData, setFormData] = useState(() => {
    const savedData = JSON.parse(localStorage.getItem('contactUsFormData'));
    return savedData || { name: '', email: '', subject: '', message: '' };
  });
  const [errors, setErrors] = useState({});

  useEffect(() => {
    localStorage.setItem('contactUsFormData', JSON.stringify(formData));
  }, [formData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = 'Name is required';
    if (!formData.email) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email is invalid';
    if (!formData.subject) newErrors.subject = 'Subject is required';
    if (!formData.message) newErrors.message = 'Message is required';
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      try {
        const response = await axios.post('https://mock-api-endpoint/contact', formData);
        const mockResponse = { status: 200, data: { message: 'Message sent successfully!' } };
        if (response.status === 200 || mockResponse.status === 200) {
          setErrors({});
          alert(mockResponse.data.message);
          setFormData({ name: '', email: '', subject: '', message: '' });
          localStorage.removeItem('contactUsFormData');
        }
      } catch (error) {
        setErrors({ server: 'Failed to send message. Please try again.' });
      }
    }
  };

  return (
    <main className={Main.main} data-aos="fade-up">
      <div className={styles.contactUs}>
        <h1 data-aos="fade-down">Contact Us</h1>
        <div className={styles.contactInfo} data-aos="fade-right">
          <h2>Our Contact Details</h2>
          <p>00100 Moi Avenue Street, Nairobi, Kenya</p>
          <p>Phone: +254112774925</p>
          <p>Email: <a href="mailto:vexorprime159@gmail.com">vexorprime159@gmail.com</a></p>
        </div>
        <form onSubmit={handleSubmit} className={styles.form} data-aos="fade-left">
          <div className={styles.formGroup}>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className={errors.name ? styles.errorInput : ''}
            />
            {errors.name && <p className={styles.error}>{errors.name}</p>}
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={errors.email ? styles.errorInput : ''}
            />
            {errors.email && <p className={styles.error}>{errors.email}</p>}
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="subject">Subject</label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              className={errors.subject ? styles.errorInput : ''}
            />
            {errors.subject && <p className={styles.error}>{errors.subject}</p>}
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="message">Message us</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className={errors.message ? styles.errorInput : ''}
              rows="5"
            />
            {errors.message && <p className={styles.error}>{errors.message}</p>}
          </div>
          {errors.server && <p className={styles.error}>{errors.server}</p>}
          <button type="submit" className={styles.submitButton} data-aos="zoom-in">
            Send Message
          </button>
        </form>
      </div>
    </main>
  );
}

export default ContactUs;