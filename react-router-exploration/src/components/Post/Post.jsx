import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Post = ({post}) => { 

    const {id,body,title}= post; 
    const navigate = useNavigate();
    const handleNavigation=()=>{
         navigate(-1);
    }
    return (
        <div >
            
            <div className='post' > 
            <span>Id: {id}</span> 
            <h3>{title}</h3>
            <article>
                {
                 body
                }
            </article> 
             <Link to={`/post/${id}`}>
             <button>See details</button>
             </Link> 
             <button onClick={handleNavigation} >Go back</button>
            </div>
        </div>
    );
};

export default Post;