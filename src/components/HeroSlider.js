import React from "react";
import Slider from "react-slick";
import bannerImg1 from '../assests/Slider/1.jpeg'
import bannerImg2 from '../assests/Slider/2.jpeg'
import bannerImg3 from '../assests/Slider/3.jpeg'
import bannerImg4 from '../assests/Slider/4.jpeg'
import bannerImg5 from '../assests/Slider/5.jpeg'
import bannerImg6 from '../assests/Slider/6.jpeg'
import bannerImg7 from '../assests/Slider/7.jpeg'
import bannerImg8 from '../assests/Slider/8.jpeg'
import bannerImg9 from '../assests/Slider/9.jpeg'

const HeroSlider = () => {
    const bannerImages = [

        bannerImg1,
        bannerImg2,
        bannerImg3,
        bannerImg4,
        bannerImg5,
        bannerImg6,
        bannerImg7,
        bannerImg8,
        bannerImg9,
    ]
    const settings = {
        dots: true,
        autoplay: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplaySpeed: 2500,
        cssEase: "linear",
        arrows: null,
        adaptiveHeight: true,
    };
    return (
        <div className="hero slider-container flex justify-center items-center flex-col py-2">
            <div className=" w-[80%] pb-10 overflow-hidden h-[250px] rounded-3xl">
                <Slider {...settings}>
                    {bannerImages.map((image, idx) => (
                        <div key={idx} className=" rounded-3xl w-full overflow-hidden h-[260px]">
                            <img src={image} alt="" className="w-full lg:object-cover object-center object-fill h-full  " />
                        </div>
                    ))
                    }

                </Slider>
            </div>
                    <div className="flex lg:flex-row flex-col justify-center items-center">
                        <h1 className="text-center lg:text-[14px] text-[12px]">How to be Sure that I will Get a Genuine Product?</h1>
                        <button className="bg-[#333] rounded-[30px] my-2 px-4 py-[6px] text-[#f3f3f3] mx-5">Know More</button>
                    </div>
        </div>
    );
}

export default HeroSlider;
