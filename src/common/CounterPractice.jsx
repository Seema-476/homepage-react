import React, { useState } from 'react'
import CountUp from 'react-countup'
import ReactVisibilitySensor from 'react-visibility-sensor'

const CounterPractice = () => {
    const [ value,setView] = useState(0)
    function onVisible(count) {
        if (count) {
            setView(true)
        }
    }
    return (
        <div>
            <div className='container'>
                <p className='font-medium text-xl text-center'>Counter</p>
                <div className='text-center pt-5'>
                    <ReactVisibilitySensor onChange={onVisible}>
                        <CountUp start={0} end={50} delay={1}>
                        </CountUp>
                  </ReactVisibilitySensor>
               </div>
            </div>
        </div>
    )
}

export default CounterPractice
