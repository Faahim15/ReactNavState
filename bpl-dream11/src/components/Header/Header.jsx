
import {  useState } from 'react';
import logo from '../../assets/logo.png';
import { HiOutlineCurrencyPound } from "react-icons/hi"; 
import { RiMenu3Fill } from "react-icons/ri"; 
import { RxCross1 } from "react-icons/rx"; 
import Logo from '../../assets/banner-main.png' 
import shadowImg from '../../assets/bg-shadow.png' 
import Banner from '../Banner/Banner';
const Header = ({topCenter,coin}) => { 
    const [isClicked,setIsClicked]=useState(false); 
   
    
    return (
        <div>
            
           <div className="flex justify-between items-center md:px-4 md:py-3 font-sans fixed w-full  bg-white bg-opacity-90 rounded" > 
           <img src={logo} alt="Logo" /> 
           <button className="md:hidden flex border border-gray-400 px-2 space-x-1 rounded-md font-bold">
                <span>{coin} Coin</span> <HiOutlineCurrencyPound className="mt-1 text-red-600" />
            </button>
           <menu onClick={()=>{
            setIsClicked(!isClicked);
           }} className='md:hidden mr-4 font-medium'>{isClicked?<RxCross1 />:<RiMenu3Fill />}</menu> 
           <ul className={`md:flex md:text-black text-white md:space-x-6 md:mt-0 md:static absolute md:top-0 top-12 right-0 ${!isClicked&&'hidden'} `}>
                <li>Home</li>
                <li>Fixture</li>
                <li>Teams</li>
                <li>Schedules</li>    
            <button className="hidden md:flex border border-gray-400 px-2 space-x-1 rounded-md font-bold">
                <span>{coin} Coin</span> <HiOutlineCurrencyPound className="mt-1 text-red-600" />
            </button> 
            </ul> 
            
           </div> 
           
         {/* Banner  */}
         <div style={{ backgroundImage: `url(${shadowImg})`}} className="w-full h-[545px] bg-no-repeat flex flex-col justify-center items-center gap-y-4 bg-[#131313]">
                     <img  src={Logo} alt="" /> 
                     <h2 className='text-white font-black md:text-3xl text-center'>Assemble Your Ultimate Dream11 Cricket Team</h2> 
                     <span className='text-gray-300 text-center ' >Beyond Boundaries, Beyond Limits</span> 
                     <div className='border border-[#E7FE29] rounded-lg' > 
                         <button onClick={topCenter} className='text-black bg-[#E7FE29] border border-white rounded-lg w-[184px] h-[48px] font-semibold m-1 shadow-sm shadow-[#E7FE29]' >Claim Free credit</button>
                     </div> 
                     
                 </div>

     </div>
        
    );
};

export default Header;