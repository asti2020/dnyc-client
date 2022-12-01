import React, {useState} from'react';
import { Marker } from "react-google-maps"
import PlaceInfoWindow  from './PlaceInfoWindow'



function PlaceMarker({lat, lng, name, price, description, id}) {
  const [ showTooltip, setShowTooltip ] = useState(false);
  // const [name, setName] = useState("");
  // const [description, setDescription] = useState("");
  // const [price, setPrice] = useState(0);

  const clickTooltip = () => {
    setShowTooltip(!showTooltip);
  }

  const closeWindow = () => {
    setShowTooltip(false);
  }
  console.log(lat, lng);
  console.log("i am marker")
  return(
    <Marker position={{
        lat: parseFloat(lat),
        lng: parseFloat(lng)
      }} 
      onClick={clickTooltip}>
        key = {`marker${id}`}
      { showTooltip && (
        <PlaceInfoWindow 
            key={`place${id}`}    
            description={description}
            name={name}
            price={price}
            closeWindow={closeWindow}/>
      )}
    </Marker> 

  );
}

export default PlaceMarker;