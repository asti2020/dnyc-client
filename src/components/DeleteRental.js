import React from 'react'

export const DeleteRental = ({rental}) => {

    const deleteRental = (e) => {
        e.preventDefault()
    fetch(`http://localhost:3000/rentals/${rental.id}`, {
        method: "DELETE",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
        },
    })
    .then((res) => res.json())
    .then((data) => {
        console.log(data)
    })
}
    return (
    <div>
         <button onClick={deleteRental}>Delete</button>
        <h1>The product is deleted</h1>
    </div>

    )
}
