import {ADD_TO_CART, REMOVE_ITEMS, UPDATE_ITEMS} from "../Types";






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
        case UPDATE_ITEMS : {
            return {
                ...state,
                cartItems: state.cartItems.map(item => {
                    if(item.id === action.payload.id){
                        return {...item , quantity : action.payload.quantity}
                    }else{
                        return item;
                    }
                })
            }
        }
        default:
            return state
    }
}

export default CartReducer;