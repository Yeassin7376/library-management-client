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
        <div className="slider-container w-full h-4/6">
            <Slider {...settings}>
                <div>
                    <img className='w-full h-52 md:h-96 lg:h-[450px] object-cover' src="https://i.ibb.co.com/Fb235fJD/photo-1580537659466-0a9bfa916a54.jpg" alt="" />
                </div>
                <div>
                    <img className='w-full h-52 md:h-96 lg:h-[450px] object-cover' src="https://i.ibb.co.com/4ZD16nXf/istockphoto-2162169941-612x612.webp" alt="" />
                </div>
                <div>
                    <img className='w-full h-52 md:h-96 lg:h-[450px] object-cover' src="https://i.ibb.co/yLv5K8J/imageshh.jpg" alt="" />
                </div>
                <div>
                    <img className='w-full h-52 md:h-96 lg:h-[450px] object-cover' src="https://i.ibb.co.com/cKGXLCSw/istockphoto-2209493896-612x612.webp" alt="" />
                </div>
                <div>
                    <img className='w-full h-52 md:h-96 lg:h-[450px] object-cover object-bottom' src="https://i.ibb.co.com/355pCCLS/istockphoto-2177387954-612x612.webp" alt="" />
                </div>
            </Slider>
        </div>
    );
};

export default BannerSlider;