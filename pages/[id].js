"use client";

import Footer from '@/components/organisms/Footer';
import Headermain from '@/components/organisms/Headermain';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Image from 'next/image';

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
      <Headermain />
      <div className="flex flex-wrap justify-between mx-[5%] mt-5 mb-7">
        <div className="left w-full lg:w-[48%] flex justify-center items-center text-center">
          <div>
            <h1 className="mb-6 text-2xl sm:text-3xl lg:text-5xl font-bold leading-none tracking-tight text-[#04C5FE]">
              {course.description}
            </h1>
            <p className="text-sm sm:text-base lg:text-lg text-white mb-6">
              The {course.description} course is taught by experienced faculty members who bring their industry expertise to the classroom.
            </p>
            <div className="flex gap-4 justify-center">
              <Link
                className="bg-[#242424] hover:bg-[#04C5FE] ease-in-out duration-300 text-white py-[8px] px-[14px] rounded-[6px] text-sm lg:text-base"
                href="/contact"
              >
                Contact Now
              </Link>
            </div>
          </div>
        </div>
        <div className="right w-full lg:w-[48%] mt-5 lg:mt-0">
          <Image
            width={400}
            height={400}
            src={course.image}
            alt={course.title}
            className="rounded-[5px] h-auto w-full object-cover"
          />
        </div>
      </div>
      <div className='mx-[5%] text-white'>
        <section className="mb-10">
          <h2 className="pb-2 text-2xl font-semibold text-[#04C5FE]">About this Course</h2>
          <div className="text-[white] mt-6 courseIntro">
            <h2 className='font-bold text-[20px] md:text-[26px]'>{course.description} with : A Comprehensive Course at Orbizone College of IT</h2>
            <p className="my-2 text-sm md:text-base">The digital landscape is constantly evolving, and as the demand for mobile and web applications continues  to soar, the need for adept developers remains perennially high. Android Development  Course in Chiniot., a versatile and widely-used nprogramming language, lies at the core of many applications across platforms. Recognizing the nsignificance and relevance of in today's digital ecosystem, Orbizone College of IT has introduced an in depth course on {course.description} with. This article aims to provide an overview of what prospective  students can expect from this comprehensive course.</p>
            <h2 className='font-bold text-[20px] md:text-[26px]'>Course Overview</h2>
            <p className="my-2 text-sm md:text-base">The {course.description} with  course at Orbizone College of IT is meticulously designed to cater to both nbeginners and those who have a foundational understanding of programming. The curriculum delves deep ninto the intricacies of , encompassing its syntax, core libraries, and the best practices in -based  application development.</p>
            <h2 className='font-bold text-[20px] md:text-[26px]'>Why  for {course.description}?</h2>
            <p className="my-2 text-sm md:text-base">, being platform-independent, has been a preferred choice for developers. Its write-once-run anywhere capability ensures that applications can function seamlessly across various devices without requiring modifications. This quality becomes even more significant given the diverse array of devices and  operating systems prevalent today.</p>
            <p className="my-2 text-sm md:text-base">Furthermore,  boasts of a rich API, robust performance, and a thriving community. This not only nfacilitates application development but also ensures timely updates and troubleshooting assistance.</p>
            <h2 className='font-bold text-[20px] md:text-[26px]'>What Does the Course Offer?</h2>
            <h3 className='font-bold text-[18px] md:text-[22px]'>1. Foundational Knowledge:</h3>
            <p className="my-2 text-sm md:text-base">The course kicks off with an introduction to , its history, and its nimportance in modern application development. This is followed by detailed sessions on  syntax, data ntypes, and operators.</p>
            <h3 className='font-bold text-[18px] md:text-[22px]'>2. Object-Oriented Programming (OOP) with :</h3>
            <p className="my-2 text-sm md:text-base">OOP principles lie at the heart of . Students will nlearn about classes, objects, inheritance, polymorphism, encapsulation, and abstraction. Real-world. OOP principles lie at the heart of . Students will learn about classNamees, objects, inheritance, polymorphism, encapsulation, and abstraction. Real-world.</p>
            <h3 className='font-bold text-[18px] md:text-[22px]'>3.  Libraries and Frameworks:</h3>
            <p className="my-2 text-sm md:text-base">The course covers essential libraries and frameworks that expedite the n{course.description} process. These tools can considerably reduce development time and result in more nefficient and robust applications.</p>
            <h3 className='font-bold text-[18px] md:text-[22px]'>4. Hands-on Experience:</h3>
            <p className="my-2 text-sm md:text-base">Theory is complemented by practical sessions. Students will be given projects nthat simulate real-world {course.description} challenges, allowing them to put into practice what they've nlearned.</p>
            <h3 className='font-bold text-[18px] md:text-[22px]'>5. Expert-Led Sessions:</h3>
            <p className="my-2 text-sm md:text-base">Orbizone College of IT takes pride in its faculty. The course is conducted by industry nveterans with years of experience in  {course.description}. Their insights, tips, and feedback can be ninvaluable for budding developers.</p>
            <h3 className='font-bold text-[18px] md:text-[22px]'>6. Mobile {course.description} with :</h3>
            <p className="my-2 text-sm md:text-base">Given the ubiquity of mobile devices, the course dedicates a nsignificant portion to mobile {course.description} using . This includes understanding the Android nplatform, Android Studio, and the intricacies of developing for mobile devices.</p>
            <h2 className='font-bold text-[20px] md:text-[26px]'>Who Should Enroll?</h2>
            <p className="my-2 text-sm md:text-base">While the course is comprehensive enough to cater to beginners, even seasoned developers can benefit nfrom it. Those looking to transition to  development or wanting to enhance their {course.description} nskills will find the course content enriching.</p>
            <h2 className='font-bold text-[20px] md:text-[26px]'>Post-Course Opportunities</h2>
            <p className="my-2 text-sm md:text-base">Graduates of the {course.description} with  course will be well-equipped to pursue roles as  ndevelopers, mobile app developers, software engineers, and more. With the IT industry's dynamic nature, n remains a sought-after skill, ensuring promising opportunities for those proficient in it.n</p>
            <h2 className='font-bold text-[20px] md:text-[26px]'>Conclusionn</h2>
            <p className="my-2 text-sm md:text-base">In the world of {course.description},  remains a formidable force. The {course.description} with  ncourse at Orbizone College of IT, with its blend of theoretical and practical sessions led by industry experts, nprovides an unparalleled learning experience. For those eager to carve a niche for themselves in the realm nof {course.description}, this course serves as an ideal launchpad. Embrace the future of digital innovation nwith a profound understanding of  and its applications.</p>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default CourseDetails;
