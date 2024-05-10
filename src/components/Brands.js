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
            <div className='lg:px-[10vw] px-[5vw] py-[5rem] bg-[#f6f6f6] rounded-bl-[10rem]'>
            <div className='flex justify-between items-center uppercase'>
                <h1 className='lg:text-4xl text-xl font-semibold uppercase '>Our Trusted Brands</h1>
                <span className='underline text-[#fcae2a] font-semibold cursor-pointer'>view all</span>
            </div>
            <div className='lg:flex justify-between items-center mt-8 brands'>
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