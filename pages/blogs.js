import BlogSearch from '@/Components/organisms/BlogSearch'
import Footer from '@/Components/organisms/Footer'
import Headermain from '@/Components/organisms/Headermain'
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
