import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'

function RentalList({rental}){
console.log(rental)
    return (
        <div className="container">
            <div className="card">
            <Link to={`/rentals/${rental.id}`}><h3>{rental.title}</h3></Link>
            <Link to={`/rentals/${rental.id}`}> <img src={rental.image} alt={rental.title}  /> </Link>
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
