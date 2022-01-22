import React,{useState}from 'react'
import "./Navbar.css"
function Navbar() {
    const[isActive,setActive]=useState(false);
    function handleOpen(){
         setActive(true);
    }
    function handleClose(){
        setActive(false);
    }
    return (
        <div className='Navbar'>
          <div className='wrapper'>
            <a href='/' className='brand'>SOUMYAJIT</a>
             {
                 !isActive?<div className='nav-controller'><img src="open.svg"alt="" onClick={handleOpen}/></div>:
                 <div className='nav-controller'><img src="close.svg"alt="" onClick={handleClose} fill="white"/></div>
             }
            </div>
            <ul className={`links ${isActive?"visible":"invisible"}`}>
               <li><a href="#">HOME</a></li>
               <li><a href="#">SERVICES</a></li>
               <li><a href="#">PORTFOLIO</a></li>
               <li><a href="#">REVIEW</a></li>
               <li><a href="#">CONTACT</a></li>
               <li><a href="#">HIRE ME</a></li>
            </ul>
        </div>
    )
}

export default Navbar
