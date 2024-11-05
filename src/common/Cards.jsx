import React from 'react'
import { useState } from 'react';

const Cards = () => {
    const [view, setView] = useState(false);
    const toggleView = () => {
        setView(!view)
    }
  return (
      <div className='py-12'>
          <div className='container'>
              <h3 className='font-inter font-semibold text-4xl text-black text-center pb-10 animate__animated animate__flipInX animate__slow	2s animate__infinite'>Cards </h3>
              <div className="flex flex-row flex-wrap -mx-3 gap-2 justify-center">
                  {[...Array(view ? 6 : 3)].map((_, index) => (
                      <div key={index} className="md:w-[33.33%] sm:w-[50%] w-full px-3 bg-red-500 max-w-[300px] h-[200px]">
                      </div>
                  ))}
              </div>
              <div className='text-center mt-5'>
                  <button className='p-3 font-bold text-lg bg-blue rounded' onClick={toggleView}>View Button</button>
              </div>
        </div>
    </div>
  )
}

export default Cards
