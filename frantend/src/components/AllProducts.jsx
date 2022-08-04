import React from 'react';
import { ApiTopPrdcts } from '../apifolder/TopProductsApi';
import Product from "./Product";
import './allProduct.css';



function AllProducts ({prdctList}){
 
  
    return(
        <div className="flex flex-wrap p-5">
      {prdctList.map((product) => ( 
        <Product item={product} key={product.id}/>
        
                           
      
      ))}
    </div>
    );
}

export default AllProducts;
