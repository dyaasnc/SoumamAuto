import React, { useEffect, useState,useContext } from "react";
import Announce from "../components/Announce";
import Footer from "../components/Footer";
import CartItem from "../components/CartItem";
import NavBar from "../components/NavBar";
import Summary from "../components/Summary";
import CartHeader from "../components/CartHeader";
import { useLocation, useNavigate } from "react-router-dom";
import CartContext from "../context/cart/CartContext";

function Cart() {
  const {cartItems} = useContext(CartContext);
// useEffect(()=>{
// localStorage.setItem('cart',JSON.stringify(cartItems))
// },[cartItems])
 
  let navigate = useNavigate();
  const [sum, setSum] = useState(0);
  const goBack = ()=>{navigate('/allProducts')};   

  console.log({cartItems});
  return (
    <div>
      <Announce />
      <NavBar />
      <div className="m-4">

       <CartHeader goBack={goBack}/>

        <div className="flex mt-7 mobile:flex-col">
            {/* {cartData.length -> 0 ?( */}
          <div className='flex flex-col flex-1'>
            {/* list of products */}
            {cartItems.map((item)=>{
            return(
              <CartItem 
                key={item.id}
                price={item.price} 
                name={item.product} 
                setSum={setSum} 
                id={item.id}
                src={item.src}
                quantity={item.quantity}
                />);
             })}
             
          </div>

            {/* ):<div className=" flex flex-1 font-bold text-4xl justify-center items-center">
              loading...</div>} */}
          <Summary sum={sum}/>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Cart;