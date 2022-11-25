import React from 'react'
import { DeleteRental } from './DeleteRental'
import UpdateRental from './UpdateRental'
function UserRentalList({rental, handleDeleteItem}){

    return (
        <div className="container">
            <div className="card">
                <img src={rental.image} alt={rental.title} />
                <h4>{rental.address}</h4>
                <div className='rentdet'>
                <p>${rental.price}/M</p> 
                <p>{rental.area_sqft} /sqft</p>
                <p>{rental.description}</p>
                <p>{rental.starting_date}</p>
                <p>{rental.parking}</p>
                {/* <button className="updatebtn" Link to={`/rental/:id/edit`} >Update</button> */}
                <UpdateRental rental={rental} />
                <DeleteRental handleDeleteItem={handleDeleteItem} rental={rental}/>
                </div>
            </div> 
        </div>
    )
}

export default UserRentalList

