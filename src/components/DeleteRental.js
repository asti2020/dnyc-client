import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';

// import { useState } from 'react'

export const DeleteRental = ({rental, rentals, setDeleteRental}) => {
    const jwt_token = localStorage.getItem('jwt');
    const navigate = useNavigate()
    
    const deleteRental = (e) => {
            e.preventDefault()
        setDeleteRental(rental)

        fetch(`http://localhost:3000/rentals/${rental.id}`, {
            method: "DELETE",
            headers: {
                Authorization: "Bearer " + jwt_token,
                Accept: "application/json",
                "Content-Type": "application/json"
            },
        })
            // navigate('/thankyou')
            // window.location.reload()
        }
    return (
    <div>
        <button className="deletebtn" onClick={deleteRental}>Delete</button>
    </div>
    )
}
