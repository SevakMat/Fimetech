import { Container } from "@mui/material";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { PublicButton } from "../../public/Button"
import { AppDispatch } from "../../store"
import { logOutEffect } from "../../store/effects/auth.effects";
import GoogleMap from "../googleMap/GoogleMap";
import UserAddressesList from "../userAddressesList/UserAddressesList";

const Dashboard = () => {
    const dispatch: AppDispatch = useDispatch()
    const navigate = useNavigate();


    const logout = () => {
        dispatch(logOutEffect(navigate))
    }



    return (

        <Container maxWidth="lg">
            <div>
                <div onClick={() => { logout() }}>
                    <PublicButton text="logout" />
                </div>
                <GoogleMap />
            </div>
            <div>
                <UserAddressesList/>
            </div>
        </Container>
    )
}

export default Dashboard