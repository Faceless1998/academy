
// import { Link } from 'react-router-dom';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import React from 'react';

import './Course.css'
import './CourseDetal.jsx'
// import { CourseDetal } from "./CourseDetal.jsx";


import Course1 from "../assets/images/Course1.jpg";
import Course2 from "../assets/images/Course2.jpg";
import Course3 from "../assets/images/Course3.jpg";
import Course4 from "../assets/images/Course4.jpg";
import Course5 from "../assets/images/Course5.jpg";
import Course6 from "../assets/images/Course6.jpg";


const courseData = [
    { 
        image: Course1, 
        title: 'Course One', 
        price: '1500 ₾',
        data: 'September 26',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, saepe accusamus',
        description1: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum, fugiat accusantium. Obcaecati voluptates necessitatibus soluta inventore quibusdam, ab consequuntur ipsum quas in veniam minima, possimus cupiditate reprehenderit cumque placeat optio!',
        description2: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum, fugiat accusantium. Obcaecati voluptates necessitatibus soluta inventore quibusdam, ab consequuntur ipsum quas in veniam minima, possimus cupiditate reprehenderit cumque placeat optio!'  
    },
    { 
        image: Course2, 
        title: 'Course One', 
        price: '1500 ₾',
        data: 'September 26',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, saepe accusamus',
        description1: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum, fugiat accusantium. Obcaecati voluptates necessitatibus soluta inventore quibusdam, ab consequuntur ipsum quas in veniam minima, possimus cupiditate reprehenderit cumque placeat optio!',
        description2: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum, fugiat accusantium. Obcaecati voluptates necessitatibus soluta inventore quibusdam, ab consequuntur ipsum quas in veniam minima, possimus cupiditate reprehenderit cumque placeat optio!'  
    },
    { 
        image: Course3, 
        title: 'Course One', 
        price: '1500 ₾',
        data: 'September 26',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, saepe accusamus',
        description1: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum, fugiat accusantium. Obcaecati voluptates necessitatibus soluta inventore quibusdam, ab consequuntur ipsum quas in veniam minima, possimus cupiditate reprehenderit cumque placeat optio!',
        description2: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum, fugiat accusantium. Obcaecati voluptates necessitatibus soluta inventore quibusdam, ab consequuntur ipsum quas in veniam minima, possimus cupiditate reprehenderit cumque placeat optio!'  
    },
    { 
        image: Course4, 
        title: 'Course One', 
        price: '1500 ₾',
        data: 'September 26',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, saepe accusamus',
        description1: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum, fugiat accusantium. Obcaecati voluptates necessitatibus soluta inventore quibusdam, ab consequuntur ipsum quas in veniam minima, possimus cupiditate reprehenderit cumque placeat optio!',
        description2: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum, fugiat accusantium. Obcaecati voluptates necessitatibus soluta inventore quibusdam, ab consequuntur ipsum quas in veniam minima, possimus cupiditate reprehenderit cumque placeat optio!'  
    },
    { 
        image: Course5, 
        title: 'Course One', 
        price: '1500 ₾',
        data: 'September 26',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, saepe accusamus',
        description1: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum, fugiat accusantium. Obcaecati voluptates necessitatibus soluta inventore quibusdam, ab consequuntur ipsum quas in veniam minima, possimus cupiditate reprehenderit cumque placeat optio!',
        description2: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum, fugiat accusantium. Obcaecati voluptates necessitatibus soluta inventore quibusdam, ab consequuntur ipsum quas in veniam minima, possimus cupiditate reprehenderit cumque placeat optio!'  
    },
    { 
        image: Course6, 
        title: 'Course One', 
        price: '1500 ₾',
        data: 'September 26',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, saepe accusamus',
        description1: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum, fugiat accusantium. Obcaecati voluptates necessitatibus soluta inventore quibusdam, ab consequuntur ipsum quas in veniam minima, possimus cupiditate reprehenderit cumque placeat optio!',
        description2: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum, fugiat accusantium. Obcaecati voluptates necessitatibus soluta inventore quibusdam, ab consequuntur ipsum quas in veniam minima, possimus cupiditate reprehenderit cumque placeat optio!'  
    }
];

export const Course = () => {
    return (
        <Router>
            <div className='course'>
                <h1 className='titel'>COURSE</h1>
                <div className='coursContainer'>
                    {courseData.map((course, index) => (
                    <div className='card' key={index}>
                        <div className='coursImg'>
                            <img src={course.image} alt={`Зображення ${index + 1}`} />
                        </div>
                        <div className='coursContent'>
                            <h1>{course.title}</h1>
                            <h2>{course.price}</h2>
                            <p>{course.data}</p>
                            <p>{course.text}</p>
                            {/* <button>READ MORE --</button> */}
                            <Link to={`./CourseDetal.jsx/${index}`} target="_blank" rel="noopener noreferrer">
                                <button>READ MORE --</button>
                            </Link>
                            {/* <Link to={`/about/partners/${index}`}>
                                <div className="cardn">
                                <img
                                    src={img.src}
                                    alt=""
                                    style={{ width: "100%", height: "auto" }}
                                />
                                </div>
                            </Link> */}
                        </div>
                    </div>
                    ))}
                </div>
            </div>
        </Router>
      
    );
};



















// {
//     "courseData": [
//       {
//         "id": 1,
//         "image": "Course1",
//         "title": "Course One",
//         "price": "1500 ₾",
//         "data": "September 26",
//         "text": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, saepe accusamus"
//       },
//       {
//         "id": 2,
//         "image": "Course2",
//         "title": "Course Two",
//         "price": "1500 ₾",
//         "data": "September 26",
//         "text": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, saepe accusamus"
//       },
//       {
//         "id": 3,
//         "image": "Course3",
//         "title": "Course Three",
//         "price": "1500 ₾",
//         "data": "September 26",
//         "text": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, saepe accusamus"
//       },
//       {
//         "id": 4,
//         "image": "Course4",
//         "title": "Course Four",
//         "price": "1500 ₾",
//         "data": "September 26",
//         "text": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, saepe accusamus"
//       },
//       {
//         "id": 5,
//         "image": "Course5",
//         "title": "Course Five",
//         "price": "1500 ₾",
//         "data": "September 26",
//         "text": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, saepe accusamus"
//       },
//       {
//         "id": 6,
//         "image": "Course6",
//         "title": "Course Six",
//         "price": "1500 ₾",
//         "data": "September 26",
//         "text": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, saepe accusamus"
//       }
//     ]
// }