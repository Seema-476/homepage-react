import React from 'react'
import LoremMapCards from '../home/LoremMapCards'
import Footer from '../../common/Footer'
import Hero from '../../common/Hero'
import SlickSlider from '../home/SlickSlider'
import EmailjsPractice from '../home/EmailjsPractice'
import AnimationKeyFrame from '../home/AnimationKeyFrame'
import Cards from '../home/Cards'
import HooksPractice from '../home/HooksPractice'
import CounterPractice from '../home/CounterPractice'
import PreLoader from '../home/PreLoader'


const Home = () => {
    return (
        <>
            <PreLoader/>
            <Hero />
            <LoremMapCards />
            <SlickSlider />
            <EmailjsPractice />
            <AnimationKeyFrame />
            <HooksPractice />
            <CounterPractice/>
            <Cards/>
            <Footer />
           </>
    )
}

export default Home