"use client";

import React, { useEffect } from 'react';
import Home from './home';
import 'aos/dist/aos.css';
import AOS from 'aos';
import "../app/globals.css"

function Index() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      once: true, // Animation will happen only once
    });
  }, []);

  return (
    <div>
      <Home />
      {/* website are COMPLETED */}
    </div>
  );
}

export default Index;
