import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaRegHeart } from "react-icons/fa";
import {AiFillHeart} from "react-icons/ai";
import { FcHome} from "react-icons/fc";
import { AiFillCar} from "react-icons/ai";
import { MdAttachMoney } from "react-icons/md";
import { BiArea } from "react-icons/bi";
import { GrValidate } from "react-icons/gr";


function RentalList({rental}){
    const jwt_token = localStorage.getItem('jwt');
    const [isSaved, setIsSaved] = useState(false)

    const handleSaveClick = (e) => {
        e.preventDefault();
        setIsSaved(!isSaved)
        if (isSaved) {
            return
        }
        fetch("http://localhost:3000/save_rentals", {
            method: "POST",
            headers: {
                Authorization: "Bearer " + jwt_token,
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                rental: rental,
                rental_id: rental.id,
            })
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setIsSaved(true)
            }    
            )
    }
console.log(rental)
    return (
        <div className="containerRent">
            <div className="card">
            <Link to={`/rentals/${rental.id}`}><h3>{rental.title}</h3></Link>
            
            <div className='image-container'>
                <div className='SaveMe'>
                    { isSaved ? <button className='btn' onClick={() => setIsSaved(false)}><AiFillHeart /></button> : <button className='btnclick' onClick={handleSaveClick }><FaRegHeart/></button>}

                </div>
                <Link to={`/rentals/${rental.id}`}> 
                    <img  src={rental.image} alt={rental.title}  /> 
                </Link>
            </div>
                <h4>{rental.address}</h4>
                <div className='rentdet'>
                <p><MdAttachMoney/>{rental.price}/Month</p> 
                <p><BiArea/>{rental.area_sqft} /sqft</p>
                <p> <GrValidate/>{rental.starting_date}</p>
                <p><AiFillCar/> {rental.parking}</p>
                <p> < FcHome/> {rental.features}</p>
                </div>
            </div> 
        </div>
    )
}

export default RentalList
