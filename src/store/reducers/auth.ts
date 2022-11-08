import { Reducer } from "redux";
import { AuthActionTypes, AuthState, AuthTypes } from "../types/auth";

const initialState: AuthState = {
    isLoggedIn: false,
    user: null,
    authLoading: false,
    errors: [],
    passwordResetToken: "",
}

type ReducerType = Reducer<AuthState,AuthActionTypes>


const reducer: ReducerType = (state = initialState, action: AuthActionTypes) => {
    switch (action.type) {
      

        case AuthTypes.LOGIN_REQUEST_SUCCESS:
            return {
                ...state,
                loading: false,
                isLoggedIn: false,
                user: action.user,
            }; 

        case AuthTypes.SET_LOADING:
            return {
                ...state,
                isLoggedIn: action.loading,
            }; 

        default:
            return state;
    }
};


export default reducer;
