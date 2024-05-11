import React from 'react'
import bannerImg1 from '../assests/Brands/dymatize-1610558899238137.png'
import bannerImg2 from '../assests/Brands/muscletech.png'
import bannerImg3 from '../assests/Brands/myprotein.png'
import bannerImg4 from '../assests/Brands/gnc.png'
import bannerImg5 from '../assests/Brands/optimum-nutrition.png'
import bannerImg6 from '../assests/Brands/ultimate-nutrition.png'



const Brands = () => {
    const BrandImages = [

        bannerImg1,
        bannerImg2,
        bannerImg3,
        bannerImg4,
        bannerImg5,
        bannerImg6,
    ]
    return (
        <div className='bg-[#333]'>
            <div className='lg:px-[10vw] px-[5vw] lg:py-[5rem] py-[3rem] bg-[#f6f6f6] lg:rounded-bl-[10rem] rounded-bl-[4rem]'>
            <div className='flex justify-between items-center uppercase'>
                <h1 className='lg:text-4xl text[12px] text-lg font-semibold uppercase '>Our Trusted Brands</h1>
                <span className='underline text-[#FCAE2A] font-semibold cursor-pointer lg:text-[14px] text-[12px]'>view all</span>
            </div>
            <div className='lg:flex justify-between items-center lg:mt-8 mt-4 brands'>
                {
                    BrandImages.map((image, idx) => (
                        <div key={idx} className='bg-white border flex items-center justify-center lg:w-[180px] w-[150px] h-[125px] rounded-[10px] p-[24px]'>
                            <div>
                                <img src={image} alt="" />
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
        </div>
    )
}

export default Brands