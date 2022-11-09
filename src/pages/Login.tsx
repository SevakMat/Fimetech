import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import Login from "../components/login/login"
import { RootState, useAppSelector } from "../store"

 const LoginPage = (): JSX.Element => {
    const {isLoggedIn} = useAppSelector((state: RootState) => state.auth)
    const navigate = useNavigate();

    useEffect(() => {
        if (isLoggedIn){
            navigate("/dashboard")
        }
    }, [isLoggedIn])
    
    return <Login/>
}
export default LoginPage