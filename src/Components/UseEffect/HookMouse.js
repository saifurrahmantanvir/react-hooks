import React, { useState, useEffect } from 'react';

const HookMouse = function () {
   const [x, setX] = useState(0);
   const [y, setY] = useState(0);

   const logMousePosition = (e) => {
      setX(e.clientX);
      setY(e.clientY);
   }

   useEffect(() => {
      window.addEventListener('mousemove', logMousePosition);

      return () => {
         window.removeEventListener('mousemove', logMousePosition);
      }

   }, [])

   return (
      <div>
         Hook X - {x} Y - {y}
      </div>
   )
}

export default HookMouse;
