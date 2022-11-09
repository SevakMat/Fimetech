import DashboardPage from "../pages/Dashborad"
import LoginPage from "../pages/Login"
import SignUp from "../pages/SignUpPage"
import { IRouteItem } from "./types"

const Routers: IRouteItem[] = [
    {
        path:"/dashboard",
        component: DashboardPage,
        private: true
    },
    {
        path:"/login",
        component: LoginPage,
        private: false,
    },
    {
        path:"/sign-up",
        component: SignUp,
        private: false,
    }
]

export default Routers