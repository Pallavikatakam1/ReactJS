import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Login';  // Make sure this path is correct
import Signup from './/Signup';
import TicketList from './TicketList';
import TicketForm from './TicketForm';
import Navbar from './Navbar';
import Home from './Home';

function App() {
  return (
    <Router>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />   {/* ✅ Login Route */}
          <Route path="/signup" element={<Signup />} />
          <Route path="/tickets" element={<TicketList />} />
          <Route path="/tickets/add" element={<TicketForm />} />
          <Route path="/tickets/:id" element={<TicketForm />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
