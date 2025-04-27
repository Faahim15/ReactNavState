import React from 'react';

const ReusableForm = ({title,submitLabel,onSubmit,children}) => { 
    const handleSubmit =(e)=>{
       
        e.preventDefault(); 
        const text = e.target.name.value; 
        const email = e.target.email.value; 
        const password = e.target.password.value; 

        const data ={
           text,
           email,
           password
        } 
        onSubmit(data);
 }
    return (
        <div>
            {children}
            <form style={{
            display:'flex',
            flexDirection: 'column',
            justifyContent:'center',
            alignItems:'center',
            gap: '10px',
            width:'50%'
           }} 
            onSubmit={handleSubmit}>
                <h3>{title}</h3>
               <input type="text" name="name" />
               <input  type="email" name="email" id="" />
               <input  type="password" name="password" id="" />
               <input style={{color:'white'}}  type="submit" value={submitLabel} /> 
            </form>
        </div>
    );
};

export default ReusableForm;