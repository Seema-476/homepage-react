import React from 'react'
import { MAP_CARDS } from '../utils/Helper'

const MapCards = () => {
  return (
    <div className='container mx-auto py-14'>
      <h3 className='font-inter font-semibold text-4xl text-black text-center pb-10'>Map Cards </h3>
      <div className='flex flex-wrap flex-row -mx-3 justify-center'>
        {MAP_CARDS.map((obj, index) => (
          <div key={index} className='lg:w-[33.33%] sm:w-[50%] w-full px-3 lg:mt-0 mt-4 flex justify-center'>
            <div className='sm:max-w-[365px] lg:h-[273px] h-[260px] duration-700 w-full rounded-[22px] py-5 lg:px-7 px-5 bg-blue'>
              <img src={obj.icon} alt="svg" />
              <h2 className='font-inter font-semibold text-2xl lg:pt-8 lg:pb-4 py-3'>{obj.heading}</h2>
              <p className='font-inter font-light text-base text-black lg:max-w-[304px]'>{obj.paragraph}</p>
            </div>
          </div>

        ))}
      </div>
    </div>
  )
}

export default MapCards