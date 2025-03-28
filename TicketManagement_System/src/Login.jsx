import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = () => {
        console.log("User Logged In (No Auth Required)");
        navigate("/tickets");  // Redirects to Tickets page after login
    };

    return (
        <div className="login-container">
            <h2>Login</h2>
            <div className="form-group">
                <label>Email:</label>
                <input 
                    type="email" 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)} 
                />
            </div>
            <div className="form-group">
                <label>Password:</label>
                <input 
                    type="password" 
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)} 
                />
            </div>
            <button onClick={handleLogin}>Login</button>
        </div>
    );
};

export default Login;
