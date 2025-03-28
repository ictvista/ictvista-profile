
import React from 'react';

const Hero = () => {
  return (
    <section className="relative w-full h-[calc(100vh-10vh)] flex items-center justify-center text-center px-6 sm:px-12">
      {/* Video Background */}
      <div className="absolute top-0 left-0 w-full h-full z-0">
        <video autoPlay playsInline loop muted preload="auto" className="object-cover w-full h-full filter blur-[5.5px]" poster="/Poster3.svg">
          <source src="/introVideo1.mp4" type="video/mp4" />
        </video>
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
      </div>

      {/* Text Content */}
      <div className="relative z-10 text-white">
        <h1 className="text-3xl sm:text-5xl font-bold mb-4 animate__animated animate__fadeIn">
          Welcome to{" "}
          <span className="text-[#0098D9]">ICT Vista</span>
        </h1>
        <h2 className="text-xl sm:text-3xl font-semibold mb-6 animate__animated animate__fadeIn animate__delay-1s">
          Innovative Tech for Learning & Earning
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
