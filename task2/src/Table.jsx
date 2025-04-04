import React from 'react';

function Table({ users }) {
  return (
    <table>
      <thead>
        <tr>
          <th>Id</th>
          <th>Name</th>
          <th>Phone</th>
          <th>Company Name</th>
          <th>City</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user) => (
          <tr key={user.id}>
            <td>{user.id}</td>
            <td>{user.name}</td>
            <td>{user.phone}</td>
            <td>{user.company.name}</td>
            <td>{user.address.city}</td>
            <td>
              <button onClick={() => alert('Edit functionality not implemented')}>Edit</button>
              <button onClick={() => alert('Delete functionality not implemented')}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table;
