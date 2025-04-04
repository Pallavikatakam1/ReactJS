import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "./App.css";

// Login component handles user authentication
const Login = () => {
  // State variables for form inputs and error message
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  // Handle login form submission
  const handleLogin = async (e) => {
    e.preventDefault(); // Prevent page refresh on form submit

    try {
      // Send login credentials to the backend
      const response = await axios.post("http://localhost:8080/login", {
        userName: username,
        password: password,
      });

      // If login is successful, store user data and redirect to ticket table
      if (response.status === 200) {
        localStorage.setItem("user", JSON.stringify(response.data));
        navigate("/ticketTable");
      }
    } catch (error) {
      // Handle login error (e.g., wrong credentials or server issue)
      setError("Invalid credentials or server error.");
      console.error("Login error: ", error.response?.data || error.message);
    }
  };

  return (
    <>
      <div id="container">
        <div className="form-container">
          {/* Login Form */}
          <Form onSubmit={handleLogin}>
            {/* Username Input */}
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Username</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
              <Form.Text className="text-muted">
                {/* Placeholder for additional helper text */}
              </Form.Text>
            </Form.Group>

            {/* Password Input */}
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </Form.Group>

            {/* Submit Button */}
            <Button variant="success" type="submit">
              Submit
            </Button>
          </Form>

          <br />

          {/* Display error message if login fails */}
          {error && <p style={{ color: "red" }}>{error}</p>}

          {/* Register redirect link wrapped in a styled button */}
          <h6>
            Don't have an account?
            <Link to="/signup">
              <button className="register-button">Register here...</button>
            </Link>
          </h6>
        </div>
      </div>
    </>
  );
};

export default Login;
