import React from 'react';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import Technologies from './components/Technologies.jsx';
import Projects from './components/Projects.jsx';
import Contact from './components/Contact.jsx';
import Featured from './components/Featured.jsx';


const App = () => {
  return (
    <div className="min-h-screen w-full bg-slate-950 overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900 px-16">
      
      <div className="fixed top-0 -z-10 h-full w-full"></div>
      {/* Gradient Background Bubbles */}
      <div className="relative w-full h-full overflow-hidden">
        {/* Left Gradient */}
        <div className="absolute top-[-10%] left-[-20%] h-[500px] w-[500px] rounded-full" style={{ background: 'radial-gradient(circle farthest-side, rgba(255, 0, 182, 0.15), rgba(255, 255, 255, 0))',}}></div>
        {/* Right Gradient */}
        <div className="absolute top-[-10%] right-[-20%] h-[500px] w-[500px] rounded-full" style={{ background: 'radial-gradient(circle farthest-side, rgba(255, 0, 182, 0.15), rgba(255, 255, 255, 0))',}}></div>
      </div>
      <div className="container mx-auto px-8">
      </div>
      <Navbar />
      <Hero />
      <About />
      <Technologies />
      <Projects/>
      <Featured />
      <Contact />
    </div>
  );
};

export default App;
