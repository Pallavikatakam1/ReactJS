// components/ExpenseForm.jsx
import React, { useState } from 'react';

const ExpenseForm = ({ isEditing, editExpense, onSave, onCancel }) => {
  const [formData, setFormData] = useState({
    id: isEditing ? editExpense.id : '',
    date: isEditing ? editExpense.date : '',
    category: isEditing ? editExpense.category : '',
    amount: isEditing ? editExpense.amount : '',
    paymentMethod: isEditing ? editExpense.paymentMethod : '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
    // Save to localStorage after saving the expense
    const savedExpenses = JSON.parse(localStorage.getItem('expenses')) || [];
    savedExpenses.push(formData);
    localStorage.setItem('expenses', JSON.stringify(savedExpenses));  // Save to localStorage
  };

  return (
    <div>
      <h2>{isEditing ? 'Edit Expense' : 'Add Expense'}</h2>
      <form onSubmit={handleSubmit}>
        <label>Date:</label>
        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          required
        />
        <label>Category:</label>
        <select
          name="category"
          value={formData.category}
          onChange={handleChange}
          required
        >
          <option value="">Select Category</option>
          <option value="Food">Food</option>
          <option value="Travel">Travel</option>
          <option value="Bills">Bills</option>
        </select>
        <label>Amount ($):</label>
        <input
          type="number"
          name="amount"
          value={formData.amount}
          onChange={handleChange}
          required
        />
        <label>Payment Method:</label>
        <select
          name="paymentMethod"
          value={formData.paymentMethod}
          onChange={handleChange}
          required
        >
          <option value="">Select Payment Method</option>
          <option value="Cash">Cash</option>
          <option value="Card">Card</option>
          <option value="UPI">UPI</option>
        </select>
        <button type="submit">Save</button>
        <button type="button" onClick={onCancel}>Cancel</button>
      </form>
    </div>
  );
};

export default ExpenseForm;
