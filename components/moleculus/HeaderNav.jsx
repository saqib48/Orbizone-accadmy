"use client";
import React from "react";
import "../../app/globals.css";
import Link from "next/link";

function HeaderNav() {

  return (
    <div>
      <div className="">
        <ul className=" flex gap-10 text-white list-none">
          <li>
            <Link href="/" className='hover:text-[#6C757D] text-[17px]'>Home</Link>
          </li>
          <li>
            <Link href="/about" className='hover:text-[#6C757D] text-[17px]'>About</Link>
          </li>
          <li>
            <Link href="/courses" className='hover:text-[#6C757D] text-[17px]'>Courses</Link>
          </li>
          <li>
            <Link href="/ged" className='hover:text-[#6C757D] text-[17px]'>GED</Link>
          </li>
          <li>
            <Link href="/blogs" className='hover:text-[#6C757D] text-[17px]'>Blogs</Link>
          </li>
          <li>
            <Link href="/team" className='hover:text-[#6C757D] text-[17px]'>Team</Link>
          </li>

          <li>
            <Link href="/contact" className='hover:text-[#6C757D] text-[17px]' >Contact</Link>
          </li>
        </ul>

      </div>

    </div>
  );
}

export default HeaderNav;
