import { useNavigate } from "react-router-dom";
import './App.css';
import Button from "react-bootstrap/Button";

const HomePage = () => {
    const navigate = useNavigate();
  
    return (
        <div className="home-container">
        <h1>Welcome</h1>
        <Button onClick={() => navigate("/login")}>
          Login
        </Button>
      </div>
    );
  };
  
  export default HomePage;
