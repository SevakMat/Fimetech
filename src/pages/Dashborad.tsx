import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Dashboard from "../components/dashboard/Dashboard"
import { RootState, useAppSelector } from "../store";

 const DashboardPage = (): JSX.Element => {

    const {isLoggedIn} = useAppSelector((state: RootState) => state.auth)
    const navigate = useNavigate();
    
    useEffect(() => {
        if (!isLoggedIn){
            navigate("/login")
        }
    }, [isLoggedIn])
    

    return <Dashboard/>
}
export default DashboardPage