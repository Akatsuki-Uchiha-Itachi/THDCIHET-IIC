import React from 'react'
import president from '../../../images/people/president.jpg'
import noimg from '../../../images/people/nopic.png'
import '../css/About_us.css'
import vivek from '../../../images/people/Vivek.jpg'
import mandeep from '../../../images/people/mandeep.jpeg'

import vice from '../../../images/people/vice.jpeg'

import himanshu from '../../../images/people/himanshuNautiyal.jpeg'
import mahesh from '../../../images/people/feesbarih.jpeg'

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
                    <img src={vice} alt="" className="aboutus-img" />
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
                    <img src={vivek} alt="" className="aboutus-img" />
                </div>
                <div className="aboutus-info">
                    <h6>
                    Mr. Vivek Kumar
                    </h6>
                    <span className="aboutus-info-position">
                        Social Media Coordinator
                    </span>
                </div>
            </div>
            <div className="aboutus-people">
                <div className="aboutus-img-container">
                    <img src={mandeep} alt="" className="aboutus-img" />
                </div>
                <div className="aboutus-info">
                    <h6>
                    Mr. Mandeep Guleria
                    </h6>
                    <span className="aboutus-info-position">
                    Internship Coordinator
                    </span>
                </div>
            </div>
            <div className="aboutus-people">
                <div className="aboutus-img-container">
                    <img src={himanshu} alt="" className="aboutus-img" />
                </div>
                <div className="aboutus-info">
                    <h6>
                    Mr. Himanshu Nautiyal
                    </h6>
                    <span className="aboutus-info-position">
                        Innovation Coordinator
                    </span>
                </div>
                
            </div>
            <div className="aboutus-people">
                <div className="aboutus-img-container">
                    <img src={mahesh} alt="" className="aboutus-img" />
                </div>
                <div className="aboutus-info">
                    <h6>
                    Mr. Mahesh Aghwariya
                    </h6>
                    <span className="aboutus-info-position">
                        Start up Coordinator
                    </span>
                </div>
                
            </div>
            <div className="aboutus-people">
                <div className="aboutus-img-container">
                    <img src={noimg} alt="" className="aboutus-img" />
                </div>
                <div className="aboutus-info">
                    <h6>
                    Dr. Sanjay Rawat
                    </h6>
                    <span className="aboutus-info-position">
                        IPR Coordinator
                    </span>
                </div>
                
            </div>

        </div>
        </>
    )
}

export default About_us
