import {React,useContext, useState} from "react";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Badge } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import CartContext from "../context/cart/CartContext";
import PersonIcon from '@mui/icons-material/Person';
import { ApiTopPrdcts } from '../apifolder/TopProductsApi';
import LoginIcon from '@mui/icons-material/Login';
import AccountBoxIcon from '@mui/icons-material/AccountBox';



function NavBar() {
    const {cartItems} = useContext(CartContext);
    const navi = useNavigate();
    const [filterdData, setFilterdData] = useState([])
    const [wordEntered,setWordEntered] = useState('')
    const handleSearch= (e) =>{
          const filterWord = e.target.value;
          setWordEntered(filterWord)
          const filterdResult = ApiTopPrdcts.filter((value)=>{
          return value.product.includes(filterWord)
          });
          if(filterWord === ''){
          setFilterdData([])
          }else{
          setFilterdData(filterdResult)
          }
    };
    const clearInput = ()=>{
          setFilterdData([]);
          setWordEntered('');
          setSearchBar('hidden')
    }
    const [searchBar,setSearchBar]= useState('hidden')
    const [log, setLog] =useState('hidden')
    const showLog = ()=>{
          setLog("absolute grid justify-items-center shadow-md shadow-blue-400 bg-white w-[80px] h-auto border-2 border-blue-400 rounded-md ") 
    }
    const hideLog = ()=>{
          (setLog("hidden"))
    }
  
  return (
    <div className="navbar h-[60px] shadow-lg relative shadow-blue-400 w-[100%] bg-white z-10">
      <div className="wrapper mx-10 px-[10px] py-[10px] flex justify-between items-center mobile:p-0 mobile:mx-4">
        <div className="left flex flex-1 items-center">
          
          <Link to={"/allProducts"} className="cursor-pointer font-semibold  text-[16px] mobile:ml-0">
            Products
          </Link>
        </div>
           <div className="flex-1 flex justify-center">

          <Link to={"/"}
            className="logo cursor-pointer items-center text-center mobile:p-3  ">
            <img className="w-[160px] h-auto mobile:hidden" src="../logo.png" alt="logo"/>
            <img className="hidden mobile:flex h-10 w-10 items-center" src="../logoS.png" alt="logo"/>
          </Link>
           </div>
        
           <div className="flex-1 flex items-center justify-end mobile:flex-[1] mobile:justify-center ">
          <div className="" >
            <div className="searchInput flex  items-center mr-5   transition-all  mobile:ml-9 mobile:mr-2 ">
                <input className={searchBar} type="text" value={wordEntered}  onChange={handleSearch}/>
                      {searchBar === 'hidden' ?(
                        <SearchIcon className="cursor-pointer " onClick={()=>setSearchBar("focus-within:border-blue-400 border-[2px] border-solid border-lighgrey rounded-md input outline-none mobile:w-[60px]")}/>
                      ):(<CloseIcon className="cursor-pointer " onClick={clearInput} />)}
            </div>
                {filterdData.length !== 0 &&(
            <div className="data-result shadow-md shadow-blue-400 absolute border-[2px] border-solid border-blue-400 rounded-md items-center overflow-hidden w-[195px] overflow-y-auto h-auto max-h-32 bg-white">

               {filterdData.map((item)=>{
               return(
               <p key={item.id} className="cursor-pointer w-[100%] h-[30px] flex items-start hover:bg-blue-300 hover:text-white " onClick={()=>{
                navi('/ProductPage',{state:item})
               }}>
                {item.product}
               </p>)})}
            </div>)}
        </div>
            <div className="" >
              <Link to={'/Login'}>
             <PersonIcon  className="cursor-pointer ml-1 text-[14px] font-medium mobile:ml-0 "  />
              </Link>
              <ul className={log}>
                <Link to={'/Login'}>
                 <li className="cursor-pointer text-[14px] pl-1 w-[100%] font-medium mobile:ml-0 hover:bg-blue-300 hover:text-white">
                Log In
                <LoginIcon/>
                 </li>
                 </Link>
                 <Link to={'/SignIn'}>
                 <li className="cursor-pointer text-[14px] pl-1 w-[100%] font-medium mobile:ml-0 hover:bg-blue-300 hover:text-white">
                Sign In
                <AccountBoxIcon/>
                 </li>
                 </Link>
              </ul>
            
            </div>
          <Link to={"/cart"} className="cursor-pointer ml-5 text-[14px] font-medium mobile:ml-3 pt-1 ">
            
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
