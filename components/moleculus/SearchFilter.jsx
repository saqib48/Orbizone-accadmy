"use client";
import CourseCard from "../moleculus/CourseCard";
import { BsJoystick } from 'react-icons/bs';
import { FaClock } from 'react-icons/fa';
import { IoPersonSharp } from 'react-icons/io5';
import React, { useState } from 'react';
import Heading from '../atoms/Heading';
import Link from "next/link";

const SearchFilter = () => {
  const [query, setQuery] = useState('');

  // Array of course data
  const courses = [
    {
      id: "1",
      image: "/assits/images/course1.jpg",
      title: "20K",
      rating: "★★★★★",
      reviews: 123,
      description: "Website Development Course for Beginners",
      author: "John Doe",
      duration: "1.49",
      students: 30,
    },
    {
      id: "2",
      image: "/assits/images/course2.jpg",
      title: "23K",
      rating: "★★★★★",
      reviews: 123,
      description: "Wordpress Develoment for Beginners",
      author: "John Doe",
      duration: "1.49",
      students: 30,
    },
    {
      id: "3",
      image: "/assits/images/course3.jpg",
      title: "22K",
      rating: "★★★★★",
      reviews: 123,
      description: "Search Egnine Optimization (SEO) for Beginners",
      author: "John Doe",
      duration: "1.49",
      students: 30,
    },
    {
      id: "4",
      image: "/assits/images/course3.jpg",
      title: "29K",
      rating: "★★★★★",
      reviews: 123,
      description: "Ecommerce(Shopify) Course for Beginners",
      author: "John Doe",
      duration: "1.49",
      students: 30,
    },
    {
      id: "5",
      image: "/assits/images/course2.jpg",
      title: "17K",
      rating: "★★★★★",
      reviews: 123,
      description: "Digital Marketing Course for Beginners",
      author: "John Doe",
      duration: "1.49",
      students: 30,
    },
    {
      id: "6",
      image: "/assits/images/course1.jpg",
      title: "20K",
      rating: "★★★★★",
      reviews: 123,
      description: "Social Media Marketing Course for Beginners",
      author: "John Doe",
      duration: "1.49",
      students: 30,
    },
    {
      id: "7",
      image: "/assits/images/course1.jpg",
      title: "34K",
      rating: "★★★★★",
      reviews: 123,
      description: "Office Mangement Course for Beginners",
      author: "John Doe",
      duration: "1.49",
      students: 30,
    },
  ];

  // Filter courses based on the search query
  const filteredCourses = courses.filter((course) =>
    course.description.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="flex flex-col py-[100px] mr-[4%] ">
      <div className='text-center max-w-xl mx-auto'>
        <Heading level={3}>Course Catalog</Heading>
        <div className="text-center mb-4">
          <span className='inline-block w-1 h-1 rounded-full bg-[#02C6FE] ml-1'></span>
          <span className='inline-block w-3 h-1 rounded-full bg-[#02C6FE] ml-1'></span>
          <span className='inline-block w-40 h-1 rounded-full bg-[#02C6FE] ml-1'></span>
          <span className='inline-block w-3 h-1 rounded-full bg-[#02C6FE] ml-1'></span>
          <span className='inline-block w-1 h-1 rounded-full bg-[#02C6FE] ml-1'></span>
        </div>
      </div>
      <div className="flex justify-end">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search for a course..."
          className="border p-2 w-[340px] mb-4 outline-none border-[#02C6FE] rounded-[10px] focus:ring-2 text-white bg-[#161719]"
        />
      </div>

      {filteredCourses.length > 0 ? (
        <ul className="ml-[4%] justify-start items-center flex flex-wrap text-center gap-[50px]">
          {filteredCourses.map((course, index) => (
            <div key={index} data-aos="fade-up">
              <Link href={`/${course.id}`}>
                <CourseCard
                  image={course.image}
                  title={course.title}
                  rating={course.rating}
                  reviews={course.reviews}
                  description={course.description}
                  author={course.author}
                  duration={course.duration}
                  students={course.students}
                  icon1={<BsJoystick />}
                  icon2={<FaClock />}
                  icon3={<IoPersonSharp />}
                />
              </Link>
            </div>
          ))}
        </ul>
      ) : (
        <div className="text-center text-white mt-10">
          <p>No courses found. Please try a different search.</p>
        </div>
      )
      }
    </div >
  );
};

export default SearchFilter;
