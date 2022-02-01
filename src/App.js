import React from 'react'
import Home from './components/Home/Home'
import Navbar from './components/Navbar/Navbar'
import Contact from './components/Contact/Contact';
import Specialization from './components/specialization/Specialization';
import Hire from './components/Hire/Hire';
import Portfolio from './components/Portfolio/Portfolio';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init({
  offset: 300,
  duration: 1900
});

function App() {
  return (
    
    <div className='App' style={{overflowX:"hidden"}}>
    <Navbar />
    <Home />
    <Specialization/>
    <Portfolio/>
    <Contact/>
    <Hire/>
    </div>
    );
  
}

export default App
