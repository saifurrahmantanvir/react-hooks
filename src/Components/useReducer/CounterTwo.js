import React, { useReducer } from 'react';

const initialState = {
   firstCounter: 0,
   secondCounter: 10

};

const reducer = (cState, action) => {
   switch (action.type) {
      case 'increment':
         return { ...cState, firstCounter: cState.firstCounter + action.value };
      case 'decrement':
         return { ...cState, firstCounter: cState.firstCounter - action.value };

      case 'increment2':
         return { ...cState, secondCounter: cState.secondCounter + action.value };
      case 'decrement2':
         return { ...cState, secondCounter: cState.secondCounter - action.value };

      case 'reset':
         return initialState;
      default:
         return cState;
   }

}

const CounterTwo = function () {
   const [count, dispatch] = useReducer(reducer, initialState);

   return (
      <div>
         <div>Count {count.firstCounter}</div>
         <div>Count {count.secondCounter}</div>
         <button className='button' onClick={() => dispatch({ type: 'increment', value: 1 })}>
            Increment
         </button>
         <button className='button' onClick={() => dispatch({ type: 'decrement', value: 1 })}>
            Decrement
         </button>

         <button className='button' onClick={() => dispatch({ type: 'increment', value: 5 })}>
            Increment 5
         </button>
         <button className='button' onClick={() => dispatch({ type: 'decrement', value: 5 })}>
            Decrement 5
         </button>

         <div>
            <button className='button' onClick={() => dispatch({ type: 'increment2', value: 1 })}>
               Increment Second Counter
            </button>

            <button className='button' onClick={() => dispatch({ type: 'decrement2', value: 1 })}>
               Decrement Second Counter
            </button>
         </div>

         <button className='button' onClick={() => dispatch({ type: 'reset' })}>
            Reset
         </button>
      </div>
   )
}

export default CounterTwo;
