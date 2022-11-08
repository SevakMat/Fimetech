import DashboardPage from "../pages/Dashborad"
import LoginPage from "../pages/Login"
import SignUp from "../pages/SignUpPage"
import { IRouteItem } from "./types"

const Routers: IRouteItem[] = [
    {
        path:"/dashboard",
        component: DashboardPage
    },
    {
        path:"/login",
        component: LoginPage
    },
    {
        path:"/sign-up",
        component: SignUp
    }
]

export default Routers