import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { FaRegHeart } from "react-icons/fa";


function RentalList({rental}){
console.log(rental)
    return (
        <div className="containerRent">
            <div className="card">
            <Link to={`/rentals/${rental.id}`}><h3>{rental.title}</h3></Link>
            <div className='SaveMe'>
                <button className='btn' onClick={() => {} }><FaRegHeart /></button>

            </div>
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
