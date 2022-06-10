import React from 'react';
import Announce from '../components/Announce';
import Footer from '../components/Footer';
import NavBar from '../components/NavBar';
 

function Product (){
    return(<div>
        <Announce/>
        <NavBar/>
        <div className='flex'>
            <div className='flex-1'>
                image
            </div>
            <div className='flex-1'>
                discription
                
            </div>

        </div>
        <Footer/>
        </div>
    )
}
export default Product;