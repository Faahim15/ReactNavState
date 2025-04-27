import React, { useEffect, useRef } from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

const Home = () => { 
    const nameRef = useRef(null); 
   
    useEffect(()=>{
        nameRef.current.focus();
    },[])

    const handleSubmit =(e)=>{
           e.preventDefault();
           console.log(nameRef)
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
               <input ref={nameRef} type="text" name="name" />
               <input  type="email" name="email" id="" />
               <input type="password" name="password" id="" />
               <input type="number" name="number" id="" />
               <input style={{color:'white'}}  type="submit" value="submit" /> 
               
            </form>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div> 
       
    );
};

export default Home;