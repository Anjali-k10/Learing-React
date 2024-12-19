import { LOGO_URL } from "../utils/content";
const Header=()=>{
    return (
       <div className="header">
          <div className='logo-container'>
          <img className='logo' src={LOGO_URL} alt="Logo"/>
          </div>
          <div className="nav-items">
             <ul>
                <li>Home</li>
                <li>Menu</li>
                <li>Cart</li>
                <li>Contact Us</li>
             </ul>
          </div>
           </div>
    )
 }

 export default Header;