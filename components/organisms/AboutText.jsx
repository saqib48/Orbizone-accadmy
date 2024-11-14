import React from 'react'
import Heading from '../atoms/Heading'

function AboutText() {
  return (
    <div className="">
      <div className='text-center max-w-xl my-[12%] mx-auto' data-aos="fade-up">
        <Heading level={2}>What students <br />are saying.</Heading>
        <div className="text-center mb-4">
          <span className='inline-block w-1 h-1 rounded-full bg-[#02C6FE] ml-1'></span>
          <span className='inline-block w-3 h-1 rounded-full bg-[#02C6FE] ml-1'></span>
          <span className='inline-block w-40 h-1 rounded-full bg-[#02C6FE] ml-1'></span>
          <span className='inline-block w-3 h-1 rounded-full bg-[#02C6FE] ml-1'></span>
          <span className='inline-block w-1 h-1 rounded-full bg-[#02C6FE] ml-1'></span>
        </div>
      </div>
    </div>
  )
}

export default AboutText