import React, { useState, useEffect } from 'react';
import { FaStar } from 'react-icons/fa6';
import productsData from './productData';
import { FaFire } from 'react-icons/fa';
import { IoIosRibbon } from 'react-icons/io';
import { LiaDonateSolid } from 'react-icons/lia';
import { PiSealPercentLight } from 'react-icons/pi';

const Products = () => {
    const [category, setCategory] = useState('');
    const [categoryData, setCategoryData] = useState([]);
useEffect(() => {
  
    if(window.innerWidth > 768) {
        
        setCategoryData(productsData);
    }
  
}, [])

    useEffect(() => {
        
        if(window.innerWidth<768){
            if(category){
                const Products = productsData.filter(product => product.heading.toLowerCase() === category.toLowerCase());
                setCategoryData(Products);
            }
            else {
                setCategoryData(productsData);
            }
        }
        
    }, [category]);
   

    
    return (

        <div className='bg-[#f6f6f6] flex lg:flex-row flex-col gap-[2rem] lg:px-[8vw] relative h-[100vh]'>
            <div className='bg-white w-[25%] sticky lg:flex hidden flex-col'>
                <ul>
                    
               
                <li id={1111} className="flex items-center gap-2 px-4 py-2 bg-[#f7e4f3]">
                    <div className='text-xl bg-orange-300 p-2 rounded-full text-[#f6f5f6]'>
                        <FaFire />
                    </div>
                    <div>
                        <h3 className='uppercase'>Trending</h3>
                        <p className="text-[#b2b2b2]">8 Products</p>
                    </div>
                </li>
                <li id={1112} className="flex items-center gap-2 px-4 py-2">
                    <div className='text-xl bg-red-400 p-2 rounded-full text-[#f6f5f6]'>
                        <IoIosRibbon />
                    </div>
                    <div>
                        <h3 className='uppercase'>Best-sellers</h3>
                        <p className="text-[#b2b2b2]">10 Products</p>
                    </div>
                </li>
                <li id={1113} className="flex items-center gap-2 px-4 py-2">
                    <div className='text-xl bg-yellow-300 p-2 rounded-full text-white'>
                        <LiaDonateSolid />
                    </div>
                    <div>
                        <h3 className='uppercase'>pocket friiendly</h3>
                        <p className="text-[#b2b2b2]">12 Products</p>
                    </div>
                </li>
                <li id={1114} className="flex items-center gap-2 px-4 py-2">
                    <div className='text-xl bg-teal-300 p-2 rounded-full text-[#f6f5f6]'>
                        <LiaDonateSolid />
                    </div>
                    <div>
                        <h3 className='uppercase'>Super Saver Pack</h3>
                        <p className="text-[#b2b2b2]">8 Products</p>
                    </div>
                </li>
                <li id={1115} className="flex items-center gap-2 px-4 py-2">
                    <div className='text-xl bg-pink-300 p-2 rounded-full text-[#f6f5f6]'>
                        <PiSealPercentLight />
                    </div>
                    <div>
                        <h3 className='uppercase'>clearance sale</h3>
                        <p className="text-[#b2b2b2]">13 Products</p>
                    </div>
                </li>
                </ul>
            </div>




            <div className='lg:hidden py-2'>
                <ul className="pb-2 flex items-center gap-3 px-2 overflow-x-auto flex-nowrap whitespace-nowrap">
                    <li className={`cursor-pointer px-8 py-2 rounded-full ${category == 'trending' ? 'bg-[#FCAE2A] text-white border-none' : 'border border-[#b2b2b2] bg-white'}`}>
                        <button onClick={() => setCategory('trending')} data-toggle="tab">
                            Trending
                        </button>
                    </li>
                    <li className={`cursor-pointer px-8 py-2 rounded-full ${category == 'Best Sellers' ? 'bg-[#FCAE2A] text-white border-none' : 'border border-[#b2b2b2] bg-white'}`}>
                        <button data-toggle="tab"
                        onClick={() => setCategory('Best Sellers')}>
                            Best-Sellers
                            </button>
                    </li>
                    <li className={`cursor-pointer px-8 py-2 rounded-full ${category === 'Pocket Friendly' ? 'bg-[#FCAE2A] text-white border-none' : 'border border-[#b2b2b2] bg-white'}`}>
                        <button data-toggle="tab" 
                        onClick={() => setCategory('Pocket Friendly')}>
                            Pocket-Friendly
                        </button>
                    </li>
                    <li className={`cursor-pointer px-8 py-2 rounded-full ${category === 'Super Saver Pack' ? 'bg-[#FCAE2A] text-white border-none' : 'border border-[#b2b2b2] bg-white'}`}>
                        <button data-toggle="tab" 
                        onClick={() => setCategory('Super Saver Pack')}>
                            Super Saver Pack
                        </button>
                    </li>
                    <li className={`cursor-pointer px-8 py-2 rounded-full ${category === 'Clearance Sale' ? 'bg-[#FCAE2A] text-white border-none' : 'border border-[#b2b2b2] bg-white'}`}>
                        <button data-toggle="tab"
                        onClick={() => setCategory('Clearance Sale')}>
                            Clearance Sale
                        </button>
                    </li>
                </ul>
            </div>






            <div className='lg:w-[70%] w-full px-2 overflow-y-auto productspage'>
                {categoryData.map((products) => (
                    <div key={products._id} className={`p-[1rem]`}>
                        <div className='flex justify-between items-center uppercase'>
                            <h1 className='lg:text-2xl text-lg font-semibold uppercase'>{products.heading}</h1>
                            <span className='underline text-[#FCAE2A] font-semibold lg:text-[14px] text-[12px] cursor-pointer'>view all</span>
                        </div>
                        {/* Product Cards */}
                        <div className='products text-center  rounded-[15px] overflow-hidden'>
                            {products.data.map((product, idx2) => (
                                <div key={idx2} className=''>
                                    <div className='bg-white lg:w-[200px] w-[150px] lg:h-[250px] h-[200px] rounded-xl mt-10 shadow-[0px_0px_5px_0px_#cdcdcd]'>
                                        <div className='w-[100%] lg:h-[75px] h-[55px] relative'>
                                            <img
                                                src={product.image ? product.image : 'https://media.nutristar.in/product/220x220/stocks/nutristar-so-isolate-low-carb-ultra-filtered-4-lbs-181kg-double-rich-chocolate-169017849090441.png'}
                                                alt={product.title}
                                                className='lg:w-[110px] w-[80px] absolute -top-8 left-[25%]'
                                            />
                                        </div>
                                        <div className='p-2 mt-1 flex justify-between items-center flex-col h-[70%]'>
                                            <h1 className='lg:text-[14px] text-[#6c757a] font-semibold text-ellipsis text-[12px] leading-4'>
                                                {product.title}
                                            </h1>
                                            <div className='flex justify-center items-center gap-2'>
                                                {product.rating ? (
                                                    <>
                                                        <FaStar className='text-[#FCAE2A]' /> {product.rating}
                                                    </>
                                                ) : (
                                                    <></>
                                                )}
                                            </div>
                                            <div className='flex justify-center items-center gap-2 pb-6'>
                                                <span className='text-[12px]'>
                                                    <del> ₹{product.oldPrice}</del>
                                                </span>
                                                <span> ₹{product.newPrice}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Products;