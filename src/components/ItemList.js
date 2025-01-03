import { useDispatch } from "react-redux";
import { CDN_URL } from "../utils/content";
import { addItems } from "../utils/cartSlice";

const ItemList = ({ items }) => {
 const dispatch =useDispatch(); 
  const handleAddItems=(item)=>{
    //dispatch an action
    dispatch(addItems(item))
  }
  
  return (
    <div>
      {items.map((item) => (
        <div
          key={item.card.info.id}
          className="p-2 m-2 border-b border-gray-200 text-left flex justify-between"
        >
          <div className="w-9/12">
            <div className="py-2">
              <span> {item.card.info.name}</span>
              <span>
                {" "}
                Rs.{" "}
                {item.card.info.price / 100 ||
                  item.card.info.defaultPrice / 100}{" "}
              </span>
            </div>
            <p className="text-xs">{item.card.info.description}</p>
          </div>
          <div className="  w-3/12 p-4">
            <div className="absolute">
              <button className="p-1 bg-white shadow-lg  m-auto text-xs "
              onClick={()=>handleAddItems(item)}
              >
                Add{" "}
              </button>
            </div>
            <img src={CDN_URL + item?.card?.info?.imageId} className="w-14" />
          </div>
        </div>
      ))}
    </div>
  );
};
export default ItemList;
