
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
/* import footer from './components/footer' */



const App = () => {
 

  return (
    <>
    <div >
    <Header />
      <Hero />
      <About />
      <Services />
      <Technology />
      <Contact />
      
      
      <Join />

     

    </div>
    
     
    </>
  );
}

export default App;
