'use client';
import React from 'react'
import '../../app/globals.css'
import Link from "next/link";



function HomeBanner() {
  return (
    <div className="banner flex flex-wrap items-center h-auto lg:h-[480px] px-4 lg:px-0">
      <div
        data-aos="fade-right"
        className="flex flex-col w-full lg:w-[49%] lg:pl-[4%] justify-center gap-[20px] lg:gap-[45px]"
      >
        <div className="flex flex-col gap-[10px] lg:gap-[15px] text-center lg:text-left">
          <h2 className="text-[#04C5FE] text-[40px] lg:text-[60px] font-[700]">
            Master Your Skills
          </h2>
          <p className="text-[white] text-[16px] lg:text-[22px]">
            Embark on your professional journey with industry-leading experts by
            enrolling in our distinguished IT programs.
          </p>
        </div>
        <div className="flex justify-center lg:justify-start gap-2">
          <Link
            href="/ged"
            className="bg-[#04C5FE] hover:bg-[#242424] ease-in-out duration-300 text-[white] py-[8px] px-[14px] rounded-[6px] text-sm lg:text-base"
          >
            Read More
          </Link>
          <Link
            href="/contact"
            className="bg-[#242424] hover:bg-[#04C5FE] ease-in-out duration-300 text-[white] py-[8px] px-[14px] rounded-[6px] text-sm lg:text-base"
          >
            Contact us
          </Link>
        </div>
      </div>

      {/* Right Image (Commented Section) */}
      {/* <div className="w-full lg:w-[49%] mt-6 lg:mt-[2%] flex justify-center lg:justify-end">
        <Image
          src="/assits/images/imgs.png" // ya external URL bhi use kar sakte hain
          alt="Description of the image"
          width={800} // desired width in pixels
          height={200} // desired height in pixels
          className="opacity-100 max-w-full h-auto"
        />
      </div> */}
    </div>





  )
}

export default HomeBanner
