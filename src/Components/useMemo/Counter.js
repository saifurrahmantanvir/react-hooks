import React, { useState, useMemo } from 'react';

function Counter() {
   const [counterOne, setCounterOne] = useState(0);
   const [counterTwo, setCounterTwo] = useState(0);

   const incrementOne = () => {
      setCounterOne(counterOne + 1);
   }

   const incrementTwo = () => {
      setCounterTwo(counterTwo + 1);
   }

   const isEven = useMemo(() => {
      for (let i = 0; i < 1000000000; i++) {

      }
      return counterOne % 2 === 0;

   }, [counterOne])

   return (
      <div>
         <div>
            <button className='button' onClick={incrementOne}>
               Count One - {counterOne}
            </button>
            <span>{isEven ? ' Even' : ' Odd'}</span>
         </div>
         <div>
            <button className='button' onClick={incrementTwo}>
               Count Two - {counterTwo}
            </button>
         </div>
      </div>
   )
}

export default Counter;
