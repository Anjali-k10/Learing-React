import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";

const Cart=()=>{
    const cartItems=useSelector((store)=>store.cart.items);
    const dispatch =useDispatch();
    const handleClearCart=()=>{
        dispatch(clearCart());
    };
return (
<div className="text-center m-5 p-5">
     <h1 className="text-2xl font-bold" >My Cart</h1>
     <div className="w-6/12 m-auto">
     <button className="p-2 m-2 bg-black text-white rounded-sm"
     onClick={handleClearCart}
     > Clear Cart</button>
     {cartItems.length===0 && <p>your cart is empty please add something</p>}
     <ItemList items={cartItems}/>   
     </div>
</div>
)
}
export default Cart;