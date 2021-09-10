import React, { useContext } from 'react';
import ComponentC from './ComponentC';
import { UserContext, ProfessionContext } from '../../App';

const ComponentB = function () {
   const user = useContext(UserContext);
   const profession = useContext(ProfessionContext);

   return (
      <div>
         <h1>{user} - {profession}</h1>
         <ComponentC />
      </div>
   )
}

export default ComponentB;
