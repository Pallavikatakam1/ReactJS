import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RegistrationForm from './RegistrationForm.jsx';
import SubmitPage from './SubmitPage.jsx';

function RoutesFile() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<RegistrationForm />} />
        <Route path="/SubmitPage" element={<SubmitPage />} />
      </Routes>
    </Router>
  );
}

export default RoutesFile;
