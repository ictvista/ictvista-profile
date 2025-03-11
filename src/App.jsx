/* 
import './App.css'
import './index.css'
import { motion } from "framer-motion";
import Header from './components/Header'
import 'animate.css';
import About from './sections/About'
import Hero from './sections/Hero'
import Services from './sections/Services'
import Contact from './sections/Contact'
import Join from './sections/Join'
import Technology from './sections/Technology';
import Footer from './components/Footer';
import Testimonial from './sections/Testomonial';




const App = () => {
 

  return (
    <>
    <div >
    <Header />
      <Hero />
      <About />
      <Services />
      <Testimonial />
      <Technology />
      <Contact />
      
      
      <Join />
      <Footer />

     

    </div>
    
     
    </>
  );
}

export default App;
 */

import "./App.css";
import "./index.css";
import { motion } from "framer-motion";
import Header from "./components/Header";
import "animate.css";
import About from "./sections/About";
import Hero from "./sections/Hero";
import Services from "./sections/Services";
import Contact from "./sections/Contact";
import Join from "./sections/Join";
import Technology from "./sections/Technology";
import Footer from "./components/Footer";
import Testimonial from "./sections/Testomonial";
import CustomSection from "./sections/CustomSection";


// Animation Variants
const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const App = () => {
  return (
    <>
      <div className="overflow-x-hidden">
        <Header />
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeInUp}
        >
          
          <Hero />
        </motion.section>
      

       
           
          <CustomSection /> 
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeInUp}
        ></motion.section>
          <About />
        

        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeInUp}
        >
          <Services />
        </motion.section>

        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeInUp}
        >
          <Testimonial />
        </motion.section>

        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeInUp}
        >
          <Technology />
        </motion.section>

        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeInUp}
        >
          <Contact />
        </motion.section>

        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeInUp}
        >
          <Join />
        </motion.section>

        <Footer />
      </div>
    </>
  );
};

export default App;
