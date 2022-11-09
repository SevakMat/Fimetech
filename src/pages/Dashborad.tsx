import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Dashboard from "../components/dashboard/Dashboard"
import { RootState, useAppSelector } from "../store";

 const DashboardPage = (): JSX.Element => {


    return <Dashboard/>
}
export default DashboardPage