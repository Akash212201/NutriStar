import React from 'react'
import HeroSlider from '../components/HeroSlider';
import Blogs from '../components/Blogs';
import DealsDay from '../components/DealsDay';
import Brands from '../components/Brands';
import TopCategories from '../components/TopCategories';
import Products from '../components/Products';
const HomePage = () => {
  return (
    <div>
        <HeroSlider />
      <Products/>
      <TopCategories/>
      <Brands />
      <DealsDay/>
      <Blogs/>
    </div>
  )
}

export default HomePage