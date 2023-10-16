import React from 'react'
import '../css/About.css'
import about_svg from '../../../images/icons/About.svg'

const About = () => {
  return (
    <div className='about-main'>
        <div className="about-main-left">
            <div className="about-title">
                ABOUT US
            </div>
            <div className="about-img">
                <img src={about_svg} alt="vector" />
            </div>
        </div>
        <div className="about-main-right">
            <p>
                THDC Institute of Hydropower Engineering and Technology (THDCIHET) <br/>
                Innovation Council or IIC is formed in order to provide a dynamic platform<br/>
                dedicated to fostering innovation, creativity, and entrepreurship among our students.<br/>
                Created under the Guidance of the Ministry of Education.
            </p>
        </div>
    </div>
  )
}

export default About
