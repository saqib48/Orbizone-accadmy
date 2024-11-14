import React from 'react'
import { FaPhoneAlt } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { MdGpsFixed } from "react-icons/md";

function Contectcenter() {
  return (
    <div className='text-white'>
      <div className="w-full"><div className="lg:space-y-6 relative px-4 pb-10 lg:before:absolute lg:before:top-6 lg:before:bottom-0 lg:before:w-0.5 lg:before:-left-[7px] before:bg-gray-700">
        <div className="relative flex lg:gap-10 max-lg:items-center max-lg:flex-col">
          <div className="lg:absolute mb-4 flex justify-center text-xl items-center top-0 w-10 h-10 rounded-full bg-blue-400 left-[-40px]">
            <FaPhoneAlt />
          </div>
          <a className="lg:text-xl text-2xl lg:mt-2 lg:ml-4 font-semibold tracki" href="tel:(800) 123-4567">(800) 123-4567</a>
        </div>
        <p className="text-gray-500 lg:ml-4  max-lg:text-center">Our office hours are Monday – Friday, 9 AM - 6 PM</p>
      </div>
        <div className="lg:space-y-6 relative px-4 pb-10 lg:before:absolute lg:before:top-6 lg:before:bottom-0 lg:before:w-0.5 lg:before:-left-[7px] before:bg-gray-700">
          <div className="relative flex lg:gap-10 max-lg:items-center max-lg:flex-col">
            <div className="lg:absolute mb-4 flex justify-center text-xl items-center top-0 w-10 h-10 rounded-full bg-blue-400 left-[-40px]">
              <IoMdMail />
            </div>
            <a className="lg:text-xl text-3xl lg:mt-2 lg:ml-4 font-semibold tracki" href="mailto:info@orbizone.com">info@orbizone.com</a>
          </div>
          <p className="text-gray-500 lg:ml-4  max-lg:text-center">Email us directly</p>
        </div>
        <div className="lg:space-y-6 relative px-4 pb-10 lg:before:absolute lg:before:top-6 lg:before:bottom-0 lg:before:w-0.5 lg:before:-left-[7px] before:bg-gray-700">
          <div className="relative flex lg:gap-10 max-lg:items-center max-lg:flex-col">
            <div className="lg:absolute mb-4 flex justify-center text-xl items-center top-0 w-10 h-10 rounded-full bg-blue-400 left-[-40px]">
              <MdGpsFixed />
            </div>
            <a className="lg:text-xl text-3xl lg:mt-2 lg:ml-4 font-semibold tracki" href="https://maps.app.goo.gl/XUGYf9Bfr8msHe2m9">Location</a>
          </div>
          <p className="text-gray-500 lg:ml-4  max-lg:text-center">Orbizone, Mushki Shah Rd, near Ali Hospital, Chiniot, Pakistan</p>
        </div>
      </div>
    </div>
  )
}

export default Contectcenter
