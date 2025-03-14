import { Routes, Route } from "react-router-dom";
/* import Hero from "../sections/Hero"; */

/* import Services from "../sections/Services";
import Contact from "../sections/Contact";
import Join from "../sections/Join";
import Technology from "../sections/Technology";
import Testimonial from "../sections/Testomonial";
import About from "../sections/About"; */
import Home from "../pages/Home";
import Services from "../pages/Service";
import Contact from "../sections/Contact";
import Career from "../pages/Career"
import Aboutus from "../pages/Aboutus";


const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<Aboutus />} />
      <Route path="/services" element={<Services />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/join" element={<Career />} />
     {/*  <Route path="/technology" element={<Technology />} /> */}
     {/*  <Route path="/testimonials" element={<Testimonial />} /> */}
    </Routes>
  );
};

export default AppRoutes;
