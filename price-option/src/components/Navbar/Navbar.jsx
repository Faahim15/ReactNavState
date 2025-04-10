import { useState } from "react";
import Link from "../Link/Link";
import { RiMenu2Fill } from "react-icons/ri";
import { IoMdClose } from "react-icons/io";
const routes = [
    { id: 1, path: '/', name: 'Home' },
    { id: 2, path: '/about', name: 'About' },
    { id: 3, path: '/services', name: 'Services' },
    { id: 4, path: '/contact', name: 'Contact' },
    { id: 5, path: '/login', name: 'Login' },
  ];


const Navbar = () => {
    const [isClicked, setIsClicked] = useState(false);
    return (
        <div onClick={()=>{
            setIsClicked(!isClicked);
        }} > 

            <div className={`md:flex mt-4`}>
            <div className="md:hidden">
            { isClicked?<IoMdClose />:<RiMenu2Fill />}
            </div>
            <ul className={`md:flex ${!isClicked&&'hidden'} `}>

            {
                routes.map(route=><Link key={route.id} route={route}></Link>)
            } 
            </ul>

            </div> 
        </div>
    );
}; 


export default Navbar;