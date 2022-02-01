import React,{useState} from 'react';
import Photography from './Photography';
import WebDesign from './WebDesign';
import Others from './Others';
import "./Portfolio.css"
function Portfolio() {
  const[wactive,setWactive]=useState(false);
  const[pactive,setPactive]=useState(true);
  const[otheractive,setOtheractive]=useState(false);
  function whandler(){
    setWactive(true);
    setPactive(false);
    setOtheractive(false);
  }
  function phandler(){
    setWactive(false);
    setPactive(true);
    setOtheractive(false);
  }
  function ohandler(){
    setWactive(false);
    setPactive(false);
    setOtheractive(true);
  }
  return <div className='Portfolio' id='portfolio' data-aos="fade-in">
  <div className='p-heading'>
  <h1>MY WORKS</h1>
  </div>
  <div className='p-options'>
  
  <p className={`${wactive&&"active"}`} onClick={whandler}>Web</p>
  <p className={`${pactive&&"active"}`} onClick={phandler}>Photography</p>
  <p className={`${otheractive&&"active"}`} onClick={ohandler}>Others</p>
  
  </div>
  <div className='portfolio-items'  >
  {
    wactive?<WebDesign wactive={wactive}/>:null
  }
  {
    pactive?<Photography pactive={pactive}/>:null
  }
  {
    otheractive?<Others otheractive={otheractive}/>:null
  }

  
  
  </div>
  
  
  
  </div>;
}

export default Portfolio;
