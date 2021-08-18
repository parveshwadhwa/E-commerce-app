import ShopActionTypes from "./shop-types";
// import { shopdata } from "./shop-data";


const initial_state = {
    collections: null
};

const ShopDataReducer = (state=initial_state, action) => {
    switch(action.type)
    {

      case ShopActionTypes.UPDATE_COLLECTIONS:

      return{
        ...state,
        collections: action.payload
      }
        default:
            return state;
    }
}

export default ShopDataReducer;