import Image from 'next/image'
import React from 'react'

function Profile({ src, alt, Name, Role }) {
  return (
    <div className='w-[290px] my-[7px] flex group flex-col justify-center items-center bg-[#252424] rounded-xl hover:custom-box-shadow'>
      <div className='h-[100px] w-[100px] bg-gray-200  overflow-hidden rounded-full group-hover:-translate-y-7 group-hover:scale-105  -translate-y-5 duration-200 border-4 border-gray-500'>
        <Image
          src={src} // ya external URL bhi use kar sakte hain
          alt={alt}
          width={700} // desired width in pixels
          height={700}
          className='h-full w-full costomeShadow object-cover z-50 '
        />
      </div>
      <div className="flex flex-col justify-center items-center border-b border-[color:var(--accent-color)] pb-4">
        <h3 className="text-xl text-center font-semibold text-gray-300 leading-8 tracking-wide">{Name}</h3>
        <span className="text-sm text-gray-400"> {Role}</span>
      </div>
    </div>
  )
}

export default Profile
