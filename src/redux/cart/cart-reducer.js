import { CartActionTypes } from "./cart-types";
import { AddItemToCart } from "./cart.utils";

const initial_state = {
    hidden: true,
    cartItems: [],
};

const CartReducer = (state=initial_state, action) => {
    switch(action.type) {
        case CartActionTypes.TOGGLE_CART_HIDDEN:
            return {
                ...state,
                hidden: !state.hidden
            };

            case CartActionTypes.ADD_ITEM:
                return{
                    ...state,
                    cartItems: AddItemToCart(state.cartItems, action.payload)
                };

            default:
                return state;
    }
}

export default CartReducer;