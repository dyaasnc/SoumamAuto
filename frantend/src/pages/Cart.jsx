import React, { useState } from "react";
import Announce from "../components/Announce";
import Counter from "../components/Counter";
import Footer from "../components/Footer";
import CartItem from "../components/CartItem";
import NavBar from "../components/NavBar";
import Summary from "../components/Summary";
import {ItemsApi} from "../apifolder/CartItemApi"
import { Link } from "react-router-dom";

function Cart() {
  const [sum , setSum] = useState(0)
  return (
    <div>
      <Announce />
      <NavBar />
      <div className="m-4">
        <div className="flex justify-center text-5xl">Cart</div>
        <div className="flex items-center justify-between mt-4 mobile:flex-col">
          <Link to={'/product'}>
          <button className="btn bg-white text-blue-400 border-2 border-blue-400 hover:bg-white">
            continue shopping
          </button>
          </Link>
          <div className="flex underline text-lg hover:cursor-pointer mobile:m-3">
            <p className="mr-5">items in your Cart: {ItemsApi.length}</p>
            <p>wishList items</p>
          </div>
          <button className="btn ">checkout</button>
        </div>

        <div className="flex mt-7 mobile:flex-col">
          <div className="flex flex-col flex-1  ">
            {/* list of products */}
             {ItemsApi.map((product , index)=>{
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
