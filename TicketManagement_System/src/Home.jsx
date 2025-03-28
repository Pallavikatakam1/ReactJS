import React from 'react';
import { Link } from 'react-router-dom';

/**
 * Home component renders the landing page of the application.
 * It provides a brief introduction to the Travel Mate platform.
 */
const Home = () => {
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Welcome to Travel Mate</h1>
      <p>Your next adventure is just a click away</p>
      <p>Book your tickets now!</p>
      <p>Happy Journey :)</p>

      {/* Signup and Login buttons */}
      <div style={{ marginTop: '20px' }}>
        <Link to="/signup">
          <button className="btn btn-success" style={{ marginRight: '10px' }}>
            Sign Up
          </button>
        </Link>
        <Link to="/login">
          <button className="btn btn-primary">
            Log In
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
