import React from 'react';
import ReactDOM from 'react-dom/client'; // For React 18+
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import App from './App';
import NewUserForm from './NewUserForm';

// Create the root using ReactDOM.createRoot
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render your application
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/new-user" element={<NewUserForm />} />
        <Route path="/edit-user/:id" element={<NewUserForm />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
