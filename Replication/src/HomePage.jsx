import React from "react";
import NavBar1 from "./NavBar1.jsx";
import NavBar2 from "./NavBar2.jsx";
import Carousell from "./Carousell.jsx";
import Category from "./Category.jsx";
import ItemsPage from "./ItemsPage.jsx";

function HomePage(){
    return(
        <>
        <NavBar1/>
        <NavBar2/>
        <br />
        <br />
        <Carousell/>
        <br />
        <br />
        <Category/>
        <br />
        <br />
        <ItemsPage/>
        </>
    )
}

export default HomePage;

