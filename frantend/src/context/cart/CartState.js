import { useEffect, useReducer } from "react";
import CartContext from "./CartContext";
import CartReducer from "./CartReducer";
import {ADD_TO_CART, REMOVE_ITEMS  , UPDATE_ITEMS} from "../Types"

let initialState ={
    cartItems : JSON.parse(localStorage.getItem('carte')) || []
};
const CartState = ({children}) =>{
const [state, dispatch] = useReducer(CartReducer, initialState );
useEffect(()=>{
    localStorage.setItem('carte',JSON.stringify( state.cartItems))
},[state])

const addToCart = item => {
    dispatch({type : ADD_TO_CART, payload : item})
};
const removeItem = (id) =>{
    dispatch({type : REMOVE_ITEMS, payload:id})
};

const updateItem = (item) =>{
    dispatch({type : UPDATE_ITEMS, payload:item})
};

    return(
<CartContext.Provider 
value={{
    cartItems:state.cartItems,
    addToCart,
    removeItem,
    updateItem
}} >
{children}
</CartContext.Provider>
    
)} ;


export default CartState;