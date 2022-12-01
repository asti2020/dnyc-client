import React from'react';
import { InfoWindow } from "react-google-maps"

function PlaceInfoWindow({name, description, price, closeWindow}) {
    return(
        <InfoWindow onCloseClick={closeWindow}>
            <div>
            <h1>{name}</h1>
            <p>{description}</p>
            <span>${price}</span>
            </div>
        </InfoWindow>
    );
}
export default PlaceInfoWindow;