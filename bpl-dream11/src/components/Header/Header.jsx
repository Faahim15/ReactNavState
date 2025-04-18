
import { useState } from 'react';
import logo from '../../assets/logo.png';
import { HiOutlineCurrencyPound } from "react-icons/hi"; 
import { RiMenu3Fill } from "react-icons/ri"; 
import { RxCross1 } from "react-icons/rx";

const Header = () => { 
    const [isClicked,setIsClicked]=useState(false);
    return (
        <div >
            
           <div className="flex justify-between items-center md:px-4 md:py-3 font-sans" > 
           <img src={logo} alt="Logo" /> 
           <button className="md:hidden flex border border-gray-400 px-2 space-x-1 rounded-md font-bold">
                <span>0 Coin</span> <HiOutlineCurrencyPound className="mt-1 text-red-600" />
            </button>
           <menu onClick={()=>{
            setIsClicked(!isClicked);
           }} className='md:hidden mr-4 font-medium'>{isClicked?<RxCross1 />:<RiMenu3Fill />}</menu> 
           <ul className={`md:flex md:space-x-6 md:mt-0 md:static absolute md:top-0 top-12 right-0 ${!isClicked&&'hidden'}`}>
                <li>Home</li>
                <li>Fixture</li>
                <li>Teams</li>
                <li>Schedules</li>    
            <button className="hidden md:flex border border-gray-400 px-2 space-x-1 rounded-md font-bold">
                <span>0 Coin</span> <HiOutlineCurrencyPound className="mt-1 text-red-600" />
            </button> 
            </ul> 
            
           </div> 
          
            
           
     </div>
        
    );
};

export default Header;