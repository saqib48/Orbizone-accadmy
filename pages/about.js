'use client';
import AboutSection2 from '@/components/organisms/AboutSectio2'
import AboutSection1 from '@/components/organisms/AboutSection1'
import AboutText from '@/components/organisms/AboutText'
import BannerAbout from '@/components/organisms/BannerAbout'
import Footer from '@/components/organisms/Footer'
import Headermain from '@/components/organisms/Headermain';
import React from 'react'

function about() {
  return (
    <div className='overflow-hidden text-white bg-[#161719]'>
      <Headermain />
      <BannerAbout/>
      <AboutSection1/>
      <AboutSection2/>
      <AboutText/>
      <Footer/>
    </div>
  )
}

export default about