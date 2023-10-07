import React from 'react'
import '../../css/Navbar.css'
import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='navbar' >
      <span className='navbar-logo'>ICL</span>
      <ul className='navbar-links'>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/about'>About</Link></li>
      </ul>
    </nav>
  )
}

export default Navbar
