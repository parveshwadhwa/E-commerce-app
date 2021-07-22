import { CartActionTypes } from "./cart-types";

const initial_state = {
    hidden: true
};

const CartReducer = (state=initial_state, action) => {
    switch(action.type) {
        case CartActionTypes.TOGGLE_CART_HIDDEN:
            return {
                ...state,
                hidden: !state.hidden
            }

            default:
                return state;
    }
}

export default CartReducer;