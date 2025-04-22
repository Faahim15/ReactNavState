
import { CiFlag1 } from "react-icons/ci"; 
import React, { useEffect, useState } from 'react'; 
import axios from 'axios' 
import Player from "../Player/Player"
const Players = ({handleSelectedPlayers,selectedPlayers}) => { 
    const [players,setPlayers] = useState([]); 
    useEffect(()=>{
        axios.get('../../../Players.json') 
        .then(response =>setPlayers(response.data)) 
        .catch(error =>console.error('Something is fishy..',error)) 
        
    },[])
  
    return (
       <div> 
            <div className='grid grid-cols-1 md:grid-cols-4 mt-4 mx-2 gap-3 place-items-center' >
           {
                players.map((player)=><Player key={player.id} player={player} selectedPlayers={selectedPlayers} handleSelectedPlayers={handleSelectedPlayers} ></Player>)
            }
           </div>
       </div>
    );
};

export default Players;