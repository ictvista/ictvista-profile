// src/pages/Home.js
import React from 'react';

// Import your section components
import Hero from "../sections/Hero";
import About from "../sections/About";
import Services from "../sections/Services";
import Contact from "../sections/Contact";
/* import Join from "../sections/Join"; */
import Technology from "../sections/Technology";


import Testimonial from '../sections/Testomonial';
import CustomSection from '../sections/CustomSection';

const Home = () => {
  return (
    <div>
      <Hero />         {/* Hero Section */}
      <CustomSection />
      <About />        {/* About Section */}
      <Services />     {/* Services Section */}
      
     
      <Technology />   {/* Technology Section */}
      <Testimonial />  {/* Testimonial Section */}
   {/*    <Join />    */}      {/* Join Section */}
      <Contact />      {/* Contact Section */}
    </div>
  );
}

export default Home;