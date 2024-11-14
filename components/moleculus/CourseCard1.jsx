import React from 'react';
import Image from 'next/image';
import '../../app/globals.css'

const CourseCard1 = ({ image, description, duration, icon2, }) => {
  return (
    <div className='card1'>
      <div className='imageContainer1'>
        <Image width={300} height={100} src={image} alt={description} className='image1' />
      </div>
      <div className='content1'>
        <p className='description1' dangerouslySetInnerHTML={{ __html: description }}></p>
        <div className='details1'>
          <span className='duration1'> <div className='text-[#4ADE80]'>{icon2}</div>{duration} Nov 2023</span>
        </div>
      </div>
    </div>
  );
};

export default CourseCard1;
