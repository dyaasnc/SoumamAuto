import React, { useContext } from 'react';
import { Link } from "react-router-dom";

import CartContext from "../context/cart/CartContext";


 function CartHeader (){
   const {cartItems} = useContext(CartContext)
     return( <div>
          <div className="flex justify-center text-5xl">Cart</div>
        <div className="flex items-center justify-between mt-4 mobile:flex-col">
          <Link to={'/allProducts'}>
          <button className="btn bg-white text-blue-400 border-2 border-blue-400 hover:bg-white">
            {cartItems.length ===0 ?'start shopping':'continue shopping'}
          </button>
          </Link>
          <div className="flex underline text-lg hover:cursor-pointer mobile:m-3">
            <p className="mr-5">items in your Cart: {cartItems.length}</p>
            <p>wishList items</p>
          </div>
          <button className="btn ">checkout</button>
        </div>
     </div>

     )
 }
 export default CartHeader;