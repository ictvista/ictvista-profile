import React from "react";
import { Routes, Route } from "react-router-dom";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Services from "./sections/Services";
import Contact from "./sections/Contact";
import Join from "./sections/Join";
import Technology from "./sections/Technology";
import Testimonial from "./sections/Testomonial";
import CustomSection from "./sections/CustomSection";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Hero />} />
      <Route path="/about" element={<About />} />
      <Route path="/services" element={<Services />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/career" element={<Join />} />
      <Route path="/technology" element={<Technology />} />
      <Route path="/testimonials" element={<Testimonial />} />
      <Route path="/custom-section" element={<CustomSection />} />
    </Routes>
  );
};

export default AppRoutes;
