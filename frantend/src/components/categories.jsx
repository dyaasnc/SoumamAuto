import React from "react";
import { Link } from "react-router-dom";
import { ApiCategories } from "../apifolder/CategoryApi";
import Category from "./Category";

function Categories() {
  return (
    <div className="mx-[200px] mobile:mx-2">
      <h1 className="p-5 font-bold text-4xl mobile:text-2xl bg-blue-200">
        Categories
      </h1>
      <div className="flex justify-between  p-5">
        
          
            <div className="flex-1 m-2  shadow-lg rounded-md overflow-hidden relative">
      <img
        src="https://sc01.alicdn.com/kf/HTB10.egNpXXXXXYXFXXq6xXFXXXx/Smart-car-decoration-accessories-for-interior-fiber.jpg"
        alt="category_image"
        className="w-[100%] h-[100%] object-cover"
        />
      <div className="flex absolute w-[100%] h-[100%] left-0 top-0 items-center justify-center flex-col">
        <h2 className="text-white text-center font-medium text-[40px] mobile:text-[15px]">
          Accessoires D'nterieur
        </h2>
        <button className="btn mobile:hidden">See more</button>
      </div>
    </div>
    
  
    <div className="flex-1 m-2  shadow-lg rounded-md overflow-hidden relative">
      <img
        src="https://media.cdnws.com/_i/103929/4187/3486/88/1-paire-universel-voiture-auto-style-faux-vent-d-coratif-grille-d-chappement-silencieux-tuyau-ruban.jpeg"
        alt="category_image"
        className="w-[100%] h-[100%] object-cover"
        />
      <div className="flex absolute w-[100%] h-[100%] left-0 top-0 items-center justify-center flex-col">
        <h2 className="text-white text-center font-medium text-[40px] mobile:text-[15px]">
          Accessoires D'exterieur
        </h2>
        <button className="btn mobile:hidden">See more</button>
      </div>
    </div>
    
  
    <div className="flex-1 m-2  shadow-lg rounded-md overflow-hidden relative">
      <img
        src="https://www.poleautovl.com/public/img/medium/IMG0979JPG_5d721a4d4bf26.JPG"
        alt="category_image"
        className="w-[100%] h-[100%] object-cover"
      />
      <div className="flex absolute w-[100%] h-[100%] left-0 top-0 items-center justify-center flex-col">
        <h2 className="text-white text-center font-medium text-[40px] mobile:text-[15px]">
          Produits
        </h2>
        <button className="btn mobile:hidden">See more</button>
      </div>
    </div>
    
    </div>
         
      </div>
    
  );
}

export default Categories;
