import ShoppingCartIcon from "@mui/icons-material/ShoppingCartSharp";
import { React,useContext , useState } from "react";
import {useNavigate } from "react-router-dom";
import CartContext from "../context/cart/CartContext";


function Product({ item }) {
    const {addToCart} = useContext(CartContext)

    
const navigate = useNavigate();

const handleClick = ()=>{
  navigate("/Product",{state : item})
}
  const [hoverEffect, setHoverEffect] = useState("opacity-0");

  const handleHoverEnter = () => {
    
    setHoverEffect(" opacity-1 bg-[rgba(0,0,0,0.2)]");
  };
  const handleHoverExit = () => {
    setHoverEffect(" opacity-0");
  };
  const iconStyle ='h-[40px] w-[40px] items-center justify-center rounded-full bg-white flex m-3 cursor-pointer hover:scale-[1.5] hover:bg-blue-400 hover:text-white ease-in duration-100';

  return (
  <div 
       
      className="flex flex-1 items-center justify-center min-w-[300px] min-h-[400px] overflow-hidden rounded-lg shadow-lg m-2 relative "
      onMouseEnter={handleHoverEnter}
      onMouseLeave={handleHoverExit}

    >
     
      <div>
      <img  src={item.src} alt="product_image" />
      <div  className="flex  flex-col items-center text-white bg-blue-400">
      <p className="text-2xl font-bold">{item.product}</p>
      <p className="text-2xl font-semibold">Price: {item.price}DA</p>
      </div>

      </div>

      <div onClick={handleClick}
        className={
          `flex items-center justify-center w-[100%] h-[100%] absolute ease-in duration-100 ` +
          hoverEffect
          
        }
      >
        {/*icon */}
        <div  className={iconStyle}
          >
          <ShoppingCartIcon onClick={addToCart} />
          
        </div>
        {/* <div className={iconStyle}>
          <FavoriteSharpIcon />
        </div>
         */}
      </div>

    </div>
    
  );
}

export default Product;
