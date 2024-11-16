'use client';
import React from 'react'
import '../../app/globals.css'
import Link from "next/link";



function HomeBanner() {
  return (
    <div className="banner flex  items-center  h-[480px]">
      <div data-aos="fade-right" className="flex flex-col w-[49%] pl-[4%]  justify-center gap-[45px]">
        <div className="flex flex-col gap-[15px]">
          <h2 className="text-[#04C5FE] text-[60px] font-[700]">
            Master Your Skills
          </h2>
          <p className="text-[white] text-[22px]">Embark on your professional journey with industry-leading experts by enrolling in our distinguished IT programs.</p>
        </div>
        <div className='flex gap-2'>
          <Link href="/ged" className='bg-[#04C5FE] hover:bg-[#242424] ease-in-out duration-300 text-[white] py-[5px] px-[10px] rounded-[6px]'>Read More</Link>
          <Link href="/contact" className='bg-[#242424] hover:bg-[#04C5FE] ease-in-out duration-300 text-[white] py-[5px] px-[10px] rounded-[6px]'>Contact us</Link>
        </div>
        {/* <div className="w-100 relative">
          <input type="text" placeholder='Course' className="w-full py-[10px] pl-[20px] outline-none rounded-[30px] border-none" />
          <div className="absolute top-[0] right-[-1%]" ><button className="btn btn-outline-secondary border-none py-[10px] px-[30px] hover:bg-[#6C757D] bg-[#0C0C0C] text-white rounded-r-[36px] rounded-l-[0] ">Search</button></div>
        </div> */}
      </div>
      {/* <div className="w-[49%] mt-[2%] mr-[-25%]">
        <Image
          src="/assits/images/imgs.png" // ya external URL bhi use kar sakte hain
          alt="Description of the image"
          width={800} // desired width in pixels
          height={200}
          className='opacity-100 '
        />
      </div> */}
    </div>




  )
}

export default HomeBanner
