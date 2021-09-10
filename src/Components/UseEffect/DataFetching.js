import React, { useState, useEffect } from 'react';
import axios from 'axios';

const DataFetching = function () {
   const [post, setPost] = useState({});
   const [id, setId] = useState(1);
   const [idFromButtonClick, setIdFromButtonClick] = useState(1);

   const handleClick = () => {
      setIdFromButtonClick(id);
   }

   useEffect(() => {
      axios.get(`https://jsonplaceholder.typicode.com/posts/${idFromButtonClick}`)
         .then(response => {
            console.log(response);
            setPost(response.data);
         })
         .catch(error => {
            console.error(error.message)
         })

   }, [idFromButtonClick])

   return (
      <div>
         <input className='input-style'
            type='text' value={id}
            onChange={(e) => setId(e.target.value)}
         />

         <button className="button" onClick={handleClick}>
            Fetch Post
         </button>

         <div>{post.title}</div>

         {/* <ul>
            {posts.length ? posts.map(post => (<li key={post.id}>{post.title}</li>)) : null}
         </ul> */}
      </div>
   )
}

export default DataFetching;
