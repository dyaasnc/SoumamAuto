import React, { useState } from "react";
import Announce from "../components/Announce";
import Counter from "../components/Counter";
import Footer from "../components/Footer";
import CartItem from "../components/CartItem";
import NavBar from "../components/NavBar";
import Summary from "../components/Summary";
import {ItemsApi} from "../apifolder/CartItemApi"

import CartHeader from "../components/CartHeader";

function Cart() {
  const [sum , setSum] = useState(0)
  return (
    <div>
      <Announce />
      <NavBar />
      <div className="m-4">

       <CartHeader/>

        <div className="flex mt-7 mobile:flex-col">
          <div className="flex flex-col flex-1  ">
            {/* list of products */}
             {ItemsApi.map((product)=>{
            
               return <CartItem  price={product.price} name={product.name} setSum={setSum} id={product.id}/>
             })}
             
            
          </div>
          <Summary sum={sum}/>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Cart;
