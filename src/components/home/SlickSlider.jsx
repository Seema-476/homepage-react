import React from 'react'
import Slider from "react-slick";
import aBirdImage from '../../assets/images/webp/a-bird.webp'

export default function SlickSlider() {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        Autoplay:true,
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