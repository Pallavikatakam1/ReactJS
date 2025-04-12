import React from "react";
import Navbar1 from "./Navbar1";
import Navbar2 from "./Navbar2";
import Banner from "./Banner.jsx";
import Category from "./Category.jsx";
import Orders from "./Orders.jsx";

function HomePage(){
    return(
        <>
        <Navbar1/>
        <Navbar2/>
        <br />
        <Banner/>
        <br />
        <Category/>
        <br />
        <Orders/>
        </>
    )
}

export default HomePage;

