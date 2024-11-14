import React from 'react'
import Contectleft from '../moleculus/Contectleft'
import Contectcenter from '../moleculus/Contectcenter'
import Contectright from '../moleculus/Contectright'

function ContectBanner() {
  return (
    <div className='w-[96%] mx-[auto] flex justify-between my-[5%]'>
      <div className="w-[28%]"><Contectleft /></div>
      <div className="w-[30%]"><Contectcenter /></div>
      <div className="w-[32%]"><Contectright /></div>
    </div>
  )
}

export default ContectBanner
