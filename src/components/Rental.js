import React from 'react'
import RentalList from './RentalList'

function Rental({rentals}){
    return (
        <>
        <div className="rentalContainer">
                <ul>
                    {rentals.map (rental => (
                        <RentalList key={rental.id} rental={rental} />
                    ))}
                </ul> 
        </div>
        </>
    )
}

export default Rental

