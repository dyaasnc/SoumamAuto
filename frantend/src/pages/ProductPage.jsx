import React from 'react';
import { useLocation, useNavigate} from 'react-router-dom';
import { useContext } from 'react';
import CartContext from "../context/cart/CartContext";
 import './PP.css'
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

function ProductPage (){
    

    const {addToCart} = useContext(CartContext)
    const navigate=useNavigate()    
    const location = useLocation()
    const data = location.state;
    const addNGo=()=>{
        addToCart(data);
        navigate('/cart')
    }
 
    
    return(
    <div>
<NavBar/>
<div className='mt-5  h-[100px] flex w-[100%] items-center bg-blue-200 '>
    <p className='text-4xl font-bold ml-5'>Product</p> 
</div>
<div className='flex justify-center items-center'>
    <div className="product bg-blue-200 w-[600px] flex items-center  mt-5 overflow-hidden mobile:grid mobile:w-auto ">
                <img
                  className="w-[20rem] h-[20rem] rounded-lg hover:scale-[1.1] ease-in duration-300 overflow-hidden"
                  src={data.src}
                  alt="product_img"
                />
                <div className="description gap-5 flex flex-col m-5 mobile:m-0 justify-start items-start">
                  <p>
                    <b className="mr-2">ID:</b>{data.id}
                  </p>
                  <p>
                    <b className="mr-2">Product:</b> {data.product}
                  </p>
                  <h4 className=''> product details </h4> 
        <p id='productDetail'>
        {data.disc} </p> 
        <div className = 'buy' >
        <h2 id='price'> {data.price} <span>DA</span> </h2> 
        <div className='mb-2 flex  justify-center'>
        <button onClick={addNGo} className='btn bg-white  text-blue-400'> Add to cart </button> 
        </div> 
        </div>
                </div>
              </div>
              </div>
              <Footer/>
    </div>
    );
}
export default ProductPage;