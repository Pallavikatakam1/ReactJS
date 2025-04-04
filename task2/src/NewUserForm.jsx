import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

function NewUserForm({ addUser, updateUser, user, isEdit }) {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    id: '',
    name: '',
    phone: '',
    company: '',
    city: '',
  });

  // Update form state when editing an existing user
  useEffect(() => {
    if (isEdit && user) {
      setFormData({
        id: user.id,
        name: user.name,
        phone: user.phone,
        company: user.company.name,
        city: user.address.city,
      });
    }
  }, [isEdit, user]);

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission (Add or Update)
  const handleSubmit = (e) => {
    e.preventDefault();
    const newUser = {
      id: isEdit ? formData.id : Date.now(),  // New ID for new user
      name: formData.name,
      phone: formData.phone,
      company: { name: formData.company },
      address: { city: formData.city },
    };

    if (isEdit) {
      updateUser(newUser); // Call updateUser if editing
    } else {
      addUser(newUser); // Call addUser if adding new user
    }

    navigate('/');  // Go back to the dashboard
  };

  return (
    <div>
      <h2>{isEdit ? 'Edit User' : 'Add New User'}</h2>

      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
          />
        </label>

        <label>
          Phone:
          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
          />
        </label>

        <label>
          Company:
          <input
            type="text"
            name="company"
            value={formData.company}
            onChange={handleInputChange}
          />
        </label>

        <label>
          City:
          <input
            type="text"
            name="city"
            value={formData.city}
            onChange={handleInputChange}
          />
        </label>

        <button type="submit">{isEdit ? 'Update User' : 'Add User'}</button>
      </form>
    </div>
  );
}

export default NewUserForm;
