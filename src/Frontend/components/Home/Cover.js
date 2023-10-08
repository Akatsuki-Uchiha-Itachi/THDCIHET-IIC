import React from 'react';
import Navbar from './Navbar';
import coverbg from '../../images/bg/coverbg.jpg'; // Import the image as "coverbg"
import '../../css/Home.css';

const Cover = () => {

  return (
    <div className="cover-container">
      <Navbar />
      <div className="cover-content-container">
        <div className="cover-title">THDC-IHET Innovation Council</div>
        <div className="cover-links">
          <div className="cover-links-group">
            <ul>
              <li>INNOVATION & START UP</li>
              <span> | </span>
              <li>DESIGN THINKING</li>
              <span> | </span>
              <li>IPR & TECHNOLOGY TRANSFER</li>
            </ul>
          </div>
          <div className="cover-links-group">
            <ul>
              <li>PRE-INCUBATION & INCUBATION MANAGMENT</li>
              <span> | </span>
              <li>ENTERPRENEURSHIP DEVELOPMENT</li>
            </ul>
          </div>
        </div>
        <div className="quote-container">
          <blockquote className='quote'>
            <p>"Student's learning-by-doing environment whose vision is to spread awareness among individuals regarding innovation and entrepreneurship"</p>
          </blockquote>
        </div>
        <div className="images-container">
          <div className="image1">
            <img src="https://thdcihet.ac.in/wp-content/uploads/2023/05/WhatsApp-Image-2023-05-17-at-9.34.00-AM.jpeg" alt="" />
          </div>
          <div className="image2">
            <img src="https://thdcihet.ac.in/wp-content/uploads/2023/03/ramnatripathi-1017x1024.jpeg" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cover;
