"use client";
import CourseCard1 from "../moleculus/CourseCard1";
import { FaClock } from 'react-icons/fa';
import React, { useState } from 'react';
import Heading from '../atoms/Heading';

const BlogSearch = () => {
  const [query, setQuery] = useState('');

  // Array of course data
  const courses = [
    {
      image: "/assits/images/course1.jpg",
      description: "Web & Development Course for Beginners",
      duration: "21",
    },
    {
      image: "/assits/images/course2.jpg",
      description: "Amazon Course for Beginners",
      duration: "19",
    },
    {
      image: "/assits/images/course3.jpg",
      description: "Freelancing Course for Beginners",
      duration: "17",
    },
    {
      image: "/assits/images/course3.jpg",
      description: "Art & Design Course for Beginners",
      duration: "13",
    },
  ];

  // Filter courses based on the search query
  const filteredCourses = courses.filter((course) =>
    course.description.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="flex flex-col pt-[30px] pb-[80px] mr-[4%] ">
      <div className='text-center max-w-xl mx-auto'>
        <Heading level={3}>Our Blogs</Heading>
        <div className="text-center mb-4">
          <span className='inline-block w-1 h-1 rounded-full bg-[#05C5FA] ml-1'></span>
          <span className='inline-block w-3 h-1 rounded-full bg-[#05C5FA] ml-1'></span>
          <span className='inline-block w-40 h-1 rounded-full bg-[#05C5FA] ml-1'></span>
          <span className='inline-block w-3 h-1 rounded-full bg-[#05C5FA] ml-1'></span>
          <span className='inline-block w-1 h-1 rounded-full bg-[#05C5FA] ml-1'></span>
        </div>
      </div>

      <div className="flex justify-end">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search for a course..."
          className="border p-2 w-[340px] mb-4 outline-none border-white/20 rounded-[10px] focus:ring-2 text-white bg-[#000000]"
        />
      </div>

      {filteredCourses.length > 0 ? (
        <ul className="ml-[4%] justify-between items-center flex flex-wrap text-center gap-[40px]">
          {filteredCourses.map((course, index) => (
            <div key={index} data-aos="fade-up">
              <CourseCard1
                image={course.image}
                description={course.description}
                duration={course.duration}
                icon2={<FaClock />}
              />
            </div>
          ))}
        </ul>
      ) : (
        <div className="text-center text-white mt-10">
          <p>No courses found. Please try a different search.</p>
        </div>
      )}
    </div>
  );
};

export default BlogSearch;
