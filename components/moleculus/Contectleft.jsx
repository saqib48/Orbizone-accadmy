import React from 'react'
import { FaInstagram } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";


function Contectleft() {
  return (
    <div>
      <div className="w-full flex flex-col justify-center h-[70vh]">
        <div className="text-center text-[white] sm:text-left mb-14 before:block before:w-24  before:h-3 before:mb-10 before:rounded-[10px]  sm:before:mx-0 before:bg-blue-400">
          <div className="flex gap-4 items-center">
            <div className="h-6 w-6 bg-blue-400 rounded-[999px] ">
            </div>
            <h3 className="text-3xl font-semibold ">Follow Us on</h3>
          </div>
          <div className="mt-9 lg:mb-0 mb-9 flex  gap-4">
            <a className="text-2xl items-center justify-center align-center rounded-[9999px] outline-none focus:outline-none mr-2 contents" type="button" href="https://www.facebook.com/">
              <i className="bx bxl-facebook px-2 py-2 rounded-[9999px] hover:bg-blue-600 ">
                <FaFacebook />
              </i>
            </a>
            <a className="text-2xl items-center justify-center align-center rounded-[9999px] outline-none focus:outline-none mr-2 contents" type="button" href="https://twitter.com/">
              <i className="bx bxl-twitter px-2 py-2 rounded-[9999px] hover:bg-blue-300 ">
                <FaTwitter />
              </i></a><a className="text-2xl items-center justify-center align-center rounded-[9999px] outline-none focus:outline-none mr-2 contents" type="button" href="https://www.linkedin.com/">
              <i className="bx bxl-linkedin-square px-2 py-2 rounded-[9999px] hover:bg-blue-800 ">
                <FaLinkedin />
              </i>
            </a>
            <a className="text-2xl items-center justify-center align-center rounded-[9999px] outline-none focus:outline-none mr-2 contents" type="button" href="https://www.instagram.com/">
              <i className="bx bxl-instagram px-2 py-2 rounded-[9999px] hover:bg-gradient-to-br from-purple-500 via-pink-500 to-red-500"><FaInstagram /></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contectleft
