import React, { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { PublicButton } from "../../public/Button";
import { AppDispatch } from "../../store";
import { sendAddressesEffect } from "../../store/effects/auth.effects";



function Map() {
    const dispatch: AppDispatch = useDispatch()
    const navigate = useNavigate();



const testAddresses = [
    {
        lat:"11111111111",
        lng:"11111111111"
    },
    {
        lat:"11111111111",
        lng:"11111111111"
    },
    {
        lat:"11111111111",
        lng:"11111111111"
    },
    {
        lat:"11111111111",
        lng:"11111111111"
    }
]

    const sendAddresses =()=>{
        dispatch(sendAddressesEffect(testAddresses,navigate))  
        
    }




    return (
        <div
        >
             <div onClick={()=>{sendAddresses()}}>
            <PublicButton text="Submit"/>
            </div>
        </div>
    );
}

export default Map;
