import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Login from "./Login";
const Register = () => {
  const navigate = useNavigate();

  // State to manage form input values
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  // Handle input changes
  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  // Handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault();
  
    try {
      const response = await axios.post(
        "http://localhost:3000/users/register",
        formData
      );
      if (response.status === 200) {
        alert("Successfully Registered");
        // Use setTimeout to delay the navigation for a smooth transition
        setTimeout(() => {
          navigate("/login");
        }, 500); // You can adjust the delay time if needed
      }
    } catch (error) {
      console.error("Error: ", error);
      alert("Registration Failed");
    }
  };
  

  return (
    <div id="container">
      <div className="form-container">
        <h2>Registration</h2>

        <Form onSubmit={handleSubmit}>
          {/* Username field */}
          <Form.Label htmlFor="username">Username</Form.Label>
          <Form.Control
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            placeholder="Enter Username"
            required
          />

          {/* Password field */}
          <Form.Label htmlFor="password">Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Enter Password"
            required
          />

          {/* Submit button */}
          <Button variant="success" type="submit" className="mt-3">
            Submit
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default Register;
