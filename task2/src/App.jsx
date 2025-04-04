import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Table from './Table';

function App() {
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  // Fetching users from the API
  useEffect(() => {
    const fetchUsers = async () => {
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      const data = await response.json();
      setUsers(data);
    };
    fetchUsers();
  }, []);

  // Adding a new user to the list
  const addUser = (user) => {
    setUsers((prevUsers) => [...prevUsers, user]);
  };

  // Updating an existing user
  const updateUser = (updatedUser) => {
    setUsers((prevUsers) =>
      prevUsers.map((user) =>
        user.id === updatedUser.id ? updatedUser : user
      )
    );
  };

  // Handle search input
  const handleSearch = (event) => {
    setSearchTerm(event.target.value.toLowerCase());
  };

  // Handle clicking on the "New User" button
  const handleNewUser = () => {
    navigate('/new-user', { state: { isEdit: false } });
  };

  // Filter users based on the search term
  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(searchTerm)
  );

  return (
    <div>
      <h1>User Management</h1>
      <div>
        <input
          type="text"
          placeholder="Search by name"
          value={searchTerm}
          onChange={handleSearch}
        />
        <button onClick={handleNewUser}>New User</button>
      </div>
      <Table users={filteredUsers} />
    </div>
  );
}

export default App;
