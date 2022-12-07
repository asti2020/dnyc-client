
import { withGoogleMap, GoogleMap } from "react-google-maps"
import PlaceMarker from './PlaceMarker';

function Map({rentals}) {
    const AirbnbMap = withGoogleMap(props => (
        <GoogleMap
            defaultCenter={{ lat: 40.76727216, lng: -73.99392888 }}
            defaultZoom={props.zoom}
            ref = {props.onMapMounted}
            onZoomChanged = {props.onZoomChanged}
            onCenterChanged = {props.onCenterChanged}
            onMapMounted = {props.onMapMounted}>
            
            { rentals.map((place, index) => (
                <PlaceMarker 
                    key={index}
                    name={place.title}
                    lat={place.latitude}
                    lng={place.longitude}
                    description={place.description}
                    price={place.price}
                ></PlaceMarker>
            ))
            }
        </GoogleMap>
        )
        );
        const zoom = 11;
    
        const state = {
            lat: 40.7077,
            lng: 74.0083
        };
        const handleMapChanged = () =>{
            getMapBounds()
            setMapCenterPoint()  
        }
        const handleMapMounted =(map)  => {
            map = map;
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
        const getMapBounds = () => {
            var mapBounds = this.map.getBounds()
            var xMapBounds = mapBounds.b
            var yMapBounds = mapBounds.f
        
            this.xMapBounds.min = xMapBounds.b
            this.xMapBounds.max = xMapBounds.f
        
            this.yMapBounds.min = yMapBounds.f
            this.yMapBounds.max = yMapBounds.b
        }
        console.log(rentals);
        const {lat, lng} = state;
        console.log(lat, lng);
        return(
            <>
            <div style={{width: `100vw`, height: `60vw`}}>
            <AirbnbMap
                center={{
                    lat: lat,
                    lng: lng
                }}
                places={rentals}
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
