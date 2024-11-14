"use client";

import React, { useState } from 'react'
import Profile from '../moleculus/Profile'

function TeamSearch() {
  const [filter, setFilter] = useState('All'); // filter state to manage button clicks

  // Profiles data in array
  const profiles = [
    { src: '/assits/images/azeem.webp', alt: 'director', Name: 'Azeem Qasim', Role: 'Founder & CEO', category: 'Directors' },
    { src: '/assits/images/Tariqsb.webp', alt: 'director', Name: 'Tariq Amin', Role: 'Managing Director', category: 'Directors' },
    { src: '/assits/images/shahan.webp', alt: 'director', Name: 'Shahan Azam', Role: 'Director Operations', category: 'Directors' },
    { src: '/assits/images/usama.webp', alt: 'director', Name: 'M. Usama Khalid', Role: 'Director Education', category: 'Directors' },
    { src: '/assits/images/taseen.webp', alt: 'seo', Name: 'Taseen Baig', Role: 'Sr. SEO Expert', category: 'Digital Marketer' },
    { src: '/assits/images/sohail.jpg', alt: 'developer', Name: 'Sohail Tariq', Role: 'Sr. Data Scientist', category: 'Developers' },
    { src: '/assits/images/aleena.webp', alt: 'director', Name: 'Aleena Safdar', Role: 'Head Of Department', category: 'Directors' },
    { src: '/assits/images/shehroz.webp', alt: 'developer', Name: 'Mr. Shehroz', Role: 'Android App Developer', category: 'Developers' },
    { src: '/assits/images/hamza.jpg', alt: 'developer', Name: 'Hamza Aamir', Role: 'Sr. Web Developer', category: 'Developers' },
    { src: '/assits/images/haseeb.webp', alt: 'marketer', Name: 'Hafiz M. Haseeb', Role: 'Sr. Digital Marketer', category: 'Digital Marketer' },
    { src: '/assits/images/bushra.webp', alt: 'officer', Name: 'Bushra Ayub', Role: 'Business Development Officer', category: 'Management Officers' },
    { src: '/assits/images/ahmad.jpg', alt: 'design', Name: 'Syed Ahmad Hasnain', Role: 'Sr. Graphic Designer', category: 'Art & Design' },
  ];

  // Function to handle filter change
  const handleFilterChange = (category) => {
    setFilter(category);
  };

  // Filtered profiles based on selected filter
  const filteredProfiles = filter === 'All' ? profiles : profiles.filter(profile => profile.category === filter);

  return (
    <div>
      <div className='flex justify-between mx-[4%]'>
        {['All', 'Directors', 'Art & Design', 'Developers', 'Digital Marketer', 'Management Officers'].map((category) => (
          <button
            key={category}
            onClick={() => handleFilterChange(category)}
            className={`w-full my-1 mx-2 bg-none text-base text-white px-8 py-2 rounded-[10px] flex items-center justify-center cursor-pointer  transition duration-300 ease-in ${filter === category ? 'bg-[#0d3882]' : 'bg-[#2347e71f]'} border-[1px] border-solid text-[14px] text-normal border-[#0d3882]`}
          >
            {category}
          </button>
        ))}
      </div>

      <div className='flex gap-[27px] items-center mx-[4%] flex-wrap my-[5%] justify-center'>
        {filteredProfiles.map((profile, index) => (
          <Profile
            key={index}
            src={profile.src}
            alt={profile.alt}
            Name={profile.Name}
            Role={profile.Role}
          />
        ))}
      </div>
    </div>
  )
}

export default TeamSearch;
