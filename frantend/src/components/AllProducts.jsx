import React from 'react';
import { ApiTopPrdcts } from '../apifolder/TopProductsApi';
import Product from "./Product";
import './allProduct.css';



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
