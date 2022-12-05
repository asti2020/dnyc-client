import React from 'react'
import { useNavigate } from 'react-router-dom'
import { DeleteRental } from './DeleteRental';

function ProfileRentalCard({rentals, handleDeleteItem}) {
    const navigate = useNavigate()

    return (
        <div className="cardProfile">
            { rentals.map((rental) => (
                <div className="card-body" key={rental.id}>
                    <h5 className="card-title">{rental.name}</h5>
                    <p className="card-text">{rental.description}</p>
                    <p className="card-text">{rental.address}</p>
                    <DeleteRental rental={rental} handleDeleteItem={handleDeleteItem} />
                        <button className="deletebtn" onClick={() => navigate(`/rental/${rental.id}/edit`)}>Edit</button>
                </div>
            ))}
        </div>
    )
}
export default ProfileRentalCard;
