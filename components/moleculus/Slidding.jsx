'use client';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

// Import required modules
import { Autoplay } from 'swiper/modules';
import SlideImg from './SlideImg';

export default function Slidding() {
  return (
    <Swiper
      slidesPerView={4} // Default value for larger screens
      spaceBetween={20}
      loop={true}
      speed={3000}
      autoplay={{
        delay: 1,
        disableOnInteraction: false,
      }}
      pagination={false}
      modules={[Autoplay]}
      className="flex items-center justify-center w-full pt-6"
      breakpoints={{
        320: {
          slidesPerView: 1,
          spaceBetween: 10,
        },
        640: {
          slidesPerView: 2,
          spaceBetween: 15,
        },
        1024: {
          slidesPerView: 4,
          spaceBetween: 20,
        },
      }}
    >
      {/* Add SwiperSlides with responsive image handling */}
      <SwiperSlide className="flex items-center justify-center">
        <SlideImg src="/assits/images/1.png" />
      </SwiperSlide>
      <SwiperSlide className="flex items-center justify-center">
        <SlideImg src="/assits/images/2.png" />
      </SwiperSlide>
      <SwiperSlide className="flex items-center justify-center">
        <SlideImg src="/assits/images/3.png" />
      </SwiperSlide>
      <SwiperSlide className="flex items-center justify-center">
        <SlideImg src="/assits/images/4.png" />
      </SwiperSlide>
      <SwiperSlide className="flex items-center justify-center">
        <SlideImg src="/assits/images/5.png" />
      </SwiperSlide>
      <SwiperSlide className="flex items-center justify-center">
        <SlideImg src="/assits/images/6.png" />
      </SwiperSlide>
      <SwiperSlide className="flex items-center justify-center">
        <SlideImg src="/assits/images/7.png" />
      </SwiperSlide>
      <SwiperSlide className="flex items-center justify-center">
        <SlideImg src="/assits/images/8.png" />
      </SwiperSlide>
    </Swiper>
  );
}
