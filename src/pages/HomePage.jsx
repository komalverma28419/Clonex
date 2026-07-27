import React from 'react'
import Hero from '../component/home/Hero'
import About from '../component/home/About'
import Features from '../component/home/Features'
import TrustedBy from '../component/shared/TrustedBy'
import Crm from '../component/home/Crm'
// import TrustedBy from '../component/shared/TrustedBy'

const HomePage = () => {
  return (
    <>
     <Hero/>
     <About/>
     <Features/>
     <TrustedBy/>
     <Crm/>
    </>
  )
}

export default HomePage
