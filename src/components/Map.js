
import React, { useEffect } from'react';
import { withGoogleMap, GoogleMap } from "react-google-maps"
import PlaceMarker from './PlaceMarker';
import  {useState} from'react';

function Map() {
    const [places, setPlaces] = useState([]);

    const arr = [ {lat: 40.7128, lng: -74.0060}, {lat: 34.221, lng: -118.511}, {lat: 65.0522, lng: -18.2437} ];

    const AirbnbMap = withGoogleMap(props => (
        <GoogleMap
            defaultCenter={props.center}
            defaultZoom={props.zoom}
            ref = {props.onMapMounted}
            onZoomChanged = {props.onZoomChanged}
            onCenterChanged = {props.onCenterChanged}
            onMapMounted = {props.onMapMounted}>

            {arr.map((place, index) => (
                <PlaceMarker 
                    key={index}
                    name={place.name}
                    lat={place.lat}
                    lng={place.lng}
                    description={place.description}
                    price={place.price}
                ></PlaceMarker>
            ))
            }
{/* // have to change every numbers in placeMarker to place.lat, place.lng, place.name, place.description, place.price */}
        </GoogleMap>
        )
        );
        const xMapBounds = { min: null, max: null }
        const yMapBounds = { min: null, max: null }
    
        const mapFullyLoaded = false
        const zoom = 7
    
        const state = {
            lat: 50.0515918,
            lng: 19.9357531
        };
        const center = {
            lat: 50.0515918,
        };
        const handleMapChanged = () =>{
            getMapBounds()
            setMapCenterPoint()  
        }
        const handleMapMounted =(map)  => {
            map = map
        }
        const handleMapFullyLoaded =() =>{
            if (this.mapFullyLoaded)
                return
            this.mapFullyLoaded = true
            this.handleMapChanged()
        }
        const setMapCenterPoint =() =>{
            this.setState({
                lat: this.map.getCenter().lat(),
                lng: this.map.getCenter().lng()
            })
        }
        useEffect(() => {
        const place = <PlaceMarker lat={50.0515918} lng={19.9357531} price={20} name={"Hotel"} description={"Hotel desc"} />
            setPlaces([place])
                fetch(`/api/places? lat=${state.lat}&lng=${state.lng}&zoom=${zoom}`,
            { method: 'GET' })
            .then((response) => response.json())
            .then((response) => {
                setPlaces(response)
                console.log(response  + " i am get responce of places")
            })
        }, [])

        const getMapBounds = () => {
            var mapBounds = this.map.getBounds()
            var xMapBounds = mapBounds.b
            var yMapBounds = mapBounds.f
        
            this.xMapBounds.min = xMapBounds.b
            this.xMapBounds.max = xMapBounds.f
        
            this.yMapBounds.min = yMapBounds.f
            this.yMapBounds.max = yMapBounds.b
        }
        console.log(places);
        const {lat, lng} = state;
        console.log(lat, lng);
        return(
            <>
            <div style={{width: `750px`, height: `750px`}}>
            <AirbnbMap
                center={{
                    lat: lat,
                    lng: lng
                }}
                places={places}
                zoom={zoom}
                containerElement={
                    <div style={{ height: `100%` }} />
                }
                mapElement={
                    <div style={{ height: `100%` }} />
                }
            onMapMounted={handleMapMounted}
            handleMapChanged={handleMapChanged}
            handleMapFullyLoaded={handleMapFullyLoaded}
            />
        </div>
        </>
        );
    }
            

export default Map;
