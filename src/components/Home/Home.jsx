import React from 'react'
import Navbar from '../Navbar/Navbar'
import Left from './Left'
import Right from './Right'
import "./Home.css"

function Home() {
    return (
        <div className='Home'>
            
            <Left/>
            <Right/>
        </div>
    )
}

export default Home
