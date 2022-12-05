import React from 'react'
import { Link } from 'react-router-dom'
import RentalList from './RentalList'


function Rental({rentals}){
    const renderRentals = Object.keys(rentals).map((rentalID) =>(
        <RentalList key={rentalID}  rental={rentals[rentalID]} >
             <Link to={`/rentals/${rentalID}`}>{rentals[rentalID].title}</Link>
        </RentalList> 

    ) )
    return (<div className="rentalContainer">
    <ul>{renderRentals}</ul>
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

