import React, { useState, useEffect } from 'react'

const HooksPractice = () => {
  const [name, setName] = useState('rajni');
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (count >= 10) {
      setTimeout(false);
      return
    }
    setTimeout(() => {
      setCount((count) => count + 1);
    }, 1000);
  },);

  return (
    <div className='py-12'>
      <div className='container'>
        <h3 className='font-inter font-semibold text-4xl text-black text-center pb-9'>Counter Practice </h3>
        {/* use state */}
        <div className='text-center '>
          <p className='text-lg text-black opacity-60'>{name}</p>
          <button onClick={() => setName(name => (name === 'rajni' ? 'dikhsa' : 'rajni'))}
            className='font-medium text-lg bg-blue p-2 rounded mt-3'>Toggle Button</button>
        </div>

        {/* use effect  */}
        <div className='text-center pt-9'>
          <p className='font-medium text-black text-xl pb-5'>Timer</p>
          <p className='text-lg text-black opacity-60'>{count}</p>
        </div>
      </div>
    </div>
  )
}

export default HooksPractice
