import React from 'react'
import {DeleteRental} from './DeleteRental'
import  Rental from  './Rental'

function Profile({user, rental}) {
  
            if (rental.user_id === user.id) {
                return  (
                    <>
                    <Rental key={rental.id} rentals={rental} />
                <DeleteRental key={rental.id} rental={rental} />
                </>
                )
             }
            }
export default Profile