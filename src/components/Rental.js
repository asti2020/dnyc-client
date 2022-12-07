import React from 'react'
import { Link } from 'react-router-dom'
import PlaceInfoWindow from './PlaceInfoWindow'
import RentalList from './RentalList'


function Rental({rentals}){
    console.log(rentals)
    // const renderRentals = {rentals ? rentals.map((rentals, index) =>(
    //     <RentalList key={index}  rental={rentals} >
    //          <Link to={`/rentals/${rentals}`}>{rentals.title}</Link>
    //     </RentalList> 
    // ) ) : []}
    return (<div className="rentalContainer">
    <ul>{rentals ? rentals.map((rentals, index) =>(
        <RentalList key={index}  rental={rentals} >
             <Link to={`/rentals/${rentals}`}>{rentals.title}</Link>
        </RentalList> 
    )) : null}</ul>
    </div>)
    
    // return (
    //     <>
    //     <div className="rentalContainer">
    //             <ul>
    //                 {rentals.map (rental => (
    //                     <RentalList key={rental.id} rental={rental} />
    //                 ))}
    //             </ul> 
    //     </div>
    //     </>
    // )
}

export default Rental

