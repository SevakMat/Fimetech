import axios from "../config/axios"

import { LoginData, MarkerType, RefreshToken, SignInData } from "./types"

export const loginRequest = async (loginData: LoginData): Promise<any> => {
    return axios.post("api/v1/auth/sign-in", { ...loginData })
}
export const logOutRequest = async (): Promise<any> => {
    return axios.post("api/v1/auth/sign-out", {})
}

export const SignUpRequest = async (signInData: SignInData): Promise<any> => {
    return axios.post("api/v1/auth/sign-up", { ...signInData })
}

export const SignInByRefreshTocenRequest = async (refreshToken: RefreshToken): Promise<any> => {
    return axios.post("api/v1/auth/sign-in-by-refresh-token", { ...refreshToken })
}
export const SendAdressesRequest = async (AddressesList: MarkerType[]): Promise<any> => {
    return axios.post("api/v1/google-map/addresses", [...AddressesList])
}




/////////////////////////////////////// Test servises /////////////////////////////
// export const loginRequestTest = async (loginData: LoginData): Promise<any> => {
//     return {
//        data:{
//         accessToken:"wqfwfuenylif8uhnfihmqwepoifdjem9fiu-0e",
//         refreshToken:"wqfwfuenylif8uhnfihmqwepoifdjem9fiu-0e",
//         user:{
//             id: "id",
//             avatarUrl: "string",
//             email: "test@gmail.com",
//             firstName: "Vito",
//             lastName: "Scalleto",
//             roles: "uder"
//         }
//        }
//     }
// }
// export const logOutRequestTest = async (): Promise<any> => {
//     return {
//         success:"success",
//        data:{}
//     }
// }

// export const SignUpRequestTest = async (signInData: SignInData): Promise<any> => {
//     return {
//         success:"success",
//        data:{}
//     }}

