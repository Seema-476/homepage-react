import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFlip, Navigation, Pagination} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-flip'
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import aBirdImage from '../../assets/images/webp/bird.webp'
import aGirlImage from '../../assets/images/webp/girl.webp'
import butterflyImage from '../../assets/images/webp/butterfly-image.webp'
import multipleColorImage from '../../assets/images/webp/multiple-color-image.webp'

const SwiperSlider = () => {
  return (
    <div className='py-12'>
      <div className='container'>
        <div className='max-w-[500px] mx-auto'>
          <Swiper
            spaceBetween={20}
            slidesPerView={1}
            effect={'flip'}
            navigation
            pagination={{ clickable: true }}
            loop={true}
            modules={[ EffectFlip, Pagination, Navigation]}
          >
            <SwiperSlide><img src={aBirdImage} alt="bird" className='max-w-[437px] h-[315px] w-full' /></SwiperSlide>
            <SwiperSlide><img src={aGirlImage} alt="bird" className='max-w-[437px] h-[315px] w-full' /></SwiperSlide>
            <SwiperSlide><img src={butterflyImage} alt="bird" className='max-w-[437px] w-full h-[315px]' /></SwiperSlide>
            <SwiperSlide><img src={multipleColorImage} alt="bird" className='max-w-[437px] h-[315px] w-full' /></SwiperSlide>
          </Swiper>
       </div>
      </div>
   </div>
  )
}

export default SwiperSlider