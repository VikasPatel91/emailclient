import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './pages/Navbar'
import Home from './pages/Home'
import Email from './pages/Email'
import Add from './pages/Add'
import Temp from './pages/Temp'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<><Navbar/><Home/></>} />
          <Route path='/email' element={<><Navbar/><Email/></>} />
          <Route path='/add' element={<><Navbar/><Add/></>} />
          <Route path='/temp' element={<><Navbar/><Temp/></>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App