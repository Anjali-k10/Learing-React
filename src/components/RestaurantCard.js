import {CDN_URL} from "../utils/content"
const RestaurantCard=(props)=>{
    const {resData}=props
     const {
      cloudinaryImageId,
     name,
     cuisines,
     costForTwo,
     deliveryTime,
     avgRating,
   }=resData;
     return (
        <div className="res-card  m-5 p-4 w-[260px] h-[450]" style={{backgroundColor:"#f0f0f0"}}>
          <img className='res-logo rounded-md'
          alt='chowmin'
           src=
           {CDN_URL+cloudinaryImageId} 
           />
           <h3 className="font-bold py-2 text-wrap">{name}</h3>
           <h4 className="text-pretty">{cuisines}</h4>
           <h5>{avgRating} stars </h5>
           <h5>{costForTwo} </h5>
           <h5>{deliveryTime} </h5>
        </div>
     )
  }
  export default RestaurantCard;