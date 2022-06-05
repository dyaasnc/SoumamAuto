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
            <AllProducts/>

            <Footer/>
        </div>
    );
}
export default ProductsPage;