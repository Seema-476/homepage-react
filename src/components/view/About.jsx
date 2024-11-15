import React from 'react'
import MapCards from '../about/MapCards'
import Footer from '../../common/Footer'
import Hero from '../../common/Hero'
import SwiperSlider from '../about/SwiperSlider'
import TiltjsPractice from '../../common/TiltjsPractice'
import LottiePractice from '../../common/LottiePractice'
import CustomTabs from '../../common/CustomTabs'

const About = () => {
    return (
        <>
            <Hero />
            <MapCards />
            <TiltjsPractice/>
            <SwiperSlider />
            <LottiePractice />
            <CustomTabs/>
            <Footer className="!bg-deep-blue" />
        </>
    )
}

export default About