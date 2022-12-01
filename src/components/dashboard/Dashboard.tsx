import {  RootState, useAppSelector } from "../../store"
import Addresses from "../googleMap/Addresses";
import GoogleMap from "../googleMap/GoogleMap";

const Dashboard = () => {
    const { user } = useAppSelector((state: RootState) => { return state.auth })


    return (
        <div>
            <GoogleMap user={user} />
            {/* <Addresses user={user} /> */}
        </div>
    )
}

export default Dashboard