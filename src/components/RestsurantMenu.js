import { useParams,useState } from "react-router";
import FakeCard from "./FakeCard";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantsCategory from "./RestaurantsCategory";
import { useState } from "react";
const RestaurantMenu = () => {
  const { resId } = useParams();
  const ResList = useRestaurantMenu(resId);
 const [showIndex,setShowIndex]=useState(null)
  if (ResList === null) return <FakeCard />;
  const {
    cloudinaryImageId,
    name,
    cuisines,
    costForTwo,
    deliveryTime,
    avgRating,
  } = ResList?.cards[2]?.card?.card?.info;

  const { itemCards } =
    ResList?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
  // console.log(ResList?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards);
  const categories =
    ResList?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c?.card?.["card"]?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  // console.log(categories);
  return (
    <div className="text-center  menu">
      <h1 className="font-bold my-5 text-2xl">{name}</h1>
      <p className="font-bold text-lg">
        {cuisines.join(",")}-{costForTwo}
      </p>
      {categories.map((category,index) => (
        <RestaurantsCategory 
        key={category?.card?.card?.title} 
        data={category?.card?.card}
        showItems={index===showIndex?true:false}
         setShowIndex={()=>setShowIndex(index)} />
      ))}
    </div>
  );
};
export default RestaurantMenu;
