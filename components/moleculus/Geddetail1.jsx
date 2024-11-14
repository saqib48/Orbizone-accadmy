import React from 'react'
import Paragraph from '../atoms/Paragraph'
import Image from 'next/image'

function Geddetail1() {
  return (
    <div className='max-w-[1200px] mx-auto px-4 pt-10 pb-2'>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ">
            <div className="space-y-2">
                <Paragraph variant='paraAbout1'>Welcome to Edify Group of Companies, your trusted partner in shaping educational journeys and unlocking limitless opportunities. As the global landscape evolves at an unprecedented pace, education emerges as the beacon guiding individuals towards their aspirations. At Edify, we embrace this ethos wholeheartedly.</Paragraph>
                <Paragraph variant='paraAbout1'>Introducing our latest endeavour; the launch of our General Educational Development (GED) certificate exam (USA) prep centre. As pioneers in the realm of international education consultancy, we understand the paramount importance of providing pathways to success that are not only comprehensive but also adaptable to the ever-changing demands of the modern world.</Paragraph>
                <Paragraph variant='paraAbout1'>The GED certificate holds the key to unlocking doors to higher education and career advancement for individuals seeking alternative routes to traditional academic paths. With our expert guidance and unwavering support, we empower learners to conquer this milestone with confidence.</Paragraph>
            </div>
            <div className="mt-3">
                <Image
                className='rounded-[7px] '
                 src="/assits/images/ged1.avif"
                 alt='ged1'
                 width={600}
                 height={300}
                 />
            </div>
        </div>
    </div>
  )
}

export default Geddetail1