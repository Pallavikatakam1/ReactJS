import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [Text, setText] = useState(null)

  return (
    <>
      <input type="text" placeholder='Enter text' value={Text} onChange={(e)=>setText(e.target.value)} />

      <p>{
        Text
        }</p>
    </>
  )
}

export default App
