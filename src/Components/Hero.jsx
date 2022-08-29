import React from 'react'
import logo from '../assets/photo-grid.png'

export default function Hero() {
    return (
        <div className='mb-24 flex flex-col'>
            <img className='max-w-[900px] mb-24 m-auto' src={logo} alt='Photo Grid' />
            <h1 className='font-poppins font-semibold text-3xl ml-[36px] mb-12'>Online Experiences</h1>
            <p className='font-poppins ml-[36px] text-2xl mb-4'>Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p>
        </div>
        
    )
}