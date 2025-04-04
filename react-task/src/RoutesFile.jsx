// Routes.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import App from './App';
import ExpenseForm from './ExpenseList'; // A new component for adding an expense
import ExpenseList from './ExpenseList'; // Expense list page
import ExpenseSummary from './ExpenseSummary'; // Summary page

const RoutesPage = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/add-expense" element={<ExpenseForm />} />
        <Route path="/expense-list" element={<ExpenseList />} />
        <Route path="/expense-summary" element={<ExpenseSummary />} />
      </Routes>
    </Router>
  );
}

export default RoutesPage;
