import React from "react";

function Category({ item }) {
  return (
    <div className="flex-1 m-2  shadow-lg rounded-md overflow-hidden relative">
      <img
        src={item.src}
        alt="category_image"
        className="w-[100%] h-[100%] object-cover"
      />
      <div className="flex absolute w-[100%] h-[100%] left-0 top-0 items-center justify-center flex-col">
        <h2 className="text-white text-center font-medium text-[40px] mobile:text-[15px]">
          {item.title}
        </h2>
        <button className="btn mobile:hidden">See more</button>
      </div>
    </div>
  );
}

export default Category;
