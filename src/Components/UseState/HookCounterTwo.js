import React, { useState } from 'react';

function HookCounterTwo() {
   const initialCount = 0;
   const [count, setCount] = useState(initialCount);

   const incrementFive = () => {
      for (let i = 0; i < 5; i++) {
         setCount((prevCount) => prevCount + 1);
      }
   }

   return (
      <div>
         Count {count}
         <div>
            <button onClick={() => setCount(initialCount)} className='button'>Reset</button>

            <button onClick={() => setCount((prevCount) => prevCount + 1)} className='button'>
               Increment
            </button>

            <button onClick={() => setCount((prevCount) => prevCount - 1)} className='button'>
               Decrement
            </button>

            <button onClick={incrementFive} className='button'>Increment Five</button>
         </div>
      </div>
   )
}

export default HookCounterTwo;
