"use client"
import Slider from '@/components/moleculus/Slider'
import Courses from '@/components/organisms/Courses'
import Headermain from '@/components/organisms/Headermain'
import Homeban2 from '@/components/organisms/Homeban2'
import HomeBanner from '@/components/organisms/HomeBanner'
import React from 'react'
import Counter from '../components/organisms/Counter'
import Footer from '@/components/organisms/Footer'

function home() {
  return (
    <div className='overflow-hidden bg-[#161719]'>
      <Headermain />
      <HomeBanner />
      <div className="mt-[20px]">
      <Slider />
      </div>
      <Homeban2 />
      <Courses />
      <Counter />
      <Footer/>





    </div>
  )
}

export default home
