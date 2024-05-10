import React from "react";
import { FaLongArrowAltLeft, FaLongArrowAltRight } from "react-icons/fa";
import Slider from "react-slick";
import dealImg1 from '../assests/DealsDay/pre-workouts-banner.png'
import dealImg2 from '../assests/DealsDay/l-carnitine-banner-nutristar.png'
import dealImg3 from '../assests/DealsDay/veganproteinsbanner.png'
import dealImg4 from '../assests/DealsDay/casein-banners-nutristar.png'
import dealImg5 from '../assests/DealsDay/glutamine-banner-nutristar.png'
import dealImg6 from '../assests/DealsDay/on-glutamine-banner.png'
import dealImg7 from '../assests/DealsDay/pre-workouts-banner.png'
import dealImg8 from '../assests/DealsDay/peanut-butter-banners.png'

const DealsDay = () => {
  const dealsItem = [
    dealImg1,
    dealImg2,
    dealImg3,
    dealImg4,
    dealImg5,
    dealImg6,
    dealImg7,
    dealImg8,
  ]
  const SampleNextArrow = (props) => {
    const { onClick } = props
    return (
      <div className="z-10 rounded-full cursor-pointer" onClick={onClick}>
        <button className='z-10 flex justify-center absolute top-[25%] -right-0 items-center rounded-full border w-[40px] h-[40px] border-white'>
          <FaLongArrowAltRight className="text-3xl text-white" />
        </button>
      </div>
    )
  }
  const SamplePrevArrow = (props) => {
    const { onClick } = props
    return (
      <div className="z-10 rounded-full cursor-pointer" onClick={onClick}>
        <button className='z-10 flex justify-center absolute top-[25%] -left-0 rounded-full border-[2px] w-[40px] h-[40px] border-white'>
          <FaLongArrowAltLeft className="text-3xl text-white" />
        </button>
      </div>
    )
  }
  var settings = {
    dots: false,
    infinite: false,
    autoPlay: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 2,
    initialSlide: 0,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <div className=" rounded-br-[10rem] bg-[#333] relative">
      <div className='slider-container lg:mx-[10vw] mx-[5vw] py-[5rem] '>

        <div className='flex justify-between items-center uppercase mb-4'>
          <h1 className='lg:text-4xl text-xl text-white font-semibold uppercase '>Deal of the day</h1>
          <span className='underline text-[#fcae2a] font-semibold cursor-pointer'>view all</span>
        </div>

        <div className="mx-5  ">
          <Slider {...settings}>
            {
              dealsItem.map((item, idx) => (

                <div key={idx} className="flex justify-center items-center overflow-hidden">
                  <div className="rounded-xl overflow-hidden w-[200px]">
                    <img src={item} alt="" className="h-[200px] lg:object-cover w-full" />
                  </div>
                </div>


              ))
            }

          </Slider>
        </div>
      </div>
    </div>
  );
}

export default DealsDay