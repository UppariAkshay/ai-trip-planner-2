import { useState } from 'react'
import './App.css'
import Home from './Routes/Home'
import Navbar from './Components/Navbar'
import AppTitleHeading from './Components/MainHeading'
import CreateTrip from './Routes/CreateTrip'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter >
      <Routes>
        <Route path ='/' element={<Home />} />
        <Route path ='/create-newtrip' element={<CreateTrip />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
