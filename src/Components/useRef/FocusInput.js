import React, { useEffect, useRef } from 'react';

function FocusInput() {
   const inputRef = useRef(null);

   useEffect(() => {
      //focus input element
      inputRef.current.focus();

   }, [])

   return (
      <div>
         <input className='input-style' type='text' ref={inputRef} />
      </div>
   )
}

export default FocusInput;
