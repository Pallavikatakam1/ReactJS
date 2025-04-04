import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

// SignUp component handles new user registration
const SignUp = () => {
  const navigate = useNavigate();

  // State to manage form input values
  const [formData, setFormData] = useState({
    userName: "",
    password: "",
    name: "",
    email: "",
    phoneNumber: "",
    department: "",
    role: null,
  });

  // Handle generic form field changes
  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  // Handle radio-style role selection (only one role can be selected)
  const handleRoleChange = (event) => {
    const { value, checked } = event.target;
    if (checked) {
      setFormData((prevFormData) => ({
        ...prevFormData,
        role: parseInt(value, 10),
      }));
    }
  };

  // Handle form submission and send POST request to backend
  const handleSubmit = async (event) => {
    event.preventDefault();

    const userWithRole = {
      userName: formData.userName,
      password: formData.password,
      name: formData.name,
      email: formData.email,
      phoneNumber: formData.phoneNumber,
      department: formData.department,
      role: formData.role,
    };

    try {
      const response = await axios.post(
        "http://localhost:8080/users/add",
        userWithRole
      );
      console.log(response.data);
      alert("Successfully Registered");
      navigate("/");
    } catch (error) {
      console.error("Error: ", error);
      alert("Registration Failed");
    }
  };

  return (
    <>
      <div id="container">
        <div className="form-container">
          <h2>Sign Up</h2>

          <Form onSubmit={handleSubmit}>
            {/* Username field */}
            <Form.Label htmlFor="userName">Username</Form.Label>
            <Form.Control
              type="text"
              name="userName"
              value={formData.userName}
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

            {/* Name field */}
            <Form.Label htmlFor="name">Name</Form.Label>
            <Form.Control
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter Name"
              required
            />

            {/* Email field */}
            <Form.Label htmlFor="email">Email</Form.Label>
            <Form.Control
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter Email"
              required
            />

            {/* Phone number field */}
            <Form.Label htmlFor="phoneNumber">Mobile Number</Form.Label>
            <Form.Control
              type="text"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              placeholder="Enter Phone Number"
              required
            />

            {/* Department field */}
            <Form.Label htmlFor="department">Department</Form.Label>
            <Form.Control
              type="text"
              name="department"
              value={formData.department}
              onChange={handleChange}
              placeholder="Enter Department"
              required
            />

            {/* Role selection (radio style using checkboxes for now) */}
            <Form.Label htmlFor="role">Role</Form.Label>
            <Form.Check
              name="role"
              value="1"
              checked={formData.role === 1}
              onChange={handleRoleChange}
              label="Frontend Developer"
              type="radio"
              id="frontend"
            />
            <Form.Check
              name="role"
              value="2"
              checked={formData.role === 2}
              onChange={handleRoleChange}
              label="Backend Developer"
              type="radio"
              id="backend"
            />

            {/* Submit button */}
            <Button variant="success" type="submit" className="mt-3">
              Submit
            </Button>
          </Form>
        </div>
      </div>
    </>
  );
};

export default SignUp;
