import React from 'react';
import Form from 'react-bootstrap/Form';
import { FormControl } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import './App.css';



function NavBar() {
    return (
      <Navbar expand="lg" className="top-navbar" sticky="top">
        <Container fluid className="px-4">
          <Form className="d-flex searchbar">
            <FormControl type="search" placeholder="What are you looking for ?" className="me-2 search-input" />
          </Form>
          <Nav className="me-auto top-links">
            <Nav.Link href="#">Explore</Nav.Link>
            <Nav.Link href="#">Hire a Designer</Nav.Link>
            <Nav.Link href="#">Find Jobs</Nav.Link>
            <Nav.Link href="#">Blogs</Nav.Link>
          </Nav>
          <div className="auth-buttons">
            <Button variant="light" className="me-2">Sign up</Button>
            <Button variant="dark">Login</Button>
          </div>
        </Container>
      </Navbar>
    );
  }
  
  export default NavBar;