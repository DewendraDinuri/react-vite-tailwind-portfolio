import React from 'react'
import Navbar from './components/Navbar.jsx';

 const App = () => {
  return (
    <div>
      <Navbar/> 
      <div className="relative min-h-screen w-full bg-slate-950 overflow-hidden">
        <div className="absolute top-[-10%] left-[-20%] h-[500px] w-[500px] rounded-full" style={{ background: 'radial-gradient(circle farthest-side, rgba(255, 0, 182, 0.15), rgba(255, 255, 255, 0))',}}></div>
        <div className="absolute top-[-10%] right-[-20%] h-[500px] w-[500px] rounded-full" style={{ background: 'radial-gradient(circle farthest-side, rgba(255, 0, 182, 0.15), rgba(255, 255, 255, 0))', }}></div>
      </div>
    </div>
  );
};

export default App
