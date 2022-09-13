import React from "react";
import LocationOnSharpIcon from "@mui/icons-material/LocationOnSharp";
import LocalPhoneSharpIcon from "@mui/icons-material/LocalPhoneSharp";
import LocalPostOfficeSharpIcon from "@mui/icons-material/LocalPostOfficeSharp";

function Footer() {
  return (
    <div className="flex items-center justify-around p-2 ">
      <div className="flex-1 flex flex-col flex-wrap p-2">
        <h1 className="text-[25px]">SoumamAuto</h1>
        <p className="text-justify mobile:text-left">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
          reiciendis corporis nihil nisi a, rerum ipsa provident ipsum possimus
          vel ducimus adipisci.
        </p>
        <div className="flex item-center justify-center">
          <a className="pr-2 text-lg font-bold" href="">
            <img src="https://img.icons8.com/material/48/undefined/facebook-new.png" />
          </a>
          <a className="pr-2 text-lg font-bold" href="">
            <img src="https://img.icons8.com/material/48/undefined/instagram-new--v1.png" />
          </a>
        </div>
      </div>

      <div className="flex-1 pl-5 mobile:pl-0">
        <div className="flex mobile:flex-col mobile:items-center">
          <LocationOnSharpIcon className=" text-blue-400" />
          <a className="pl-2" href="">
            Dergana Bourdj El-Kiffan
          </a>
        </div>
        <div className="flex mobile:flex-col mobile:items-center">
          <LocalPhoneSharpIcon className=" text-blue-400" />
          <p className="pl-2">021 21 21 21</p>
        </div>
        <div className="flex mobile:flex-col mobile:items-center">
          <LocalPostOfficeSharpIcon className=" text-blue-400" />
          <a className="pl-2" href="https://mail.google.com/mail/u/0/#inbox">
            dyaasenouci@gmail.com
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
