import React from 'react'
import LoremMapCards from '../home/LoremMapCards'
import Footer from '../../common/Footer'
import Hero from '../../common/Hero'
import SlickSlider from '../home/SlickSlider'
import EmailjsPractice from '../../common/EmailjsPractice'
import AnimationKeyFrame from '../../common/AnimationKeyFrame'
import Cards from '../../common/Cards'
import HooksPractice from '../../common/HooksPractice'


const Home = () => {
    return (
        <>
            <Hero />
            <LoremMapCards />
            <SlickSlider />
            <EmailjsPractice />
            <AnimationKeyFrame />
            <HooksPractice />
            <Cards/>
            <Footer />
           </>
    )
}

export default Home