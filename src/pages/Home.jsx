/* import React from "react";
import Hero from "../sections/Hero";
import About from "../sections/About";
import Services from "../sections/Services";
import Contact from "../sections/Contact";
import Technology from "../sections/Technology";
import Testimonial from "../sections/Testomonial";
import CustomSection from "../sections/CustomSection";

const Home = () => {
  return (
    <div className="relative w-full min-h-screen">
   
      <div className="fixed inset-0 pointer-events-none z-[-1] bg-grid-pattern animate-moveGrid" />

      <div className="relative z-10">
        <Hero />
        <CustomSection />
        <About />
        <Services />
        <Technology />
        <Testimonial />
        <Contact />
      </div>
    </div>
  );
};

export default Home;
 */
import React from "react";
import Hero from "../sections/Hero";
import About from "../sections/About";
import Services from "../sections/Services";
import Contact from "../sections/Contact";
import Technology from "../sections/Technology";
import Testimonial from "../sections/Testomonial";
import CustomSection from "../sections/CustomSection";


const Home = () => {
  return (
    <div className="relative w-full min-h-screen bg-[#ECF5FD]">
      {/* Background Grid */}
  
                      
      {/* Content */}
      <div className=" ">
        <Hero />
        <CustomSection />
        <About />
        <Services />
        <Technology />
        <Testimonial />
        
        <Contact />
        
      </div>

      {/* Inline CSS for Keyframes */}
      <style>
        {`
          @keyframes moveGrid {
            from {
              background-position: 0 0;
            }
            to {
              background-position: 50px 50px;
            }
          }
        `}
      </style>
    </div>
  );
};

export default Home;
