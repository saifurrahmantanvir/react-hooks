import React, { useState, useEffect } from 'react';

const IntervalHookCounter = function () {
   const [count, setCount] = useState(0);

   useEffect(() => {
      const tick = () => {
         setCount(count + 1);
      }

      const interval = setInterval(tick, 1000)

      return () => {
         clearInterval(interval);
      }

   }, [count])

   return (
      <h1>
         {count}
      </h1>
   )
}

export default IntervalHookCounter;
