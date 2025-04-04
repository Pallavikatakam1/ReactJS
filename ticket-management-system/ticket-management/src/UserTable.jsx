import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";

const UserTable = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  
  useEffect(() => {
    axios
      .get("http://localhost:8080/users")
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching user data:", error);
      });
  }, []);

  const handleTickets = () => {
    navigate("/ticketTable");
  };

  const handleLogout = () => {
    navigate("/");
  };

  return (
    <div className="container">
      <div className="user-table-buttons">
        <Button variant="secondary" onClick={handleLogout} className="me-2">
          Logout
        </Button>
        <Button variant="info" onClick={handleTickets}>
          Tickets Table
        </Button>
      </div>

      <h3 className="mt-4 mb-3">User List</h3>

      <Table striped bordered hover className="user-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>User Name</th>
            <th>Email</th>
            <th>Department</th>
            <th>Phone Number</th>
            <th>Roles</th>
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
              <td>
                {item.roles?.map((role) => role.roleName).join(", ") || "N/A"}
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default UserTable;
