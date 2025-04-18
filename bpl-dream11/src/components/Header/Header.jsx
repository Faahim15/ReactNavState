import React from 'react';
import logo from '../../assets/logo.png';
const Header = () => {
    return (
        <div className="flex justify-between items-center px-4 py-2 font-sans bg-yellow ">
            <img src={logo} alt="Logo" />
            <ul className="flex space-x-6">
                <li>Home</li>
                <li>Fixture</li>
                <li>Teams</li>
                <li>Schedules</li>
                <button className="flex items-center space-x-2 border border-gray-400 px-2 rounded-md">
                <span>0</span>
                <span>Coin</span>
                </button>
            </ul>
           
     </div>
        
    );
};

export default Header;