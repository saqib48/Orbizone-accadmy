'use client';
import BlogSearch from '@/components/organisms/BlogSearch';
import Footer from '@/components/organisms/Footer';
import Headermain from '@/components/organisms/Headermain';
import React from 'react'

function blogs() {
  return (
    <div className='overflow-hidden bg-[#161719]'>
      <Headermain />
      <BlogSearch/>
      <Footer/>
    </div>
  )
}

export default blogs
