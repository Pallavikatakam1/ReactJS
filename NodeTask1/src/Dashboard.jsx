import React from "react";
import "./App.css";
import { useNavigate } from "react-router-dom";


const Dashboard = () => {
    const navigate = useNavigate();
  
    return (
      <div className="container">
        <h1>WELCOME</h1>
      </div>
    );
  };
  

export default Dashboard;