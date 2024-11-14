'use client';
import Geddetail from '@/components/organisms/Geddetail';
import Gedtext from '@/components/organisms/Gedtext';
import Headermain from '@/components/organisms/Headermain';
import React from 'react'
import Footer from '@/components/organisms/Footer';


function ged() {
  return (
    <div className='overflow-hidden text-white bg-[#161719]'>
      <Headermain />
      <Gedtext/>
      <Geddetail/>
      <Footer/>

    </div>
  )
}

export default ged
