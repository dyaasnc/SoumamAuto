import Cart from "./pages/Cart";
import Home from "./pages/Home";
import {
 
  Routes,
  Route,
} from "react-router-dom";

import ProductsPage from "./pages/ProductsPage";
import Popup from "./pages/Popup";
import ProductPage from "./pages/ProductPage"

function App() {
  return (
      <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/cart" element={<Cart/>}/>
      <Route path="/allProducts" element={<ProductsPage/>}/>
      <Route path= "/Popup" element={<Popup/>}/>
      <Route path="/ProductPage" element={<ProductPage/>}/>
      </Routes>
  );
}

export default App;
