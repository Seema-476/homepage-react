import React from 'react'
import { Tilt } from 'react-tilt'

const TiltjsPractice = () => {
    const defaultOptions = {
        reverse: false,  
        max: 50,     
        perspective: 1000,  
        scale: 1.1,   
        speed: 1000,   
        transition: true,   
        axis: null,  
        reset: false,    
        easing: "cubic-bezier(.03,.98,.52,.99)",   
    }
  return (
      <div className='py-9 overflow-hidden'>
          <div className='container'>
              <h3 className='font-inter font-semibold text-4xl text-black text-center pb-9 animate__animated animate__flipInX animate__slow 1s'>TiltjsPractice </h3>
              <Tilt options={defaultOptions} style={{ height: 50, width: 250 }} className='text-center mx-auto'>
                  <div className='bg-sky-400 text-white text-3xl py-3 px-11 rounded-3xl'>tilt</div>
              </Tilt>
          </div>
      </div>
  )
}

export default TiltjsPractice