import React from 'react';
import Counter3 from '../moleculus/Counter3';
import { FaPersonBurst } from "react-icons/fa6";
import { FaWineGlass } from "react-icons/fa";
import { IoAlarm } from "react-icons/io5";
import { BiSolidLike } from "react-icons/bi";
import Container from '../atoms/Container';

function Counter() {
  return (
    <Container>
      <div className="my-[50px] text-center flex flex-col gap-3 items-center justify-center" data-aos="fade-down">
        <h2 className="text-4xl font-bold text-[#02C6FE]">Orbizone College Of IT</h2>
        <h2 className="text-2xl font-bold text-[#FFFFFF]">Legacy to be Remembered</h2>
      </div>

      <div className='flex flex-col sm:flex-row justify-between items-center my-[40px] gap-8 sm:gap-0'>
        <div className="text-white flex-1">
          <Counter3 targetCount={2140} startCount={1} icon={<FaPersonBurst className='text-[30px]' />} contant={"IT Courses"} />
        </div>
        <div className="text-white flex-1">
          <Counter3 targetCount={4080} startCount={1} icon={<FaWineGlass className='text-[30px]' />} contant={"Success Stories"} />
        </div>
        <div className="text-white flex-1">
          <Counter3 targetCount={2150} startCount={1} icon={<IoAlarm className='text-[30px]' />} contant={"Students"} />
        </div>
        <div className="text-white flex-1">
          <Counter3 targetCount={2170} startCount={1} icon={<BiSolidLike className='text-[30px]' />} contant={"Alumni"} />
        </div>
      </div>
    </Container>
  );
}

export default Counter;
