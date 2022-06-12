import React from 'react';
import { ApiTopPrdcts } from '../apifolder/TopProductsApi';
import ProductP from '../pages/ProductP'
import Product from "./Product";
import './allProduct.css';
import { Link } from "react-router-dom";



function AllProducts (){
 
  
    return(
        <div className="flex flex-wrap p-5">
      {ApiTopPrdcts.map((product) => (
        <Product item={product}/>
                           
      
      ))}
    </div>
    );
}

export default AllProducts;
