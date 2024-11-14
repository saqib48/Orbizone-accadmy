import React from 'react'
import Image from 'next/image'

function SlideImg2({ src, p, p2 }) {
  return (
    <div className="text-center gap-4 flex flex-col items-center justify-center h-[200px]">
      <Image
        src={src} // ya external URL bhi use kar sakte hain
        alt="Description of the image"
        width={90} // desired width in pixels
        height={100}
        className=' '
      />
      <div>
        <h3 className='text-slate-200 font-semibold text-[1.125rem]'>{p}</h3>
        <span className='text-slate-200 '>{p2}</span>

      </div>
    </div>
  )
}

export default SlideImg2
