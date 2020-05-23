
import React from 'react';
import AwesomeSlider from 'react-awesome-slider';
import '../styles/carousel.scss';



const Carousel = () => {

const slider = (
  <AwesomeSlider className="aws-btn" style={{marginTop: '20px'}}>
    <div data-src="https://res.cloudinary.com/dxy1zcexj/image/upload/v1577675121/kitchen-1940174_aqzmmz.jpg" />
    <div data-src="https://res.cloudinary.com/dxy1zcexj/image/upload/v1577756248/modern-minimalist-lounge-3100785_pp7ihv.jpg"/>
    <div data-src="https://res.cloudinary.com/dxy1zcexj/image/upload/v1577674919/bedroom-1940168-1_guhpmp.jpg" />
  </AwesomeSlider>
);
  return(
    <>
    {slider}
    </>
  );
};

export default Carousel;
