import React, { useState, useEffect } from 'react';

const HookCounterOne = function () {
   const [count, setCount] = useState(0);
   const [name, setName] = useState('');

   useEffect(() => {
      console.log('Bam!');
      document.title = `Clicked ${count} times`
   }, [count])

   return (
      <div>
         <input className='input-style'
            type="text" value={name}
            onChange={(e) => setName(e.target.value)}
         />

         <button className='button'
            onClick={() => setCount(count + 1)}
         >
            Func Clicked {count} times
         </button>
      </div>
   )
}

export default HookCounterOne;
