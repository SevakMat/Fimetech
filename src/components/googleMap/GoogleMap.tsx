import React, { useState } from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
import "./googleMap.css"
import { PublicButton } from "../../public/Button";
import { AppDispatch } from "../../store";
import { useDispatch } from "react-redux";
import { sendAddressesEffect } from "../../store/effects/auth.effects";
import { useNavigate } from "react-router-dom";
import { MarkerType } from "../../services/types";


export default function Map() {
    const dispatch: AppDispatch = useDispatch()
    const navigate = useNavigate();

    const center = { lat: 40.204074, lng: 44.511667 }
    const [markers, setMarker] = useState<MarkerType[]>([center])

    const { isLoaded } = useLoadScript({
        googleMapsApiKey: "AIzaSyBDTrYT2TXSCRlA8MPXkLCqdF_2q7OsTXc",
    });

    const setaMarkerCordinats = (newLat: number, newLng: number) => {
        setMarker((state: MarkerType[]) => {
            return (
                [...state, ...[{ lat: newLat, lng: newLng }]]
            )
        })
    }

    const sendAddreses = () => {
        dispatch(sendAddressesEffect(markers, navigate))
    }


    return (
        isLoaded ?
            <>
                <GoogleMap
                    zoom={10}
                    center={center}
                    mapContainerClassName="map-container"
                    onClick={(e: any) => {
                        console.log();

                        setaMarkerCordinats(e.latLng.lat(), e.latLng.lng())
                    }}
                >
                    {markers.map((markers: any, key: number) => {
                        return <Marker position={markers} key={key} />
                    })}

                </GoogleMap>
                <div onClick={() => { sendAddreses() }}>
                    <PublicButton text={"sendAddreses"} />
                </div>
            </>
            :
            <div>asd</div>
    );
}