import React from "react";
import { Container, Navbar, Nav, Form, FormControl } from "react-bootstrap";
import "./NavBar.css";

const  NavBar = () => {
    return (
        <>
        
        <nav class="navbar bg-body-tertiary">
          <div class="container-fluid">
            <form class="d-flex" role="search">
            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
            <button class="btn btn-outline-success" type="submit">Search</button>
            </form>
          </div>
        </nav>
        </>
    )
}