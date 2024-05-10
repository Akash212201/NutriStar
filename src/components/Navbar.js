import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    const navLinks = [
        {
            title: "Essentials",
            path: "#!"
        },
        {
            title: "Proteins",
            path: "#!"
        },
        {
            title: "Gainers",
            path: "#!"
        },
        {
            title: "Pre/Post-Workouts",
            path: "#!"
        },
        {
            title: "Weight Loss",
            path: "#!"
        },
        {
            title: "Snacks & Accessories",
            path: "#!"
        },
    ]
    return (
        <div className='flex justify-center items-center py-3 px-5 shadow-[0px_6px_15px_0px_#00000033]'>
          <ul className='flex justify-between items-center overflow-x-auto '>
            {
                navLinks.map((link,idx) => (
                    <li key={idx} className='mx-[1rem] lg:text-[14px] w-full text-[12px] uppercase font-semibold'>
                        <Link to = {link.path} className='w-full block'>{link.title}</Link></li>
                ))
            }
          </ul>
        </div>
    )
}

export default Navbar