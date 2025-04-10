import React, { useEffect, useState } from 'react';
import Bottle from './Bottle';
import { addToLs,getStorageData } from '../../utilities/localstorage';

const Bottles = () => {   
    const [bottle, setBottle]= useState([]);
    useEffect(()=>{
        fetch('bottles.json')
        .then(res =>res.json())
        .then(data =>setBottle(data))
    },[])  
    useEffect(()=>{
        if(bottle.length){
            const savedCart = [];
            const cart = getStorageData(); 
            for(const id of cart){
                const bottle = bottle.find(bottle =>id === bottle.price) 
                if(bottle) 
                    savedCart.push(bottle);
            } 
            console.log(savedCart)
        }
    },[bottle])
    const [shoppingCart, setShoppingCart]=useState([]);
    const handleShoppingCart = (item)=>{
        const newProduct = [...shoppingCart,item];
        setShoppingCart(newProduct);
        addToLs(item.id)
        
    }
    return (
        <div>
            <h1>Total bottles: {bottle.length} </h1>
            <div>
                <h2>Cart: {getStorageData().length}</h2>
                {/* { 
                  
                  shoppingCart.map((p,idx)=><li key ={idx}>{p.name} ${p.price}</li>)
                } */}
            </div>
            <div className="bottle-container">
            {
                bottle.map((bottle,idx)=><Bottle handleShoppingCart={handleShoppingCart} key ={idx} bottle ={bottle}></Bottle>)
            }
            </div>
        </div>
    );
};

export default Bottles;