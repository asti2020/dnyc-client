import React from 'react'
const jwt_token = localStorage.getItem('jwt');
export const DeleteRental = ({rental, handleDeleteItem}) => {

    const deleteRental = (e) => {
        e.preventDefault()
    fetch(`http://localhost:3000/rentals/${rental.id}`, {
        method: "DELETE",
        headers: {
            Authorization: "Bearer " + jwt_token,
            Accept: "application/json",
            "Content-Type": "application/json"
        },
    })
    .then((res) => res.json())
    .then((data) => {
        console.log(data)
        handleDeleteItem(rental)
        if (data.error) {
            console.log(data.error)
        }
    })
}
    return (
    <div>
        <button className="deletebtn" onClick={deleteRental}>Delete</button>
        <h1> deleted now update the state</h1>
        <h1>The product is update</h1>
        <h1>The product is Booked</h1>
    </div>

    )
}
