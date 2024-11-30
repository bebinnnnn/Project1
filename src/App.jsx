import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Components/Nav'
import { Route, Routes } from 'react-router-dom'
import Home from './Components/Home'
import Add from './Components/Add'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Navbar/>
        <Routes>
          <Route path="/home" element={<Home/>}/>
          <Route path="/add" element={<Add/>}/>
        </Routes>

      </div>

    </>
  )
}


export default App