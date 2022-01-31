import React from 'react'
import Navbar from '../Navbar/Navbar'
import Left from './Left'
import Right from './Right'
import Sidebar from './Sidebar'
import "./Home.css"

function Home() {
    return (
        <div className='Home' id="home">
            
            <Left/>
            <Right/>
            <Sidebar/>
        </div>
    )
}

export default Home
