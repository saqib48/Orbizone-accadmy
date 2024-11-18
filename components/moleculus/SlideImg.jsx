import React from 'react';
import Image from 'next/image';

function SlideImg({ src, p, p2 }) {
  return (
    <div className="text-center gap-8 flex flex-col items-center justify-center">
      <div className="relative w-full h-auto max-w-[130px]">
        <Image
          src={src}
          alt="Description of the image"
          layout="intrinsic"  // Makes the image responsive
          width={130}  // desired width in pixels
          height={100} // desired height in pixels
          className="object-contain"
        />
      </div>
      <div>
        <h3 className="text-slate-200 font-semibold text-[1.125rem]">{p}</h3>
        <span className="text-slate-200">{p2}</span>
      </div>
    </div>
  );
}

export default SlideImg;
