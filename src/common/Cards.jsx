import React from 'react'
import { useState } from 'react';

const Cards = () => {
    const [isViewMore, setIsViewMore] = useState(true);
    const [view, setView] = useState(false);
    const toggleView = () => {
        setView(!view)
        setIsViewMore(!isViewMore); 
    }
    const RED_CARD = [{ number: 1, lorem: "Lorem ipsum" }, { number: 2, lorem: "Lorem ipsum" }, { number: 3, lorem: "Lorem ipsum" }, { number: 4, lorem: "Lorem ipsum" }, { number: 5, lorem: "Lorem ipsum" }, { number: 6, lorem: "Lorem ipsum" },]
  return (
      <div className='py-12'>
          <div className='container'>
              <h3 className='font-inter font-semibold text-4xl text-black text-center pb-10'>Cards </h3>
              <div className="flex flex-row flex-wrap -mx-3 gap-2 justify-center">
                  {[...Array(view ? 6 : 3)].map((_, index) => (
                      <div key={index} className="md:w-[33.33%] sm:w-[50%] w-full px-3 bg-red-500 max-w-[300px] h-[200px] flex flex-col justify-center items-center">
                          <p className='text-lg font-medium text-white'>{RED_CARD[index].number}</p>
                          <p className='text-lg font-medium text-white'>{RED_CARD[index].lorem}</p>
                      </div>
                  ))}
              </div>
              <div className='text-center mt-5' >
                  <button className='p-3 font-bold text-lg bg-blue rounded' onClick={toggleView}>{isViewMore ? 'View More' : 'View Less'}</button>
              </div>
        </div>
    </div>
  )
}

export default Cards
