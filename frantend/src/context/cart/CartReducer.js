import {ADD_TO_CART, REMOVE_ITEMS} from "../Types";






const CartReducer = (state,action) =>{
    switch(action.type){
        case ADD_TO_CART : {
            return {
                ...state,
                cartItems: [...state.cartItems,action.payload],
                
            }
        }
        case REMOVE_ITEMS : {
            return {
                ...state,
                cartItems: state.cartItems.filter(data => data.id !== action.payload)
            }
        }
        default:
            return state
    }
}

export default CartReducer;