import React from 'react'
import Contectleft from '../moleculus/Contectleft'
import Contectcenter from '../moleculus/Contectcenter'
import Contectright from '../moleculus/Contectright'

function ContectBanner() {
  return (
    <div className="w-[96%] mx-auto flex flex-wrap justify-between my-[5%]">
  {/* Left Section */}
  <div className="w-full md:w-[28%] mb-4 md:mb-0">
    <Contectleft />
  </div>

  {/* Center Section */}
  <div className="w-full md:w-[30%] mb-4 md:mb-0">
    <Contectcenter />
  </div>

  {/* Right Section */}
  <div className="w-full md:w-[32%]">
    <Contectright />
  </div>
</div>

  )
}

export default ContectBanner
