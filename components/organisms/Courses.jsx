import React from "react";
import CourseCard from "../moleculus/CourseCard";
import { BsJoystick } from 'react-icons/bs';
import { FaClock } from 'react-icons/fa';
import { IoPersonSharp } from 'react-icons/io5';

function Courses() {
  return (
    <div className="flex flex-col gap-[40px] my-[80px]  " >
      <div className="text-center flex flex-col gap-3 items-center justify-center" data-aos="fade-down">
        <h2 className="text-4xl font-bold text-[#02C6FE] justify-center items-center flex">Featured Courses</h2>
        <h2 className="text-3xl font-bold text-[#FFFFFF] justify-center items-center flex">Popular Courses</h2>
      </div>
      <div className="mx-[50px] justify-between items-center flex text-center gap-[50px] " >

        <div data-aos="fade-right">
          <CourseCard
            image="/assits/images/course1.jpg"
            title="20K"
            rating="★★★★★"
            reviews={123}
            description="Web Design & Development Course for Beginners"
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
            image="/assits/images/course2.jpg"
            title="20K"
            rating="★★★★★"
            reviews={123}
            description="Web Design & Development Course for Beginners"
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
            image="/assits/images/course3.jpg"
            title="20K"
            rating="★★★★★"
            reviews={123}
            description="Web Design & Development Course for Beginners"
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