import AboutSection2 from '@/Components/organisms/AboutSectio2'
import AboutSection1 from '@/Components/organisms/AboutSection1'
import AboutText from '@/Components/organisms/AboutText'
import BannerAbout from '@/Components/organisms/BannerAbout'
import Footer from '@/Components/organisms/Footer'
import Headermain from '@/Components/organisms/Headermain'
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