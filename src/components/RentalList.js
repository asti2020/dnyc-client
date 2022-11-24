import React from 'react'

function RentalList({rental}){
    return (
        <div className="container">
            <div className="card">
                <img src={rental.image} alt={rental.title} />
                <h4>{rental.address}</h4>
                <div className='rentdet'>
                <p>${rental.price}/M</p> 
                <p>{rental.area_sqft} /sqft</p>
                <p>{rental.description}</p>
                <p>{rental.starting_date}</p>
                {
                    rental.parking === true ? <p>parking :yes</p> : <p>parking :no</p>
                }
                </div>
            </div> 
        </div>
    )
}

export default RentalList
