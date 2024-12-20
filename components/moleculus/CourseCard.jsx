import React from 'react';
import '../../app/globals.css'
import Image from 'next/image';
import Link from 'next/link';

const CourseCard = ({ image, title, rating, reviews, description, author, duration, students, icon1, icon2, icon3 }) => {
  return (
    <div className='card'>
      <div className='imageContainer'>
        <Image width={300} height={100} src={image} alt={description} className='image' />
        <div className='buttons'>
          <Link href='/courses' className='readMore'>Read More</Link>
          <Link href='/contact' className='joinNow'>Join Now</Link>
        </div>
      </div>
      <div className='content'>
        <h2 className='title'>{title}</h2>
        <div className='rating'>
          <span>{rating}</span>
          <span> ({reviews})</span>
        </div>
        <p className='description'>{description}</p>
        <div className='details'>
          <span className='author'><div className='text-[#02C6FE]'>{icon1}</div>{author}</span>
          <span className='duration'><div className='text-[#02C6FE]'>{icon2}</div>{duration} Hrs</span>
          <span className='students'> <div className='text-[#02C6FE]'>{icon3}</div> {students} Students</span>
        </div>
      </div>
    </div >
  );
};

export default CourseCard;
