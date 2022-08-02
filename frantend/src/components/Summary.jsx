import React, { useContext } from 'react';
import CartContext from '../context/cart/CartContext';


function Summary (props){
    const {cartItems} = useContext(CartContext)
    const summ = cartItems.reduce((currentsum, currentCartItem)=> currentsum + currentCartItem.quantity * currentCartItem.price,0)
    
    return(
        <div className="flex-[0.25] w-auto h-[100%] border-2 border-blue-400 rounded-md shadow-lg flex flex-col items-center">
            <h1 className="text-[2rem]">Summary</h1>

            <div className="flex justify-between m-4 w-[90%]">
              <p>Subtotal</p>
              <p>{props.sum}</p>
            </div>
            <div className="flex justify-between mt-4 w-[90%]">
              <p>shipping</p>
              <p>800DA</p>
            </div>
            <div className="flex justify-between m-4 w-[90%]">
              <p>Discount</p>
              <p>20%</p>
            </div>
            <div className=" mt-10 flex justify-between m-4 w-[90%] text-2xl font-bold">
              <p>Total</p>
              <p>{summ}</p>
            </div>
          </div>
    )
}
export default Summary;