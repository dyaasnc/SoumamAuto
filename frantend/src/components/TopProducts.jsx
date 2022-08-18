import React from "react";
import { ApiTopPrdcts } from "../apifolder/TopProductsApi";
import Product from "./Product";

function Products() {
  return (<div className="mx-[200px] mobile:mx-2 ">
      <h1 className=" p-5 font-bold text-4xl mobile:text-2xl bg-blue-200">some products</h1>
      <div className=" h-1 w-[100%] bg-gray-200 "></div>
    <div className="flex flex-wrap p-5  ">
      {ApiTopPrdcts.slice(0,6).map((product, index) => (
        <Product item={product} key={index} />
      ))}
    </div>
    </div>
  );
}

export default Products;
