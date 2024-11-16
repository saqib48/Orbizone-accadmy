'use client';
import React from 'react';
import Slidding from './Slidding';

function Slider() {
  return (
    <div className="bg-[#161719]">
      <div className="w-full rounded-[10px] bg-[#0C0C0C]">
        <div className="flex flex-col gap-2 lg:flex-row items-center justify-between px-4 lg:px-[60px] py-6">
          {/* Adjust text alignment and padding for responsiveness */}
          <div className="text-[#8A8B8C] font-bold text-[24px] lg:text-[30px] text-center lg:text-left">
            Partnerships
          </div>
          <Slidding />
        </div>
      </div>
    </div>
  );
}

export default Slider;
