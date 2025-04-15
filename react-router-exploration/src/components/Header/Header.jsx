import React from 'react';
import { Link } from 'react-router-dom';
const Header = () => {
    return (
        <div>
            <h2>My website</h2> 
            <nav>
               
                <Link style={{marginRight:'30px'}} to={'/'} >Home</Link> 
                <Link style={{marginRight:'30px'}} to={'/about'} >About</Link> 
                <Link style={{marginRight:'30px'}} to={'/contact'} >Contact us</Link> 
                <Link style={{marginRight:'30px'}} to={'/users'} >Users</Link> 
            </nav>
        </div>
    );
};

export default Header;