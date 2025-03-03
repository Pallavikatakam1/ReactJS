import { useState } from 'react'
import reactLogo from './assets/tom.jpg'
import viteLogo from '/dore.jpg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  function decrease(){
    setCount(((count)=> count - 1));
  }

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <br />
        <br />
        <button onClick={decrease}>
          count is {count}
        </button>
       
      </div>
      
    </>
  )
}

export default App
