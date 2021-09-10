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

const CounterThree = function () {
   const [count, dispatch] = useReducer(reducer, initialState);
   const [countTwo, dispatchTwo] = useReducer(reducer, initialState);

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

         <div>
            <div>Count Two {countTwo}</div>
            <button className='button' onClick={() => dispatchTwo('increment')}>
               Increment
            </button>

            <button className='button' onClick={() => dispatchTwo('decrement')}>
               Decrement
            </button>

            <button className='button' onClick={() => dispatchTwo('reset')}>
               Reset
            </button>
         </div>
      </div>
   )
}

export default CounterThree;
