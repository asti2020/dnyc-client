// import React from'react';
// import { InfoWindow } from "react-google-maps"
// import { Link } from 'react-router-dom';
// import { useParams } from 'react-router-dom';
// import { useNavigate } from 'react-router-dom';

// function PlaceInfoWindow({name, description, price, closeWindow}) {
//     const navigate = useNavigate()
//     const handleClick = (e) =>{
//         e.preventDefault()
//         navigate('/rentals')
//     }
//     // const { id } = useParams();
//     return(
//         <InfoWindow onCloseClick={closeWindow}>
//             <div>
//             <h1>{name}</h1>
//             <h3 onClick={handleClick}>  View</h3>
//             {/* <Link to={`/rentals/${id}`}><h4>{name}</h4></Link> */}
//             <p>{description}</p>
//             <span>${price}</span>
//             </div>
//         </InfoWindow>
//     );
// }
// export default PlaceInfoWindow;



import React from'react';
import { InfoWindow } from "react-google-maps"
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function PlaceInfoWindow({ name, description, price, closeWindow}) {
    const navigate = useNavigate()
    // const handleClick = (e) =>{
    //     e.preventDefault()
    //     navigate('/rentals')


    // }
    const { id } = useParams();
    console.log(id)
    return(
        <InfoWindow onCloseClick={closeWindow}>
            <div>
            <h1>{name}</h1>
            <h3 onClick={
                () => navigate(`/rentals/${id}`)
            }>  View</h3>
            <p>{description}</p>
            <span>${price}</span>
            </div>
        </InfoWindow>
    );
}
export default PlaceInfoWindow;