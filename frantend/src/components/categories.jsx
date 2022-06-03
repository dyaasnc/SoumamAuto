import React from "react";
import { ApiCategories } from "../apifolder/CategoryApi";
import Category from "./Category";

function Categories() {
  return (
    <div>
      <h1 className="pt-5 text-center font-bold text-4xl mobile:text-2xl">
        Categories
      </h1>
      <div className="flex justify-between  p-5">
        {ApiCategories.map((category, index) => {
          return <Category item={category} key={index} />;
        })}
      </div>
    </div>
  );
}

export default Categories;
