import React from 'react'
import logo from '../assets/airbnb-logo.png'

export default function Navbar() {
    return (
        <nav className='shadow-md h-[70px] flex mb-20'>

            <img className="ml-6 py-4" src={logo} alt='Airbnb Logo' />
        </nav>
    )
}