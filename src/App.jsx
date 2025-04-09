import { useState } from 'react'
import './App.css'
import Home from './Routes/Home'
import Navbar from './Components/Navbar'
import AppTitleHeading from './Components/MainHeading'
import CreateTrip from './Routes/CreateTrip'
import ViewTrip from './Routes/ViewTrip'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './Routes/Login'
import ProtectedRoute from './Routes/ProtectedRoute'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter >
      <Routes>
        <Route path ='/' element={<ProtectedRoute> <Home /> </ProtectedRoute>} />
        <Route path='/login' element={<Login />} />
        <Route path ='/create-newtrip' element={<ProtectedRoute> <CreateTrip /> </ProtectedRoute> } />
        <Route path='/view-trip/:tripID' element={<ProtectedRoute> <ViewTrip /> </ProtectedRoute>} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
