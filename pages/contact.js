import Headermain from '@/Components/organisms/Headermain'
import Footer from '@/Components/organisms/Footer'
import React from 'react'
import Contecttext from '@/Components/organisms/Contecttext'
import ContectBanner from '@/Components/organisms/ContectBanner'

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
