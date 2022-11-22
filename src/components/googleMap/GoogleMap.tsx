import React, { useState } from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
import "./googleMap.css"
interface Markers {
    lat: number
    lng: number

}

export default function Map() {

    const center = { lat: 40.204074, lng: 44.511667 }
    const [markers, setMarker] = useState<Markers[]>([center])

    const { isLoaded } = useLoadScript({
        googleMapsApiKey: "AIzaSyBDTrYT2TXSCRlA8MPXkLCqdF_2q7OsTXc",
    });

    const setaMarkerCordinats = (newLat: number, newLng: number) => {
        setMarker((state: Markers[]) => {
            return (
                [...state, ...[{ lat: newLat, lng: newLng }]]
            )
        })

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
            </>
            :
            <div>asd</div>
    );
}