import Headermain from '@/Components/organisms/Headermain'
import React from 'react'
import Footer from '@/Components/organisms/Footer'
import SearchFilter from '@/Components/moleculus/SearchFilter'


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

