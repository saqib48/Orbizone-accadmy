"use client";
import React from "react";
import { useRouter } from "next/router";
import "../../app/globals.css";
import Link from "next/link";

function HeaderNav() {
  const router = useRouter(); // Get current route

  return (
    <div>
      <div className="">
        <ul className="flex gap-10 text-white list-none">
          <li>
            <Link href="/" className={`${router.pathname === "/" ? "text-[#04C5FE]" : "hover:text-[#6C757D]"} text-[17px]`}>
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" className={`${router.pathname === "/about" ? "text-[#04C5FE]" : "hover:text-[#6C757D]"} text-[17px]`}>
              About
            </Link>
          </li>
          <li className="relative group">
            <Link
              href="# "
              className={`${router.pathname === "/service"
                ? "text-[#04C5FE]"
                : "hover:text-[#6C757D]"
                } text-[17px]`}
            >
              Service
            </Link>
            {/* Dropdown Menu */}
            <ul className="absolute left-0 hidden group-hover:block bg-[#02C6FE] shadow-lg rounded-md py-2 w-[220px]">
              <li className="px-4 py-2 hover:bg-[#242424]">
                <Link href="/1" className="text-[white]">
                  Website Development
                </Link>
              </li>
              <li className="px-4 py-2 hover:bg-[#242424]">
                <Link href="/2" className="text-[white]">
                  Wordpress Development
                </Link>
              </li>
              <li className="px-4 py-2 hover:bg-[#242424]">
                <Link href="/3" className="text-[white]">
                  SEO
                </Link>
              </li>
            </ul>
          </li>

          <li>
            <Link href="/courses" className={`${router.pathname === "/courses" ? "text-[#04C5FE]" : "hover:text-[#6C757D]"} text-[17px]`}>
              Courses
            </Link>
          </li>
          {/* <li>
            <Link href="/ged" className={`${router.pathname === "/ged" ? "text-[#04C5FE]" : "hover:text-[#6C757D]"} text-[17px]`}>
              GED
            </Link>
          </li> */}
          {/* <li>
            <Link href="/blogs" className={`${router.pathname === "/blogs" ? "text-[#04C5FE]" : "hover:text-[#6C757D]"} text-[17px]`}>
              Blogs
            </Link>
          </li> */}
          <li>
            <Link href="/team" className={`${router.pathname === "/team" ? "text-[#04C5FE]" : "hover:text-[#6C757D]"} text-[17px]`}>
              Team
            </Link>
          </li>
          <li>
            <Link href="/contact" className={`${router.pathname === "/contact" ? "text-[#04C5FE]" : "hover:text-[#6C757D]"} text-[17px]`}>
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default HeaderNav;
