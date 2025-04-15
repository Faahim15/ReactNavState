import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Users = () => {
    const users = useLoaderData();
    console.log(users);
    return (
        <div>
            <h2>Here all the users added.</h2>
             <h3>Our user: {users.length}</h3>
        </div>
    );
};

export default Users;