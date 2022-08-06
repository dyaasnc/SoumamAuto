import {React,useContext, useState} from "react";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Badge } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import CartContext from "../context/cart/CartContext";
import { ApiTopPrdcts } from '../apifolder/TopProductsApi';



function NavBar() {
    const {cartItems} = useContext(CartContext);
   
    const navi = useNavigate();

     const [filterdData, setFilterdData] = useState([])
    
    const handleSearch= (e) =>{
        const filterWord = e.target.value;
        const filterdResult = ApiTopPrdcts.filter((value)=>{
          return value.product.includes(filterWord)
        });
        setFilterdData(filterdResult)
    }
 
  
  console.log();
  return (
    <div className="navbar h-[60px] shadow-lg  shadow-blue-400 relative z-10">
      <div className="wrapper px-[20px] py-[20px] flex justify-between items-center mobile:p-0">
        <div className="left flex flex-1 items-center">
          <Link to={"/"}
            className="logo cursor-pointer text-lg font-bold mobile:text-sm mobile:p-3  ">
            SoumamAuto
          </Link>
        </div>
        <div>
        <div className="searchInput flex  border-[2px] border-solid border-lighgrey rounded-md items-center mr-5  focus-within:border-blue-400 transition-all  mobile:ml-9 mobile:mr-2">
          <input className="input outline-none mobile:w-[60px] " type="text"  onChange={handleSearch}/>
          <SearchIcon className="cursor-pointer " />
        </div>
        
        {filterdData.length !== 0 &&(
        <div className="data-result bg-white">

          {filterdData.map((item )=>{
          return(
          <p key={item.id} className="cursor-pointer" onClick={()=>{
           navi('/product',{state:item})
          }}>
            {item.product}
          </p>)})}
        </div>)}
          </div>
        <div className="flex-1 flex items-center justify-end mobile:flex-[1.5] mobile:justify-center ">
          <Link to={"/allProducts"} className="cursor-pointer ml-10 text-[14px] font-medium mobile:ml-0">
            Products
          </Link>
          <Link to={"/cart"} className="cursor-pointer ml-20 text-[14px] font-medium mobile:ml-3 pt-1 ">
            Cart
            <Badge badgeContent={cartItems.length} color="primary">
              <ShoppingCartIcon />
            </Badge>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
