import React from 'react'
import Logo from '../atoms/Logo'
import '../../app/globals.css'
import Container from '../atoms/Container'
import HeaderNav from '../moleculus/HeaderNav'


function Headermain() {
  return (
    <div className='overflow-hidden bg-[#0C0C0C] h-[60px] items-center absolute w-full z-10'>
      <Container>
        <div className='flex justify-between text-center items-center pt-[10px]'>
          <Logo src='/assits/images/logo.png' />
          <HeaderNav />

          <button className='border-[1px] border-[lightgray] py-[6px] px-[20px] rounded-[7px] text-[white]'>
            Apply Now
          </button>
        </div>
      </Container>
    </div>
  )
}

export default Headermain