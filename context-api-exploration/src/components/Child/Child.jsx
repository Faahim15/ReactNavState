import React, { useContext } from 'react';
import { AssetContext } from '../../App';

const Child = () => {
    const gift = useContext(AssetContext);
    return (
        <div className='border'>
            <h2>Children</h2>
             <p>has: {gift}</p>
        </div>
    );
};

export default Child;