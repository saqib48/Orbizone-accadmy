'use client'
import React from 'react'
import Slidding from './Slidding'

function Slider() {
  return (
    <div className='bg-[#161719]' data-aos="fade-up"
      data-aos-anchor-placement="top">
      <div className="mx-[4%]  border-[1px] border-[lightgray] rounded-[10px] bg-[#0C0C0C]">
        <div className='flex relative'>
          <div className='px-[60px]  top-0  py-[50px] text-[#8A8B8C] font-bold text-[30px]' >
            Partnerships
          </div>
          <Slidding />
        </div>

      </div>
    </div>
  )
}

export default Slider
