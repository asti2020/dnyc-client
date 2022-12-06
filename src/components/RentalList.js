import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaRegHeart } from "react-icons/fa";
import {AiFillHeart} from "react-icons/ai";


function RentalList({rental}){
    const [isSaved, setIsSaved] = useState(false)
console.log(rental)
    return (
        <div className="containerRent">
            <div className="card">
            <Link to={`/rentals/${rental.id}`}><h3>{rental.title}</h3></Link>
            <div className='SaveMe'>
                { isSaved ? <button className='btn' onClick={() => setIsSaved(false)}><AiFillHeart /></button> : <button className='btnclick' onClick={() => setIsSaved(true)}><FaRegHeart/></button>}

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
