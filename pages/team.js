'use client';
import Headermain from '@/components/organisms/Headermain';
import React from 'react'
import Footer from '@/components/organisms/Footer';
import TeamSearch from '@/components/organisms/TeamSearch';
import Teamtext from '@/components/organisms/Teamtext';



function team() {
  return (
    <div className='overflow-hidden bg-[#151515]'>
      <Headermain />
      <Teamtext/>
      <TeamSearch/>
      <Footer/>
    </div>
  )
}

export default team
