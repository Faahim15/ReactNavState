import React, { useEffect, useState } from 'react';
import Country from '../Country/Country';

const Countries = () => {
  
    const [countries,setCountries]=useState([]);  
    const [visitedcountry, setVisitedCountry]=useState([]); 
    
    const handleCountry = (country) =>{
        console.log(country);
        setVisitedCountry([...visitedcountry,country]);
        // const newVisitedCountry = [...]
    }

    useEffect(()=>{
        fetch('https://restcountries.com/v3.1/all')
        .then(res =>res.json())
        .then(data =>setCountries(data))
    },[])
    return (
        <div> 
            <ul>
                Visitied countries: {visitedcountry.length}
                {
                   visitedcountry.map((names,idx)=><li key={idx}>{names}</li>)
                }
            </ul>
            <h3>Countries: {countries.length}</h3>
            <div className='world-tour'>
               { countries.map(country => (<Country handleCountry={handleCountry} key={country.ccn3} country={country}></Country>))}
            
            </div>
        </div>
    );
};

export default Countries;