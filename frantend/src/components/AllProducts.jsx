import React from 'react';

import Product from "./Product";
import './allProduct.css';



function AllProducts ({prdctList}){
 
  
    return(
        <div className="flex flex-wrap items-center justify-center">
      {prdctList.map((product) => ( 
        <Product item={product} key={product.id}/>
        
                           
      
      ))}
    </div>
    );
}

export default AllProducts;
