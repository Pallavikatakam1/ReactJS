import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import './App.css'

const Home = () => {
  const navigate = useNavigate();

  return (
      <div className="home-container">
      <h1>Welcome to the Ticket Management System</h1>
      <Button onClick={() => navigate("/login")}>
        Login
      </Button>
    </div>
  );
};

export default Home;
