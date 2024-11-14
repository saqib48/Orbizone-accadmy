"use client"
import Slider from '@/Components/moleculus/Slider'
import Courses from '@/Components/organisms/Courses'
import Headermain from '@/Components/organisms/Headermain'
import Homeban2 from '@/Components/organisms/Homeban2'
import HomeBanner from '@/Components/organisms/HomeBanner'
import React from 'react'
import Counter from '../Components/organisms/Counter'
import Footer from '@/Components/organisms/Footer'

function home() {
  return (
    <div className='overflow-hidden bg-[#161719]'>
      <Headermain />
      <HomeBanner />
      <Slider />
      <Homeban2 />
      <Courses />
      {/* <Journey />  */}
      <Counter />
      <Footer/>





    </div>
  )
}

export default home
