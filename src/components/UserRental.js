import React from 'react'
import UserRentalList from './UserRentalList'

function UserRental({rentals, handleDeleteItem}) {
    return (
        <div className="containerUse" >
            <ul className="list-group">
                { rentals.map((rental) => (
                <UserRentalList handleDeleteItem={handleDeleteItem} key={rental.id} rental={rental}/>
                ))}
            </ul>
        </div>
    )
}
export default UserRental
