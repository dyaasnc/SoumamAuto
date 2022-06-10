import React, { useEffect, useState } from "react";
import Announce from "../components/Announce";
import Footer from "../components/Footer";
import CartItem from "../components/CartItem";
import NavBar from "../components/NavBar";
import Summary from "../components/Summary";
import {ItemsApi} from "../apifolder/CartItemApi"

import CartHeader from "../components/CartHeader";

function Cart() {
  const [sum, setSum] = useState(0);
  const [cartData, setCartData] = useState([]);
  const getData = () => {
    fetch("https://reqq-ress.herokuapp.com/cart-items").then((res) =>
      res.json().then((data) => {
        setCartData(data.list);
      })
    );
  };
  useEffect(getData, []); // f useEffect n3etyo lel API kima 9otlak
  return (
    <div>
      <Announce />
      <NavBar />
      <div className="m-4">

       <CartHeader/>

        <div className="flex mt-7 mobile:flex-col">
            {cartData.length>0 ?(
          <div className='flex flex-col flex-1'>
            {/* list of products */}
             {cartData.map((product)=>{
               return(
              <CartItem 
                price={product.price} 
                name={product.name} 
                setSum={setSum} 
                id={product.id}
                img={product.img}
                />);
             })}
             
            
          </div>

            ):<div className=" flex flex-1 font-bold text-4xl justify-center items-center">
              loading...</div>}
          <Summary sum={sum}/>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Cart;
