import { useState } from 'react'
import './App.css';
import RouterFile from "./RouterFile.jsx";
import 'bootstrap/dist/css/bootstrap.min.css'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <RouterFile/>
       
    </>
  )
}

export default App;
