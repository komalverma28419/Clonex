import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from './component/Navbar'
import HomePage from './pages/HomePage'
import Footer from './component/Footer'
import PricingPage from './pages/PricingPage'

const App = () => {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route  path='/' element={<HomePage/>}/>
        <Route path='/price' element={<PricingPage/>}/>
      </Routes>
      <Footer/>
    </>
  )
}

export default App
