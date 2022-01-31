import React from 'react'
import Home from './components/Home/Home'
import Navbar from './components/Navbar/Navbar'
import Contact from './components/Contact/Contact';
import Specialization from './components/specialization/Specialization';
import Hire from './components/Hire/Hire';
import Portfolio from './components/Portfolio/Portfolio';

function App() {
  return (
    
    <>
    <Navbar />
    <Home />
    <Specialization/>
    <Portfolio/>
    <Contact/>
    <Hire/>
    </>
    );
  
}

export default App
