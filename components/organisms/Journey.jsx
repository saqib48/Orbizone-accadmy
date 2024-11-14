import React from 'react'
import Heading from "../atoms/Heading"

function Journey() {
  return (
    <div>
      <div className="my-[30px] text-center flex flex-col gap-3 items-center justify-center" data-aos="fade-down">
        <Heading className="text-4xl font-bold text-[#F87171] justify-center items-center flex">
          Start your
        </Heading>
        <Heading className="text-3xl font-bold text-[#FFFFFF] justify-center items-center flex">
          Learning Journey Today!
        </Heading>
      </div>
    </div>
  )
}

export default Journey
