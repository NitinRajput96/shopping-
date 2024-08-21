import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
// import 'node_modules/swiper/swiper-bundle.min.css';

export const Dashboard = () => {
  return (
    <>
       <Swiper
      spaceBetween={50}
      slidesPerView={1}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>
           <img src="/image/base-e-1.jpg" width="100%" height="100%" alt="" />
      </SwiperSlide>
      <SwiperSlide>
      <img src="/image/base-e-2.jpg" alt="" />
      </SwiperSlide>
      <SwiperSlide>
              <h1> nitin</h1>
      </SwiperSlide>
      <SwiperSlide>Slide 4</SwiperSlide>
      ...
    </Swiper>
    </>
  )
}
