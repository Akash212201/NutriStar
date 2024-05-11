import React from 'react'
import BlogImg1 from '../assests/Blog/1.jpeg'
import BlogImg2 from '../assests/Blog/2.jpeg'
import BlogImg3 from '../assests/Blog/3.jpeg'
import BlogImg4 from '../assests/Blog/4.jpeg'
import BlogImg5 from '../assests/Blog/5.jpeg'
import BlogImg6 from '../assests/Blog/6.jpeg'
import BlogImg7 from '../assests/Blog/7.jpeg'
import BlogImg8 from '../assests/Blog/8.jpeg'
import AppleIcon from '../assests/appstore.ea3693a5.svg'
import goolglePlayIcon from '../assests/playstore.7460a12a.svg'
import BlogCardBox from './BlogCardBox'

const Blogs = () => {
    const BlogsData = [
        {
            image: BlogImg1,
            title: "BCAA: Diving Deep in the Benefits, Effects an...",
        },
        {
            image: BlogImg2,
            title: "The Dark Side of ‘Healthy’ Munching: What You...",
        },
        {
            image: BlogImg3,
            title: "What is Creatine? Its Types, Benefits and Pri...",
        },
        {
            image: BlogImg4,
            title: "Chocolate Peanut Butter: The Delicious Secret...",
        },
        {
            image: BlogImg5,
            title: "Top 5 Fat Cutter Supplements for Effective We...",
        },
        {
            image: BlogImg6,
            title: "EAA vs. BCAA: The Nutritional Showdown and...",
        },
        {
            image: BlogImg7,
            title: "Top 5 Peanut Butter for the Health Enthusiast...",
        },
        {
            image: BlogImg8,
            title: "Trouble gaining weight? Know these 6 best wei...",
        },
    ]
  return (
    <div className='bg-[#f6f6f6]'>
        <div className='bg-[#f6f6f6] py-8'>
        <div className='flex justify-between items-center mx-[10vw] uppercase'>
        <h1 className='lg:text-4xl text-xl font-semibold uppercase '>Blogs</h1>
            <span className='underline text-[#FCAE2A] font-semibold cursor-pointer lg:text-[14px] text-[12px]'>view all</span>
        </div>
        <div className='blog-container mb-4'>
            {
                BlogsData.map((item,idx) => (
                    
                    <BlogCardBox key={idx} item={item}/>
                ))
            }
        </div>
    </div>
        <div className='flex lg:flex-row flex-col justify-center gap-4 items-center py-10 text-white bg-[#FCAE2A] lg:rounded-b-[7rem] rounded-b-[4rem]'>
            <h1 className='uppercase font-semibold'>Download app from</h1>
            <div className='w-[150px]'>
            <img src={AppleIcon} alt="AppleIcon" />
            </div>
            <div className='w-[150px]'>
                <img src={goolglePlayIcon} alt="goolglePlayIcon" />
                </div>
        </div>
    </div>
  )
}

export default Blogs