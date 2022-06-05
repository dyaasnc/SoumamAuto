import React from "react";
import { ApiTopPrdcts } from "../apifolder/TopProductsApi";
import Product from "./Product";

function Products() {
  return (
    <div className="flex flex-wrap p-5 ">
      {ApiTopPrdcts.slice(0,4).map((product, index) => (
        <Product item={product} key={index} />
      ))}
    </div>
  );
}

export default Products;
