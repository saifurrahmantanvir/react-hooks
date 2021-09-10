import React, { useState } from 'react';

const HookCounterArray = function () {
   const [items, setItems] = useState([]);

   const addItem = () => {
      setItems([...items, {
         id: items.length,
         value: Math.floor(Math.random() * 10) + 1
      }])
   }

   return (
      <div>
         <button className='button' onClick={addItem}>Add a number</button>
         <ul style={{ listStyle: 'none' }}>
            {
               items.length ? items.map((item) => (<li key={item.id}>{item.value}</li>)) : null
            }
         </ul>
      </div>
   )
}

export default HookCounterArray;
