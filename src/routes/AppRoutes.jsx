import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home";

import Contact from "../pages/Contact";
import Career from "../pages/Career"
import Aboutus from "../pages/Aboutus";
import ProfessionalTraining from "../pages/Service/ProfessionalTraining";
import Webdev from "../pages/Service/WebDevelopment";
import UIux from "../pages/Service/DesignUi";
import Marketing from "../pages/Service/Marketing";
import Seo from "../pages/Service/Seo";
import Contentwriting from "../pages/Service/Contentwriting";



const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<Aboutus />} />
      <Route path="/ProfessionalTraining" element={<ProfessionalTraining />} />
      <Route path="/Webdevelopment" element={<Webdev />} />
      <Route path="/Uiux" element={<UIux />} />
      <Route path="/marketing" element={<Marketing />} />
      <Route path="/seo" element={<Seo/>}/>
      <Route path="/content" element={<Contentwriting />}/>
      
      
  
     
      <Route path="/contact" element={<Contact />} />
      <Route path="/join" element={<Career />} />
     {/*  <Route path="/technology" element={<Technology />} /> */}
     {/*  <Route path="/testimonials" element={<Testimonial />} /> */}
    </Routes>
  );
};

export default AppRoutes;
