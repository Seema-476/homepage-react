import React from 'react'
import { useState } from 'react';

const CustomTabs = () => {
    const [active, setActive] = useState('tab-1');
    const handleClick = (event) => {
        setActive(event.target.id);
    };
  return (
    <div className='py-12'>
          <div className='container'>
              <h3 className='font-inter font-semibold text-4xl text-black text-center pb-9'>Tabs</h3>
              <div className='flex items-center justify-between max-w-[600px] w-full mx-auto mb-6'>
                  <button
                      id="tab-1"
                      onClick={handleClick}
                      className={`py-3 px-5 rounded font-medium text-2xl text-black ${active === 'tab-1' ? 'text-white bg-black' :'text-black'}`}>
                      Btn 1
                  </button>
                  <button
                      id="tab-2"
                      onClick={handleClick}
                      className={`py-3 px-5 rounded font-medium text-2xl text-black ${active === 'tab-2' ? 'text-white bg-black' : 'text-black'}`}>
                      Btn 2
                  </button>
                  <button
                      id="tab-3"
                      onClick={handleClick}
                      className={`py-3 px-5 rounded font-medium text-2xl text-black ${active === 'tab-3' ? 'text-white bg-black' : 'text-black'}`}>
                      Btn 3
                  </button>
              </div>

              <div>
                  {active === 'tab-1' &&( <p className='text-normal text-base max-w-[400px] p-3 bg-slate-500 text-white rounded mx-auto'><span className='font-bold text-yellow-400'>1.</span> Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit tenetur non expedita aperiam totam esse aut pariatur facilis accusamus odio, vel sit, qui voluptatibus.</p>)}
              {active === 'tab-2' && (<p className='text-normal text-base max-w-[400px] p-3 bg-gray-900 text-white rounded mx-auto'><span className='font-bold text-yellow-400'>2.</span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit tenetur non expedita aperiam totam esse aut pariatur facilis accusamus odio, vel sit, qui voluptatibus.</p>)}
              {active === 'tab-3' && (<p className='text-normal text-base max-w-[400px] p-3 bg-slate-700 text-white rounded mx-auto'><span className='font-bold text-yellow-400'>3.</span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit tenetur non expedita aperiam totam esse aut pariatur facilis accusamus odio, vel sit, qui voluptatibus.</p>)}
              </div>
          </div>
          </div>
  )
}

export default CustomTabs
