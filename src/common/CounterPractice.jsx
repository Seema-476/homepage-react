import React, { useState } from 'react'
import CountUp from 'react-countup'
import ReactVisibilitySensor from 'react-visibility-sensor'

const CounterPractice = () => {
    const [ isVisible,setIsVisible] = useState(false)
    function onVisible(isVisible) {
        if (isVisible) {
            setIsVisible(true)
        }
    }
    return (
        <div>
            <div className='container'>
                <p className='font-bold text-4xl text-center'>Counter</p>
                <div className='text-center pt-5'>
                    <ReactVisibilitySensor onChange={onVisible}>
                        <div>
                            <CountUp start={0} end={50} delay={1}>
                            </CountUp>
                       </div>
                  </ReactVisibilitySensor>
               </div>
            </div>
        </div>
    )
}

export default CounterPractice
