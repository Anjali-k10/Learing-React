import { BrowserRouter, Routes, Route,Outlet } from "react-router";
import ReactDOM from 'react-dom/client';
import Header from './components/Header';
import Body from './components/Body';
import {About} from './components/About';
import { Contact } from './components/Contact';
import Error from './components/Error';
import RestaurantMenu from "./components/RestsurantMenu";


const AppLayout=()=>{
   return <div className="app">
       <Header/>  
       <Outlet/>
       
   </div>
 }
 // const root=ReactDOM.createRoot(document.getElementById('root'));
 // root.render(<AppLayout/>) 

 const root = document.getElementById("root");

 ReactDOM.createRoot(root).render(
   <BrowserRouter>
     <Routes>
       <Route path="/" element={<AppLayout/>} >
          <Route path="/about" element={<About/>}  />
          <Route path="/" element={<Body/>}  />
         <Route path="/contact" element={<Contact/>}  />
         <Route path="/Restaurants/:resId" element={<RestaurantMenu/>}  />
         </Route>
        <Route path="*" element={<Error/>}  />

     </Routes>
   </BrowserRouter>
 );

    

