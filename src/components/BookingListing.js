import React, { useEffect } from 'react'
import { useState } from 'react'

function Booking(){
    const [booked, setBooked] = useState([])
        const jwt_token = localStorage.getItem('jwt')
    useEffect(() =>{
        fetch('http://localhost:3000/bookings',{
            method: 'GET',
            headers: {
                Authorization: "Bearer " + jwt_token,
                'Content-Type': 'application/json'
                // 'Accept': 'application/json'
            }
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            setBooked(data)
        })
    }, [])

    console.log(booked + "i am came from booked list")

    return(
        <>
            <div>
                <ul className='bookingUser'>
                    {booked.map((myBook) => ( 
                        <div className='cardBookingOut'>
                            <div className='cardBook'>
                                <h3>{myBook.name}</h3>
                                <h4>{myBook.description}</h4>
                                <h4>{myBook.message}</h4>
                                <h4>Start and end date!</h4>
                                <p>Thank You!</p>
                            </div>
                        </div>
                ))}
                </ul>
            </div>
        </>
    )
}

export default Booking
