import UserActionTypes from './user-types'

const initial_state = {
    currentUser: null
}

const userReducer = (state = initial_state, action) => {
            switch(action.type) {
                 case UserActionTypes.SIGN_IN_SUCCESS:
                 return{
                     ...state,
                     currentUser: action.payload,
                     error: null
                 }

                 case UserActionTypes.SIGN_IN_FAILURE:
                     
                 return{
                     ...state,
                     error: action.payload
                 }

                 default:
                     return state;
            }
}

export default userReducer;