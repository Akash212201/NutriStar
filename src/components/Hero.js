import React from 'react'
import heroImg from '../assests/HeroImg.png'
import { PiRocketLaunchFill } from "react-icons/pi";
import { FaArrowRight } from "react-icons/fa6";
import HeroSlider from './HeroSlider';
const Hero = () => {
    return (
        <div className='mb-24'>

            <div className='mb-8'>
                <p className='font-secondary text-center text-[#2DA950] font-normal text-[36px]'>Success stories</p>
                <h1 className='font-primary font-semibold text-[56px] text-center text-[1c1c1c] leading-[4.5rem]'>Every success journey<br /> we've encountered.</h1>
            </div>
            <div className='flex md:flex-row flex-col justify-center'>
                <div className='relative md:w-[70%] w-full flex justify-evenly items-center pe-[10vw]'>
                    <div className='w-[500px] h-[550px]  rounded-[50.7px] overflow-hidden'>
                        <img src={heroImg} alt="" className='w-full object-contain' />
                    </div>

                    <div className='absolute top-[75px] left-10 bg-white rounded-[27px] w-[250px] h-[220px] px-[24px] py-[20px] shadow-[0px_22.59px_36.14px_0px_#1e1e1e17]'>
                        <h1 className=' font-medium text-[64px] leading-[76.8px] text-[#1c1c1c]'>40%</h1>
                        <p className='text-[#828282] font-primary font-medium text-[18px]'>Achieved reduction in project execution time by optimising team availability</p>
                    </div>
                    <div className='flex justify-center items-center absolute bottom-[80px] bg-white left-[5vw] w-[245px] h-[88px] py-[1rem] pr-[2rem] pl-[1rem] rounded-[111.54px] shadow-[0px_15.21px_35.49px_0px_#00000017]'>
                        <PiRocketLaunchFill className='text-4xl text-[#2DA950]' />
                        <div className='ms-2'>
                            <h3 className='font-semibold text-[24px]'>10 DAYS</h3>
                            Staff Deployment</div>
                    </div>

                    <div className='absolute -bottom-[6vh] left-[30vw] bg-[#002E18] rounded-[28.36px] pt-[24px] pr-[30px] pb-[30px] pl-[36px] w-[280px]'>
                        <div className='flex items-baseline gap-2'>
                            <h1 className='text-white font-medium text-[4rem]'>$0.5</h1>
                            <h3 className='text-[#A6A3A0] text-[22px] font-medium'>MILLION</h3>
                        </div>
                        <p className='text-[#ccc] font-primary'>Reduced client expenses by saving on hiring and employee costs.</p>
                    </div>
                </div>
                <div className='md:w-[30%] w-[100%] flex flex-col py-10 px-6 relative'>
                    <div>
                        <HeroSlider />
                    </div>
                    <div className='absolute bottom-4 rounded-[70px] flex  items-center py-[20px] px-[40px] bg-[#1c1c1c] text-white gap-2 '>
                        <button className=''>Explore More</button>
                        < FaArrowRight />
                    </div>
                </div>
            </div>



        </div>
    )
}

export default Hero