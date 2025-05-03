import react from 'react';
import { MdOutlineLocalDining } from "react-icons/md";
import { MdDeliveryDining } from "react-icons/md";
import { MdNightlife } from "react-icons/md";
import { IoHome } from "react-icons/io5";
import { FaCartShopping } from "react-icons/fa6";
import  NavBarComponent  from './NavBarComponent';
import Search from './Search';
function NavBar()
{
    return(
        <>
         <nav className='navbar'>
               <ul>
                    <li><NavBarComponent icon={<IoHome/>} type={"Home"} LinkTo={"/"} /></li>
                    <li><NavBarComponent icon={<MdOutlineLocalDining/>} type={"Dining Out"}  LinkTo={"/Dining"}/></li>
                    <li><NavBarComponent icon={<MdDeliveryDining/>} type={"Delivery"} LinkTo={"/Delivery"}/></li>
                    <li><NavBarComponent icon={<MdNightlife/>} type={"Night Life"} LinkTo={"/NightLife"} /></li>
                    <li><NavBarComponent icon={<FaCartShopping/>} type={"Cart"} LinkTo={"/"} /></li>
               </ul>
           </nav>
          
        </>
    )
}

export default NavBar;