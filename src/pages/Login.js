import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from './Login.module.css';
import Main from '../components/Main.module.css';

function Login() {
  const [formData, setFormData] = useState(() => {
    const savedData = JSON.parse(localStorage.getItem('loginFormData'));
    return savedData || { email: '', password: '' };
  });
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false); // Added state for password visibility

  useEffect(() => {
    localStorage.setItem('loginFormData', JSON.stringify(formData));
  }, [formData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.email) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email is invalid';
    if (!formData.password) newErrors.password = 'Password is required';
    else if (formData.password.length < 6) newErrors.password = 'Password must be at least 6 characters';
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      try {
        const response = await axios.post('https://mock-api-endpoint/login', formData);
        const mockResponse = { status: 200, data: { message: 'Login successful!' } };
        if (response.status === 200 || mockResponse.status === 200) {
          setErrors({});
          alert(mockResponse.data.message);
          setFormData({ email: '', password: '' });
          localStorage.removeItem('loginFormData');
        }
      } catch (error) {
        setErrors({ server: 'Login failed. Please try again.' });
      }
    }
  };

  return (
    <main className={Main.main} data-aos="fade-up">
      <div className={styles.login}>
        <h1 data-aos="fade-down">Login</h1>
        <form onSubmit={handleSubmit} className={styles.form} data-aos="fade-up">
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
          {errors.server && <p className={styles.error}>{errors.server}</p>}
          <button type="submit" className={styles.submitButton} data-aos="zoom-in">
            Sign In
          </button>
        </form>
        <p className={styles.linkText} data-aos="fade-up">
          Don't have an account? <a href="/register">Register here</a>
        </p>
      </div>
    </main>
  );
}

export default Login;