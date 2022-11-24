import axios from "../config/axios"
import { MarkerType } from "./types"


export const SendAdressesRequest = async (AddressesList: MarkerType[],userId:string | undefined): Promise<any> => {
    return axios.post("api/v1/google-map/addresses", {
        addresses:[...AddressesList],
        userId:userId
    })
}


export const GetUserAddresses = async (userId:string | undefined): Promise<any> => {
    return axios.post("api/v1/google-map/addresses", {
        userId:userId
    })
}

