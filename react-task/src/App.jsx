// App.jsx
import React, { useState, useEffect } from 'react';
import './app.css';
import { Link } from 'react-router-dom';
import ExpenseSummary from './ExpenseSummary';
import ExpenseList from './ExpenseList';
import ExpenseForm from './ExpenseForm';

const App = () => {
  const [expenses, setExpenses] = useState([]);

  useEffect(() => {
    const savedExpenses = JSON.parse(localStorage.getItem('expenses')) || [];
    setExpenses(savedExpenses);
    localStorage.setItem('expenses', JSON.stringify(savedExpenses)); 
  }, []);

  return (
    <div className="app-container">
      <h1>Expense Tracker</h1>

      <ExpenseSummary expenses={expenses} />

      <div className="navigation">
        <Link to="/add-expense">
          <button>Add New Expense</button>
        </Link>
        <Link to="/expense-list">
          <button>View Expense List</button>
        </Link>
      </div>

      <ExpenseList expenses={expenses} />
    </div>
  );
};

export default App;
