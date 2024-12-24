import { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import { DATA_URL } from "../utils/content";
import FakeCard from "./FakeCard";
import { Link } from "react-router";
import useOnlineStatus from "../utils/useStatus"
const Body = () => {
   const [listOfRestaurants, setListOfRestraunt] = useState([]);
   const [filteredRestaurant, setFilteredRestaurant] = useState([]);
   const [searchText, setSearchText] = useState("");
   useEffect(() => {
      fetchData();
    }, []);

  const fetchData = async () => {
    const data = await fetch(DATA_URL);
    const jsonData = await data.json();
    // console.log(jsonData);
    
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


 const onlineStatus =useOnlineStatus();
if (onlineStatus===false) return <h1>Opps! its look like you are offline</h1>;
  return listOfRestaurants.length === 0 ? (
    <FakeCard />
  ) : (
    <div className="body">
      <div className="filter flex justify-between items-center">
        <div className="Top-btn  px-4 m-4">
          <button
            className="filter-btn px-4 m-4 bg-gray-100 rounded-md border border-solid border-black"
            onClick={() => {
               const filteredList = listOfRestaurants.filter(
                  (res) => res.info.avgRating > 4
                );
                setFilteredRestaurant(filteredList);
              }}
          >
            Top Rated Restaurants
          </button>
        </div>
        <div className="search m-4 p-4">
          <input
            type="text"
            className="search-box w-96 border border-solid border-black rounded-l-md border-r-0 "
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button className="px-4 bg-green-100 rounded-r-md my-4 border border-solid border-black border-l-0"
            onClick={() => {
              console.log(searchText);
              const filteredRestaurant = listOfRestaurants.filter((res) =>
               res.info.name.toLowerCase().includes(searchText.toLowerCase())
             );
             setFilteredRestaurant(filteredRestaurant);
            }}
          >
            Search
          </button>
        </div>
      </div>
      <div className="res-container flex justify-evenly flex-wrap">
        {filteredRestaurant.map((i) => (
          <Link 
          key={i.info.id} to={"/restaurants/"+i.info.id}> 
          <RestaurantCard  resData={i.info} />
           </Link>
        ))}
      </div>
    </div>
  );
};
export default Body;
