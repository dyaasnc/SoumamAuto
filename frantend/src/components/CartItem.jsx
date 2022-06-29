import Counter from "./Counter";
import { useState, useEffect,useContext } from "react";
import CartContext from "../context/cart/CartContext";
function CartItem(props) {

  const {removeItem}= useContext(CartContext);
  const [count, setCount] = useState(props.quantity);
  const [operation, setOperation] = useState("");
  const ttlprc = props.price * count;
  useEffect(() => {
    if(operation === "plus"){
props.setSum((s) => s + (ttlprc))
    }else if(operation === "minus") {
props.setSum((s) => s - (ttlprc))
    }
  }, [count]);

    return (<div className="flex w-[100%] h-auto items-center ">
              <div className="product flex self-start pl-5 overflow-hidden">
                <img
                  className="w-[9rem] h-[9rem] rounded-lg hover:scale-[1.1] ease-in duration-300"
                  src={props.src}
                  alt="product_img"
                />
                <div className="description flex flex-col m-5 justify-center items-center">
                  <p>
                    <b className="mr-2">ID:</b>{props.id}
                  </p>
                  <p>
                    <b className="mr-2">Product:</b> {props.name}
                  </p>
                </div>
              </div>
              <div className="  flex flex-col justify-center items-center flex-auto">
                <Counter count={count} setCount={setCount} setOperation={setOperation} />
                <p className="mt-3 font-bold">
                  PRIX :<b className="ml-2 text-xl"> {ttlprc}</b>
                  DA
                </p>
                <button className="btn" onClick={()=>removeItem(props.id)}>remove</button>
              </div>
                <hr className="mt-7 mb-7" />
            </div>);
}

export default CartItem;
