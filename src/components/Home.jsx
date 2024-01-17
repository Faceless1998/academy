// import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
// import { Course } from "./Course";
// import { Gallery } from "./Gallery";
// import { Mentors } from "./Mentors";
// import { Partners } from "./Partners";
// import { AboutUs } from "./AboutUs";


import './Home.css'

import PartScrol1 from '../assets/images/PartScrol1.png';
import PartScrol2 from '../assets/images/PartScrol2.png';
import PartScrol3 from '../assets/images/PartScrol3.png';

import Slider from 'react-slick';

import React, { useState } from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


export const Home = () => {

    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
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
    
      const images = [PartScrol1, PartScrol2, PartScrol3];

    return (
        <Router>
           <div>
                {/* <div>
                    <button>Course</button>
                    <button>Gallery</button>
                    <button>Mentors</button>
                    <button>Partners</button>
                    <button>AboutUs</button>
                </div> */}
                <div>
                    <Link to={`./Course/`} rel="noopener noreferrer">
                        <button>Course</button>
                    </Link>
                    <Link to={`./Gallery/`} rel="noopener noreferrer">
                        <button>Gallery</button>
                    </Link>
                    <Link to={`./Mentors/`} rel="noopener noreferrer">
                        <button>Mentors</button>
                    </Link>
                    <Link to={`./Partners/`} rel="noopener noreferrer">
                        <button>Partners</button>
                    </Link>
                    <Link to={`./AboutUs/`} rel="noopener noreferrer">
                        <button>AboutUs</button>
                    </Link>
                    {/* <Link to={Course} rel="noopener noreferrer">
                        <button>Course</button>
                    </Link>
                    <Link to={Gallery} rel="noopener noreferrer">
                        <button>Gallery</button>
                    </Link>
                    <Link to={Mentors} rel="noopener noreferrer">
                        <button>Mentors</button>
                    </Link>
                    <Link to={Partners} rel="noopener noreferrer">
                        <button>Partners</button>
                    </Link>
                    <Link to={AboutUs} rel="noopener noreferrer">
                        <button>AboutUs</button>
                    </Link> */}
                </div>
                <div>
                    <div>
                        <Slider {...settings}>
                            {images.map((image, index) => (
                                <div
                                    key={index}
                                    className={`carousel-item ${isHovered === index ? 'enlarged' : ''}`}
                                    onMouseEnter={() => handleMouseEnter(index)}
                                    onMouseLeave={handleMouseLeave}
                                >
                                    <img src={image} alt={`Зображення ${index + 1}`} />
                                </div>
                            ))}
                        </Slider>
                    </div>
                    <div>2</div>
                    <div>3</div>
                    <div>4</div>
                </div>
                <div>
                    <div>5</div>
                </div>
            </div>
        </Router>
    )
}