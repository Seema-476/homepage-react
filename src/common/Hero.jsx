import React from 'react'
import { useLocation } from 'react-router-dom'
import CommonHeading from '../common/CommonHeading'
import { useTypewriter} from 'react-simple-typewriter'

const Hero = () => {
    const pathname = useLocation().pathname;
    const [ text ] = useTypewriter({
        words: ["World!","It's a typewriter effect."],
        loop: {},
        typeSpeed: 120,
        deleteSpeed: 40,

    });
    return (
        <>
            <div className={`${pathname === "/" ? "bg-orange rounded-b-xl" : pathname === "/about" ? "bg-dark-blue" : ""}`}>
                <div className='container'>
                    <div className='flex items-center justify-center w-full h-screen'>
                        <div>
                            <CommonHeading text="Lorem ipsum dolor sit amet consectetur." yellowText="Sceleris"></CommonHeading>
                            <p className='font-lato font-medium text-base text-white text-center mx-auto pt-5'>Lorem ipsum dolor sit amet consectetur. Id mattis at tristique</p>
                            <p className='text-white mx-auto text-2xl text-center pt-2'>Hello <span>{text}</span></p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Hero