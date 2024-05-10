import React from 'react'
import Hero from '../components/Hero'
import AskQuestion from '../components/AskQuestion'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

const HomePage = () => {
  return (
    <>
        <Navbar/>
        <Hero/>
        <AskQuestion/>
        <Footer />
    </>
  )
}

export default HomePage