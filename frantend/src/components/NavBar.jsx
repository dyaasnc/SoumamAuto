import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Badge } from "@mui/material";

function NavBar() {
  return (
    <div className="navbar h-[60px] shadow-md relative z-10">
      <div className="wrapper px-[20px] py-[20px] flex justify-between items-center">
        <div className="left flex flex-1 items-center">
          <div className="logo cursor-pointer text-lg font-bold ">
            SoumamAuto
          </div>
        </div>

        <div className="searchInput flex  border-[2px] border-solid border-lighgrey rounded-md items-center mr-5  focus-within:border-blue-400 transition-all">
          <input className="input outline-none " type="text" />
          <SearchIcon className="cursor-pointer " />
        </div>
        <div className="flex-1 flex justify-end">
          <div className="cursor-pointer ml-20 text-lg font-bold">Products</div>
          <div className="cursor-pointer ml-20 text-lg font-bold">
            Cart
            <Badge badgeContent={2} color="primary">
              <ShoppingCartIcon />
            </Badge>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
