import { useState } from "react";
import Players from "../Players/Players";
import SelectedPlayers from "../SelectedPlayers/SelectedPlayers";
import { ToastContainer, toast } from 'react-toastify'; 
const Main = ({setCoin,coin}) => { 
   const [isAvailable, setIsAvailable] = useState(true); 
   const [selectedPlayers, setSelectedPlayers] = useState([]); 
  

   const handleSelectedPlayers =(selectedPlayer,sold) =>
   {
    const alreadySelected = selectedPlayers.some(player=>player.id===selectedPlayer.id) 
      if(selectedPlayers.length <6 && coin>= selectedPlayer.price && !alreadySelected){ 
       
            
            if(!toast.isActive('credit-toast')) 
                {
                  toast.info('Player added to the list',{
                      postion: 'top-center',
                      autoClose: 1000, 
                      toastId: 'credit-toast'  
                  })
                };
            setCoin(coin-selectedPlayer.price);
            setSelectedPlayers([...selectedPlayers,selectedPlayer]) 
            console.log(sold)
            
        
      } 
      else { 
        if(selectedPlayers.length>=6) {
            if(!toast.isActive('credit-toast')) 
                {
                  toast.error('You already alloted your players slot',{
                      postion: 'top-center',
                      autoClose: 1000, 
                      toastId: 'credit-toast'  
                  })
                }
         } 
        else if(alreadySelected){
            if(!toast.isActive('credit-toast')) 
                {
                  toast.error('You already added the player to the team',{
                      postion: 'top-center',
                      autoClose: 1000, 
                      toastId: 'credit-toast'  
                  })
                };
        }
        else if(coin<selectedPlayer.price){
            if(!toast.isActive('credit-toast')) 
                {
                  toast.error('Claim some credit for the purchase.',{
                      postion: 'top-center',
                      autoClose: 1000, 
                      toastId: 'credit-toast'  
                  })
                };
            }
         
       
      }
     
        
   } 
   const handleRemoveSelectedPlayer=(player)=>{
        const UpadtedPlayerList = selectedPlayers.filter((remove)=>remove.id!==player.id) 
        setSelectedPlayers(UpadtedPlayerList)
   }
    return (
        <div>
            <div className='flex justify-between mt-7 mx-2' >
                <h3 className='md:text-2xl font-black py-1' >{isAvailable?'Avalaible players':`Selected players(${selectedPlayers.length||0}/6)`}</h3> 
                <div className='flex border border-gray-300 rounded md:w-46 font-bold' >
                <button onClick={()=>setIsAvailable(true)} className={`${isAvailable &&'bg-[#E7FE29]'} md:px-3 md:py-2 md:w-18  px-1 py-1 rounded`}>Available</button>
                <button onClick={()=>setIsAvailable(false)} className={`${!isAvailable&&'bg-[#E7FE29]'} md:py-2 md:px-2 md:w-18 text-gray-500 px-1 py-1 rounded`} >Selected({selectedPlayers.length})</button>
                </div>  
            </div> 
            <div className={`${!isAvailable&&'flex flex-col gap-2 mt-4'}`} >
            {
                isAvailable ? (
                    <Players selectedPlayers={selectedPlayers}  handleSelectedPlayers={handleSelectedPlayers} />
                ) 
                : selectedPlayers.length ? (
                    selectedPlayers.map(player => (
                    <SelectedPlayers key={player.id} selectedPlayer={player} handleRemoveSelectedPlayer={handleRemoveSelectedPlayer} />
                    ))
                ) : (
                    <p className="text-center text-gray-400 mt-4">No players selected yet.</p>
                )
           }
            </div>

        </div>
    );
}; 

export default Main;