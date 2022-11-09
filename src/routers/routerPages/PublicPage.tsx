import LoginPage from "../../pages/Login"
import PublicRouter from "../types/PublicRouter"

const PublicPage = (): JSX.Element => {
    return (
        <div>
            PublicPage
        </div>
    )
}

const PublicPageRoute: PublicRouter = {
    isProtected: false,
    routerProps:{
        path: "/login",
        element: <LoginPage/>  
    }
}

//     {
//         path:"",
//         component: LoginPage,
//         private: false,
//     },
//     {
//         path:"/sign-up",
//         component: SignUp,
//         private: false,
//     }
// ]

export default PublicPageRoute