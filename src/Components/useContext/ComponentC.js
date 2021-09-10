import React from 'react';
import { UserContext, ProfessionContext } from '../../App';

const ComponentC = function () {
   return (
      <div>
         <UserContext.Consumer>
            {(userName) => {
               return (
                  <ProfessionContext.Consumer>
                     {(profession) => {
                        return (
                           <h1>User Context Value {userName}, Profession Context Value {profession}</h1>
                        )
                     }}
                  </ProfessionContext.Consumer>
               )
            }}
         </UserContext.Consumer>
      </div>
   )
}

export default ComponentC;
