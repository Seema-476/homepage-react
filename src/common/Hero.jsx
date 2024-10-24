import React from 'react'
import { useLocation } from 'react-router-dom'
import CommonHeading from '../common/CommonHeading'

const Hero = () => {
    const pathname = useLocation().pathname
  return (
      <>
          <div className={`${pathname === "/" ? "bg-orange rounded-b-xl" : pathname === "/about" ? "bg-dark-blue" : ""}`}>
              <div className='container'>
                  <div className='flex items-center justify-center w-full h-screen'>
                      <div>
                          <CommonHeading text="Lorem ipsum dolor sit amet consectetur."  yellowText="Sceleris"></CommonHeading>
                          <p className='font-lato font-medium text-base text-white text-center mx-auto pt-5'>Lorem ipsum dolor sit amet consectetur. Id mattis at tristique duis.</p>
                      </div>
                  </div>
              </div>
         </div>
      </>
  )
}

export default Hero