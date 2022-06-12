import React from 'react';
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom';
import Announce from '../components/Announce';
import Footer from '../components/Footer';
import NavBar from '../components/NavBar';
 import './PP.css'

function ProductP (){
    let navigate = useNavigate();
    const handleClose =
        ()=>{navigate(-1)}
    const location = useLocation()
    const data = location.state;
    
    
    return(<div>

    <div className = 'card' >
        <div>
        <div className = 'imgBx'>
        <img src = {data.src}
        alt = "this is car image" />
        </div> 

        </div> <div className = 'details' >
        <h3 id='name'> {data.product} </h3> 
        <h5 id='extraN' > {} </h5> 
        <h4> product details </h4> 
        <p id='productDetail'>
        {data.disc} </p> 
        <div className = 'buy' >
            
        <h2 id='price'> {data.price} <span>DA</span> </h2> 
        <p >  </p> 
        
        <div className=''>
        <button className='btn bg-white text-blue-400'> Buy now </button> 
        </div> 
        
        </div>
        <button className='btn flex-end' onClick={handleClose} >Close</button>
        </div> 
        </div>
        
        
        
    </div>
    )
}
export default ProductP;