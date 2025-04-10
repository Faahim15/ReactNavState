import React, { useEffect, useState } from 'react';
import Blog from './Blog';
import Bookmarks from '../Bookmarks/Bookmarks';

const Blogs = ({handleBookMarks,handlespentTime}) => {
    const [blogs, setBlogs]=useState([]);  
    
    useEffect(()=>{
        fetch('blog.json')
        .then(res =>res.json())
        .then(blogs =>setBlogs(blogs))
    },[])

    return (
        <div className='mt-4 ml-2'>
            {
                blogs.map((blog,idx)=><Blog blog={blog} key={idx} handleBookMarks={handleBookMarks}handlespentTime={handlespentTime} ></Blog>)
            } 
        </div>
    );
};

export default Blogs;