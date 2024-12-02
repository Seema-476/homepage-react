import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import aBirdImage from '../../assets/images/webp/a-bird.webp'

export default function SlickSlider() {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 1000,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
        ]
    };
    return (
        <div className='py-14'>
            <div className='container'>
                <Slider {...settings}>
                    <div>
                        <p><img src={aBirdImage} alt="bird" /></p>
                    </div>
                    <div>
                        <p><img src={aBirdImage} alt="bird" /></p>
                    </div>
                    <div>
                        <p><img src={aBirdImage} alt="bird" /></p>
                    </div>
                    <div>
                        <p><img src={aBirdImage} alt="bird" /></p>
                    </div>
                    <div>
                        <p><img src={aBirdImage} alt="bird" /></p>
                    </div>
                    <div>
                        <p><img src={aBirdImage} alt="bird" /></p>
                    </div>
                </Slider>
            </div>
        </div>
    );
}