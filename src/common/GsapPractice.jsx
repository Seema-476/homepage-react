import React from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react';
import TextAnimation from './TextAnimation';
gsap.registerPlugin(useGSAP);

const GsapPractice = () => {
    const { contextSafe } = useGSAP();
    const spin = contextSafe(({ currentTarget }) => {
        gsap.to(currentTarget, { rotation: "+=90", repeat: 1, x: 100, duration: 1, ease: 'elastic.out' });
        gsap.to(currentTarget, { rotation: "+=360", x: 100, duration: 1 });
        gsap.to(currentTarget, { rotation: "+=360", x: 100, duration: 1 });
        gsap.from(currentTarget, { rotation: "-=360", });
    });

    return (
        <div className='py-12 overflow-hidden'>
            <div className='container'>
                <h3 className='font-inter font-semibold text-4xl text-black text-center pb-9 cursor-pointer'>Gsap</h3>
                <div className="box bg-black max-w-[100px] h-20 flex justify-center items-center rounded mx-auto text-white" onClick={spin}>Click me
                </div>
            </div>
            <TextAnimation/>
        </div>
    )
}

export default GsapPractice
