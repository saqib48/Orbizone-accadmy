"use client";

import React, { useState } from 'react';
import Profile from '../moleculus/Profile';

function TeamSearch() {
  const [filter, setFilter] = useState('All');

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

  const handleFilterChange = (category) => {
    setFilter(category);
  };

  const filteredProfiles = filter === 'All' ? profiles : profiles.filter(profile => profile.category === filter);

  return (
    <div>
      {/* Filter Buttons */}
      <div className='flex flex-wrap justify-center md:justify-between mx-[4%]'>
        {['All', 'Directors', 'Art & Design', 'Developers', 'Digital Marketer', 'Management Officers'].map((category) => (
          <button
            key={category}
            onClick={() => handleFilterChange(category)}
            className={`w-full sm:w-auto my-2 sm:my-1 mx-2 bg-none text-base text-white px-12 py-4 rounded-[10px] flex items-center justify-center cursor-pointer transition duration-300 ease-in ${filter === category ? 'bg-[#02C6FE]' : 'bg-[#0C222B]'
              } border-[1px] border-solid text-[14px] text-normal border-[#02C6FE]`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Profile Section */}
      <div className='flex flex-wrap gap-4 mx-[4%] my-[5%] md:justify-start justify-center'>
        {filteredProfiles.map((profile, index) => (
          <div
            key={index}
            className='w-full sm:w-auto flex flex-col items-center sm:items-start' // Mobile row mein dikhayega
          >
            <Profile
              src={profile.src}
              alt={profile.alt}
              Name={profile.Name}
              Role={profile.Role}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default TeamSearch;
