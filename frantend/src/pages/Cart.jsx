import React from "react";
import Announce from "../components/Announce";
import Counter from "../components/Counter";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";

function Cart() {
  return (
    <div>
      <Announce />
      <NavBar />
      <div className="m-4">
        <div className="flex justify-center text-5xl">Cart</div>
        <div className="flex items-center justify-between mt-4 mobile:flex-col">
          <button className="btn bg-white text-blue-400 border-2 border-blue-400 hover:bg-white">
            continue shopping
          </button>
          <div className="flex underline text-lg hover:cursor-pointer mobile:m-3">
            <p className="mr-5">items in your Cart: 5</p>
            <p>wishList items</p>
          </div>
          <button className="btn ">checkout</button>
        </div>

        <div className="flex mt-7 mobile:flex-col">
          <div className="flex flex-col flex-1  ">
            {/* list of products */}
            <div className="flex w-[100%] h-auto items-center ">
              <div className="product flex self-start pl-5 overflow-hidden">
                <img
                  className="w-[9rem] h-[9rem] rounded-lg hover:scale-[1.1] ease-in duration-300"
                  src="https://www.heliopresto.com/Files/132807/Img/02/tapisdevoitureencaoutchouc-zx1200.jpg"
                  alt=""
                />
                <div className="description flex flex-col m-5 justify-center items-center">
                  <p>
                    <b className="mr-2">ID:</b>123456
                  </p>
                  <p>
                    <b className="mr-2">Product:</b> Tapis
                  </p>
                </div>
              </div>
              <div className="  flex flex-col justify-center items-center flex-auto">
                <Counter />
                <p className="mt-3 font-bold">
                  PRIX :<b className="ml-2 text-xl">4000DA</b>
                </p>
              </div>
            </div>
            <hr className="my-7 mb-7" />
            <div className="flex w-[100%] h-auto items-center ">
              <div className="product flex self-start pl-5 overflow-hidden">
                <img
                  className="w-[9rem] h-[9rem] rounded-lg hover:scale-[1.1] ease-in duration-300"
                  src="https://litb-cgis.rightinthebox.com/images/640x640/201804/rdeere1524653239435.jpg?fmt=webp&v=1"
                  alt=""
                />
                <div className="description flex flex-col m-5 justify-center items-center">
                  <p>
                    <b className="mr-2">ID:</b>123456
                  </p>
                  <p>
                    <b className="mr-2">Product:</b> Deflecteur
                  </p>
                </div>
              </div>
              <div className=" flex flex-col justify-center items-center flex-auto">
                <Counter />
                <p className="mt-3 font-bold">
                  PRIX :<b className="ml-2 text-xl">1500DA</b>
                </p>
              </div>
            </div>
            <hr className="mt-7 mb-7" />
          </div>

          <div className="flex-[0.25] w-auto h-[100%] border-2 border-blue-400 rounded-md shadow-lg flex flex-col items-center">
            <h1 className="text-[2rem]">Summary</h1>

            <div className="flex justify-between m-4 w-[90%]">
              <p>Subtotal</p>
              <p>5500DA</p>
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
              <p>5500DA</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Cart;
