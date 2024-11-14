import Geddetail from '@/Components/organisms/Geddetail'
import Gedtext from '@/Components/organisms/Gedtext'
import Headermain from '@/Components/organisms/Headermain'
import React from 'react'
import Footer from '@/Components/organisms/Footer'


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
