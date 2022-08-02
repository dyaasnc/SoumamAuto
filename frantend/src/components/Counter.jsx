import { useContext, useEffect} from "react";
import React from "react";
import CartContext from "../context/cart/CartContext";


function Counter(props) {
    const {cartItems} = useContext(CartContext)
    const cnt = (props.count = cartItems.quantity)
   

  const increment = () => {
    props.setOperation("plus")
    props.setCount( props.count + 1);
  };
  const decrement = () => {
    props.setOperation("minus")
    if (props.count <= 0) {
      return;
    } else {
      props.setCount((count) => count - 1);
    }
  };
 
  return (
    <div className="flex items-center justify-center text-2xl">
      Quantity
      <div className="flex ml-5 shadow-md">
        <div
          className=" bg-blue-400 flex items-center justify-center cursor-pointer rounded-l-md text-white w-8"
          onClick={decrement}
        >
          -
        </div>
        <div
          className="border-2 border-blue-400 w-8 flex justify-center items-center sho"
          
        >
          {props.count}
        </div>
        <div
          className=" bg-blue-400 flex items-center justify-center cursor-pointer rounded-r-md text-white w-8"
          onClick={increment}
        >
          +
        </div>
      </div>
    </div>
  );
}
export default Counter;
