import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Landing from './components/Landing';
import Marquee from './components/Marquee';
import About from './components/About';
import Eyes from './components/Eyes';
import Featured from './components/Featured';
import Cards from './components/Cards';
import Footer from './components/Footer';
import LocomotiveScroll from 'locomotive-scroll';

const App = () => {
  useEffect(() => {
    let locomotiveScroll;
    const handleResize = () => {
      if (window.innerWidth > 600) {
        if (!locomotiveScroll) {
          locomotiveScroll = new LocomotiveScroll();
        }
      } else {
        if (locomotiveScroll) {
          locomotiveScroll.destroy();
          locomotiveScroll = null;
        }
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Call once on mount

    return () => {
      window.removeEventListener('resize', handleResize);
      if (locomotiveScroll) {
        locomotiveScroll.destroy();
      }
    };
  }, []);

  return (
    <div className='w-full min-h-screen overflow-hidden bg-zinc-900 text-white'>
      <Navbar />
      <Landing />
      <Marquee />
      <About />
      <Eyes />
      <Featured />
      <Cards />
      <Footer />
    </div>
  );
};

export default App;

