import React, { useState,useMemo } from 'react';
import AllProducts from '../components/AllProducts';
import Announce from '../components/Announce';
import Footer from '../components/Footer';
import NavBar from '../components/NavBar';
import { ApiTopPrdcts } from '../apifolder/TopProductsApi';



function ProductsPage (){
    const [selectedCategory,setSelectedCategory]= useState();
    const [productList,setProductList]=useState(ApiTopPrdcts);

    const handleCategoryChange=(event)=>{
         setSelectedCategory(event.target.value)
    }

   

    
    const filterdList=()=>{
        if(selectedCategory){
            return productList.filter((product)=>product.category === selectedCategory)
        }else{
            
            return productList;
        }
    }
    const filteredList = useMemo(filterdList, [selectedCategory, productList]);
    

    return(
        <div>
            <Announce/>
            <NavBar/>          
             <div className=" m-4 flex justify-center text-4xl">Products Page</div>
             <div className='flex justify-center '>
                 <select className=' border-2 border-blue-400'
                 name="category-list"
                 id="category-list"
                 onChange={handleCategoryChange}>
                     <option value="" >All Products</option>
                     <option value="accessoire interieur">Accessoires D'nterieur</option>
                     <option value="accessoire exterieur">Accessoires D'exterieur</option>
                     <option value="produits">Produits</option>
                 </select>
                 </div>
             <AllProducts prdctList={filteredList}/>
            
            

            <Footer/>
        </div>
    );
}
export default ProductsPage;