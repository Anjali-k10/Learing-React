import { useEffect,useState } from "react"
import { DATA_URL } from "./content";
 
 const useBodyData =()=>{
  const [listOfRestaurants, setListOfRestraunt] = useState([]);
    const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  
    useEffect(() => {
        fetchData();
      }, []);
 
      const fetchData = async () => {
        const data = await fetch(DATA_URL);
        const jsonData = await data.json();
       
     setListOfRestraunt(
      jsonData?.data?.cards[1||3]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
   //1,3
    setFilteredRestaurant(
      jsonData?.data?.cards[1||3]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
   } 
  
   
}

export default useBodyData;