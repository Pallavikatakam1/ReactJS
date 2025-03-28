import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Welcome to the Ticket Management System</h1>
    </div>
  );
};

export default Home;
