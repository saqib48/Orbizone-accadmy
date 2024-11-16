import Image from 'next/image';
import React from 'react';
import Slidding2 from '../moleculus/Slidding2';

function Homeban2() {
  return (
    <div className="bg-[#161719] overflow-hidden">
      <div className="relative flex flex-col lg:flex-row justify-between items-center h-[400px] overflow-hidden w-full">
        <div data-aos="fade-right" className="w-full lg:w-[49%] pl-4 lg:pl-[4%] text-center lg:text-left py-6 lg:py-0">
          <h3 className="text-white text-[30px] font-semibold">
            Browse Your Future
          </h3>
          <h2 className="text-[#02C6FE] text-[40px] lg:text-[50px] font-semibold">
            Popular
          </h2>
          <h2 className="text-white text-[40px] lg:text-[50px] font-semibold">
            Courses to Learn
          </h2>
        </div>
        <div className="w-full lg:w-[49%] absolute right-[-20%] top-[10%] z-[999] overflow-hidden">
          <Image
            src="/assits/images/circle.svg"
            alt="Description of the image"
            width={400} // desired width in pixels
            height={300}
            className="rotating-circle object-contain"
          />
        </div>
      </div>
      <div data-aos="fade-up" data-aos-anchor-placement="top" className="mx-4 lg:mx-[4%] bg-[#0C0C0C] rounded-[10px] mt-[-3%]">
        <Slidding2 />
      </div>
    </div>
  );
}

export default Homeban2;
