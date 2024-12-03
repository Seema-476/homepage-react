import React, { useState } from 'react'
import { ACCORDION_DATA } from '../../common/Helper';

const AccordionCustom = () => {
    const [accoActive, setAccoActive] = useState(0);

    const toggleAccordion = (index) => {
        setAccoActive(accoActive === index ? false : index);
    };
    return (
        <div className='py-12'>
            <div className='container'>
                <p className='font-semibold font-inter md:text-5xl text-3xl text-center pb-6'>Custom Accordion</p>
                <div className="max-w-[700px] shadow-lg bg-white rounded-lg lg:p-7 p-4 mx-auto">
                    {ACCORDION_DATA.map((obj, index) => (
                        <div key={index} onClick={() => toggleAccordion(index)} class={`border border-black rounded-lg lg:py-5 lg:px-4 p-3 mb-2 ${accoActive === index ? 'border-dark-blue' : ''}`}>
                            <div className='flex items-center justify-between duration-1000 ease-in-out'><p className='mb-0 font-bold lg:text-2xl text-xl'>{obj.accobtn}</p><span className={`${accoActive === index ? 'rotate-180' : ''}`}>{obj.arrowIcon}</span></div>
                            {accoActive === index && (
                                <p className="pt-2 font-medium lg:text-base text-sm opacity-70">{obj.accotext}</p>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default AccordionCustom