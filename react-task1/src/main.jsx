import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App'; // Ensure you're importing the default export correctly here

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />  {/* Use <App /> here */}
  </StrictMode>
);
