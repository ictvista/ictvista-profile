/* 
import React from 'react'

const Hero = () => {
  return (
    <div>Hero</div>
  )
}

export default Hero */

/* import React from 'react';
import video from '../image/intro/introVideo.mp4';

const Hero = () => {
  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Video container *//* } */
/*       <div className="absolute top-0 left-0 w-full h-full z-0">
        <video autoPlay loop muted className="object-cover w-full h-full filter blur-sm">
          <source src={video} type="video/mp4" />
        </video>
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-40"></div>
      </div> */

  
/*       <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center z-10 px-4 sm:px-8 md:px-16">
        <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold mb-4">
          Welcome to Our Website
        </h1>
        <p className="text-base sm:text-lg md:text-xl">
          Your journey begins here.
        </p>
      </div>
    </section>
  );
};

export default Hero; */ 


import React from 'react';
import video from '../image/intro/introVideo.mp4';

const Hero = () => {
  return (
    <section className="relative w-full h-[calc(100vh-10vh)] flex items-center justify-center text-center px-6 sm:px-12">
      {/* Video Background */}
      <div className="absolute top-0 left-0 w-full h-full z-0">
        <video autoPlay loop muted className="object-cover w-full h-full filter blur-[3px]">
          <source src={video} type="video/mp4" />
        </video>
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
      </div>

      {/* Text Content */}
      <div className="relative z-10 text-white">
        <h1 className="text-3xl sm:text-5xl font-bold mb-4 animate__animated animate__fadeIn">
          Welcome to ICT Vista
        </h1>
        <h2 className="text-xl sm:text-3xl font-semibold mb-6 animate__animated animate__fadeIn animate__delay-1s">
          Innovating the Future of ICT
        </h2>
        <p className="text-sm sm:text-lg max-w-2xl mx-auto opacity-90 animate__animated animate__fadeIn animate__delay-2s">
          ICT Vista is a next-generation ICT solutions provider, offering expert services in 
          IT management, innovation, and digital transformation. Our goal is to empower 
          businesses with cutting-edge technology solutions.
        </p>
      </div>
    </section>
  );
};

export default Hero;

