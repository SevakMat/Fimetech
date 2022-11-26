import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { PublicButton } from "../../public/Button"
import { AppDispatch, RootState, useAppSelector } from "../../store"
import { logOutEffect } from "../../store/effects/auth.effects";
import Addresses from "../googleMap/Addresses";
import GoogleMap from "../googleMap/GoogleMap";

const Dashboard = () => {
    const dispatch: AppDispatch = useDispatch()
    const navigate = useNavigate();
    const { user } = useAppSelector((state: RootState) => { return state.auth })


    const logout = () => {
        dispatch(logOutEffect(navigate))
    }



    return (
        <div>
            <div onClick={() => { logout() }}>
                <PublicButton text="logout" />
            </div>

            <GoogleMap user={user} />
            <Addresses user={user} />
        </div>
    )
}

export default Dashboard