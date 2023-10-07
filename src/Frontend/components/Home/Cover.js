import React from 'react';
import Navbar from './Navbar';
import coverbg from '../../images/bg/coverbg.jpg'; // Import the image as "coverbg"
import '../../css/Home.css';

const Cover = () => {

  return (
    <div className="cover-container">
      <Navbar/>
      <div className="cover-content-container">
        <div className="cover-title">THDC-IHET Innovation Council</div>
        <div className="cover-links">
          <ul>
            <li>INNOVATION & START UP</li>
            <li>DESIGN THINKING</li>
            <li>IPR & TECHNOLOGY TRANSFER</li>
            <li>PRE-INCUBATION & INCUBATION MANAGMENT</li>
            <li>ENTERPRENEURSHIP DEVELOPMENT</li>

          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cover;
