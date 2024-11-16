import React from 'react'
import Heading from '../atoms/Heading'
import Paragraph from '../atoms/Paragraph'
import Image from 'next/image'

function AboutSection2() {
  return (
    <div className="flex my-[10%] mx-[5%] ">

      <div className="w-[31%] mx-[7.5%] mb-2 shadow-lg rounded-xl bg-[#02C6FE] bg-opacity-50">
        <Image width={300} height={300} className="w-[385px] rounded-t-xl" src="/assits/images/class.webp" alt="class" />
        <div className="p-8 mb-4">
          <Heading level={6}>Empowering Digital Skills</Heading>
          <Paragraph variant="paraimg">Orbizone College of IT combines advanced tech and hands-on learning in modern settings, preparing students for the evolving IT world.</Paragraph>
        </div>
      </div>

      <div className="w-[40%] mx-[7.5%]">
        <div className="p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-slate-300">
          <Image width={300} height={300} src="/assits/images/gif2.gif" alt="gif" />
        </div>
        <div>
          <Heading level={1}>Education Focus</Heading>
        </div>
        <div>
          <Paragraph variant="paraAbout">
            Our journey began with the goal of creating a dynamic learning environment that crosses conventional boundaries, motivated by a passion for affecting the direction of technology. As you explore our official website, you&apos;ll discover a vibrant community of learners, passionate educators, and a wealth of resources designed to fuel your curiosity and ambition.
          </Paragraph>
          <Paragraph variant="paraAbout">
            Where learning knows no bounds, with the story of innovation and education unfolding. Join us on this exciting journey of knowledge and growth.
          </Paragraph>
        </div>
      </div>

    </div>
  )
}

export default AboutSection2
