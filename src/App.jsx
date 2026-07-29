import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from './component/Navbar'
import HomePage from './pages/HomePage'
import Footer from './component/Footer'

const App = () => {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route  path='/' element={<HomePage/>}/>
      </Routes>
      <Footer/>
    </>
  )
}

export default App
