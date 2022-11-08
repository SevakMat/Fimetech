import { AppDispatch } from ".."
import { loginRequest } from "../../services/auth.service"
import { LoginData } from "../../services/types"

export const loginEffect = (loginData: LoginData): any => {
    return async (dispatch: AppDispatch) => {

        try {
           // Get user
            const result = await loginRequest(loginData)
            console.log(result);
            
            // const {
            //     data: {user, accessToken, refreshToken},
            // } = result
            // await localStorage.setItem("accessToken", accessToken)
            // await localStorage.setItem("refreshToken", refreshToken)

        //     // Set user
        //     dispatch(loginRequestSuccess(user))

        //     // Show alerts
        //     toast({
        //         title: "Login",
        //         description: "Successfully logged in",
        //         status: "success",
        //         position: "top-right",
        //         duration: 3000,
        //         isClosable: true,
        //     })
        //     dispatch(setLoading(false))
        // } catch (error: any) {
        //     // Set error
        //     dispatch(loginRequestFailure([error?.response?.data?.message]))

        //     // Show alert
        //     toast({
        //         title: "Login",
        //         description: error?.response?.data?.message,
        //         status: "error",
        //         position: "top-right",
        //         duration: 3000,
        //         isClosable: true,
        //     })
        //     dispatch(setLoading(false))
        } finally {
            // dispatch(setLoading(false))
        }
    }
}

