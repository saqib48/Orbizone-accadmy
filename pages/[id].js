"use client";

import Footer from '@/components/organisms/Footer';
import Headermain from '@/components/organisms/Headermain';
import { useRouter } from 'next/router';

const courses = [
  {
    id: 1,
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
    id: 2,
    image: "/assits/images/course2.jpg",
    title: "23K",
    rating: "★★★★★",
    reviews: 123,
    description: "Wordpress Development for Beginners",
    author: "John Doe",
    duration: "1.49",
    students: 30,
  },
  {
    id: 3,
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
    id: 4,
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
    id: 5,
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
    id: 6,
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
    id: 7,
    image: "/assits/images/course1.jpg",
    title: "34K",
    rating: "★★★★★",
    reviews: 123,
    description: "Office Mangement Course for Beginners",
    author: "John Doe",
    duration: "1.49",
    students: 30,
  },
  // Add all other courses...
];

const CourseDetails = () => {
  const router = useRouter();
  const { id } = router.query;

  const course = courses.find((course) => course.id === parseInt(id));

  if (!course) return <p className="text-white text-center mt-10">Course not found</p>;

  return (
    <div>
      <Headermain/>
    <div className="bg-[#161719] text-white py-[5%] items-center text-center flex flex-col">
    <p className="font-semibold text-[40px]">{course.description}</p>
            <img src={course.image} alt={course.title} className="mt-2 h-[200px] w-[200px] rounded-full" />
      <h1 className="text-3xl font-bold">{course.title}</h1>
      <p className="mt-2">Author: {course.author}</p>
      <p className="mt-2">Duration: {course.duration} hours</p>
      <p className="mt-2">Students Enrolled: {course.students}</p>
    </div>
    <Footer/>
    </div>
  );
};

export default CourseDetails;
