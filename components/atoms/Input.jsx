import PropTypes from "prop-types";
import "../../app/globals.css";
import React from "react";

function Input({ variant, value, onChange, type, id, name, placeholder }) {
  let inputStyle = "";
  switch (variant) {


    case "five":
      inputStyle =
        "w-[100%] h-[42px] outline-none border-[1px] text-[15px] text-[#302e2e]  border-[#cacaca] p-[15px]  ";
      break;
    case "five2":
      inputStyle =
        "w-[365px] h-[45px] outline-none border-[1px] text-[14px] px-[20px] border-[#cacaca] py-[5px]  text-[#cacaca]  pb-[10px]  ";
      break;


  }

  return <input value={value} onChange={onChange} type={type} placeholder={placeholder} className={inputStyle} />;
}

Input.propTypes = {
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  variant: PropTypes.string.isRequired,
};

export default Input;