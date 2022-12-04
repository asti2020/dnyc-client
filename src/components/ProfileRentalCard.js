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
                    <DeleteRental rental={rental} handleDeleteItem={handleDeleteItem} />
                        <button className="button" onClick={() => navigate(`/rental/${rental
                           .id}/edit`)}>Go to Rental</button>
                            </div>
            ))}
        </div>
      
    )
}
export default ProfileRentalCard;
