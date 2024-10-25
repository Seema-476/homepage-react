import React from 'react'
import MapCards from '../about/MapCards'
import Footer from '../../common/Footer'
import Hero from '../../common/Hero'
import SwiperSlider from '../about/SwiperSlider'
import TiltjsPractice from '../../common/TiltjsPractice'

const About = () => {
    return (
        <>
            <Hero />
            <MapCards />
            <TiltjsPractice/>
            <SwiperSlider />
            <Footer className="!bg-deep-blue" />
        </>
    )
}

export default About