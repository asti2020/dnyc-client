import React from 'react'
import { useNavigate } from 'react-router-dom'
import { DeleteRental } from './DeleteRental';

function ProfileRentalCard({ user, myRentals, rentals, setDeleteRental, setApDeletRen}) {
    console.log(user.id + "i am user id")
    
    console.table(rentals)
    console.log(user.id + "i am user id")
    console.log(rentals.user_id)


// console.log(myRentals)
    const navigate = useNavigate()
    // let myRentals = rentals.filter(rental => rental.user_id === user.id)
    return (
        <div className="cardProfile">
            { myRentals.map((rental) => (
                <div className="card-body" key={rental.id}>
                    <h4>{rental.title}</h4>
                    <h5 className="card-title">{rental.name}</h5>
                    <p className="card-text">{rental.description}</p>
                    <p className="card-text">{rental.address}</p>
                    <DeleteRental rental={rental} myRentals={myRentals} rentals={rentals} setApDeletRen={setApDeletRen} setDeleteRental={setDeleteRental} />
                        <button className="button" onClick={() => navigate(`/rental/${rental.id}/edit`)}>Edit</button>
                </div>
            ))}
        </div>
    )
}
export default ProfileRentalCard;
