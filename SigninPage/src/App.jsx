import { useState } from 'react'
// import './App.css'
import Signup from './Signup.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import "react-datepicker/dist/react-datepicker.css";
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Signup />
    </>
  )
}

export default App
