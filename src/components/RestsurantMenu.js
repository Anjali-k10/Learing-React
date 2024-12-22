import { useState, useEffect } from "react";
import { useParams } from "react-router";
import { MENU_URL } from "../utils/content";
import FakeCard from "./FakeCard";
const RestaurantMenu = () => {
  const [ResList, setResList] = useState(null);
  useEffect(() => {
    fetchMenu();
  }, []);

  const {resId}=useParams();
  //restaurantId=289643

  const fetchMenu = async () => {
     const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=30.7599162&lng=76.6252865&restaurantId=124176&catalog_qa=undefined&submitAction=ENTER");
   // const data = await fetch(MENU_URL + resId);
    const jsonData = await data.json();
    // console.log(jsonData);
    setResList(jsonData?.data);
    // console.log(jsonData);
  };

if(ResList===null)return <FakeCard/>;
const {
    cloudinaryImageId,
   name,
   cuisines,
   costForTwo,
   deliveryTime,
   avgRating,
 }=ResList?.cards[2]?.card?.card?.info;
 

 const {itemCards}=ResList?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
//  console.log(itemCards)

  return  (
    <div className="menu">
      <h1>{name}</h1>
      <h3>{cuisines.join(',') }-{costForTwo}</h3>
      <h3>Menu</h3>
      <ul>
        {itemCards.map((i)=>
            <li key={i.card.info.id}>{i.card.info.name} -Rs {i.card.info.price /100}</li>
        )}
      </ul>
    </div>
  );
};
export default RestaurantMenu;



