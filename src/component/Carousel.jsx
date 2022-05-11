import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";



// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

const Carrousel = ({slides}) => {
  return (
    <>
      <div className="h-full w-full px-24">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          {slides.map((sl,idx)=>(
            <SwiperSlide key={idx}>{sl}</SwiperSlide>
          ))}
          
        </Swiper>
      </div>
    </>
  );
};

export default Carrousel
