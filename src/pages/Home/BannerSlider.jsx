import React from 'react';
import Slider from 'react-slick';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const BannerSlider = () => {
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true
      };

    return (
        <div className="slider-container mt-10 w-full">
            <Slider {...settings}>
                <div>
                    <img className='w-full h-96 object-cover' src="https://i.ibb.co/yLv5K8J/imageshh.jpg" alt="" />
                </div>
                <div>
                    <img className='w-full h-96 object-cover' src="https://i.ibb.co/HTqXd268/download-9.jpg" alt="" />
                </div>
                <div>
                    <img className='w-full h-96 object-cover' src="https://i.ibb.co/QFjHpc2j/images-3.jpg" alt="" />
                </div>
            </Slider>
        </div>
    );
};

export default BannerSlider;