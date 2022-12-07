import React from'react';
import { InfoWindow } from "react-google-maps"
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';

function PlaceInfoWindow({name, description, price, closeWindow}) {
    // const { id } = useParams();
    return(
        <InfoWindow onCloseClick={closeWindow}>
            <div>
            <h1>{name}</h1>
            {/* <Link to={`/rentals/${id}`}><h4>{name}</h4></Link> */}
            <p>{description}</p>
            <span>${price}</span>
            </div>
        </InfoWindow>
    );
}
export default PlaceInfoWindow;