import React from 'react'

function RentalList({rental}){
    return (
        <div className="container">
            <card>
                <img src={rental.image} alt={rental.title} />
                <h3>{rental.title}</h3>
                <div className='rentdet'>
                <p>{rental.Price}</p> 
                <p>{rental.address}</p>
                <p>{rental.area_sqft} /sqft</p>
                </div>
                <p>{rental.starting_date}</p>
                <div className='rentdet'>
                <p>{rental.description}</p>
                <p>parking :{rental.parking}</p>
                <p>Owner:{rental.user.first_name}</p>
                </div>
            </card> 
        </div>
    )
}

export default RentalList
