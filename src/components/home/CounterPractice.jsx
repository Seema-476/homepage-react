import React, { useState } from 'react'
import CountUp from 'react-countup'
import ReactVisibilitySensor from 'react-visibility-sensor'

const CounterPractice = () => {
    const [isVisible, setIsVisible] = useState(false)
    function onVisible(isVisible) {
        if (isVisible) {
            setIsVisible(true)
        }
    }
    return (
        <div>
            <div className='container'>
                <p className='font-bold md:text-4xl text-2xl text-center'>Counter</p>
                <div className='text-center mt-5 bg-green-600 py-4 px-9 w-[200px] mx-auto'>
                    <ReactVisibilitySensor onChange={onVisible}>
                        <div>
                            <CountUp start={0} end={isVisible ? 50 : 0} delay={2} className=' text-white text-2xl'>
                            </CountUp>
                        </div>
                    </ReactVisibilitySensor>
                </div>
                <div className='text-center mt-5 bg-dark-blue py-4 px-9 w-[200px] mx-auto'>
                    <ReactVisibilitySensor onChange={onVisible}>
                        <div>
                            <CountUp start={0} end={isVisible ? 90 : 0} delay={2} className='text-white text-2xl'>
                            </CountUp>
                        </div>
                    </ReactVisibilitySensor>
                  </div>
                <div className='text-center mt-5 bg-deep-blue py-4 px-9 w-[200px] mx-auto'>
                    <ReactVisibilitySensor onChange={onVisible}>
                        <div>
                            <CountUp start={0} end={isVisible ? 60 : 0} delay={2} className='text-white text-2xl'>
                            </CountUp>
                        </div>
                    </ReactVisibilitySensor>
                </div>
                
            </div>
        </div>
    )
}

export default CounterPractice
