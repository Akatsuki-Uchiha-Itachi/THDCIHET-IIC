import React from 'react'
import Navbar from '../../common/components/Navbar'
import './css/Auth.css'
import Login from './components/Login'

const Auth = () => {
  return (
    <div className='main-container'>
      <Navbar/>
      <Login/>
    </div>
  )
}

export default Auth
