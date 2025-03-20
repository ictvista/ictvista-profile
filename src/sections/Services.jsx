import React, { useEffect, useState, useRef } from 'react';
import webDevImage from '../image/service/web.png';
import uiUxImage from '../image/service/UIUX.png';
import TrainingImage from '../image/service/Training2.svg';
import marketingImage from '../image/service/marketing.png';
import seoImage from '../image/service/Seo.jpg';
import contentImage from '../image/service/Content.png';

const Services = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  const [scrollDirection, setScrollDirection] = useState("down");

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.7 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  useEffect(() => {
    let lastScrollY = window.scrollY;
    const handleScroll = () => {
      setScrollDirection(window.scrollY > lastScrollY ? "down" : "up");
      lastScrollY = window.scrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const services = [
    { id: 1, title: 'Professional Training & Skill Development', description: 'Enhance your skills with our expert-led training programs.', image: TrainingImage },
    { id: 2, title: 'Web Development', description: 'Building responsive and dynamic websites tailored to your needs.', image: webDevImage },
    { id: 3, title: 'UI/UX Design', description: 'Creating user-friendly and visually appealing designs.', image: uiUxImage },
    { id: 4, title: 'Marketing', description: 'Boosting your brand with strategic digital marketing solutions.', image: marketingImage },
    { id: 5, title: 'SEO Optimization', description: 'Enhancing your website’s visibility on search engines.', image: seoImage },
    { id: 6, title: 'Content Writing', description: 'Crafting engaging and SEO-friendly content.', image: contentImage }
  ];

  return (
    <div ref={sectionRef} className="relative flex flex-row items-start w-full px-6 md:px-10 py-20">
      
      {/* Moving Section - Smooth Entry & Exit */}
      <div 
        className={`fixed left-50 md:left-30 top-20 flex flex-col items-center transition-transform duration-[2000ms] ease-in-out ${
          isVisible ? (scrollDirection === "down" ? "translate-y-2 opacity-100" : "translate-y-0 opacity-100") : "translate-y-[-100%] opacity-0"
        }`}
      >
        {/* Top Line */}
        <div className="w-[2px] h-70 md:h-50 bg-black"></div>

        {/* Rotated Text */}
      
        <div 
  className="text-black text-xl font-bold tracking-wide my-2 flex flex-col items-center transform rotate-270"
  style={{ lineHeight: "10" }}>
  <span>What we Serve</span>

</div>


        {/* Bottom Line */}
        <div className="w-[2px] h-70 md:h-50 bg-black"></div>
      </div>

      {/* Right Side - Services Cards */}
      <div className="ml-auto w-full md:w-3/4 grid grid-cols-1 md:grid-cols-2 gap-2">
        {services.map((service) => (
          <div
            key={service.id}
            className="relative group w-full h-72 overflow-hidden cursor-pointer bg-cover bg-center bg-no-repeat rounded-lg shadow-md"
            style={{ backgroundImage: `url(${service.image})` }}
          >
            <div className="absolute inset-0 bg-[#031426] opacity-85 transition-transform duration-500 group-hover:scale-105"></div>
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-lg font-semibold p-4 transition-opacity duration-500 group-hover:opacity-0">
              {service.title}
            </div>
            <div className="absolute inset-0 bg-opacity-80 flex flex-col items-center justify-center text-white p-6 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
              <h2 className="text-lg font-bold text-center">{service.title}</h2>
              <hr className="w-12 my-2 border-white" />
              <p className="text-sm text-center">{service.description}</p>
              <a href="#" className="mt-3 text-blue-400 flex items-center">Read More →</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
