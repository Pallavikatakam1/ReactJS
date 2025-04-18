import React, { useState } from "react";
import "./Signup.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Row, Col } from 'react-bootstrap';
import "react-datepicker/dist/react-datepicker.css";

const Signup = () => {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [confirmEmail, setConfirmEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [zipcode, setZipcode] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const [firstnameMessage, setFirstnameMessage] = useState("");
  const [lastnameMessage, setLastnameMessage] = useState("");
  const [emailMessage, setEmailMessage] = useState("");
  const [confirmEmailMessage, setConfirmEmailMessage] = useState("");
  const [passwordMessage, setPasswordMessage] = useState("");
  const [confirmPasswordMessage, setConfirmPasswordMessage] = useState("");
  const [addressMessage, setAddressMessage] = useState("");
  const [cityMessage, setCityMessage] = useState("");
  const [zipcodeMessage, setZipcodeMessage] = useState("");
  const [phoneMessage, setPhoneMessage] = useState("");

  const [day, setDay] = useState('');
  const [month, setMonth] = useState('');
  const [year, setYear] = useState('');
  const [gender, setGender] = useState('');
  const [security, setSecurity] = useState('');
  const [state, setState] = useState('');

  const days = [];
  for (let i = 1; i <= 31; i++) days.push(i);

  const months = [];
  for (let i = 1; i <= 12; i++) months.push(i);

  const years = [];
  const currentYear = new Date().getFullYear();
  for (let i = currentYear; i >= currentYear - 100; i--) years.push(i);

  const genders = ['male','female','others'];
  const securities = ['What is  your favourite colour?','What is your pet name?','What is your hobby?'];
  const states = ['Andhra Pradesh', 'Arunachal Pradesh', 'Assam', 'Bihar', 'Chattisgarh', 'Goa', 'Gujarat', 'Haryana', 'Himachal Pradesh', 'Jharkhand', 'Karnataka', 'Kerala', 'Madhya Pradesh', 'Maharashtra', 'Manipur', 'Meghalaya', 'Mizoram', 'Nagaland', 'Odisha', 'Punjab', 'Rajasthan', 'Sikkim', 'Tamil Nadu', 'Telangana', 'Tripura', 'Uttar Pradesh', 'Uttarakhand', 'West Bengal']
  const validateForm = () => {
    let isValid = true;

    if (firstname.length > 10) {
      setFirstnameMessage("Firstname should be less than 10 characters");
      isValid = false;
    } else {
        setFirstnameMessage("");
    }

    if (lastname.length > 10) {
        setLastnameMessage("Lastname should be less than 10 characters");
        isValid = false;
    } else {
        setLastnameMessage("");
    }

    if (!email.endsWith("@questk2.com")) {
      setEmailMessage("Email must end with @questk2.com");
      isValid = false;
    } else {
      setEmailMessage("");
    }

    if (email !== confirmEmail) {
        setConfirmEmailMessage("Email do not match");
        isValid = false;
    } else {
        setConfirmEmailMessage("");
    }

    if (password.length < 6) {
      setPasswordMessage("Password should be at least 6 characters");
      isValid = false;
    } else {
      setPasswordMessage("");
    }

    if (password !== confirmPassword) {
      setConfirmPasswordMessage("Passwords do not match");
      isValid = false;
    } else {
      setConfirmPasswordMessage("");
    }

    const phoneRegex = /^\d{10}$/;
    if (!phoneRegex.test(phoneNumber)) {
      setPhoneMessage("Phone number must be 10 digits only");
      isValid = false;
    } else {
      setPhoneMessage("");
    }

    if (address.length > 50) {
        setAddressMessage("Address should be less than 50 characters");
        isValid = false;
    } else {
        setAddressMessage("");
    }

    if (city.length > 50) {
        setCityMessage("City should be less than 20 characters");
        isValid = false;
    } else {
        setCityMessage("");
    }

    const zipcodeRegex = /^\d{6}$/;
    if (!zipcodeRegex.test(zipcode)) {
        setZipcodeMessage("Zipcode must be 6 digits only");
      isValid = false;
    } else {
        setZipcodeMessage("");
    }
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
        const formData = {
          firstname,
          lastname,
          day,
          month,
          year,
          gender,
          email,
          confirmEmail,
          password,
          confirmPassword,
          security,
          address,
          city,
          state,
          zipcode,
          phoneNumber,
          startDate: startDate.toDateString(),
        };
        navigate("/dashboard", { state: formData });
      }
  };

  return (
    <div id="container">
      <div className="form-container">
        <Form onSubmit={handleSubmit} className="full-form">
          <Form.Label>UserName</Form.Label> <br/>
          <div className="side-heading-row">
          <Form.Text className="side-headings">First Name : </Form.Text>
          <Form.Control
            className="input-fields"
            type="text"
            placeholder="First Name"
            onChange={(e) => setFirstname(e.target.value)}
            required
          />
          </div>
          {firstnameMessage && (
            <>
            <Form.Text className="text-danger">{firstnameMessage}</Form.Text> <br />
            </>
          )}

          <div className="side-heading-row">
          <Form.Text className="side-headings">Last Name : </Form.Text>
          <Form.Control
            className="input-fields"
            type="text"
            placeholder="Last Name"
            onChange={(e) => setLastname(e.target.value)}
            required
          />
          </div>
          {lastnameMessage && (
            <>
            <Form.Text className="text-danger">{lastnameMessage}</Form.Text> <br />
            </>
          )}

          <div className="side-heading-row">
          <Form.Text className="side-headings">Date of Birth :</Form.Text>
          <Row className="date-row">
          <Col>
          <Form.Select
          value={day}
          onChange={(e) => setDay(e.target.value)}
          className="day-class"
          >
          <option>Day</option>
          {days.map(d => <option key={d}>{d}</option>)}
          </Form.Select>
          </Col>
          <Col>
          <Form.Select
          value={month}
          onChange={(e) => setMonth(e.target.value)}
          className="month-class"
          >
          <option>Month</option>
          {months.map(m => <option key={m}>{m}</option>)}
          </Form.Select>
          </Col>
          <Col>
          <Form.Select
          value={year}
          onChange={(e) => setYear(e.target.value)}
          className="year-class"
          >
          <option>Year</option>
          {years.map(y => <option key={y}>{y}</option>)}
          </Form.Select>
          </Col>
          </Row>
          </div>

          <div className="side-heading-row">
          <Form.Text className="side-headings">Gender :</Form.Text>
          <Form.Select
          value={gender}
          onChange={(e) => setGender(e.target.value)}
          className="gender-class"
          >
          <option>Gender</option>
          {genders.map(g => <option key={g}>{g}</option>)}
          </Form.Select>
          </div>

          <Form.Label>Account Information</Form.Label> <br/>

          <div className="side-heading-row">
          <Form.Text className="side-headings">Email : </Form.Text>
          <Form.Control
            className="input-fields"
            type="email"
            placeholder="email@questk2.com"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          </div>
          {emailMessage && (
            <>
            <Form.Text className="text-danger">{emailMessage}</Form.Text> <br />
            </>
          )}

          <div className="side-heading-row">
          <Form.Text className="side-headings">Re-type Email : </Form.Text>
          <Form.Control
            className="input-fields"
            type="email"
            placeholder="email@questk2.com"
            onChange={(e) => setConfirmEmail(e.target.value)}
            required
          />
          </div>
          {confirmEmailMessage && (
            <>
            <Form.Text className="text-danger">{confirmEmailMessage}</Form.Text> <br />
            </>
          )}

          <div className="side-heading-row">          
          <Form.Text className="side-headings">Password</Form.Text>
          <Form.Control
            className="input-fields"
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          </div>
          {passwordMessage && (
            <>
            <Form.Text className="text-danger">{passwordMessage}</Form.Text> <br />
            </>
          )}

          <div className="side-heading-row">
          <Form.Text className="side-headings">Confirm Password</Form.Text>
          <Form.Control
            className="input-fields"
            type="password"
            placeholder="Confirm Password"
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
          </div>
          {confirmPasswordMessage && (
            <>
            <Form.Text className="text-danger">{confirmPasswordMessage}</Form.Text> <br />
            </>
          )}

          <div className="side-heading-row">
          <Form.Text className="side-headings">Security Question :</Form.Text>
          <Form.Select
          value={security}
          onChange={(e) => setSecurity(e.target.value)}
          className="security-class"
          >
          <option>Security Questions</option>
          {securities.map(s => <option key={s}>{s}</option>)}
          </Form.Select>
          </div>

          <div className="side-heading-row">
          <Form.Text className="side-headings">Security Answer :</Form.Text>
          <Form.Control
            className="input-fields"
            type="text"
            placeholder="Security Answer"
            onChange={(e) => setSecurity(e.target.value)}
            required
          />
          </div>

          <Form.Label>Contact Information</Form.Label> <br/>

          <div className="side-heading-row">
          <Form.Text className="side-headings">Address : </Form.Text>
          <Form.Control
            className="input-fields"
            type="text"
            placeholder="Address"
            onChange={(e) => setAddress(e.target.value)}
            required
          />
          </div>
          {addressMessage && (
            <>
            <Form.Text className="text-danger">{addressMessage}</Form.Text> <br />
            </>
          )}

          <div className="side-heading-row">
          <Form.Text className="side-headings">City : </Form.Text>
          <Form.Control
            className="input-fields"
            type="text"
            placeholder="City"
            onChange={(e) => setCity(e.target.value)}
            required
          />
          </div>
          {cityMessage && (
            <>
            <Form.Text className="text-danger">{cityMessage}</Form.Text> <br />
            </>
          )}

          <div className="side-heading-row">
          <Form.Text className="side-headings">State : </Form.Text>
          <Form.Select
          value={state}
          onChange={(e) => setState(e.target.value)}
          className="state-class"
          >
          <option>Select State</option>
          {states.map(st => <option key={st}>{st}</option>)}
          </Form.Select>
          </div>

          <div className="side-heading-row">
          <Form.Text className="side-headings">Zipcode : </Form.Text>
          <Form.Control
            className="input-fields"
            type="text"
            placeholder="Zipcode"
            onChange={(e) => setZipcode(e.target.value)}
            required
          />         
          </div>
          {zipcodeMessage && (
            <>
            <Form.Text className="text-danger">{zipcodeMessage}</Form.Text> <br />
            </>
          )}

          <div className="side-heading-row">
          <Form.Text className="side-headings">Phone Number</Form.Text>
          <Form.Control
            className="input-fields"
            type="text"
            placeholder="Phone Number"
            onChange={(e) => setPhoneNumber(e.target.value)}
            required
          />
          </div>
          {phoneMessage && (
            <>
            <Form.Text className="text-danger">{phoneMessage}</Form.Text> <br />
            </>
          )}

          <Button variant="primary" type="submit" className="submit-btn">
            Submit
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default Signup;