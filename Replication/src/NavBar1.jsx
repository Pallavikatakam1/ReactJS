import React from "react";
import Container from "react-bootstrap/Container";
import { Form } from "react-bootstrap";
 import Navbar from 'react-bootstrap/Navbar';
 import fnpLogo from "./assets/fnp-logo.svg";
 import location from "./assets/location.svg";
 import delivery from "./assets/delivery.svg";
 import INR from "./assets/INR.svg";
 import corporate from "./assets/corporate.svg";
 import cart from "./assets/cart.svg";
 import guest from "./assets/guest.svg";
 import more from "./assets/more.svg";
import "./App.css";
// import "./index.css";


function NavBar1(){
  return(
    <Navbar className="bg-body-tertiary navbar">
      <Container fluid>
        <Navbar.Brand className="brand-logo">
          <img src={fnpLogo} 
          width="70"
          height="30"
          className="d-inline-block align-top"
          alt="FNP Logo" />

        </Navbar.Brand>
        <div className="location">
        <div className='both-location'>
          <img src={location} 
          width="100%"
          height="30"
          className="d-inline-block align-top"
          alt="location" 
          />
        </div>
        <div className="location-modal">
          <h6>Where to deliver?<br /><p style={{color:'red'}}>Location missing</p></h6>
        </div>
        </div>

        <div className="searchbar">
          <Form className="d-flex ms-3" style={{flex:1}}>
            <Form.Control
            type="search"
            placeholder="Search"
            className="me-2"
            area-label="Search"
            style={{width:'350px'}}
            />
          </Form>
        </div>
        
        <div className="float">
          <div className="icons">
            <img src={delivery}
            width="30"
            height="30"
            alt="delivery"
            />
          </div>
          <div className="delivery-modal">
            <h6>Same Day <br /></h6>
          </div>
        </div>

        <div className="float">
          <div className="icons">
            <img src={INR}
            width="30"
            height="30"
            alt="INR" 
            />
          </div>
          <div className="INR-modal">
            <h6>INR <br /></h6>
          </div>
        </div>

        <div className="float">
          <div className="icons">
            <img src={corporate}
            width="30"
            height="30"
            alt="corporate"
            />
          </div>
          <div className="icons">
            <h6>Corporate <br /></h6>
          </div>
        </div>

        <div className="float">
          <div className="icons">
            <img src={cart}
            width="30"
            height="30"
            alt="cart"
            />
          </div>
          <div className="icons">
            <h6>Cart <br /></h6>
          </div>
        </div>

        <div className="float">
          <div className="icons">
            <img src={guest}
            width="30"
            height="30"
            alt="guest"
            />
          </div>
          <div className="icons">
            <h6>Hi Guest <br /></h6>
          </div>
        </div>

        <div className="float">
          <div className="icons">
            <img src={more}
            width="30"
            height="30"
            alt="more"
            />
          </div>
          <div className="icons">
            <h6>More <br /></h6>
          </div>
        </div>
      </Container>
    </Navbar>
  );
}

export default NavBar1;