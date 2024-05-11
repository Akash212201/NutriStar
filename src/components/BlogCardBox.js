import React from 'react'
import { FaArrowRightLong } from "react-icons/fa6";
const BlogCardBox = ({item}) => {
  return (
    <div className='blog-card bg-white'>
        <div>
            <img 
            src={item?.image || ''}
            alt="" 
            className='w-full object-cover'/>
        </div>
        <div className='bg-white flex justify-between items-center p-[1rem]'>
        <p className="text-black w-[65%] text-[12px] font-bold">{item?.title || 'a'}</p>
        <div className='w-[25%] text-white flex justify-end items-center text-xl'>
       <div className='rounded-full bg-[#fcae2a] py-2 px-2  '>
       <FaArrowRightLong />
       </div>
        </div>
        </div>
    </div>
  )
}

export default BlogCardBox