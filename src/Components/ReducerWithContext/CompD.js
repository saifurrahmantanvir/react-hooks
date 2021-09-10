import React, { useContext } from 'react';
import { CountContext } from '../../App';

function CompD() {
   const countContext = useContext(CountContext);

   return (
      <div>
         ComponentD - {countContext.countState}
         <button className='button' onClick={() => countContext.countDispatch('increment')}>
            Increment
         </button>

         <button className='button' onClick={() => countContext.countDispatch('decrement')}>
            Decrement
         </button>

         <button className='button' onClick={() => countContext.countDispatch('reset')}>
            Reset
         </button>
      </div>
   )
}

export default CompD
