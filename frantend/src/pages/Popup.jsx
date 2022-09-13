import React from 'react';
import { useLocation, } from 'react-router-dom';
import { useContext } from 'react';
import CartContext from "../context/cart/CartContext";
 import './PP.css'

function Popup (props){
    

    const {addToCart} = useContext(CartContext)
    const location = useLocation()
    const data = location.state;
    const addNClose= ()=>{
    addToCart(data);
    removeP()
    }
    const removeP = ()=>{
    props.setPopup(false)
    props.setBlur('')
    }

 
    
    return(props.trigger)?(<div className='boody'>

    <div className = 'card' >
        <div>
        <div className = 'imgBx'>
        <img src = {data.src} alt = "this is car" />
        </div> 

        </div> <div className = 'details' >
        <h3 id='name'> {data.product} </h3> 
    
        <h4> product details </h4> 
        <p id='productDetail'>
        {data.disc} </p> 
        <div className = 'buy' >
            
        <h2 id='price'> {data.price} <span>DA</span> </h2> 
        <p >  </p> 
        
        <div>
        <button onClick={addNClose} className='btn bg-white text-blue-400'> Add to cart </button> 
        </div> 
        
        </div>
        <button className='btn flex-end' onClick={removeP} >Close</button>
        </div> 
        </div>
        
        
        
    </div>
    ):'';
}
export default Popup;