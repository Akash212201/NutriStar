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
        <div className='flex justify-center items-center py-3 px-5'>
            <ul className='flex lg:justify-center items-center lg:overflow-x-hidden overflow-x-auto '>
                {
                    navLinks.map((link, idx) => (
                        <Link to={link.path} className=''>
                            <li key={idx} className='mx-[1rem] lg:text-[14px] w-full text-[12px] uppercase font-semibold'>
                                {link.title}
                            </li>
                        </Link>
                    ))
                }
            </ul>
        </div>
    )
}

export default Navbar