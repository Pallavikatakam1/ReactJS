import { useState } from 'react'
import RoutesFile from './RoutesFile.jsx';



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <RoutesFile/>
    </>
  )
}

export default App;
