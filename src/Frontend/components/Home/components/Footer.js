import React from 'react'
import '../css/Footer.css'
import fb from '../../../images/icons/fb.svg'

const Footer = () => {
  return (
    <div className="footer-main">
        <div className="footer-sociallinks">
            <img src={fb} alt="fb" />
            <img src={fb} alt="insta" />
            <img src={fb} alt="linkedin" />
        </div>
        <div className="footer-links">
            <span>Info</span>
            <span>Support</span>
            <span>Marketing</span>
            <span>Term of Use</span>
            <span>Privacy Policy</span>
        </div>
        <div className="footer-copyright">
          &copy; IIC THDCIHET 2023
        </div>
    </div>
  )
}

export default Footer
