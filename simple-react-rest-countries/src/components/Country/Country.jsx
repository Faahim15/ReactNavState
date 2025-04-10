import React, { useState } from 'react';
import './CSS/country.css'
const Country = ({country,handleCountry}) => { 
    const {name,flags} = country;
    const [visited, setVisited]=useState(false);
    const handleVisited=()=>{
          setVisited(!visited);
    }
    return (
        <div className='country'>
            <img src={flags.png} alt="" /> 
            <h3>{name.common}</h3>
            <button onClick={()=>handleCountry(name.common)}>Mark Visited</button>
            <button style={{color: visited?'red':'blue' }} onClick={handleVisited} >{visited?'Visited':'Going'}</button> <br />
            {
                visited?'I have already visited this country': 'I am planning to visited this country'
            }
        </div>
    );
};

export default Country;