import Counter from "./Counter";
import {useState , useEffect} from "react"

function CartItem(props) {
  const [count , setCount] = useState(0);
  const [opr , setOpr] = useState("");
  useEffect(() => {
    if(opr === "plus"){
props.setSum((s) => s + (props.price))
    }else if(opr === "minus") {
props.setSum((s) => s - (props.price))
    }
    
  } , [count])

    return (<div className="flex w-[100%] h-auto items-center ">
              <div className="product flex self-start pl-5 overflow-hidden">
                <img
                  className="w-[9rem] h-[9rem] rounded-lg hover:scale-[1.1] ease-in duration-300"
                  src={props.img}
                  alt="product_img"
                />
                <div className="description flex flex-col m-5 justify-center items-center">
                  <p>
                    <b className="mr-2">ID:</b>
                  </p>
                  <p>
                    <b className="mr-2">Product:</b> {props.name}
                  </p>
                </div>
              </div>
              <div className="  flex flex-col justify-center items-center flex-auto">
                <Counter count={count} setCount={setCount} setOpr={setOpr} />
                <p className="mt-3 font-bold">
                  PRIX :<b className="ml-2 text-xl">{props.price * count} </b>
                  DA
                </p>
              </div>
                <hr className="mt-7 mb-7" />
            </div>);
}

export default CartItem;