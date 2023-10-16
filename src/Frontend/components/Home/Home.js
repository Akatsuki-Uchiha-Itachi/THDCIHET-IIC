import React from 'react'
import Cover from './components/Cover'
import Navbar from './components/Navbar'
import Stats from './components/Stats'
import Innovation from './components/Innovation'
import About_us from './components/About_us'
import './css/Home.css'
import About from './components/About'
import Footer from './components/Footer'

const Home = () => {
  return (
    <div className='main-container'>
      <Navbar/>
      <Cover/>
      <About_us/>
      <About/>
      <Footer/>
    </div>
  )
}

export default Home
