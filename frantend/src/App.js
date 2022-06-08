import Cart from "./pages/Cart";
import Home from "./pages/Home";
import {
 
  Routes,
  Route,
} from "react-router-dom";

import ProductsPage from "./pages/ProductsPage";

function App() {
  return (
    
      <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/cart" element={<Cart/>}/>
      <Route path="/product" element={<ProductsPage/>}/>
      <Route path="/allProducts" element={<ProductsPage/>}/>
      </Routes>
   
  );
}

export default App;
