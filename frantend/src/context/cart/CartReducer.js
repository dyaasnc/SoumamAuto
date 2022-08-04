import {ADD_TO_CART, REMOVE_ITEMS, UPDATE_ITEMS} from "../Types";






const CartReducer = (state,action) =>{
    const inCart = state.cartItems.find((product)=>
    product.id === action.payload.id ?true : false)
    switch(action.type){
        case ADD_TO_CART : {
            return {
                ...state,
                cartItems : inCart
                ? state.cartItems.map((product)=>
                    product.id=== action.payload.id
                    ?{...product , quantity : product.quantity + 1}
                    :product
                )
                : [...state.cartItems,action.payload],
                
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