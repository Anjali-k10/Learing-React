import { LOGO_URL } from "../utils/content";
import { useState } from "react";
import { Link  } from "react-router";
const Header=()=>{
   const [btn,setBtn]=useState("Log In")


    return (
       <div className="header">
          <div className='logo-container'>
          <img className='logo' src={LOGO_URL} alt="Logo"/>
          </div>
          <div className="nav-items">
             <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/">Cart</Link></li>
                <li><Link to="/contact">Contact Us</Link></li>
                <button className="login" onClick={()=>{btn==='Log In'?setBtn('Log Out'):setBtn('Log In')}} >{btn}</button>
             </ul>
          </div>
           </div>
    )
 }

 export default Header;