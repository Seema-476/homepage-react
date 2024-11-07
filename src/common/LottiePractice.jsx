import React from 'react'
import Lottie from 'lottie-react'
import Cartoon from '../assets/lottie/cartoon.json'

const LottiePractice = () => {
    return (
        <div className='py-12 overflow-hidden'>
            <h3 className='font-inter font-semibold text-4xl text-black text-center pb-9 animate__animated animate__flipInX animate__slow 1s'>LOTTIE PRACTICE </h3>
            <div className='max-w-[300px] text-center mx-auto'>
                <Lottie animationData={Cartoon} loop={true} speed={2} />
            </div>
        </div>

    )
}

export default LottiePractice