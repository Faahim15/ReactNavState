import React, { Children } from 'react';
import Child from '../Child/Child';

const Dad = () => {
    return (
        <div className='border' >
            <h3>Dad</h3> 
             <Child></Child>
        </div>
    );
};

export default Dad;