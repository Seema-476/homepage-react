import React from 'react'
import { useLocation } from 'react-router-dom'
import CommonHeading from '../common/CommonHeading'

const Hero = () => {
    const pathname = useLocation().pathname
  return (
      <>
          <div className={`${pathname ==="/" ? "bg-orange" : pathname==="/about" ? "bg-dark-blue" :""}`}>
              <div className='container'>
                  <div className='flex items-center justify-center w-full h-screen'>
                      <div>
                          <CommonHeading text="Lorem ipsum dolor sit amet consectetur."  yellowText="Sceleris"></CommonHeading>
                          {/* <h2 className='font-lato font-extrabold lg:text-6xl sm:text-4xl text-3xl lg:leading-[72px] text-white max-w-[786px] text-center'>Lorem ipsum dolor sit amet consectetur. <span className={`${pathname === "/" ? "text-black" : pathname === "/about" ? "text-yellow-400" : ""}`}>Sceleris</span></h2> */}
                          <p className='font-lato font-medium text-base text-white text-center mx-auto pt-5'>Lorem ipsum dolor sit amet consectetur. Id mattis at tristique duis.</p>
                      </div>
                  </div>
              </div>
         </div>
      </>
  )
}

export default Hero