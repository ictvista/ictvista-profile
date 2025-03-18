/* 

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
 */
/* import "./App.css";
import "./index.css";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import AppRoutes from "./AppRoutes"; 

const App = () => {
  return (
    <Router>
      <div className="overflow-x-hidden">
        <Header />
        <AppRoutes />
        <Footer />
      </div>
    </Router>
  );
};

export default App; */

/* import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import AppRoutes from "./routes/AppRoutes";


const App = () => {
  return (
    <Router>
      <div className="overflow-x-hidden">
        <Header />
        <AppRoutes />
        <Footer />
      </div>
    </Router>
  );
};

export default App; */
/* import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer"; */
/* import AppRoutes from "./AppRoutes"; */ // Ensure this file exists
/* import "./App.css"; */
/* import { BrowserRouter as Router } from "react-router-dom"; */
/* import Header from "./components/Header";
import Footer from "./components/Footer";
import AppRoutes from "./routes/AppRoutes";
const App = () => {
  return (
    <div className="overflow-x-hidden">
      <Header />
      <AppRoutes />
      <Footer />
    </div>
  );
};

export default App; */
/* import React, { Suspense, lazy } from "react";
import "./App.css";

const Header = lazy(() => import("./components/Header"));
const Footer = lazy(() => import("./components/Footer"));
const AppRoutes = lazy(() => import("./routes/AppRoutes"));

const App = () => {
  return (
    <div className="overflow-x-hidden">
      <Suspense fallback={<div className="h-screen flex flex-col items-center justify-center space-y-4 bg-gray-100">
   
    <div className="w-24 h-24 bg-gray-300 rounded-full animate-pulse"></div>
    
   
    <div className="w-48 h-6 bg-gray-300 rounded animate-pulse"></div>
    <div className="w-64 h-6 bg-gray-300 rounded animate-pulse"></div>
  </div>}>
        <Header />
        <AppRoutes />
        <Footer />
      </Suspense>
    </div>
  );
};

export default App; */
/* import React, { Suspense, lazy } from "react";
import "./App.css";

const Header = lazy(() => import("./components/Header"));
const Footer = lazy(() => import("./components/Footer"));
const AppRoutes = lazy(() => import("./routes/AppRoutes"));

const SkeletonLoader = () => (
  <div className="h-screen flex flex-col items-center justify-center bg-gray-100">
    <div className="w-full h-12 bg-gray-300 animate-pulse"></div>
    <div className="w-11/12 md:w-3/4 h-48 bg-gray-300 rounded-lg animate-pulse my-4"></div>
    <div className="w-11/12 md:w-3/4 h-6 bg-gray-300 rounded animate-pulse"></div>
    <div className="w-10/12 md:w-2/3 h-6 bg-gray-300 rounded animate-pulse my-2"></div>
    <div className="w-full h-12 bg-gray-300 animate-pulse absolute bottom-0"></div>
  </div>
);

const App = () => {
  return (
    <div className="overflow-x-hidden">
      <Suspense fallback={<SkeletonLoader />}>
        <Header />
        <AppRoutes />
        <Footer />
      </Suspense>
    </div>
  );
};

export default App; */
/* import React, { Suspense, lazy } from "react";
import "./App.css";

const Header = lazy(() => import("./components/Header"));
const Footer = lazy(() => import("./components/Footer"));
const AppRoutes = lazy(() => import("./routes/AppRoutes"));

const SkeletonLoader = () => (
  <div className="h-screen flex flex-col items-center justify-center bg-gray-100">
    
    <div className="relative w-16 h-16">
      <div className="absolute inset-0 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
    </div>

 
    <div className="w-11/12 md:w-3/4 h-48 bg-gray-300 rounded-lg animate-pulse my-6"></div>
    <div className="w-11/12 md:w-3/4 h-6 bg-gray-300 rounded animate-pulse"></div>
    <div className="w-10/12 md:w-2/3 h-6 bg-gray-300 rounded animate-pulse my-2"></div>

  
    <div className="w-full h-12 bg-gray-300 animate-pulse absolute bottom-0"></div>
  </div>
);

const App = () => {
  return (
    <div className="overflow-x-hidden">
      <Suspense fallback={<SkeletonLoader />}>
        <Header />
        <AppRoutes />
        <Footer />
      </Suspense>
    </div>
  );
};

export default App; */
/* import React, { Suspense, lazy } from "react";
import "./App.css";

const Header = lazy(() => import("./components/Header"));
const Footer = lazy(() => import("./components/Footer"));
const AppRoutes = lazy(() => import("./routes/AppRoutes"));

const CodingLoader = () => (
  <div className="h-screen flex flex-col items-center justify-center bg-black text-green-400 font-mono">
    <div className="w-80 bg-gray-900 p-4 rounded-lg shadow-lg">
      <p className="text-green-400 text-sm">
        <span className="inline-block animate-blink">const loading = true;</span>
      </p>
      <p className="text-green-400 text-sm">
        <span className="inline-block animate-blink">if (loading) &#123;</span>
      </p>
      <p className="text-green-400 text-sm pl-4">
        <span className="inline-block animate-blink">console.log("Loading...");</span>
      </p>
      <p className="text-green-400 text-sm">
        <span className="inline-block animate-blink">&#125;</span>
      </p>
    </div>
  </div>
);

const App = () => {
  return (
    <div className="overflow-x-hidden">
      <Suspense fallback={<CodingLoader />}>
        <Header />
        <AppRoutes />
        <Footer />
      </Suspense>
    </div>
  );
};

export default App; */
/* import React, { Suspense, lazy } from "react";
import "./App.css";

const Header = lazy(() => import("./components/Header"));
const Footer = lazy(() => import("./components/Footer"));
const AppRoutes = lazy(() => import("./routes/AppRoutes"));

const AnimatedLoader = () => {
  const text = "ICT VISTA".split("");

  return (
    <div className="h-screen flex items-center justify-center bg-black relative overflow-hidden">
      <div className="relative w-[600px] h-[36px] flex">
        {text.map((char, index) => (
          <span
            key={index}
            className="absolute w-[20px] h-[36px] opacity-0 text-[#35C4F0] text-2xl font-bold"
            style={{
              animation: `move 2s linear infinite`,
              animationDelay: `${index * 0.2}s`,
            }}
          >
            {char}
          </span>
        ))}
      </div>
    </div>
  );
};

const App = () => {
  return (
    <div className="overflow-x-hidden">
      <Suspense fallback={<AnimatedLoader />}>
        <Header />
        <AppRoutes />
        <Footer />
      </Suspense>
    </div>
  );
};

export default App;
 */
import React, { Suspense, lazy } from "react";
import "./App.css";

const Header = lazy(() => import("./components/Header"));
const Footer = lazy(() => import("./components/Footer"));
const AppRoutes = lazy(() => import("./routes/AppRoutes"));
import AnimatedLoader from "./components/AnimatedLoader";

const App = () => {
  return (
    <div className="overflow-x-hidden">
      <Suspense fallback={<AnimatedLoader />}>
        <Header />
        <AppRoutes />
        <Footer />
      </Suspense>
    </div>
  );
};

export default App;
