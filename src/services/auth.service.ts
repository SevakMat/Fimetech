import axios from "axios"
import { LoginData } from "./types"

export const loginRequest = async (loginData: LoginData): Promise<any> => {
    return axios.post("api/v1/auth/login", {loginData})
}
