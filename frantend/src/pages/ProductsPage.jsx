import React from 'react';
import AllProducts from '../components/AllProducts';
import Announce from '../components/Announce';
import Footer from '../components/Footer';
import NavBar from '../components/NavBar';


function ProductsPage (){

    return(
        <div>
            <Announce/>
            <NavBar/>          
             <div className=" m-4 flex justify-center text-4xl">Products Page</div>
             <div className='flex justify-center'>
                 <select className=' border-2 border-blue-400'>
                     <option selected >All Products</option>
                     <option>Accessoires D'exterieur</option>
                     <option>Accessoires D'nterieur</option>
                     <option>Produits</option>
                 </select>
                 </div>
             <AllProducts/>
            
            

            <Footer/>
        </div>
    );
}
export default ProductsPage;