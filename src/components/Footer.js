import React from 'react'
import { Link } from 'react-router-dom'
import footerLogo from '../assests/footer-logo.f9473070.svg'
import { FaInstagram, FaFacebook, FaTwitter, FaWhatsapp, FaYoutube } from "react-icons/fa";


const Footer = () => {
  const footerLinks = [
    {
      title: "About Us",
      path: "#!"
    },
    {
      title: "Brands",
      path: "#!"
    },
    {
      title: "Authenticity Guaranteed",
      path: "#!"
    },
    {
      title: "Certificates",
      path: "#!"
    },
    {
      title: "Blogs",
      path: "#!"
    },
  ]
  const footerLinks2 = [
    {
      title: "My Account",
      path: "#!"
    },
    {
      title: "Contact Us",
      path: "#!"
    },
    {
      title: "Store Locator",
      path: "#!"
    },
    {
      title: "Privacy Policy",
      path: "#!"
    },
    {
      title: "Terms & Conditions",
      path: "#!"
    },
    {
      title: "FAQ'S",
      path: "#!"
    },
  ]


  return (
    <div className='lg:px-[14vw] px-[2vw] py-14 bg-[#f6f6f6] text-[#333]'>
      <div className='flex lg:flex-row flex-col '>
        <div className='lg:w-[25%] w-full '>
          <img src={footerLogo} alt="" />
          <p className='my-[1em] font-fapopin '>
            Buy 100% Genuine and Authentic Supplements Online at Best Prices. 
            Nutristar is a preferred Platinum Distributor and Online Wholesaler,
            resolves this severe problem by bringing all top-notch
            supplement brands in India under one roof.
          </p>
        </div>
        <div className=' lg:mx-[0.5rem]'>
          <p className='mb-6 font-semibold text-[16px]'>ABOUT NUTRISTAR</p>
          <ul className=' '>
            {
              footerLinks.map((link, idx) => (
                <li key={idx} className='mb-[0.5rem] lg:text-[14px] text-[12px] font-normal'>
                  <Link to={link.path}>{link.title}</Link>
                  </li>
              ))
            }
          </ul>
        </div>
        <div className='lg:mx-[5.5rem]'>
          <p className='mb-6 font-semibold text-[16px] uppercase'>For Customers</p>
          <ul className=' '>
            {
              footerLinks2.map((link, idx) => (
                <li key={idx} className='mb-[0.5rem] text-[12px] lg:text-[14px] font-normal'>
                  <Link to={link.path}>{link.title}
                  </Link>
                  </li>
              ))
            }
          </ul>
        </div>
        <div>
          <div className=''>
          <p className='mb-6 font-semibold text-[16px] uppercase'>Contact Us</p>
            <div className='flex lg:justify-center items-center gap-1'>
              <div className='flex text-xl text-white bg-[#333] rounded-full p-2 cursor-pointer'><FaYoutube /></div>
              <div className='flex text-xl text-white bg-[#333] rounded-full p-2 cursor-pointer'><FaTwitter /></div>
              <div className='flex text-xl text-white bg-[#333] rounded-full p-2 cursor-pointer'><FaInstagram /></div>
              <div className='flex text-xl text-white bg-[#333] rounded-full p-2 cursor-pointer'><FaFacebook /></div>
              <div className='flex text-xl text-white bg-[#333] rounded-full p-2 cursor-pointer'><FaWhatsapp /></div>
              
            </div>
            <div>

            </div>
          </div>
        </div>
      </div>
      <div>
        <div className='flex justify-between  gap-4 my-3'>
          <span className='text-[12px] font-bold text-[#6C757D]'>WARNING!</span>
          <p className='text-[#6C757D] text-[12px] mb-2 uppercase'>

            PLEASE ONLY PURCHASE AND USE THE PRODUCTS ON THIS WEBSITE
            IF YOU ARE AGED 18 YEARS AND OVER. PLEASE ENSURE YOU ARE IN
            A GOOD STATE OF HEALTH AND/OR CONSULT YOUR DOCTOR BEFORE STARTING
            A SUPPLEMENT PROGRAMME.</p>
        </div>
        <div className='text-center mb-4 text-[#6C757D] text-[16px]'>2024 A product of Square Bubbles Pvt. Ltd.</div>
      </div>
    </div>
  )
}

export default Footer