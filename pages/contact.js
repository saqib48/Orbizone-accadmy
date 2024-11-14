'use client';
import Headermain from '@/components/organisms/Headermain';
import Footer from '@/components/organisms/Footer';
import React from 'react'
import Contecttext from '@/components/organisms/Contecttext';
import ContectBanner from '@/components/organisms/ContectBanner';

function contact() {
  return (
    <div className='overflow-hidden bg-[#161719]'>
      <Headermain />
      <Contecttext/>
      <ContectBanner/>
        <Footer/>
    </div>
  )
}

export default contact
