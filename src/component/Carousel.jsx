import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";



// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

const Carrousel = ({children,interval}) => { 
  
  return (
    <>
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: interval,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          {children.map((sl,idx)=>(
            <SwiperSlide key={idx}>{sl}</SwiperSlide>
          ))}
          
        </Swiper>
    </>
  );
};

export default Carrousel
