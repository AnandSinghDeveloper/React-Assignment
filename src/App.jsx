import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'


import React from 'react'
import Home from './Components/Home'
import Login from './Components/Login'
import SignUP from './Components/SignUP'
import HomeScreen from './Components/HomeScreen'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUP />} />
      <Route path="/homescreen" element={<HomeScreen />} />
    </Routes>
   
      
    </>
  )
}

export default App
