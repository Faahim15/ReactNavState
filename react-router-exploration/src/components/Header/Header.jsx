import React from 'react';
import { Link,NavLink } from 'react-router-dom'; 
import './Header.css'
const Header = () => {
    return (
        <div>
            <h2>My website</h2> 
            <nav>
               
                <NavLink style={{marginRight:'30px'}} to={'/'} >Home</NavLink> 
                <NavLink style={{marginRight:'30px'}} to={'/about'} >About</NavLink> 
                <NavLink style={{marginRight:'30px'}} to={'/contact'} >Contact us</NavLink> 
                <NavLink style={{marginRight:'30px'}} to={'/posts'} >Posts</NavLink> 
                <NavLink style={{marginRight:'30px'}} to={'/users'} >Users</NavLink> 
                <NavLink style={{marginRight:'30px'}} to={'/forms'} >Forms</NavLink> 
                <NavLink style={{marginRight:'30px'}} to={'/reusableForm'} >Resuable Forms</NavLink> 
            </nav>
        </div>
    );
};

export default Header;