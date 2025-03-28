import React, { useState, useEffect } from "react";
import './App.css';
import axios from "axios";
import { useNavigate } from "react-router-dom";

const UserTable = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true); // For loading state
  const [error, setError] = useState(null); // For error handling
  const navigate = useNavigate();

  useEffect(() => {
    axios.get('http://localhost:8080/users')
      .then((response) => {
        setData(response.data);
        setLoading(false);
      })
      .catch((error) => {
        setError('Error fetching data');
        setLoading(false);
      });
  }, []);

  const handleTickets = () => {
    navigate('/TicketList');
  };

  if (loading) {
    return <p>Loading...</p>; // Loading state
  }

  if (error) {
    return <p>{error}</p>; // Display error message if fetching fails
  }

  return (
    <>
      <button onClick={handleTickets}>Tickets Table</button>
      {data.length === 0 ? (
        <p>No users found.</p> // Handle empty data case
      ) : (
        <table>
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>User Name</th>
              <th>Email</th>
              <th>Department</th>
              <th>Phone Number</th>
              <th>Role</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.userName}</td>
                <td>{item.email}</td>
                <td>{item.department}</td>
                <td>{item.phoneNumber}</td>
                <td>{item.roles?.map(role => role.role).join(', ')}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </>
  );
};

export default UserTable;
