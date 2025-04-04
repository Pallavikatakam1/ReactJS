import React from 'react';
import ExpenseForm from './ExpenseForm';

const ExpenseList = ({ expenses, onEdit, onDelete }) => {
  
  return (
    <div>
     
        <table className="expense-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Date</th>
              <th>Category</th>
              <th>Amount</th>
              <th>Payment Method</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
              <tr key={expense.id}>
                <td>{expense.id}</td>
                <td>{expense.date}</td>
                <td>{expense.category}</td>
                <td>${expense.amount}</td>
                <td>{expense.paymentMethod}</td>
                <td>
                  <button onClick={() => onEdit(expense.id)}>Edit</button>
                  <button onClick={() => onDelete(expense.id)}>Delete</button>
                </td>
              </tr>
         
          </tbody>
        </table>
      
    </div>
  );
};

export default ExpenseList;
