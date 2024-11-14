'use client';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';


// Import required modules
import { Pagination, Autoplay } from 'swiper/modules';
import SlideImg from './SlideImg';

export default function Slidding() {
  return (
    <>
      <Swiper
        slidesPerView={4}
        spaceBetween={20}
        loop={true}
        speed={3000} // Adjust speed if needed
        autoplay={{
          delay: 1, // Use a very short delay for continuous movement
          disableOnInteraction: false,
        }}
        pagination={false} // Disable pagination if not needed
        modules={[Autoplay]}
        className="flex items-center h-[165px] justify-center"
      >

        <SwiperSlide className="flex items-center h-[165px] justify-center">
          <SlideImg
            src='/assits/images/1.png'
          />
        </SwiperSlide>
        <SwiperSlide className="flex items-center h-[165px] justify-center">
          <SlideImg
            src='/assits/images/2.png'
          />
        </SwiperSlide> <SwiperSlide className="flex items-center h-[165px] justify-center">
          <SlideImg
            src='/assits/images/3.png'
          />
        </SwiperSlide> <SwiperSlide className="flex items-center h-[165px] justify-center">
          <SlideImg
            src='/assits/images/4.png'
          />
        </SwiperSlide> <SwiperSlide className="flex items-center h-[165px] justify-center">
          <SlideImg
            src='/assits/images/5.png'
          />
        </SwiperSlide> <SwiperSlide className="flex items-center h-[165px] justify-center">
          <SlideImg
            src='/assits/images/6.png'
          />
        </SwiperSlide> <SwiperSlide className="flex items-center h-[165px] justify-center">
          <SlideImg
            src='/assits/images/7.png'
          />
        </SwiperSlide> <SwiperSlide className="flex items-center h-[165px] justify-center">
          <SlideImg
            src='/assits/images/8.png'
          />
        </SwiperSlide>
      </Swiper>

    </>
  );
}


