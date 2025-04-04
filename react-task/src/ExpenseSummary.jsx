// components/ExpenseSummary.jsx
import React from 'react';

const ExpenseSummary = ({ expenses }) => {
  const totalExpense = expenses.reduce((acc, expense) => acc + parseFloat(expense.amount), 0).toFixed(2);

  return (
    <div className="expense-summary">
      <h3>Total Expense: ${totalExpense}</h3>
    </div>
  );
};

export default ExpenseSummary;
