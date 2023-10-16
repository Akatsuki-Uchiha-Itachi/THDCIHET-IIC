import React from 'react';
import '../css/Cover.css';


const Cover = () => {

  return (
    <div className="cover-container">
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
        
      </div>
    </div>
  );
}

export default Cover;
