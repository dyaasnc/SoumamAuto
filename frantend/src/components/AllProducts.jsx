import React from 'react';
import { ApiTopPrdcts } from '../apifolder/TopProductsApi';
import Product from "./Product";


function AllProducts (){
    return(
        <div className="flex flex-wrap p-5 ">
      {ApiTopPrdcts.map((product, index) => (
        <Product item={product} key={index} />
      ))}
    </div>
    );
}

export default AllProducts;
