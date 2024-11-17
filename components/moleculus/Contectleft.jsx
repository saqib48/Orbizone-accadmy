import React from 'react';
import { FaInstagram, FaTwitter, FaLinkedin, FaFacebook } from 'react-icons/fa';

function Contectleft() {
  return (
    <div>
      <div className="w-full flex flex-col text-center mt-3 items-center justify-center h-[60vh]">
        {/* Title Section */}
        <div className="text-center text-white sm:text-left mb-14 before:block before:w-24 before:h-3 before:mb-10 before:rounded-[10px] sm:before:mx-0 before:bg-[#02C6FE]">
          <div className="flex gap-4 items-center">
            <div className="h-6 w-6 bg-[#02C6FE] rounded-full"></div>
            <h3 className="text-3xl font-semibold">Follow Us on</h3>
          </div>

          {/* Social Media Links */}
          <div className="mt-9 flex gap-4">
            <a
              href="https://www.facebook.com/"
              className="text-2xl p-3 rounded-full hover:bg-blue-600 transition"
              aria-label="Facebook"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook />
            </a>
            <a
              href="https://twitter.com/"
              className="text-2xl p-3 rounded-full hover:bg-blue-300 transition"
              aria-label="Twitter"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter />
            </a>
            <a
              href="https://www.linkedin.com/"
              className="text-2xl p-3 rounded-full hover:bg-blue-800 transition"
              aria-label="LinkedIn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://www.instagram.com/"
              className="text-2xl p-3 rounded-full hover:bg-gradient-to-br from-purple-500 via-pink-500 to-red-500 transition"
              aria-label="Instagram"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contectleft;
