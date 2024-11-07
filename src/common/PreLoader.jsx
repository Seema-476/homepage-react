import React, { useState, useEffect } from 'react'
import preLoaderImg from '../assets/images/png/preloader-image.png'

const PreLoader = () => {
  const [preLoader, setPreLoader] = useState(true)
    
  useEffect(() => {
    const timer = setTimeout(() => {
      setPreLoader(false)
    },2000)
  },[])

  return (
    <div>
      {preLoader ? (
        <div className='h-screen w-full bg-blue fixed bottom-0 top-0 right-0 z-40 flex justify-center items-center overflow-hidden'>
            <img src={preLoaderImg} alt="preloader" className='animate-ping duration-900 h-7 w-7'/>
        </div>
      ):null}
  </div>
  )
}

export default PreLoader

