import React, { useState } from 'react';
import ClassMouse from './UseEffect/ClassMouse';
import HookMouse from './UseEffect/HookMouse';

const MouseContainer = function () {
   const [display, setDisplay] = useState(true);

   return (
      <div>
         <button className='button'
            onClick={() => setDisplay(!display)}
         >
            Toggle Display
         </button>

         {display && <HookMouse />}
         {display && <ClassMouse />}
      </div>
   )
}

export default MouseContainer;
