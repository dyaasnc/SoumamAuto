import React from "react";
import { ApiTopPrdcts } from "../apifolder/TopProductsApi";
import Product from "./Product";

function Products() {
  return (<div>
      <h1 className="pt-5 text-center font-bold text-4xl mobile:text-2xl">some products</h1>
    <div className="flex flex-wrap p-5 mx-[86px] ">
      {ApiTopPrdcts.slice(0,4).map((product, index) => (
        <Product item={product} key={index} />
      ))}
    </div>
    </div>
  );
}

export default Products;
