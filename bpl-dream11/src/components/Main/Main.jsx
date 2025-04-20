import React, { useEffect, useState } from 'react';
import axios from 'axios'
import Players from './Players';
import { CiFlag1 } from "react-icons/ci";
const Main = () => { 
    const [players,setPlayers] = useState([]); 
    useEffect(()=>{
        axios.get('../../../public/players.json') 
        .then(response =>setPlayers(response.data)) 
        .catch(error =>console.error('Something is fishy..',error)) 
        
    },[])
  
    return (
        <div>
            <div className='flex justify-between mt-7 mx-2' >
                <h3 className='md:text-2xl font-black py-1' >Avalaible palyers</h3> 
                <div className='flex border border-gray-300 rounded-lg md:w-46 font-bold' >
                <button className='bg-[#E7FE29] md:px-3 md:py-2 md:w-18 rounded-lg px-1 py-1'>Available</button>
                <button className='md:py-2 md:px-2 md:w-18 text-gray-500 px-1 py-1' >Selected(0)</button>
                </div>
            </div> 
           <div className='grid grid-cols-1 md:grid-cols-4 mt-4 mx-2 gap-3 place-items-center' >
           {
                players.map((player)=><Players key={player.id} player={player} ></Players>)
            }
           </div>
        </div>
    );
}; 

export default Main;