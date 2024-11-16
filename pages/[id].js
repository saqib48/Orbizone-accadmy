"use client";

import Footer from '@/components/organisms/Footer';
import Headermain from '@/components/organisms/Headermain';
import { useRouter } from 'next/router';

const courses = [
  {
    id: 1,
    image: "/assits/images/web4.jpg",
    title: "20K",
    rating: "★★★★★",
    reviews: 123,
    description: "Website Development Course",
    author: "John Doe",
    duration: "1.49",
    students: 30,
  },
  {
    id: 2,
    image: "/assits/images/web5.jpg",
    title: "23K",
    rating: "★★★★★",
    reviews: 123,
    description: "Wordpress Development",
    author: "John Doe",
    duration: "1.49",
    students: 30,
  },
  {
    id: 3,
    image: "/assits/images/web6.jpg",
    title: "22K",
    rating: "★★★★★",
    reviews: 123,
    description: "Search Egnine Optimization (SEO)",
    author: "John Doe",
    duration: "1.49",
    students: 30,
  },
  {
    id: 4,
    image: "/assits/images/web7.jpg",
    title: "29K",
    rating: "★★★★★",
    reviews: 123,
    description: "Ecommerce(Shopify) Course",
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
    description: "Digital Marketing Course",
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
    description: "Social Media Marketing Course",
    author: "John Doe",
    duration: "1.49",
    students: 30,
  },
  {
    id: 7,
    image: "/assits/images/course3.jpg",
    title: "34K",
    rating: "★★★★★",
    reviews: 123,
    description: "Office Mangement Course",
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
    <div className="bg-[#161719]">
      <Headermain/>
    <div className="bg-[#161719] text-white pt-[30px] pb-[80px] items-center text-center flex flex-col">
    <p className="font-semibold text-[40px]">{course.description}</p>
     <img src={course.image} alt={course.title} className="mt-2 h-[200px] w-[200px] rounded-full object-cover" />
      <h1 className="text-3xl font-bold">{course.title}</h1>
    </div>
    <Footer/>
    </div>
  );
};

export default CourseDetails;
