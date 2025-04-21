import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from './Register.module.css';
import Main from '../components/Main.module.css';

function Register() {
  const [formData, setFormData] = useState(() => {
    const savedData = JSON.parse(localStorage.getItem('registerFormData'));
    return savedData || { name: '', email: '', password: '', confirmPassword: '' };
  });
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false); // Added for confirm password

  useEffect(() => {
    localStorage.setItem('registerFormData', JSON.stringify(formData));
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
    if (!formData.password) newErrors.password = 'Password is required';
    else if (formData.password.length < 6) newErrors.password = 'Password must be at least 6 characters';
    if (!formData.confirmPassword) newErrors.confirmPassword = 'Please confirm your password';
    else if (formData.password !== formData.confirmPassword) newErrors.confirmPassword = 'Passwords do not match';
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      try {
        const response = await axios.post('https://mock-api-endpoint/register', formData);
        const mockResponse = { status: 201, data: { message: 'Registration successful!' } };
        if (response.status === 201 || mockResponse.status === 201) {
          setErrors({});
          alert(mockResponse.data.message);
          setFormData({ name: '', email: '', password: '', confirmPassword: '' });
          localStorage.removeItem('registerFormData');
        }
      } catch (error) {
        setErrors({ server: 'Registration failed. Please try again.' });
      }
    }
  };

  return (
    <main className={Main.main} data-aos="fade-up">
      <div className={styles.register}>
        <h1 data-aos="fade-down">Register</h1>
        <form onSubmit={handleSubmit} className={styles.form} data-aos="fade-up">
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
            <label htmlFor="password">Password</label>
            <div className={styles.inputWrapper}>
              <input
                type={showPassword ? 'text' : 'password'}
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className={errors.password ? styles.errorInput : ''}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className={styles.toggleButton}
              >
                {showPassword ? 'Hide' : 'Show'}
              </button>
            </div>
            {errors.password && <p className={styles.error}>{errors.password}</p>}
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="confirmPassword">Confirm Password</label>
            <div className={styles.inputWrapper}>
              <input
                type={showConfirmPassword ? 'text' : 'password'}
                id="confirmPassword"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                className={errors.confirmPassword ? styles.errorInput : ''}
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className={styles.toggleButton}
              >
                {showConfirmPassword ? 'Hide' : 'Show'}
              </button>
            </div>
            {errors.confirmPassword && <p className={styles.error}>{errors.confirmPassword}</p>}
          </div>
          {errors.server && <p className={styles.error}>{errors.server}</p>}
          <button type="submit" className={styles.submitButton} data-aos="zoom-in">
            Register
          </button>
        </form>
        <p className={styles.linkText} data-aos="fade-up">
          Already have an account? <a href="/login">Login here</a>
        </p>
      </div>
    </main>
  );
}

export default Register;