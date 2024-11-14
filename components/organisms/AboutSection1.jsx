import React from 'react'
import Heading from '../atoms/Heading'
import Paragraph from '../atoms/Paragraph'
import Image from 'next/image';


function AboutSection1() {
  return (
    <div className="flex my-14 mx-[5%] ">

      <div className=" w-[40%] mx-[7.5%] ">
        <div className=" p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-slate-300">
          <Image width={100} height={100} src="/assits/images/gif1.gif" alt="gif" />
        </div>
        <div className="">
          <Heading level={1}>Working with us is a pleasure</Heading>
        </div>
        <div className="">
          <Paragraph variant='paraAbout'>Our vision is cultivating a dynamic learning environment where innovation, adaptability, and excellence converge. We aspire to be the catalyst for transformative education, equipping students with the technical skills, resilience, and creativity required to navigate and excel in the diverse challenges of the modern world.</Paragraph>
          <Paragraph variant='paraAbout'>In our vision, a vibrant community of learners is inspired to push boundaries, committed to continuous improvement, and driven by a passion for leveraging technology for positive change.</Paragraph>
        </div>
      </div>
      <div className=" w-[31%] mx-[7.5%]  mb-2 shadow-lg rounded-xl bg-[#02C6FE] bg-opacity-50">
        <Image width={100} height={100} className='w-[385px] rounded-t-xl' src="/assits/images/class1.webp" alt="class" />
        <div className=" p-8 mb-4">
          <Heading level={6}>Our Learning Environment</Heading>
          <Paragraph variant='paraimg'>Orbizone College of IT features a cutting-edge learning environment, blending advanced technology and hands-on educational methods to prepare students for the IT industry.</Paragraph>
        </div>
      </div>
    </div>

  )
}

export default AboutSection1