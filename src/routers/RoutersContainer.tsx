import Routers from "./routers"
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import LoginPage from "../pages/Login";
import modules from "./routers";
import { useState } from "react";


const RoutersContainer: () => JSX.Element = ()=>{
  const [isAuth, setIsAuth] = useState<boolean>(false)
    console.log("modulesmodulesmodules",modules);
    
        return(
            <BrowserRouter>
            <Routes>
              {/* Create Login Page */}
              <Route path={"/login"} element={<LoginPage />}/> 
              {modules.map(({isProtected, routerProps}) => (
                isProtected && !isAuth ?
                // If Router is Protected And So You are dont Auth Redirec to Login Page
                <Route key={routerProps.path} element={<Navigate to="/login" replace />} /> :
                // Else You Can Go that Route
                <Route key={routerProps.path} {...routerProps}/>
              ))}
              <Route path={"*"} element={< >not found</>}/>
            </Routes>
          </BrowserRouter>
        )
}

export default RoutersContainer