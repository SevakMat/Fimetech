
export enum AuthTypes {
    LOGIN_REQUEST_SUCCESS = "LOGIN_REQUEST_SUCCESS",
    SET_LOADING= "SET_LOADING"

}


export interface AuthState {
    isLoggedIn: boolean;
    authLoading: boolean;
    user: User | null;
    errors: string[] | null;
    passwordResetToken: string;
}

export interface User {
    id?: string;
    avatarUrl?: string,
    email?: string;
    firstName?: string;
    lastName?: string;
    roles?: string[];
    isEmailVerified?:boolean,
}


export interface LoginRequestSuccess  {
    type: AuthTypes.LOGIN_REQUEST_SUCCESS;
    user: User;
}
export interface iSetLoadingAction {
    type:AuthTypes.SET_LOADING
    loading: boolean;
}

export type AuthActionTypes = LoginRequestSuccess|iSetLoadingAction;
