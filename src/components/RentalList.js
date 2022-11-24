import React from 'react'

function RentalList({rental}){
    return (
        <div className="container">
            <div className="card">
                <img src={rental.image} alt={rental.title} />
                <h4>{rental.address}</h4>
                <div className='rentdet'>
                <p>${rental.Price}</p> 
                <p>{rental.area_sqft} /sqft</p>
                <p>{rental.description}</p>
                <p>{rental.starting_date}</p>
                <p>parking :{rental.parking}</p>
                {/* <p>Owner:{rental.user.first_name}</p> */}
                </div>
            </div> 
        </div>
    )
}

export default RentalList
