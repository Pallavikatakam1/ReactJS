import { useState } from 'react';
import RoutesFile from './RoutesFile';
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <RoutesFile />
   </>
  )
}

export default App
