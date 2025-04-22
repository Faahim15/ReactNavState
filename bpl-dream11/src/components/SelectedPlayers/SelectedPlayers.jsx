import { MdOutlineDeleteForever } from "react-icons/md"; 
<MdOutlineDeleteForever />
const SelectedPlayers = ({selectedPlayer,handleRemoveSelectedPlayer}) => { 
    
    return (
        <div className="flex justify-between p-4 border border-white bg-gray-100 mx-4 rounded-md items-center" >
          <div className="flex gap-x-2" > 
           <img className="h-14 w-14 rounded" src={selectedPlayer.profile_picture_url} alt="" />
          <div>
          <h3 className="font-bold" >{selectedPlayer.name}</h3>
          <p className="text-gray-400 text-sm" >{selectedPlayer.role}</p>
          </div>
          </div> 
          <MdOutlineDeleteForever onClick={()=>{
            handleRemoveSelectedPlayer(selectedPlayer)
          }} className="text-red-600 text-2xl" />
        </div>
    );
};

export default SelectedPlayers;