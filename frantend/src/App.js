import Cart from "./pages/Cart";
import Home from "./pages/Home";
import {
 
  Routes,
  Route,
} from "react-router-dom";

import ProductsPage from "./pages/ProductsPage";
import ProductP from "./pages/ProductP";

function App() {
  return (
    
      <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/cart" element={<Cart/>}/>
      
      <Route path="/allProducts" element={<ProductsPage/>}/>
      <Route path= "/Product" element={<ProductP/>}/>
      </Routes>
   
  );
}

export default App;
