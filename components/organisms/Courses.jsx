import React from "react";
import CourseCard from "../moleculus/CourseCard";
import { BsJoystick } from 'react-icons/bs';
import { FaClock } from 'react-icons/fa';
import { IoPersonSharp } from 'react-icons/io5';

function Courses() {
  return (
    <div className="flex flex-col gap-[40px] my-[80px]">
      <div className="text-center flex flex-col gap-3 items-center justify-center" data-aos="fade-down">
        <h2 className="text-4xl font-bold text-[#02C6FE]">Featured Courses</h2>
        <h2 className="text-3xl font-bold text-[#FFFFFF]">Popular Courses</h2>
      </div>
      <div className="mx-4 sm:mx-[50px] flex flex-col sm:flex-row justify-center text-center items-center gap-[40px] sm:gap-[50px]">

        <div data-aos="fade-right">
          <CourseCard
            image="/assits/images/web4.jpg"
            title="20K"
            rating="★★★★★"
            reviews={123}
            description="Website Development Course for Beginners"
            author="John Doe"
            duration="1.49"
            students={30}
            icon1={<BsJoystick />}
            icon2={<FaClock />}
            icon3={<IoPersonSharp />}
          />
        </div>

        <div data-aos="fade-up">
          <CourseCard
            image="/assits/images/web5.jpg"
            title="20K"
            rating="★★★★★"
            reviews={123}
            description="Wordpress Development Course for Beginners"
            author="John Doe"
            duration="1.49"
            students={30}
            icon1={<BsJoystick />}
            icon2={<FaClock />}
            icon3={<IoPersonSharp />}
          />
        </div>

        <div data-aos="fade-left">
          <CourseCard
            image="/assits/images/web6.jpg"
            title="20K"
            rating="★★★★★"
            reviews={123}
            description="SEO Course for Beginners"
            author="John Doe"
            duration="1.49"
            students={30}
            icon1={<BsJoystick />}
            icon2={<FaClock />}
            icon3={<IoPersonSharp />}
          />
        </div>
      </div>
    </div>
  );
}

export default Courses;
