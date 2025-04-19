import React from 'react';
import { CiFlag1 } from "react-icons/ci";
const Players = ({player}) => { 
    const {name,profile_picture_url,role,price,batting_style} = player;
    return (
        <div className='border bg-white border-gray-300 p-3 rounded-lg' >
             <div className='text-[14px]'  > 
                 <img className='h-[300px] w-full rounded-lg' src={profile_picture_url} alt="" /> 
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
                 <div className='flex justify-between mt-1' >
                 <h3 className='font-semibold' >Batting style: </h3> 
                 <span className='text-gray-400' >{batting_style}</span>
                 </div>
                 <div className='flex justify-between font-semibold mt-1' >
                 <h3>Price: {price}</h3> 
                 <button className='border text-[14px] border-gray-200 rounded w-auto h-5 px-1 text-center font-medium bg-white'>Choose Player</button>
                 </div>
             </div>
        </div>
    );
};

export default Players;