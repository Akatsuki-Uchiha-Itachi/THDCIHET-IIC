import React from 'react'
import '../css/Navbar.css'
import {Link} from 'react-router-dom'
import logo from '../../images/icons/logo.svg'

const Navbar = () => {
 
  return (
    <nav className='navbar' >
      <span className='navbar-logo'>
        <img src={logo} alt="hello" className="logo"/>
      </span>
      <ul className='navbar-links'>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/events'>Events</Link></li>
        <li><Link to='/login'>Login</Link></li>
        {/* <li><Link to='/about'>About</Link></li> */}
      </ul>
    </nav>
  )
}

export default Navbar
