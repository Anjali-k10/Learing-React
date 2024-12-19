import { useState } from "react";
import RestaurantCard from "./RestaurantCard";
import restaurantList from "../utils/mockData";
 
const Body=()=>{
   const [list,setList]=useState(restaurantList);
    return (
       <div className="body">
          <div className="filter">
            <button 
            className="filter-btn"
            onClick={()=>{
              const filteredList=list.filter((res)=>res.data.avgRating>4);
              setList(filteredList);
            }}
             >Top Rated Restaurants</button>
             </div>
             <div className="res-container">
                {list.map((i)=>
                   (<RestaurantCard key={i.data.id} resData={i}/>)
                )}
             </div>
       </div>
    )
 }
 export default Body;