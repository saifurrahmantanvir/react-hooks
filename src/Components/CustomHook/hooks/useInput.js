import { useState } from 'react';

function useInput(initialValue) {
   const [value, setValue] = useState(initialValue);

   const resetInputValue = () => {
      setValue(initialValue);
   }

   const bindInputValue = {
      value,

      onChange(e) {
         setValue(e.target.value);
      }

   }

   return [value, bindInputValue, resetInputValue];
}

export default useInput;
