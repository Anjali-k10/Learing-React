import { useEffect,useState } from "react";
import { MENU_URL } from "./content";
    const useRestaurantMenu=(resId)=>{
    const [ResList,setResList]=useState(null);

 useEffect(()=>{
   fetchData();
 },[]);

 const fetchData=async()=>{
   const Data =await fetch(MENU_URL+resId);
   const jsonData = await Data.json();
  //  console.log(jsonData);
   setResList(jsonData.data); 
 }
 return ResList;  
}
export default useRestaurantMenu;