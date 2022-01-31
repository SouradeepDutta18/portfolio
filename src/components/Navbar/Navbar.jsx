import { height } from '@mui/system';
import React,{useState}from 'react'
import "./Navbar.css"
function Navbar() {
    const[isActive,setActive]=useState(false);
    const[obj,setObj]=useState({home:true,spcl:false,portfolio:false,contact:false,hire:false})
    function handleOpen(){
        document.body.style.overflow="hidden";
         setActive(true);
    }
    function handleClose(){
        document.body.style.overflow="auto";
        setActive(false);
    }
    return (
        <div className='Navbar' style={{backgroundColor:isActive&&"black",height:isActive&&"100vh"}}>
          <div className='wrapper'>
            <a href='/' className='brand'>SOUMYAJIT</a>
             {
                 !isActive?<div className='nav-controller'><img src="open.svg"alt="" onClick={handleOpen}/></div>:
                 <div className='nav-controller'><img src="close.svg"alt="" onClick={handleClose} fill="white"/></div>
             }
            </div>
            <ul className={`links ${isActive?"visible":"invisible"}`}>
               <li onClick={handleClose} ><a href="#home">HOME</a></li>
               <li onClick={handleClose}><a href="#spcl">SERVICES</a></li>
               <li onClick={handleClose}><a href="#portfolio">PORTFOLIO</a></li>
               <li onClick={handleClose} ><a href="#hire">CONTACT</a></li>
               <li onClick={handleClose} ><a href="#hire">HIRE</a></li>
            </ul>
        </div>
    )
}

export default Navbar
