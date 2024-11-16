"use client";

import { useState } from 'react';
import Link from 'next/link';
import Logo from '../atoms/Logo';
import '../../app/globals.css';

const Headermain = () => {
  const [isOpen, setIsOpen] = useState(false); // Controls the mobile menu
  const [isServiceOpen, setIsServiceOpen] = useState(false); // Controls the service dropdown on mobile

  return (
    <div data-aos="fade-down" className="bg-[#0C0C0C] h-[60px] flex items-center w-full">
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <div>
          <Logo src="/assits/images/logo.png" className="h-8" />
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:block">
          <ul className="flex gap-8 text-white list-none">
            <li>
              <Link href="/" className="text-[17px] hover:text-[#04C5FE]">Home</Link>
            </li>
            <li>
              <Link href="/about" className="text-[17px] hover:text-[#04C5FE]">About</Link>
            </li>
            <li className="relative group">
              <span className="text-[17px] hover:text-[#04C5FE] cursor-pointer">Service</span>
              <ul className="absolute left-0 hidden group-hover:block bg-[#02C6FE] shadow-lg rounded-md py-2 w-[220px]">
                <li className="px-4 py-2 hover:bg-[#242424]">
                  <Link href="/1" className="text-[white]">Website Development</Link>
                </li>
                <li className="px-4 py-2 hover:bg-[#242424]">
                  <Link href="/2" className="text-[white]">WordPress Development</Link>
                </li>
                <li className="px-4 py-2 hover:bg-[#242424]">
                  <Link href="/3" className="text-[white]">SEO</Link>
                </li>
              </ul>
            </li>
            <li>
              <Link href="/courses" className="text-[17px] hover:text-[#04C5FE]">Courses</Link>
            </li>
            <li>
              <Link href="/team" className="text-[17px] hover:text-[#04C5FE]">Team</Link>
            </li>
            <li>
              <Link href="/contact" className="text-[17px] hover:text-[#04C5FE]">Contact</Link>
            </li>
          </ul>
        </div>

        {/* Apply Now Button */}
        <button className="hidden lg:block border-[1px] border-[lightgray] py-[6px] px-[20px] rounded-[7px] text-[white]">
          Apply Now
        </button>

        {/* Hamburger Menu Button */}
        <div className="lg:hidden flex items-center">
          <button onClick={() => setIsOpen(!isOpen)} className="text-white focus:outline-none">
            {isOpen ? '✖' : '☰'}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="fixed top-0 left-0 bg-[#0C0C0C] w-[250px] h-full z-50 p-6 transition-transform duration-300 ease-in-out">
          <ul className="text-white list-none flex flex-col gap-6">
            <li>
              <Link href="/" onClick={() => setIsOpen(false)} className="hover:text-[#04C5FE]">Home</Link>
            </li>
            <li>
              <Link href="/about" onClick={() => setIsOpen(false)} className="hover:text-[#04C5FE]">About</Link>
            </li>
            <li>
              <div onClick={() => setIsServiceOpen(!isServiceOpen)} className="cursor-pointer hover:text-[#04C5FE]">
                Service
              </div>
              {isServiceOpen && (
                <ul className="mt-2 bg-[#02C6FE] shadow-lg rounded-md py-2">
                  <li className="px-4 py-2 hover:bg-[#242424]">
                    <Link href="/1" onClick={() => setIsOpen(false)} className="text-[white]">Website Development</Link>
                  </li>
                  <li className="px-4 py-2 hover:bg-[#242424]">
                    <Link href="/2" onClick={() => setIsOpen(false)} className="text-[white]">WordPress Development</Link>
                  </li>
                  <li className="px-4 py-2 hover:bg-[#242424]">
                    <Link href="/3" onClick={() => setIsOpen(false)} className="text-[white]">SEO</Link>
                  </li>
                </ul>
              )}
            </li>
            <li>
              <Link href="/courses" onClick={() => setIsOpen(false)} className="hover:text-[#04C5FE]">Courses</Link>
            </li>
            <li>
              <Link href="/team" onClick={() => setIsOpen(false)} className="hover:text-[#04C5FE]">Team</Link>
            </li>
            <li>
              <Link href="/contact" onClick={() => setIsOpen(false)} className="hover:text-[#04C5FE]">Contact</Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Headermain;
