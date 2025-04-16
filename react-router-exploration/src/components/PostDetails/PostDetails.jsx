import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const PostDetails = () => {
    const post = useLoaderData(); 
    const params = useParams();
    return (
        <div> 
            <h4>
                {
                    post.title
                }
                {
                    params.postId
                }
            </h4>
            <article>
                {
                    post.body
                }
            </article>
        </div>
    );
};

export default PostDetails;