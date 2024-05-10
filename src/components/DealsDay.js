import React from "react";
import Slider from "react-slick";

function DealsDay() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3
  };
  return (
    <div className="slider-container mx-20 flex gap-10">
      <Slider {...settings}>
        <div className="border border-black mx-4">
          <h3>1</h3>
        </div>
        <div className="border border-black mx-4">
          <h3>2</h3>
        </div>
        <div className="border border-black mx-4">
          <h3>3</h3>
        </div>
        <div>
          <h3>4</h3>
        </div>
        <div className="border border-black mx-4">
          <h3>5</h3>
        </div>
        <div>
          <h3>6</h3>
        </div>
        <div>
          <h3>7</h3>
        </div>
        <div>
          <h3>8</h3>
        </div>
        <div>
          <h3>9</h3>
        </div>
      </Slider>
    </div>
  );
}


export default DealsDay
