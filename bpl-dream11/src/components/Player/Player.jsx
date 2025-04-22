
import { CiFlag1 } from "react-icons/ci";
import { CiCircleCheck } from "react-icons/ci";
const Player = ({player, handleSelectedPlayers,selectedPlayers}) => { 
    const {average_strike_rate, name,profile_picture_url,role,price,batting_style,bowling_style,total_runs} = player; 
    const isSold = selectedPlayers.some((playr)=>playr.id===player.id)
    return (
        <div className='border bg-white border-gray-300 p-3 rounded-lg w-[300px]' >
             <div className='text-[14px]'  > 
                 <img className='h-[250px] w-[300px] rounded-lg' src={profile_picture_url} alt="" /> 
                 <div className='flex space-x-2 my-3'>
                 <img className='h-6 w-6 rounded-full' src={profile_picture_url} alt="" />                     
                 <h2 className='font-bold text-[18px]' >{name}</h2> 
                 </div>
                 
                 <div className='flex justify-between border-b border-gray-300 pb-3' >
                 <div className='flex text-gray-500 space-x-1 ' >
                 <CiFlag1 className='mt-1' />
                 <span className='text-[14px]' >Bangladesh</span>
                 </div>
                 <button className='border text-[14px] border-gray-30 rounded w-[90px] h-5 px-1 text-center font-medium bg-gray-200' >{role}
                 </button>
                 </div> 
                <div className="flex flex-col gap-y-2">
                <div className='flex justify-between mt-1' >
                 <h3 className='font-semibold' >Batting style: </h3> 
                 <span className='text-gray-400' >{batting_style}</span>
                 </div>
                <div className='flex justify-between mt-1' >
                 <h3 className='font-semibold' >Bowling style: </h3> 
                 <span className='text-gray-400' >{bowling_style||'N/A'}</span>
                 </div>
                <div className='flex justify-between mt-1' >
                 <h3 className='font-semibold' >Total runs: </h3> 
                 <span className='text-gray-400' >{total_runs}</span>
                 </div>
                <div className='flex justify-between mt-1' >
                 <h3 className='font-semibold' >Strike rate: </h3> 
                 <span className='text-gray-400' >{average_strike_rate}</span>
                 </div>
                 <div className='flex justify-between font-semibold mt-1' >
                 <h3>Price: {price}</h3> 
                 <button onClick={()=>{
                    handleSelectedPlayers(player)}} className={` 
                        ${isSold?'hover:bg-green-100 border-green-200 ':'hover:bg-[#E7FE29] border-gray-200'} border text-[14px]  rounded w-auto  px-1 text-center font-bold   bg-white py-1  `}>{!isSold ? 'Choose Player' : (
                        <div className=" text-green-600 font-black" >
                          <CiCircleCheck className="inline-block mr-1 text-green-700 animate-pulse" />
                          Sold
                        </div>
                      )}
                      </button>
                 </div>
                </div>
             </div>
        </div>
    );
};

export default Player;