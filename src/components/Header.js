import React, { useState } from 'react';
import { FiSearch,  FiMenu, FiPercent } from 'react-icons/fi';
import { FaUserAlt } from "react-icons/fa";
import { MdOutlineShoppingBag } from 'react-icons/md';
import { IoLocationSharp } from "react-icons/io5";
import { IoMdArrowDropdown, IoMdHelpBuoy } from "react-icons/io";
import logo from '../assests/logo.svg'

const Header = () => {
    const [showMenu, setShowMenu] = useState(false);
    const [showInput, setShowInput] = useState(false)

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };

    return (
        <header >
            <div className='text-center bg-[#fcae2a] text-white py-1 text-[14px]'>Get Extra Off on Nutristar App, Code: APPONLY</div>
            <div className="flex justify-between items-center bg-white py-4 px-6">
         
            <div className="flex justify-between items-center gap-4 ">
                <div className="mr-4">
                    <img src={logo} alt="Logo" className="h-8" />
                </div>
                <div className=" relative">
                    <div className="flex items-center cursor-pointer" onClick={() => setShowInput(!showInput)}>
                        <IoLocationSharp className='text-[#fcae2a]' /> Enter pincode <IoMdArrowDropdown className='text-[#fcae2a]' /></div>
                    {showInput && <div className=' absolute flex'>
                        <input
                            type="text"
                            placeholder="Enter Pincode"
                            className="border border-[#fcae2a] rounded-md py-1 px-2 text-white focus:outline-none"
                        />
                        <button className="bg-[#fcae2a] text-white rounded-md py-1 px-4 ml-2 hover:bg-[#ffc551] focus:outline-none">
                            Submit
                        </button>
                    </div>}
                </div>
            </div>
            <div className='lg:hidden flex justify-end items-center cursor-pointer text-[#fcae2a] text-2xl'>
            <MdOutlineShoppingBag className='text-[#fcae2a]  text-[24px] mr-2' />
            <FiMenu/>
            </div>
            <div className='lg:flex hidden justify-between items-center w-[50%]'>
                <div className="w-[50%] border lg:border-[#5b5b5b] border-[#fcae2a] rounded-full overflow-hidden flex items-center mr-4 py-1 px-4">
                    <input
                        type="text"
                        placeholder="What can we help to find?"
                        className="w-[96%] outline-none"
                    />

                    <FiSearch color="#fcae2a px-4" />

                </div>
                <div className='flex justify-center items-center'>
                    <FiPercent className='bg-[#fcae2a] rounded-full p-1 text-[24px] text-white mr-2' /> offers
                </div>
                <div className='flex justify-center items-center'>
                    <IoMdHelpBuoy className='text-[#fcae2a]  text-[24px] mr-2' /> help
                </div>

                <MdOutlineShoppingBag className='text-[#fcae2a]  text-[24px] mr-2' />

                <div className='flex justify-center items-center'>
                    <FaUserAlt className='text-[#fcae2a]  text-[24px] mr-2' /> Login/Register
                </div>
            </div>
            </div>
        </header>
    );
};

export default Header;
