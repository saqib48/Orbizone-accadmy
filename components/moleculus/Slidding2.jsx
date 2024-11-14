'use client';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';


// Import required modules
import { Pagination, Autoplay } from 'swiper/modules';
import SlideImg2 from './SlideImg2';

export default function Slidding() {
  return (
    <>
      <Swiper
        slidesPerView={5}
        spaceBetween={25}
        centeredSlides={true}
        loop={true}
        speed={4000} // Enable looping
        autoplay={{
          delay: 0, // 1 second delay between slides
          disableOnInteraction: false, // Autoplay continues after interaction
        }}
        pagination={{
          clickable: false,
        }}
        modules={[Pagination, Autoplay]} // Include both modules
        className=""
      >
        <SwiperSlide className=''>
          <SlideImg2
            src='/assits/images/Development.png'
            p='Developement'
            p2='8 course'
          />
        </SwiperSlide>
        <SwiperSlide>
          <SlideImg2
            src='/assits/images/Data.png'
            p='Data Science'
            p2='1 course'
          />
        </SwiperSlide> <SwiperSlide>
          <SlideImg2
            src='/assits/images/Art.png'
            p='Art & Desgin'
            p2='4 course'
          />
        </SwiperSlide> <SwiperSlide>
          <SlideImg2
            src='/assits/images/Digital.png'
            p='Digital Marketing'
            p2='5 course'
          />
        </SwiperSlide> <SwiperSlide>
          <SlideImg2
            src='/assits/images/Amazon.png'
            p='Amazon'
            p2='1 course'
          />
        </SwiperSlide> <SwiperSlide>
          <SlideImg2
            src='/assits/images/Freelancing.png'
            p='Freelancing'
            p2='3 course'
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
