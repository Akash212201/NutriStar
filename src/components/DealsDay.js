import React from "react";
import { IoMdArrowBack, IoMdArrowForward } from "react-icons/io";
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
        <button className='z-10 flex justify-center absolute lg:top-[25%] top-[40%] lg:-right-10 right-1 items-center rounded-full w-[40px] h-[40px] bg-white'>
          <IoMdArrowForward className="text-3xl" />
        </button>
      </div>
    )
  }
  const SamplePrevArrow = (props) => {
    const { onClick } = props
    return (
      <div className="z-10 rounded-full  cursor-pointer" onClick={onClick}>
        <button className='z-10 flex justify-center bg-white absolute lg:top-[25%] top-[40%] lg:-left-10 left-1 items-center rounded-full w-[40px] h-[40px]'>
          <IoMdArrowBack className="text-3xl" />
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
          slidesToScroll: 1,
          initialSlide: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <div className="lg:rounded-br-[10rem] rounded-br-[4rem] bg-[#333]">
      <div className='slider-container lg:px-[10vw] px-[5vw] py-[5rem] '>

        <div className='flex justify-between items-center uppercase mb-4'>
          <h1 className='lg:text-4xl text-lg text-white font-semibold uppercase '>Deal of the day</h1>
          <span className='underline text-[#FCAE2A] font-semibold cursor-pointer lg:text-[14px] text-[12px]'>view all</span>
        </div>

        <div className=" relative mt-12">
          <Slider {...settings}>
            {
              dealsItem.map((item, idx) => (

                <div key={idx} className="!flex justify-center items-center overflow-hidden">
                  <div className="rounded-xl overflow-hidden lg:w-[200px] w-[300px]">
                    <img src={item} alt="" className=" lg:object-cover w-full" />
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