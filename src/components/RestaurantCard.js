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
   }=resData?.data
     return (
        <div className="res-card" style={{backgroundColor:"#f0f0f0"}}>
          <img className='res-logo'
          alt='chowmin'
           src=
           {CDN_URL+cloudinaryImageId} 
           />
           <h3>{name}</h3>
           <h4>{cuisines}</h4>
           <h5>{avgRating} stars </h5>
           <h5>{costForTwo} </h5>
           <h5>{deliveryTime} </h5>
        </div>
     )
  }
  export default RestaurantCard;