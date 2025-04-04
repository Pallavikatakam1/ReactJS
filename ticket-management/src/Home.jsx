import React from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css"; // Create a CSS file for styling

const Home = () => {
    const navigate = useNavigate();

    return (
        <div className="home-container">
            <h1>Welcome to the Support Ticket Management System</h1>
            <p>Please log in or sign up to continue.</p>
            <div className="button-group">
                <button onClick={() => navigate("/login")}>Login</button>
                <button onClick={() => navigate("/signup")}>Sign Up</button>
            </div>
        </div>
    );
};

export default Home;
