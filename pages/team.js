import Headermain from '@/Components/organisms/Headermain'
import React from 'react'
import Footer from '@/Components/organisms/Footer'
import TeamSearch from '@/Components/organisms/TeamSearch'
import Teamtext from '@/Components/organisms/Teamtext'



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
