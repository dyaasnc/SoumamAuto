import ShoppingCartIcon from "@mui/icons-material/ShoppingCartSharp";
import { React,useContext, useState } from "react";
import {useNavigate } from "react-router-dom";
import CartContext from "../context/cart/CartContext";
import InfoIcon from '@mui/icons-material/Info';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';


function Product(props) {
    const {addToCart} = useContext(CartContext)
    
const navigate = useNavigate();
const handleClick = ()=>{
  navigate('',{state : props.item});
  props.setPopup(true);
  props.setBlur('blur-lg')
        
}

  const [hoverEffect, setHoverEffect] = useState("opacity-0");
  const handleClose = ()=>{navigate(-1)};
  
  const handleHoverEnter = () => {
    
    setHoverEffect(" opacity-1 ");
  };
  const handleHoverExit = () => {
    setHoverEffect(" opacity-0");
  };
  const iconStyle ='h-[40px] w-[40px] items-center justify-center rounded-full bg-white flex m-3 cursor-pointer hover:scale-[1.5] hover:bg-blue-400 hover:text-white ease-in duration-100';
  const addNClose= ()=>{
    navigate('/ProductPage',{state : props.item});
}
const alrt = (
  alert=('out of stock')
)

  return (
  <div 
       
      className="flex flex-1 items-center justify-center min-w-[300px] min-h-[400px]  overflow-hidden rounded-lg shadow-lg m-2 relative "
      onMouseEnter={handleHoverEnter}
      onMouseLeave={handleHoverExit}
      

    >
     
      <div>
      <img  src={props.item.src} alt="product_image" />
      <div  className="flex  flex-col items-center text-white bg-blue-400">
      <p className="text-2xl font-bold">{props.item.product}</p>
      <p className="text-2xl font-semibold">Price: {props.item.price}DA</p>
      <p className='text-muted'>{props.item.totalQty <=0 ?'out of stock':'in stock'}</p>
      </div>
      </div>



      <div 
        className={
          `flex items-center justify-center w-[100%] h-[100%] absolute ease-in duration-100 ` +
          hoverEffect
          
        }
      >
        {/*icon */}
        <div  className={iconStyle}
          >
          <InfoIcon className=" absolute" onClick={addNClose} />
         
        </div>
        <div className={iconStyle}>
          <AddShoppingCartIcon onClick={handleClick}  />
        </div>
        
      </div>
    </div>
    
  );
}

export default Product;
