import React, { useState } from 'react'

const CounterPractice = () => {
  const [name, setName] = useState('rajni');

  return (
    <div className='py-12'>
      <div className='container'>
        <h3 className='font-inter font-semibold text-4xl text-black text-center pb-9'>Counter Practice </h3>
        {/* use state      */}
        <div className='text-center '>
          <p className='text-lg text-black opacity-60'>{name}</p>
          <button onClick={() => setName(name => (name === 'rajni' ? 'dikhsa' : 'rajni'))}
            className='font-medium text-lg bg-blue p-2 rounded mt-3'>Toggle Button</button>
        </div> 
      </div>
    </div>
      
  )
}

export default CounterPractice
