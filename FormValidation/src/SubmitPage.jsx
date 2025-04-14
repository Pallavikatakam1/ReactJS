import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import styles from './RegistrationForm.module.css'; 

const SubmitPage = () => {
  const { state } = useLocation();
  const navigate = useNavigate();

  return (
    <div className={styles.submitContainer}>
      <h5 className={styles.submitTitle}><strong>Submitted Data</strong></h5>
      <div className={styles.submitBox}>
        <p><strong>User Name:</strong> {state.username}</p>
        <p><strong>Email:</strong> {state.email}</p>
        <p><strong>Phone:</strong> {state.phone}</p>
        <p><strong>Join Date:</strong> {state.joinDate}</p>
      </div>
      <button className={styles.blueButton} onClick={() => navigate('/')}>Register Again</button>
    </div>
  );
};

export default SubmitPage;
