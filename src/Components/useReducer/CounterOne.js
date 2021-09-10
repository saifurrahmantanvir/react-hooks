import React, { useReducer } from 'react';

const initialState = 0;

const reducer = (cState, action) => {
   switch (action) {
      case 'increment':
         return cState + 1;

      case 'decrement':
         return cState - 1;

      case 'reset':
         return initialState;

      default:
         return cState;
   }
}

const CounterOne = function () {
   const [count, dispatch] = useReducer(reducer, initialState);

   return (
      <div>
         <div>Count {count}</div>
         <button className='button' onClick={() => dispatch('increment')}>
            Increment
         </button>

         <button className='button' onClick={() => dispatch('decrement')}>
            Decrement
         </button>

         <button className='button' onClick={() => dispatch('reset')}>
            Reset
         </button>
      </div>
   )
}

export default CounterOne;
