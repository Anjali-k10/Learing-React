import { LOGO_URL } from "../utils/content";
import { useState,useContext } from "react";
import { Link  } from "react-router";
import UserContext from "../utils/UserContext";
const Header=()=>{
   const [btn,setBtn]=useState("Log In")
   const {loggedInUser}=useContext(UserContext);


    return (
       <div className=" flex justify-between bg-pink-100 ">
          <div className='logo-container'>
          <img className="w-20 m-5" src={LOGO_URL} alt="Logo"/>
          </div>
          <div className="nav-items  ">
             <ul className="flex p-4 m-8 ">
                <li className="px-5"><Link to="/">Home</Link></li>
                <li className="px-5"><Link to="/about">About</Link></li>
                <li className="px-5"><Link to="/">Cart</Link></li>
                <li className="px-5"><Link to="/contact">Contact Us</Link></li>
                <button className="login w-24" onClick={()=>{btn==='Log In'?setBtn('Log Out'):setBtn('Log In')}} >{btn}</button>
                <li className="px-4">{loggedInUser}</li>
             </ul>
          </div>
           </div>
    )
 }

 export default Header;