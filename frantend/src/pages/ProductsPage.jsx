import React, { useState,useMemo } from 'react';
// import AllProducts from '../components/AllProducts';
import Announce from '../components/Announce';
import Footer from '../components/Footer';
import NavBar from '../components/NavBar';
import { ApiTopPrdcts } from '../apifolder/TopProductsApi';
import Product from "../components/Product";
import Popup from "./Popup"



function ProductsPage (){
    const [selectedCategory,setSelectedCategory]= useState();
    const productList=(ApiTopPrdcts);
    const handleCategoryChange=(event)=>{
         setSelectedCategory(event.target.value)
    }
    const [popup, setPopup] = useState();
    const [blur, setBlur]= useState('')
    const filterdList=()=>{
        if(selectedCategory){
            return productList.filter((product)=>product.category === selectedCategory)
        }else{
            
            return productList;
        }
    }
    const filteredList = useMemo(filterdList, [selectedCategory, productList]);
   
    return(
        <div >
            <Announce/>
            <NavBar setBlur={setBlur} setPopup={setPopup}/> 
            <div className={blur} >        
             <div className=" m-4 flex justify-center text-4xl">Products Page</div>
             <div className='flex justify-center '>
                 <select className=' border-2 border-blue-400'
                 name="category-list"
                 id="category-list"
                 onChange={handleCategoryChange}>
                     <option value="" >All Products</option>
                     <option value="accessoire interieur">Accessoires D'nterieur</option>
                     <option value="accessoire exterieur">Accessoires D'exterieur</option>
                     <option value="produits">Produits </option>
                 </select>
                 </div>
                 <div className='mx-[200px]'>
                 <div className="flex flex-wrap items-center  justify-center">
               {filteredList.map((product) => ( 
              <Product  setBlur={setBlur} setPopup={setPopup} item={product} key={product.id}/>
              ))}
                 </div>
                 </div>
                 </div> 
            <Popup setBlur={setBlur} setPopup={setPopup} trigger={popup}/>
            <Footer/>
        </div>
    );
}
export default ProductsPage;