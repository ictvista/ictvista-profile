
/* import React from 'react';
import img1 from "../image/aboutus/ictteam.jpg" 
import img2 from "../image/aboutus/team.jpg"
import aboutus from '../pages/Aboutus'
import { Link } from 'react-router-dom';
const About = () => {
  return ( */
  /*   <section className="py-16 flex items-center bg-transparent mt-20 mb-20">
      <div className="container mx-auto flex flex-col md:flex-row items-center gap-12 px-6">

        <div className="relative w-full md:w-1/2 flex justify-center">
          <img
            src={img1}
            alt="Team working"
            className="w-64 h-70 md:w-80 rounded-lg shadow-lg relative z-10"
          />
          <img
            src={img2}
            alt="Team collaboration"
            className="w-48 min-h-60 md:w-64 rounded-lg shadow-lg absolute -top-10 -left-10"
          />
        </div>

        <div className="w-full md:w-1/2 text-left">
          <div className="text-center text-xl sm:text-2xl font-semibold mb-10">
            <h2 className="text-3xl font-bold text-gray-800">About Us</h2>
          </div>
          <p className="text-gray-700 mt-4 leading-relaxed">
          At ICT Vista, we are committed to transforming businesses with innovative and reliable ICT solutions. Founded in 2024, we specialize in ICT management, system integration, software development, cybersecurity, cloud services, and tech training. Our mission is to empower organizations with cutting-edge technology that enhances efficiency, connectivity, and growth.
          </p>
          <p className="text-gray-700 mt-2 leading-relaxed">
          With a team of industry experts, we deliver tailored solutions for businesses of all sizes, ensuring seamless digital transformation. Backed by innovation, integrity, and a customer-centric approach, ICT Vista is your trusted partner in navigating the evolving ICT landscape.
          </p>
          <Link to="/about">
        <button className="mt-6 px-6 py-3 bg-blue-500 text-white font-semibold rounded-full shadow-md hover:bg-green-600 transition duration-300">
          More Details
        </button>
      </Link>
         
        </div>
      </div>
    </section> */
    {/* <section className="container mx-auto px-6 py-16 flex flex-col md:flex-row items-center gap-12">
  
    <div className="md:w-1/2">
      <div className="border-t-4 border-black w-16 mb-4"></div>
      <h2 className="text-4xl font-bold text-black">
        Why Customers <br /> Select ICT VISTA
      </h2>
      <p className="text-gray-600 mt-4">
      ICT Vista delivers innovative and customized ICT solutions with a highly skilled team and cutting-edge technology. We prioritize client satisfaction through seamless digital transformation and tailored services. Our commitment to excellence and rapid adaptation to industry trends ensures efficient and scalable solutions for businesses.
      </p>
      <Link to="/about" className="text-green-500 font-semibold mt-2 inline-flex items-center">
          Read More <span className="ml-1">▼</span>
        </Link>
    </div>

    <div className="md:w-1/2">
      <img
        src={img1}
        alt="BJIT Event"
        className="rounded-lg shadow-lg"
      />
    </div>
  </section>
  );
};

export default About; */}




/* import React from "react";
import { Link } from "react-router-dom";
import img1 from "../image/aboutus/ictteam.jpg";

const About = () => {
  return (
    <section className="container mx-auto px-6 py-16 flex flex-col md:flex-row items-center gap-12">
     
      <div className="md:w-1/2">
 
        <div className="border-t-4 border-black w-16 mb-4"></div>
        

        <h2 className="text-4xl font-bold text-black leading-tight">
          Why Customers <br /> Select ICT Vista
        </h2>


        <p className="text-gray-600 mt-4">
          ICT Vista delivers innovative and customized ICT solutions with a highly skilled team and cutting-edge technology. We prioritize client satisfaction through seamless digital transformation and tailored services. Our commitment to excellence and rapid adaptation to industry trends ensures efficient and scalable solutions for businesses.
        </p>

    
        <Link to="/about" className="text-green-500 font-semibold mt-3 inline-flex items-center">
          Read More <span className="ml-1">▼</span>
        </Link>
      </div>

 
      <div className="md:w-1/2">
        <img src={img1} alt="ICT Vista Team" className="rounded-lg shadow-lg" />
      </div>
    </section>
  );
};

export default About;
 */
import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import img1 from "../image/aboutus/girl-pc.jpg";

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <section ref={sectionRef} className="container mx-auto px-6 py-16 flex flex-col md:flex-row items-center gap-12">
      {/* Left Side - Text Content */}
      <div
        className={`md:w-1/2 transition-all duration-1000 ease-in-out ${
          isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
        }`}
      >
        {/* Top Black Bar */}
        <div className="border-t-4 border-black w-16 mb-4"></div>

        {/* Title */}
        <h2 className="text-4xl font-bold text-black leading-tight">
          Why Customers <br /> Select ICT Vista
        </h2>

        {/* Description */}
        <p className="text-gray-600 mt-4">
          ICT Vista delivers innovative and customized ICT solutions with a highly skilled team and cutting-edge technology. We prioritize client satisfaction through seamless digital transformation and tailored services. Our commitment to excellence and rapid adaptation to industry trends ensures efficient and scalable solutions for businesses.
        </p>

        {/* Read More Link */}
        <Link to="/about" className="text-green-500 font-semibold mt-3 inline-flex items-center">
          Read More <span className="ml-1">▼</span>
        </Link>
      </div>

      {/* Right Side - Image */}
      <div
        className={`md:w-1/2 transition-all duration-1000 ease-in-out delay-200 ${
          isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
        }`}
      >
        <img src={img1} alt="ICT Vista Team" className="rounded-lg shadow-lg" />
      </div>
    </section>
  );
};

export default About;
