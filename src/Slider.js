import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/pagination';
import './Slider.css';
import { Pagination } from 'swiper/modules';
import { Home } from "./components/Home";
import { Course } from "./components/Course";
import { Gallery } from "./components/Gallery";
import { Mentors } from "./components/Mentors";
import { Partners } from "./components/Partners";
import { AboutUs } from "./components/AboutUs";
// import {  } from "";
// import {  } from "";



const sections=["Home", "Course", "Gallery", "Mentors", "Partners", "About Us"];

export const Slider = ({slides}) => {
    return (
        <Swiper
            spaceBetween={50}
            slidesPerView={1}
            mousewheel={true}

            className="cont"
            // height={100}
        
            direction="vertical"
            pagination={{
                clickable: true,
                renderBullet: function (index, className) {
                    return '<span class="' + className + '">' + (sections[index]) + '</span>'
              }
            }}
            modules={[Pagination]}

            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
        >
            <SwiperSlide><Home/></SwiperSlide>
            <SwiperSlide><Course/></SwiperSlide>
            <SwiperSlide><Gallery/></SwiperSlide>
            <SwiperSlide><Mentors/></SwiperSlide>
            <SwiperSlide><Partners/></SwiperSlide>
            <SwiperSlide><AboutUs/></SwiperSlide>

        </Swiper>   
    )
}