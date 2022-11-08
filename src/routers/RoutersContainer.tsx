import Routers from "./routers"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { IRouteItem } from "./types";

const RoutersContainer: () => JSX.Element = ()=>{
        return(
            <BrowserRouter>
                <Routes>
                    {
                        Routers.map(({path, component: Component}: IRouteItem,index:number)=> <Route key={index} path={path} element={<Component />} /> )
                    }
                </Routes>
            </BrowserRouter>
        )
}

export default RoutersContainer