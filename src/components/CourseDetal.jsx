// import './Course.css'

// import Course1 from "../assets/images/Course1.jpg";
// import Course2 from "../assets/images/Course2.jpg";
// import Course3 from "../assets/images/Course3.jpg";
// import Course4 from "../assets/images/Course4.jpg";
// import Course5 from "../assets/images/Course5.jpg";
// import Course6 from "../assets/images/Course6.jpg";


// const courseData = [
//     { 
//         image: Course1, 
//         title: 'Course One', 
//         price: '1500 ₾',
//         data: 'September 26',
//         text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, saepe accusamus' 
//     },
//     { 
//         image: Course2, 
//         title: 'Course One', 
//         price: '1500 ₾',
//         data: 'September 26',
//         text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, saepe accusamus' 
//     },
//     { 
//         image: Course3, 
//         title: 'Course One', 
//         price: '1500 ₾',
//         data: 'September 26',
//         text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, saepe accusamus' 
//     },
//     { 
//         image: Course4, 
//         title: 'Course One', 
//         price: '1500 ₾',
//         data: 'September 26',
//         text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, saepe accusamus' 
//     },
//     { 
//         image: Course5, 
//         title: 'Course One', 
//         price: '1500 ₾',
//         data: 'September 26',
//         text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, saepe accusamus' 
//     },
//     { 
//         image: Course6, 
//         title: 'Course One', 
//         price: '1500 ₾',
//         data: 'September 26',
//         text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, saepe accusamus' 
//     },
// ];


// export const Course = () => {
//     return (
//       <div className='course'>
//         {/* <h1 className='titel'>COURSE</h1> */}
//         <h1 className='titel'>HiHiHiHiHiHiHi</h1>
//         <div className='coursContainer'>
//             {courseData.map((course, index) => (
//             <div className='card' key={index}>
//                 <div className='coursImg'>
//                     <img src={course.image} alt={`Зображення ${index + 1}`} />
//                 </div>
//                 <div className='coursContent'>
//                     <h1>{course.title}</h1>
//                     <h2>{course.price}</h2>
//                     <p>{course.data}</p>
//                     <p>{course.text}</p>
//                     <button>READ MORE --</button>
//                 </div>
//             </div>
//             ))}
//         </div>
//       </div>
//     );
// };


export const CourseDetal = () => {
    return (
        <div>
            <h1>Course Detal</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint enim iste tenetur nam dolorem, accusamus ratione numquam facilis sequi minima fuga possimus eius sit earum, nihil magni? Voluptate, perspiciatis soluta.</p>
        </div>
    )
}