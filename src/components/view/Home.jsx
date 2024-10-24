import React from 'react'
import LoremMapCards from '../home/LoremMapCards'
import Footer from '../../common/Footer'
import Hero from '../../common/Hero'
import SlickSlider from '../home/SlickSlider'

const Home = () => {
  return (
      <>
          <Hero />
      <LoremMapCards />
      <SlickSlider/>
          <Footer />
      </> 
  )
}

export default Home