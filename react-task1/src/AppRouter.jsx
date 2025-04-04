// 
import DataEntry from "./DataEntry";
import Table from "./Table";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Header from './Header'; // Import the Header component
import Footer from './Footer'; // Import the Footer component

const AppRouter = () => {
  const [data, setData] = useState([]);
  const [editEntry, setEditEntry] = useState(null);

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem('extraData')) || [];
    setData(storedData);
  }, []);

  const saveLocalData = (entries) => {
    localStorage.setItem('extraData', JSON.stringify(entries));
    setData(entries);
  };

  return (   
    <Router> 
      <Header /> {/* Add Header here */}
      <Routes>
        <Route path='/' element={<Table data={data} setData={saveLocalData} setEditEntry={setEditEntry} />} />
        <Route path='/DataEntry' element={<DataEntry data={data} setData={saveLocalData} editEntry={editEntry} />} />
      </Routes>
    </Router>
    
  );
};

export default AppRouter;
