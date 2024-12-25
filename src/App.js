import React from "react";
import { BrowserRouter, Routes, Route,Outlet } from "react-router";
import ReactDOM from 'react-dom/client';
import Header from './components/Header';
import Body from './components/Body';
import {About} from './components/About';
import { Contact } from './components/Contact';
import Cart from "./components/Cart";
import Error from './components/Error';
import RestaurantMenu from "./components/RestsurantMenu";
import { useState ,useEffect  } from "react";
import UserContext from "./utils/UserContext";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
const AppLayout=()=>{
   const [userName,setUserName]=useState();
  //  const{loggedIn} =useContext(UserContext)
useEffect(()=>{
  const data={
    name:"anjali"
  };
  setUserName(data.name)
},[])


   return(
    <Provider store={appStore}>
    <UserContext.Provider value={{loggedInUser:userName,setUserName}}>
   <div className="app">
       <Header/>  
       <Outlet/>
   </div>  
    </UserContext.Provider>
    </Provider>
   )

 } 

 const root = document.getElementById("root");

 ReactDOM.createRoot(root).render(
   <BrowserRouter>
     <Routes>
       <Route path="/" element={<AppLayout/>} >
          <Route path="/about" element={<About/>}  />
          <Route path="/" element={<Body/>}  />
         <Route path="/cart" element={<Cart/>}  />
         <Route path="/contact" element={<Contact/>}  />
         <Route path="/Restaurants/:resId" element={<RestaurantMenu/>}  />
         </Route>
        <Route path="*" element={<Error/>}  />

     </Routes>
   </BrowserRouter>
 );

    

