import React, { useEffect, useState } from "react";
import Announce from "../components/Announce";
import Counter from "../components/Counter";
import Footer from "../components/Footer";
import CartItem from "../components/CartItem";
import NavBar from "../components/NavBar";
import Summary from "../components/Summary";
<<<<<<< HEAD
import {ItemsApi} from "../apifolder/CartItemApi"

import CartHeader from "../components/CartHeader";
=======
import { Link } from "react-router-dom";
>>>>>>> a7709f08bca82e138c8c544adbb7c0bb33fa9181

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
<<<<<<< HEAD
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
=======
      <div className='m-4'>
        <div className='flex justify-center text-5xl'>Cart</div>
        <div className='flex items-center justify-between mt-4 mobile:flex-col'>
          <Link to={"/product"}>
            <button className='btn bg-white text-blue-400 border-2 border-blue-400 hover:bg-white'>
              continue shopping
            </button>
          </Link>
          <div className='flex underline text-lg hover:cursor-pointer mobile:m-3'>
            <p className='mr-5'>items in your Cart: {cartData.length}</p>
            <p>wishList items</p>
          </div>
          <button className='btn '>checkout</button>
        </div>

        <div className='flex mt-7 mobile:flex-col'>
          {cartData.length > 0 ? (
            <div className='flex flex-col flex-1  '>
              {/* list of products */}
              {cartData.map((product, index) => {
                return (
                  <CartItem
                    price={product.price}
                    name={product.name}
                    setSum={setSum}
                    id={product.id}
                    img={product.img}
                  />
                );
              })}
            </div>
          ) : (
            <div className='w-5/6 text-center mt-4 font-bold text-3xl'>
              Loading
            </div>
          )}

          <Summary sum={sum} />
>>>>>>> a7709f08bca82e138c8c544adbb7c0bb33fa9181
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Cart;
