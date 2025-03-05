
import './App.css'
import Header from './components/Header'

import About from './sections/About'
import Hero from './sections/Hero'
import Services from './sections/Services'
import Contact from './sections/Contact'
import Join from './sections/Join'
/* import footer from './components/footer' */


const App = () => {
 

  return (
    <>
    <div >
    <Header />
      <Hero />
      <About />
      <Services />
      <Contact />
      <Join />
     

    </div>
    
     
    </>
  );
}

export default App;
