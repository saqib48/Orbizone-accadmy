'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Pagination, Autoplay } from 'swiper/modules';
import SlideImg2 from './SlideImg2';

export default function Slidding() {
  return (
    <>
      <Swiper
        slidesPerView={4}
        spaceBetween={15}
        centeredSlides={true}
        loop={true}
        speed={4000}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: false,
        }}
        modules={[Pagination, Autoplay]}
        className="w-full"
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
            slidesPerView: 5,
            spaceBetween: 25,
          },
        }}
      >
        <SwiperSlide>
          <SlideImg2 src="/assits/images/Development.png" p="Development" p2="8 course" />
        </SwiperSlide>
        <SwiperSlide>
          <SlideImg2 src="/assits/images/Data.png" p="Data Science" p2="1 course" />
        </SwiperSlide>
        <SwiperSlide>
          <SlideImg2 src="/assits/images/Art.png" p="Art & Design" p2="4 course" />
        </SwiperSlide>
        <SwiperSlide>
          <SlideImg2 src="/assits/images/Digital.png" p="Digital Marketing" p2="5 course" />
        </SwiperSlide>
        <SwiperSlide>
          <SlideImg2 src="/assits/images/Amazon.png" p="Amazon" p2="1 course" />
        </SwiperSlide>
        <SwiperSlide>
          <SlideImg2 src="/assits/images/Freelancing.png" p="Freelancing" p2="3 course" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
