import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from './component/Navbar'
import HomePage from './pages/HomePage'
import Footer from './component/Footer'
import PricingPage from './pages/PricingPage'
import AboutPage from './pages/AboutPage'

const App = () => {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route  path='/' element={<HomePage/>}/>
        <Route path='/pricing' element={<PricingPage/>}/>
        <Route path='/about' element={<AboutPage/>}/>
      </Routes>
      <Footer/>
    </>
  )
}

export default App
