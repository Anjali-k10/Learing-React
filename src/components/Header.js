import { LOGO_URL } from "../utils/content";
import { useState } from "react";
const Header=()=>{
   const [btn,setBtn]=useState("Log In")


    return (
       <div className="header">
          <div className='logo-container'>
          <img className='logo' src={LOGO_URL} alt="Logo"/>
          </div>
          <div className="nav-items">
             <ul>
                <li><a href="">Home</a></li>
                <li><a href="">Menu</a></li>
                <li><a href="">Cart</a></li>
                <li><a href="">Contact Us</a></li>
                <button className="login" onClick={()=>{btn==='Log In'?setBtn('Log Out'):setBtn('Log In')}} >{btn}</button>
             </ul>
          </div>
           </div>
    )
 }

 export default Header;