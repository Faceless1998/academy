
// import React, { useState } from 'react';
// import Slider from 'react-slick';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';
// import './Mentors.css'

// import Mentor1 from "../assets/images/Mentor1.png";
// import Mentor2 from "../assets/images/Mentor2.png";
// import Mentor3 from "../assets/images/Mentor3.png";
// import Mentor4 from "../assets/images/Mentor4.png";
// import Mentor5 from "../assets/images/Mentor5.png";

// const mentorData = [
//     { 
//         image: Mentor1, 
//         title: 'Card One', 
//         text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum culpa natus velit voluptatem fuga, quas atque numquam accusantium eius doloremque sapiente, saepe eos exercitationem, ad necessitatibus a? Neque, deserunt qui!' 
//     },
//     { 
//         image: Mentor2, 
//         title: 'Card Two', 
//         text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum culpa natus velit voluptatem fuga, quas atque numquam accusantium eius doloremque sapiente, saepe eos exercitationem, ad necessitatibus a? Neque, deserunt qui!' 
//     },
//     { 
//         image: Mentor3, 
//         title: 'Card Three', 
//         text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum culpa natus velit voluptatem fuga, quas atque numquam accusantium eius doloremque sapiente, saepe eos exercitationem, ad necessitatibus a? Neque, deserunt qui!' 
//     },
//     { 
//         image: Mentor4, 
//         title: 'Card Four', 
//         text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum culpa natus velit voluptatem fuga, quas atque numquam accusantium eius doloremque sapiente, saepe eos exercitationem, ad necessitatibus a? Neque, deserunt qui!' 
//     },
//     { 
//         image: Mentor5, 
//         title: 'Card Five', 
//         text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum culpa natus velit voluptatem fuga, quas atque numquam accusantium eius doloremque sapiente, saepe eos exercitationem, ad necessitatibus a? Neque, deserunt qui!' 
//     },
// ];

// export const Mentors = () => {
//   const settings = {
//     infinite: true,
//     speed: 500,
//     slidesToShow: 3,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 1000,
//   };

//   const [isHovered, setIsHovered] = useState(false);

//   const handleMouseEnter = (index) => {
//     setIsHovered(index);
//   };

//   const handleMouseLeave = () => {
//     setIsHovered(null);
//   };

//   return (
//     <div className='partners'>
//       <h1>MENTORS</h1>
//       <Slider {...settings}>
//         {mentorData.map((mentor, index) => (
//           <div
//             key={index}
//             className={`carousel-item ${isHovered === index ? 'enlarged' : ''}`}
//             onMouseEnter={() => handleMouseEnter(index)}
//             onMouseLeave={handleMouseLeave}
//           >
//             <img src={mentor.image} alt={`Зображення ${index + 1}`} />
//           </div>
//         ))}
//       </Slider>

//       <div className='container'>
//         {mentorData.map((mentor, index) => (
//           <div className='card' key={index}>
//             <div className='imgBX'>
//               <img src={mentor.image} alt={`Зображення ${index + 1}`} />
//             </div>
//             <div className='content'>
//               <h2>{mentor.title}</h2>
//               <p>{mentor.text}</p>
//             </div>
//           </div>
//         ))}
//       </div>

//       <p>
//         Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint enim iste
//         tenetur nam dolorem, accusamus ratione numquam facilis sequi minima fuga
//         possimus eius sit earum, nihil magni? Voluptate, perspiciatis soluta.
//       </p>
//     </div>
//   );
// };































// import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Mentors.css'

import Mentor1 from "../assets/images/Mentor1.png";
import Mentor2 from "../assets/images/Mentor2.png";
import Mentor3 from "../assets/images/Mentor3.png";
import Mentor4 from "../assets/images/Mentor4.png";
import Mentor5 from "../assets/images/Mentor5.png";

const mentorData = [
    { 
        image: Mentor1, 
        title: 'Card One', 
        text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum culpa natus velit voluptatem fuga, quas atque numquam accusantium eius doloremque sapiente, saepe eos exercitationem, ad necessitatibus a? Neque, deserunt qui!' 
    },
    { 
        image: Mentor2, 
        title: 'Card Two', 
        text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum culpa natus velit voluptatem fuga, quas atque numquam accusantium eius doloremque sapiente, saepe eos exercitationem, ad necessitatibus a? Neque, deserunt qui!' 
    },
    { 
        image: Mentor3, 
        title: 'Card Three', 
        text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum culpa natus velit voluptatem fuga, quas atque numquam accusantium eius doloremque sapiente, saepe eos exercitationem, ad necessitatibus a? Neque, deserunt qui!' 
    },
    { 
        image: Mentor4, 
        title: 'Card Four', 
        text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum culpa natus velit voluptatem fuga, quas atque numquam accusantium eius doloremque sapiente, saepe eos exercitationem, ad necessitatibus a? Neque, deserunt qui!' 
    },
    { 
        image: Mentor5, 
        title: 'Card Five', 
        text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum culpa natus velit voluptatem fuga, quas atque numquam accusantium eius doloremque sapiente, saepe eos exercitationem, ad necessitatibus a? Neque, deserunt qui!' 
    },
];

export const Mentors = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };
  
  return (
    <div className='mentors'>
      <h1 className='titel'>MENTORS</h1>
      <Slider {...settings}>
        {mentorData.map((mentor, index) => (
          <div className='container'>
            <div className='card' key={index}>
                <div className='imgBX'>
                    <img src={mentor.image} alt={`Зображення ${index + 1}`} className='imgB'/>
                </div>
                <div className='content'>
                    <h2>{mentor.title}</h2>
                    <p>{mentor.text}</p>
                </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};


