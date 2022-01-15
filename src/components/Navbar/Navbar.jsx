import React from 'react'
import "./Navbar.css"
function Navbar() {
    return (
        <div className='Navbar'>
            <a href='/' className='brand'>SD</a>
            <ul className='links'>
               <li><a href="">HOME</a></li>
               <li><a href="">SERVICES</a></li>
               <li><a href="">PORTFOLIO</a></li>
               <li><a href="">REVIEW</a></li>
               <li><a href="">CONTACT</a></li>
               <li><a href="">HIRE ME</a></li>
            </ul>
        </div>
    )
}

export default Navbar
