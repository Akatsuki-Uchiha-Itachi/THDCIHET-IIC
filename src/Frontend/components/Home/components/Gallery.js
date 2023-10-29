import React from 'react'
import '../css/Gallery.css';
import img1 from '../../../images/gallery/img1.jpg'
import img2 from '../../../images/gallery/img2.jpg'
import img3 from '../../../images/gallery/img3.JPG'
import img4 from '../../../images/gallery/img4.JPG'
import img5 from '../../../images/gallery/img5.JPG'
import img6 from '../../../images/gallery/img6.JPG'

const Gallery = () => {
  return (
    <div className="gallery-container">
      <div className="gallery-title">Gallery</div>
      <div className="gallery-row">
        <img src={img1} alt="Image 1" className="gallery-image" />
        <img src={img2} alt="Image 2" className="gallery-image" />
        <img src={img3} alt="Image 3" className="gallery-image" />
      </div>
      <div className="gallery-row">
        <img src={img4} alt="Image 4" className="gallery-image" />
        <img src={img5} alt="Image 5" className="gallery-image" />
        <img src={img6} alt="Image 6" className="gallery-image" />
      </div>
    </div>
  )
}

export default Gallery
