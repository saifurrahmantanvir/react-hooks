import React from 'react';
import useInput from './hooks/useInput';

function UserForm() {
   const [firstName, bindFirstName, resetFirstName] = useInput('');
   const [lastName, bindLastName, resetLastName] = useInput('');

   const submitHandler = (e) => {
      e.preventDefault();
      alert(`Hello ${firstName} ${lastName}`);
      resetFirstName();
      resetLastName();
   }

   return (
      <div>
         <form onSubmit={submitHandler}>
            <div>
               <label>First name</label>
               <input type='text' className='input-style'
                  {...bindFirstName}
               />
            </div>

            <div>
               <label>Last name</label>
               <input type='text' className='input-style'
                  {...bindLastName}
               />
            </div>

            <button type='submit' className='button'>Submit</button>
         </form>
      </div>
   )
}

export default UserForm;
