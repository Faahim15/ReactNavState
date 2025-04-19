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
                <h3 className='text-2xl font-black' >Avalaible palyers</h3> 
                <div className='flex border border-gray-300 rounded-lg w-46' >
                <button className='bg-[#E7FE29] px-3 py-2 w-18 rounded-lg'>Available</button>
                <button className='py-2 px-2 w-18 text-gray-500 '>Selected(0)</button>
                </div>
            </div> 
           <div className='grid grid-cols-5 mt-4 mx-2 gap-3' >
           {
                players.map((player)=><Players key={player.id} player={player} ></Players>)
            }
           </div>
        </div>
    );
}; 

export default Main;