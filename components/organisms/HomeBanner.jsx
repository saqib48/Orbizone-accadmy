import Image from 'next/image'
import React from 'react'
import '../../app/globals.css'


function HomeBanner() {
  return (
    <div className=" flex justify-between  h-[400px] mt-10">
      <div data-aos="fade-right" className="flex flex-col w-[49%] pl-[4%] justify-center gap-[60px]">
        <div className="flex flex-col gap-[15px]">
          <h2 className="text-white text-[50px] font-semibold">
            Master Your Skills
          </h2>
          <p className="text-[#7D8590] text-[22px]">Embark on your professional journey with industry-leading experts by enrolling in our distinguished IT programs.</p>
        </div>
        <div className="w-100 relative">
          <input type="text" placeholder='Course' className="w-full py-[10px] pl-[20px] outline-none rounded-[30px] border-none" />
          <div className="absolute top-[0] right-[-1%]" ><button className="btn btn-outline-secondary border-none py-[10px] px-[30px] hover:bg-[#6C757D] bg-[#0C0C0C] text-white rounded-r-[36px] rounded-l-[0] ">Search</button></div>
        </div>
      </div>
      <div className="w-[49%] mt-[2%] mr-[-25%]">
        <Image
          src="/assits/images/imgs.png" // ya external URL bhi use kar sakte hain
          alt="Description of the image"
          width={800} // desired width in pixels
          height={200}
          className='opacity-100 '
        />
      </div>
    </div>




  )
}

export default HomeBanner
