import React from 'react'
import Cover from './components/Cover'
import Navbar from '../../common/components/Navbar'
import Stats from './components/Stats'
import Innovation from './components/Innovation'
import About_us from './components/About_us'
import './css/Home.css'
import About from './components/About'
import Footer from './components/Footer'
import Gallery from './components/Gallery'

const Home = () => {
  return (
    <div className='main-container'>
      <Navbar/>
      <Cover/>
      <About_us/>
      <Gallery/>
      <About/>
      <Footer/>
    </div>
  )
}

export default Home
