import React from 'react';
import './User.css'
import { Link } from 'react-router-dom';
const User = ({user}) => {
    const {id,name,email,phone,address,company,website}=user
    return (
        <div className='user' >
            <div className='user_data' >
            <h3>{name}</h3> 
            <p>{email}</p> 
            <p>{phone}</p> 
            <p>{address.city}</p>
            <p>{company.name}</p>
            <p>{website}</p> 
            </div>
            <Link to={`/users/${id}`} >Show details</Link>
        </div>
    );
};

export default User;