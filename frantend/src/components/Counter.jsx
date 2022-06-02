import { useState } from "react";
import React from "react";

function Counter() {
  const [count, setCount] = useState(0);
  //   remember to add maximun limit :)
  const increment = () => {
    setCount((count) => count + 1);
  };
  const decrement = () => {
    if (count <= 0) {
      return;
    } else {
      setCount((count) => count - 1);
    }
  };

  return (
    <div className="flex items-center justify-center text-2xl">
      Quantity
      <div className="flex ml-5 shadow-md">
        <div
          className=" bg-blue-400 flex items-center justify-center cursor-pointer rounded-l-md text-white w-8"
          onClick={decrement}
        >
          -
        </div>
        <div
          className="border-2 border-blue-400 w-8 flex justify-center items-center sho"
          onc
        >
          {count}
        </div>
        <div
          className=" bg-blue-400 flex items-center justify-center cursor-pointer rounded-r-md text-white w-8"
          onClick={increment}
        >
          +
        </div>
      </div>
    </div>
  );
}
export default Counter;
