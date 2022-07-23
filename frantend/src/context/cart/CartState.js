import { useEffect, useReducer } from "react";
import CartContext from "./CartContext";
import CartReducer from "./CartReducer";
import {ADD_TO_CART, REMOVE_ITEMS } from "../Types"

const CartState = ({children}) =>{
let initalState={
    cartItems : []
};
const [state, dispatch] = useReducer(CartReducer, initalState, ()=>{
    const lclData = localStorage.getItem('carte');
    return lclData ? JSON.parse(lclData) : initalState;
});
useEffect(()=>{
    localStorage.setItem('carte',JSON.stringify( state.cartItems))
},[state])
console.log(state.cartItems);


const addToCart = item => {
    dispatch({type : ADD_TO_CART, payload : item})
};
const removeItem = (id) =>{
    dispatch({type : REMOVE_ITEMS, payload:id})
};

    return(
<CartContext.Provider value={{
    cartItems:state.cartItems,
    addToCart,
    removeItem,
    
    
}}>
{children}
</CartContext.Provider>
    
)} ;


export default CartState;