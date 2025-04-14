import React, {useState} from 'react';
import './RegistrationForm.module.css';
import { useNavigate } from 'react-router-dom';
import styles from './RegistrationForm.module.css';


  const RegistrationForm = () => {
    const navigate = useNavigate(); 
    // Set current date and max date (1 year from today) for validation
    const today = new Date();
    const oneYearFromToday = new Date(today);
    oneYearFromToday.setFullYear(today.getFullYear() + 1);
  
    // Helper to format date to dd/mm/yyyy
    const formatDate = (date) => {
      const d = new Date(date);
      const day = (`0${d.getDate()}`).slice(-2);
      const month = (`0${d.getMonth() + 1}`).slice(-2);
      const year = d.getFullYear();
      return `${day}/${month}/${year}`;
    };
  
    // Form data state
    const [formData, setFormData] = useState({
      username: '',
      email: '',
      password: '',
      confirmPassword: '',
      phone: '',
      joinDate: '',
    });
  
    // Validation errors state
    const [errors, setErrors] = useState({});
  
    // State to hold submitted data after successful validation
    const [submittedData, setSubmittedData] = useState(null);
  
    // Validation logic
    const validate = () => {
      const newErrors = {};
  
      // Username validation
      if (!formData.username) newErrors.username = 'User Name is required';
  
      // Email validation
      if (!formData.email) {
        newErrors.email = 'Email is required';
      } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
        newErrors.email = 'Invalid email format';
      }
  
      // Password validation
      if (!formData.password) {
        newErrors.password = 'Password is required';
      } else if (formData.password.length < 8) {
        newErrors.password = 'Password must be at least 8 characters';
      }
  
      // Confirm password must match password
      if (!formData.confirmPassword) {
        newErrors.confirmPassword = 'Confirm Password is required';
      } else if (formData.confirmPassword !== formData.password) {
        newErrors.confirmPassword = 'Passwords do not match';
      }
  
      // Phone number validation (digits only, min 10 digits)
      if (!formData.phone) {
        newErrors.phone = 'Phone number is required';
      } else if (!/^\d{10,}$/.test(formData.phone)) {
        newErrors.phone = 'Phone number must be at least 10 digits';
      }
  
      // Join Date validation
      if (!formData.joinDate) {
        newErrors.joinDate = 'Join Date is required';
      } else {
        const selectedDate = new Date(formData.joinDate);
        if (selectedDate < today) {
          newErrors.joinDate = 'Date cannot be in the past';
        } else if (selectedDate > oneYearFromToday) {
          newErrors.joinDate = 'Date cannot be more than 1 year from today';
        }
      }
  
      // Update error state
      setErrors(newErrors);
  
      // Return true if no errors
      return Object.keys(newErrors).length === 0;
    };
  
    // Handle input changes
    const handleChange = (e) => {
      setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
    };
  
    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        if (validate()) {
          const formattedData = {
            ...formData,
            joinDate: formatDate(formData.joinDate),
          };
          navigate('/SubmitPage', { state: formattedData });
        }
      };
  
    return (
  
      <div className={styles.formContainer}>
        <h6 className={styles.submitTitle}><strong>QuestK2 Technologies</strong></h6>
        <h5 className={styles.submitTitle}><strong>Registration Form</strong></h5>
        <form onSubmit={handleSubmit} noValidate>
          {/* Username field */}
          <div className={styles.formGroup}>
            <label className={styles.label}>User Name:</label>
            <input type="text" name="username" className={styles.input} value={formData.username} onChange={handleChange} />
            {errors.username && <div className={styles.error}>{errors.username}</div>}
          </div>
  
          {/* Email field */}
          <div className={styles.formGroup}>
            <label className={styles.label}>Email:</label>
            <input type="email" name="email" className={styles.input} value={formData.email} onChange={handleChange} />
            {errors.email && <div className={styles.error}>{errors.email}</div>}
          </div>
  
          {/* Password field */}
          <div className={styles.formGroup}>
            <label className={styles.label}>Password:</label>
            <input type="password" name="password" className={styles.input} value={formData.password} onChange={handleChange} />
            {errors.password && <div className={styles.error}>{errors.password}</div>}
          </div>
  
          {/* Confirm Password field */}
          <div className={styles.formGroup}>
            <label className={styles.label}>Confirm Password:</label>
            <input type="password" name="confirmPassword" className={styles.input} value={formData.confirmPassword} onChange={handleChange} />
            {errors.confirmPassword && <div className={styles.error}>{errors.confirmPassword}</div>}
          </div>
  
          {/* Phone number field */}
          <div className={styles.formGroup}>
            <label className={styles.label}>Phone Number:</label>
            <input type="text" name="phone" className={styles.input} value={formData.phone} onChange={handleChange} />
            {errors.phone && <div className={styles.error}>{errors.phone}</div>}
          </div>
  
          {/* Join Date field with min/max validation */}
          <div className={styles.formGroup}>
            <label className={styles.label}>Join Date:</label>
            <input
              type="date"
              name="joinDate"
              className={styles.input}
              value={formData.joinDate}
              min={today.toISOString().split('T')[0]}           // Prevent past dates
              max={oneYearFromToday.toISOString().split('T')[0]} // Limit to 1 year in future
              onChange={handleChange}
            />
            {errors.joinDate && <div className={styles.error}>{errors.joinDate}</div>}
          </div>
  
          {/* Submit Button */}
          <button type="submit" className={styles.button}>Register</button>
        </form>
      </div>
    );
  };
  
  export default RegistrationForm;
  