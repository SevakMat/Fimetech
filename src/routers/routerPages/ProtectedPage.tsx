import DashboardPage from "../../pages/Dashborad"
import ProtectedRoute from "../types/ProtectedRoute"



const ProtectedPageRoute: ProtectedRoute = {
    isProtected: true,
    routerProps:{
        path: "/dashboard",
        element: <DashboardPage/>,
    }
}



export default ProtectedPageRoute