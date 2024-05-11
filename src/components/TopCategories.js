import React from "react";
import { FaLongArrowAltLeft, FaLongArrowAltRight } from "react-icons/fa";
import Slider from "react-slick";
import categoryImg1 from '../assests/Categories/vegan-protein.png'
import categoryImg2 from '../assests/Categories/whey-proteins.png'
import categoryImg3 from '../assests/Categories/whey-isolate.png'
import categoryImg4 from '../assests/Categories/mass-gainers.png'
import categoryImg5 from '../assests/Categories/lean-mass-gainers.png'
import categoryImg6 from '../assests/Categories/aminos-and-bcaas.png'
import categoryImg7 from '../assests/Categories/creatines.png'
import categoryImg8 from '../assests/Categories/glutamine.png'

const TopCategories = () => {
  const categoryItems = [
    {
      image: categoryImg1,
      title: "VEGAN PROTEINS",
    },
    {
      image: categoryImg2,
      title: "WHEY PROTEINS",
    },
    {
      image: categoryImg3,
      title: "WHEY ISOLATES",
    },
    {
      image: categoryImg4,
      title: "MASS GAINERS",
    },
    {
      image: categoryImg5,
      title: "LEAN MASS GAINERS",
    },
    {
      image: categoryImg6,
      title: "AMINOS & BCAA's",
    },
    {
      image: categoryImg7,
      title: "CREATINES",
    },
    {
      image: categoryImg8,
      title: "GULTAMINES",
    },
  ]
  const SampleNextArrow = (props) => {
    const { onClick } = props
    return (
      <div className="z-10 rounded-full cursor-pointer" onClick={onClick}>
        <button className='z-10 flex justify-center absolute lg:top-[25%] top-[15%] -right-0 items-center rounded-full border lg:w-[40px] lg:h-[40px] w-[35px] h-[35px] border-[#000]'>
          <FaLongArrowAltRight className="lg:text-3xl text-xl text-black" />
        </button>
      </div>
    )
  }
  const SamplePrevArrow = (props) => {
    const { onClick } = props
    return (
      <div className="z-10 rounded-full cursor-pointer" onClick={onClick}>
        <button className='z-10 flex justify-center items-center absolute lg:top-[25%] top-[15%] left-0 rounded-full border lg:w-[40px] lg:h-[40px] w-[35px] h-[35px] border-[#000]'>
          <FaLongArrowAltLeft className="lg:text-3xl text-xl text-black" />
        </button>
      </div>
    )
  }
  var settings = {
    dots: false,
    infinite: false,
    autoPlay: true,
    speed: 500,
    slidesToShow: 6,
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
          slidesToShow: 3,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <div className='slider-container relative lg:px-[10vw] px-[5vw] lg:py-[3.5rem] pt-[1rem]'>
      <div className='flex justify-between items-center uppercase'>
        <h1 className='lg:text-4xl text-lg font-semibold uppercase '>Top Categories</h1>
        <span className='underline text-[#FCAE2A] font-semibold cursor-pointer lg:text-[14px] text-[12px]'>view all</span>
      </div>

      <div className="lg:px-5 px-2 lg:mt-8 mt-4 ">
        <Slider {...settings}>
          {
            categoryItems.map((item, idx) => (
              <div key={idx} className="w-[10px] flex justify-center items-center">
                <div className="flex justify-center items-center">
                  <div className="rounded-xl overflow-hidden lg:w-[100px] w-[60px]">
                    <img src={item?.image} alt="" className="lg:h-[100px] h-[60px]" />
                  </div>
                </div>
                <div className="text-center my-[0.5em] lg:text-[14px] text-[12px]">
                  {item.title}
                </div>
              </div>
            ))
          }

        </Slider>
      </div>
    </div>
  );
}

export default TopCategories