'use client';
import Headermain from '@/components/organisms/Headermain';
import React from 'react'
import Footer from '@/components/organisms/Footer';
import SearchFilter from '@/components/moleculus/SearchFilter';


function courses() {
  return (
    <div className='overflow-hidden bg-[#161719]'>
      <Headermain />
      <SearchFilter/>
      <Footer/>
    </div>
  )
}

export default courses

