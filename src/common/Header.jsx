import React from 'react'
import { useLocation } from 'react-router-dom'

const Header = () => {
    const location=useLocation()
    const background = location.pathname
    const text = location.pathname
  return (
      <>
          <div className={`${background ==="/" ? "bg-orange" : background==="/about" ? "bg-dark-blue" :"bg-orange"}`}>
              <div className='container'>
                  <div className='flex items-center justify-center w-full h-screen'>
                      <div className='f lex items-center justify-center'>
                          <h2 className='font-lato font-extrabold lg:text-6xl sm:text-4xl text-3xl lg:leading-[72px] text-white max-w-[786px] text-center'>Lorem ipsum dolor sit amet consectetur. <span className={`${text === "/" ? "text-black" : background === "/about" ? "text-yellow-400" : "text-black"}`}>Sceleris</span></h2>
                          <p className='font-lato font-medium text-base text-white text-center mx-auto pt-5'>Lorem ipsum dolor sit amet consectetur. Id mattis at tristique duis.</p>
                      </div>
                  </div>
              </div>
         </div>
      </>
  )
}

export default Header