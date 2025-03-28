import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'; // Make sure you have axios installed

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    
    try {
      // Change the URL to your backend API endpoint for signup
      const response = await axios.post('http://localhost:8080/api/auth/Signup', { email, password });
      
      // If signup is successful, navigate to login page
      if (response.status === 201) {
        navigate('/login');
      }
    } catch (error) {
      // Handle errors, show message if available
      setMessage(error.response?.data?.message || error.message || 'Signup failed');
    }
  };

  return (
    <div className="signup-container">
      <h2>Sign Up</h2>
      <form onSubmit={handleSignup}>
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        
        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        
        <button type="submit" className="btn btn-success">
          Sign Up
        </button>
        
        {message && (
          <div className="alert alert-danger" style={{ marginTop: '10px' }}>
            {message}
          </div>
        )}
      </form>
    </div>
  );
};

export default Signup;
