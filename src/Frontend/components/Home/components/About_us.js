import React from 'react'
import president from '../../../images/people/president.jpg'
import noimg from '../../../images/people/nopic.png'
import '../css/About_us.css'
import nikhil from '../../../images/people/nikhil.jpg'

const About_us = () => {
    return (
        <>
        <div className="aboutus-title">
            Meet Our Team
        </div>
        <div className='aboutus-main'>
            
            <div className="aboutus-people">
                <div className="aboutus-img-container">
                    <img src={president} alt="" className="aboutus-img" />
                </div>
                <div className="aboutus-info">
                    <h6>
                        Sharad
                    </h6>
                    <span>
                        President
                    </span>
                </div>
            </div>
            <div className="aboutus-people">
                <div className="aboutus-img-container">
                    <img src={noimg} alt="" className="aboutus-img" />
                </div>
                <div className="aboutus-info">
                    <h6>
                        Dr. Bhuvan Damahe
                    </h6>
                    <span className="aboutus-info-position">
                        Vice President
                    </span>
                </div>
            </div>
            <div className="aboutus-people">
                <div className="aboutus-img-container">
                    <img src={"https://thdcihet.ac.in/wp-content/uploads/2023/03/ramnatripathi-1017x1024.jpeg"} alt="" className="aboutus-img" />
                </div>
                <div className="aboutus-info">
                    <h6>
                        Dr. Ramna Tripathi
                    </h6>
                    <span className="aboutus-info-position">
                        Convenor
                    </span>
                </div>
            </div>
            <div className="aboutus-people">
                <div className="aboutus-img-container">
                    <img src={nikhil} alt="" className="aboutus-img" />
                </div>
                <div className="aboutus-info">
                    <h6>
                        Nikhil Gahtori
                    </h6>
                    <span className="aboutus-info-position">
                        Social Media Coordinator
                    </span>
                </div>
            </div>
            <div className="aboutus-people">
                <div className="aboutus-img-container">
                    <img src={noimg} alt="" className="aboutus-img" />
                </div>
                <div className="aboutus-info">
                    <h6>
                        Paras Khanduri
                    </h6>
                    <span className="aboutus-info-position">
                        Startup Coordinator
                    </span>
                </div>
            </div>
            <div className="aboutus-people">
                <div className="aboutus-img-container">
                    <img src={noimg} alt="" className="aboutus-img" />
                </div>
                <div className="aboutus-info">
                    <h6>
                        Swapnil Upadhay
                    </h6>
                    <span className="aboutus-info-position">
                        Innovation Coordinator
                    </span>
                </div>
            </div>
        </div>
        </>
    )
}

export default About_us
