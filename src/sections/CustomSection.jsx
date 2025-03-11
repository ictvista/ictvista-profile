
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const CustomSection = () => {
  const [scrollY, setScrollY] = useState(0);
  const navigate = useNavigate(); // Hook for navigation

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="w-full min-h-[250px] flex flex-row">
      
      {/* First Section - Dark Background with Logo */}
      <div
        className="bg-[#1E1E26] w-1/3 flex items-center justify-center text-white text-3xl font-bold italic shadow-lg transition-transform duration-1000"
        style={{ transform: `translateY(-${scrollY * 0.2}px)` }}
      ><div
      className="bg-[#1E1E26] w-1/3 flex items-center justify-center text-white text-3xl font-bold italic shadow-lg "
      
    >
      ICT VISTA
    </div>
       {/*  <img src="" alt="ICT VISTA" className="h-16 md:h-20" /> */}
      </div>

      {/* Second Section - Blue Background with Button */}
      <div
        className="bg-[#1565c0] w-1/3 flex flex-col items-center justify-center text-white text-lg font-semibold shadow-lg transition-transform duration-1000 px-4 py-6"
        style={{ transform: `translateY(-${scrollY * 0.1}px)` }}
      >
        <p className="text-center">Get in touch now</p>
        <button
          onClick={() => navigate("/contact")} // Navigate on click
          className="bg-gray-200 text-black px-4 py-2 mt-3 rounded flex items-center gap-2 text-sm md:text-base 
                     transition duration-300 hover:bg-black hover:text-white"
        >
          Send Message 💬
        </button>
      </div>

      {/* Third Section - Light Background with Agenda Links */}
      <div
        className="bg-[#EEF2F5] w-1/3 p-4 md:p-6 text-black shadow-lg transition-transform duration-1000"
        style={{ transform: `translateY(-${scrollY * 0.05}px)` }}
      >
        <h2 className="text-lg md:text-xl font-semibold mb-2">Agenda</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-2 text-xs md:text-sm">
          <div>
            <p><a href="#services" className="text-gray-700 hover:underline">Technology Services</a></p>
            <p><a href="#why" className="text-gray-700 hover:underline">Why Select ICT</a></p>
            <p><a href="#clients" className="text-gray-700 hover:underline">Our Clients</a></p>
          </div>
          <div>
            <p><a href="#works" className="text-gray-700 hover:underline">Our Works</a></p>
            <p><a href="#testimonials" className="text-gray-700 hover:underline">Testimonials</a></p>
            <p><a href="#awards" className="text-gray-700 hover:underline">Awards, Certificates & Partnerships</a></p>
          </div>
          <div>
            <p><a href="#news" className="text-gray-700 hover:underline">News</a></p>
            <p><a href="#faqs" className="text-gray-700 hover:underline">FAQs</a></p>
          </div>
        </div>
      </div>

    </div>
  );
};

export default CustomSection;
