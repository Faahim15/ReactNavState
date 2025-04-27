import React from 'react';
import useInputState from '../../hooks/useInputState';

const HooksForm = () => { 
  
    // const [value,onHandleChange] = useInputState('rojoni');
    const nameState = useInputState('rojoni');

    const handleSubmit =(e)=>{
        console.log(nameState.value)
        e.preventDefault(); 
        
 }
    return (
        <div>
            <form style={{
            display:'flex',
            flexDirection: 'column',
            justifyContent:'center',
            alignItems:'center',
            gap: '10px',
            width:'50%'
           }} 
            onSubmit={handleSubmit}>
               <input {...nameState} type="text" name="name" />
               <input  type="email" name="email" id="" />
               <input  type="password" name="password" id="" />
               <input type="number" name="number" id="" />
               <input style={{color:'white'}}  type="submit" value="submit" /> 
               
            </form>
        </div>
    );
};

export default HooksForm;