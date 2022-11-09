import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { PublicButton } from "../../public/Button"
import { AppDispatch } from "../../store"
import { logOutEffect } from "../../store/effects/auth.effects";

const Dashboard = () => {
    const dispatch: AppDispatch = useDispatch()
    const navigate = useNavigate();


    const logout = ()=>{
        dispatch(logOutEffect(navigate))  
    }


    return (
        <div>
            Dashboard
            <div onClick={()=>{logout()}}>
            <PublicButton text="logout"/>
            </div>
        </div>
    )
}

export default Dashboard