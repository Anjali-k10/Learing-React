import ItemList from "./ItemList";
import { useState } from "react";
const RestaurantsCategory = ({ data,showItems,setShowIndex }) => {
  // console.log(data)
  const handleClick=()=>{
    setShowIndex();
  }
  return (
    <div>
      <div className="w-6/12 mx-auto my-5 bg-gray-50 shadow-lg p-4 cursor-pointer">
        <div className="flex justify-between" onClick={handleClick} >
          <span className="font-bold text-lg ">
            {data.title}({data.itemCards.length}){" "}
          </span>
          <span className=" text-2xl">⬇️ </span>
        </div>
      {showItems && <ItemList items={data.itemCards} />  } 
      </div>
    </div>
  );
};

export default RestaurantsCategory;
