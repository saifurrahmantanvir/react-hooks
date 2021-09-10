import React from 'react';
import useCounter from './hooks/useCounter';

const CustomCounterOne = () => {
   const [count, increment, decrement, reset] = useCounter(5, 10);

   return (
      <div>
         <h2>Count {count}</h2>
         <button className="button" onClick={increment}>Increment</button>
         <button className="button" onClick={decrement}>Decrement</button>
         <button className="button" onClick={reset}>Reset</button>
      </div>
   )
}

export default CustomCounterOne;