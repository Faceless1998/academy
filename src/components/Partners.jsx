
import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Partners.css'

import PartScrol1 from '../assets/images/PartScrol1.png';
import PartScrol2 from '../assets/images/PartScrol2.png';
import PartScrol3 from '../assets/images/PartScrol3.png';
import PartScrol4 from '../assets/images/PartScrol4.png';
import PartScrol5 from '../assets/images/PartScrol5.png';



export const Partners = () => {

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 1000,
  };
  
  const [isHovered, setIsHovered] = useState(false);

  // const handleMouseEnter = () => {
  //   setIsHovered(true);
  // };

  // const handleMouseLeave = () => {
  //   setIsHovered(false);
  // };

  const handleMouseEnter = (index) => {
    setIsHovered(index);
  };

  const handleMouseLeave = () => {
    setIsHovered(null);
  };

  const images = [PartScrol1, PartScrol2, PartScrol3, PartScrol4, PartScrol5];

  
  return (
    <div className='partners'>
      <h1>PARTNERS</h1>
      <h4>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint enim iste
        tenetur nam dolorem, accusamus ratione numquam facilis sequi minima fuga
        possimus eius sit earum, nihil magni? Voluptate, perspiciatis soluta.
      </h4>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint enim iste
        tenetur nam dolorem, accusamus ratione numquam facilis sequi minima fuga
        possimus eius sit earum, nihil magni? Voluptate, perspiciatis soluta.
      </p>
      <Slider {...settings}>
        {images.map((image, index) => (
          <div
            key={index}
            className={`carousel-item ${isHovered === index ? '' : ''}`}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
          >
            <img src={image} alt={`Зображення ${index + 1}`} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

// export default Partners;


// <div className={`carousel-item ${isHovered ? 'enlarged' : ''}`}>
//   <img 
//     src={PartScrol1} 
//     alt="Зображення 1" 
//     onMouseEnter={handleMouseEnter}
//     onMouseLeave={handleMouseLeave}
//   />
// </div>
// <div className={`carousel-item ${isHovered ? 'enlarged' : ''}`}>
//   <img 
//     src={PartScrol2} 
//     alt="Зображення 2" 
//     onMouseEnter={handleMouseEnter}
//     onMouseLeave={handleMouseLeave}
//   />
// </div>
// <div className={`carousel-item ${isHovered ? 'enlarged' : ''}`}>
//   <img 
//     src={PartScrol3} 
//     alt="Зображення 3" 
//     onMouseEnter={handleMouseEnter}
//     onMouseLeave={handleMouseLeave}
//   />
// </div>
// <div className={`carousel-item ${isHovered ? 'enlarged' : ''}`}>
//   <img 
//     src={PartScrol4} 
//     alt="Зображення 4" 
//     onMouseEnter={handleMouseEnter}
//     onMouseLeave={handleMouseLeave}
//   />
// </div>
// <div className={`carousel-item ${isHovered ? 'enlarged' : ''}`}>
//   <img 
//     src={PartScrol5} 
//     alt="Зображення 5" 
//     onMouseEnter={handleMouseEnter}
//     onMouseLeave={handleMouseLeave}
//   />
// </div>