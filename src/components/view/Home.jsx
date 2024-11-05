import React from 'react'
import LoremMapCards from '../home/LoremMapCards'
import Footer from '../../common/Footer'
import Hero from '../../common/Hero'
import SlickSlider from '../home/SlickSlider'
import EmailjsPractice from '../../common/EmailjsPractice'
import AnimationKeyFrame from '../../common/AnimationKeyFrame'
import CounterPractice from '../../common/CounterPractice'


const Home = () => {
    return (
        <>
            <Hero />
            <LoremMapCards />
            <SlickSlider />
            <EmailjsPractice />
            <AnimationKeyFrame />
            <CounterPractice/>
            <Footer />
           </>
    )
}

export default Home