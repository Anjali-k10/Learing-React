import { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import { DATA_URL } from "../utils/content";
import FakeCard from "./FakeCard";
import { Link } from "react-router";
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
    setListOfRestraunt(
      jsonData?.data?.cards[1||3]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
   //1,3
    setFilteredRestaurant(
      jsonData?.data?.cards[1||3]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
  };

  return listOfRestaurants.length === 0 ? (
    <FakeCard />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="Top-btn">
          <button
            className="filter-btn"
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
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
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
      <div className="res-container">
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
