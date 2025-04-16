import React from 'react';
import { useLoaderData } from 'react-router-dom';

const UserDetails = () => { 
    const user = useLoaderData(); 
    const {name,email} = user;
    return (
        <div>
            <h4>This is user details page</h4>
            <span>User {name}</span> 
            <p>Email: {email}</p>
        </div>
    );
};

export default UserDetails;