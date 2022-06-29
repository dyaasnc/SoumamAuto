import React from 'react';
import { Link, useLocation, useNavigate, } from 'react-router-dom';
import { useContext } from 'react';
import CartContext from "../context/cart/CartContext";
 import './PP.css'

function ProductP (){
    const {addToCart} = useContext(CartContext)
    console.log(addToCart);
    let navigate = useNavigate();
    const handleClose =
        ()=>{navigate(-1)};
        const location = useLocation()
        const data = location.state;
    
    console.log(data);
        
    

    
    return(<div>

    <div className = 'card' >
        <div>
        <div className = 'imgBx'>
        <img src = {data.src}
        alt = "this is car" />
        </div> 

        </div> <div className = 'details' >
        <h3 id='name'> {data.product} </h3> 
        {/* <h5 id='extraN' > {data.id} </h5>  */}
        <h4> product details </h4> 
        <p id='productDetail'>
        {data.disc} </p> 
        <div className = 'buy' >
            
        <h2 id='price'> {data.price} <span>DA</span> </h2> 
        <p >  </p> 
        
        <div>
        <button onClick={()=>addToCart(data)} className='btn bg-white text-blue-400'> Buy now </button> 
        </div> 
        
        </div>
        <button className='btn flex-end' onClick={handleClose} >Close</button>
        </div> 
        </div>
        
        
        
    </div>
    )
}
export default ProductP;