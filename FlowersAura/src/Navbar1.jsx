import React from "react";
import Container from "react-bootstrap/Container";
import { Form } from "react-bootstrap";
import Navbar from 'react-bootstrap/Navbar';
import Logo  from "./assets/Logo.svg";
import Location from "./assets/Location.avif";
import dropdown from "./assets/dropdown.svg";
import truck from "./assets/truck.svg";
import gift from "./assets/gift.svg";
import bag from "./assets/bag.svg";
import signin from "./assets/signin.svg";
import  list from "./assets/list.svg";
import './App.css';


// function Navbar1() {
//     return (
//         <Navbar className="bg-body-tertiary navbar">
//             <Container fluid className="horizontal-layout">
//                 <Navbar.Brand className="brand-logo">
//                     <img src={Logo}
//                     width = "200"
//                     height="70"
//                     className="d-inline-block align-top"
//                     alt="Logo" />
//                 </Navbar.Brand>   

//             <div className="location">
//                     <div className= "city-popup">
//                         <div id="user-selected-city-input" className="txt">
//                             <div className = "main-input-container">
//                                 <div className = "main-input-box">
//                                     <img src={Location} 
//                                     alt="Location" 
//                                     width="32"
//                                     height="20"/>
//                                     <span>Deliver to?</span>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>

//                 <div className="header-container">
//   <div className="searchbar">
//     <Form className="d-flex">
//       <Form.Control
//         type="search"
//         placeholder="Search"
//         aria-label="Search"
//         className="search-input"
//       />
//     </Form>
//   </div>

//   <div className="icon-group">
//     <div className="nav-icon">
//       <img src={truck} width="30" height="30" alt="truck" />
//       <span>Track Order</span>
//     </div>

//     <div className="nav-icon">
//       <img src={gift} width="30" height="30" alt="gift" />
//       <span>Gift Finder</span>
//     </div>

//     <div className="nav-icon">
//       <img src={bag} width="30" height="30" alt="bag" />
//       <span>Cart</span>
//     </div>

//     <div className="nav-icon">
//       <img src={signin} width="30" height="30" alt="signin" />
//       <span>Sign In</span>
//     </div>

//     <div className="nav-icon">
//       <img src={list} width="30" height="30" alt="list" />
//       <span>More</span>
//     </div>
//   </div>
// </div>


//             </Container>
//         </Navbar>

//     );
// };

function Navbar1() {
    return (
      <Navbar className="navbar">
        <Container fluid className="navbar-container">
          {/* Logo */}
          <div className="brand-logo">
            <img src={Logo} width="180" height="60" alt="Logo" />
          </div>
  
          {/* Location */}
          <div className="location-box">
            <img src={Location} alt="Location" width="32" height="20" />
            <span className="location-text">Deliver To ?</span>
          </div>
  
          {/* Search Bar */}
          <div className="searchbar">
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search for flowers, gifts..."
                className="search-input"
                aria-label="Search"
              />
            </Form>
          </div>
  
          {/* Icons */}
          <div className="icon-group">
            <div className="nav-icon">
              <img src={truck} width="28" height="28" alt="truck" />
              <span>Track Order</span>
            </div>
            <div className="nav-icon">
              <img src={gift} width="28" height="28" alt="gift" />
              <span>Gift Finder</span>
            </div>
            <div className="nav-icon">
              <img src={bag} width="28" height="28" alt="bag" />
              <span>Cart</span>
            </div>
            <div className="nav-icon">
              <img src={signin} width="28" height="28" alt="signin" />
              <span>Sign In</span>
            </div>
            <div className="nav-icon">
              <img src={list} width="28" height="28" alt="list" />
              <span>More</span>
            </div>
          </div>
        </Container>
      </Navbar>
    );
  }
  

export default Navbar1;