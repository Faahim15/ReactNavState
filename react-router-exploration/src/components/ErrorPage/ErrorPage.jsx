import React from 'react';
import { Link, useRouteError } from 'react-router-dom';

const ErrorPage = () => {
    const error = useRouteError();
    return (
        <div>
            <h1>Opps!</h1> 
            <i>{error.statusText || error.message}</i> 
            <Link to={'/'} ><button>Home</button></Link>
        </div>
    );
};

export default ErrorPage;