"use client";

import React, { useState } from "react";
import "../../app/globals.css"

import PropTypes from "prop-types";

const Button = ({ href, children, variant, type, onClick }) => {
  const [activeButton, setActiveButton] = useState(null);

  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
  };

  let buttonStyle = "";

  switch (variant) {
    case "product-button":
      buttonStyle =
        "text-[13px] block text-[#747474] ease-in-out duration-300 cursor-pointer hover:text-[#ff6a28]  pt-[8px] w-[165px] h-[45px] text-center ";
      break;
    case "footer-button":
      buttonStyle =
        "bg-[#242424] block hover:bg-[#01C3FF] ease-in-out duration-300 my-[10px]  h-[45px] cursor-pointer border-box pt-[11px]  w-[365px] rounded-[3px]  text-center  text-[13px] font-semibold  text-white";
      break;
    case "shop-proButton":
      buttonStyle =
        "bg-white h-[40px] flex justify-center items-center cursor-pointer block absolute bottom-[17px] ml-[10pxa] text-center w-[240px] rounded-[3px] py-[7px]  text-[15px] font-medium hover:text-[#ff6a28] text-[#747474] ";
      break;
    case "filter":
      buttonStyle =
        "bg-[#ff6a28] hover:bg-[#242424] h-[30px] py-[10px] cursor-pointer text-center w-[75px] ease-in-out duration-300 uppercase rounded-[40px] block pt-[5px] text-[13px] font-medium  text-white";
      break;
    case "tl-radius":
      buttonStyle =
        "bg-white cursor-pointer border border-opacity-10 text-center w-[150px] rounded-tl-[25px] flex items-center justify-center text-[20px] font-medium text-white";
      break;
    case "tr-radius":
      buttonStyle =
        "bg-white  h-[50px] active:bg-buttonGray border border-opacitiy cursor-pointer  text-center w-[150px] rounded-tr-[25px] flex items-center justify-center  text-[20px] font-medium text-buttonGray";
      break;
    case "rectangle":
      buttonStyle =
        "bg-white h-[40px] border-[1px] uppercase cursor-pointer border-[#242424] hover:border-[#ff6a28]  text-center w-[110px]  flex items-center justify-center  text-[13px] font-[500] text-[#242424] hover:bg-[#fd7e14] hover:text-white hover:boder-[#fd7e14] ease-in duration-300";
      break;
    case "rectangle-0":
      buttonStyle =
        "bg-[#ff6a28] h-[40px]  uppercase cursor-pointer   text-center w-[110px]  flex items-center justify-center  text-[13px] font-[500] text-[#242424] text-white  ease-in duration-300";
      break;
    case "rectangle-4":
      buttonStyle =
        "h-[40px] border-[1px] uppercase cursor-pointer border-[#242424] hover:border-[#ff6a28]  text-center w-[90px]  flex items-center justify-center  text-[13px] font-[500] text-[#242424] bg-[black] text-white hover:bg-[#fd7e14] hover:boder-[#fd7e14] ease-in duration-300";
      break;
    case "rectangle-5":
      buttonStyle =
        "h-[40px] border-[1px] uppercase cursor-pointer border-[#242424] hover:border-[#ff6a28] hover:text-white  text-center w-[110px]  flex items-center justify-center  text-[14px] font-[500] text-[#747474] border-none bg-white  hover:bg-[#fd7e14] hover:boder-[#fd7e14] ease-in duration-300";
      break;
    case "oval":
      buttonStyle =
        "bg-white h-[40px] border-[1px] cursor-pointer border-black border-opacity-[10px] text-center w-[150px] rounded-[40px]  pt-[6px] text-[16px] font-normal  text-buttonGray";
      break;
    case "high-oval":
      buttonStyle =
        "bg-buttonGray h-[55px] text-center cursor-pointer w-[145px]  flex justify-center items-center text-[20px] font-normal text-white rounded-[40px]";
      break;
    case "rectangle-2":
      buttonStyle =
        "bg-gray-100 h-[55px] cursor-pointer  text-center w-[155px]  pt-[16px] text-[20px] font-normal text-buttonGray";
      break;
    case "rectangle-3":
      buttonStyle =
        "bg-gray-100 h-[55px]  cursor-pointer text-center w-[195px] rounded-br-[25px] rounded-tr-[25px]  pt-[16px] text-[20px] font-normal text-buttonGray";
      break;
    case "rectangle-4":
      buttonStyle =
        "bg-gray-100 h-[55px]  cursor-pointer text-center w-[207px]   pt-[16px] text-[20px] font-normal text-buttonGray";
      break;
    case "rectangle-5":
      buttonStyle =
        "h-[40px] border-[1px] uppercase bg-[black] cursor-pointer border-[#242424] hover:border-[#ff6a28] hover:text-white  text-center w-[120px]  flex items-center justify-center  text-[14px] font-[500] text-white border-none  hover:bg-[#fd7e14] hover:boder-[#fd7e14] ease-in duration-300";
      break;
    case "rectangle":
      buttonStyle =
        "bg-white h-[60px] cursor-pointer border-2 text-center w-[201px]  pt-[16px] text-buttonGray";
      break;
    case "white-oval":
      buttonStyle =
        "bg-white h-[40px] cursor-pointer  text-center w-[120px] rounded-[40px] py-[5px] border-2 border-buttonGray  text-buttonGray ";
      break;
    case "contact":
      buttonStyle =
        "bg-[#ff6a28] h-[40px] hover:bg-[#242424] hpver:text-white cursor-pointer font-[500] tex-[12px] text-center w-[140px] py-[12px] px-[30px]  text-white";
      break;
    case "aboutus":
      buttonStyle =
        "bg-white cursor-pointer text-gray-700 border-2 h-[40px]  text-center w-[140px] rounded-[40px] flex items-center justify-center  ";
      break;
    case "submit":
      buttonStyle =
        "bg-buttonGray h-[41px] sm:w-[180px]  cursor-pointer text-center w-[235px] text-[16px] font-medium rounded-[20px] py-[7px] curser-pointer text-white leading-[19.5px]";
      break;
    case "submit1":
      buttonStyle =
        "bg-buttonGray h-[41px]  cursor-pointer text-center xl:w-[235px] lg:w-[235px] md:w-[235px] sm:w-[full] text-[16px] font-medium rounded-[20px] py-[7px] curser-pointer text-white leading-[19.5px]";
      break;
    case "MyAccount"://this button style you can use in myaccount all button in side div :)
      buttonStyle =
        "w-full bg-[#242424] py-[5px] px-[10px] flex items-start text-white cursor-pointer rounded-[3px] hover:bg-[#ff6a28] transition 0.3s ease-in";
      break;
    case "404"://text lekhtay jaen center khod he ho jay ga
      buttonStyle =
        "px-[20px] py-[10px] bg-[#ff6a28] text-white font-[600] hover:bg-[#242424] transition 0.3s ease-in";
      break;
    case "product":
      buttonStyle =
        "w-[150px] py-[5px] absolute  cursor-pointer bottom-[10px] bg-white font-[600] hover:text-[#ff6a28] ml-[20px] flex items-center justify-center transition 0.3s ease-in";
      break;
    case "shopnext":
      buttonStyle =
        "w-[30px] h-[30px] text-white flex items-center justify-center transition 0.3s ease-in";
      break;



    default:
      buttonStyle = "";
      break;
  }

  return (
    <a
      className={`${buttonStyle}`}
      onClick={() => {
        handleButtonClick(variant);
        onClick && onClick();
      }}
      href={href}
    >
      {children}
    </a>
  );
};

Button.propTypes = {
  href: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
};

export default Button;