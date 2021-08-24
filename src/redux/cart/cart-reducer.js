import { CartActionTypes } from "./cart-types";
import { AddItemToCart } from "./cart.utils";
import { RemoveItemFromCart } from "./cart.utils";

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

                case CartActionTypes.CLEAR_ITEM_FROM_CART:
                    return{
                        ...state,
                        cartItems: state.cartItems.filter(cartItem => cartItem.id !== action.payload.id )
                    };

                    case CartActionTypes.REMOVE_ITEM:
                        return{
                            ...state,
                            cartItems: RemoveItemFromCart(state.cartItems, action.payload)
                        }

                        case CartActionTypes.CLEAR_CART:
                            return{
                                ...state,
                                cartItems: []
                            }

            default:
                return state;
    }
}

export default CartReducer;