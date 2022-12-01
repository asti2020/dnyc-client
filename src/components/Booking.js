import React from 'react'
import { useState } from 'react';

function Booking() {
    const [booking, setBooking] = useState('')
    const [nameBook, setNameBook] = useState('')
    const [emailBook, setEmailBook] = useState('')
    const [checkIn, setCheckIn] = useState('')
    const [checkOut, setCheckOut] = useState('')
    const [Message, setMessage] = useState('')
    const[time, setTime] = useState('')
    const jwt_token = localStorage.getItem('jwt');
    const handleBookingSubmit = (e) => {
        e.preventDefault();
        fetch("http://localhost:3000/bookings", {
            method: 'POST',
            headers: {
                Authorization: "Bearer " + jwt_token,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                booking: nameBook,
                email: emailBook,
                checkIn: checkIn,
                checkOut: checkOut
            })
        })
        .then(res => res.json())
        .then(res => {
                console.log(res)
                if (res.status === "created") {
                    setBooking(res.booking)
                    setNameBook(res.nameBook)
                    setEmailBook(res.emailBook)
                    setTime(res.time)
                    setCheckIn(res.meetings.start_time)
                    setCheckOut(res.checkOut)
                    setMessage(res.message)
                    console.log(res.meetings.start_time + "i am came from booking responce ok ")
                }
                else {
                    setMessage(res.message + "i am came from booking responce not ok ")
                }
                setBooking('')
                setNameBook('')
                setEmailBook('')
                setTime('')
                setCheckIn('')
                setCheckOut('')
                setMessage('')
        })
       .catch(err => {
            console.log(err + "i am came from booking responce error: ")
       })
        }
        console.log(booking);


    return (
        <div>
            <form className='formBook' onSubmit={handleBookingSubmit}>
                <div className="form-group">
                    <label>Name</label>
                    <input 
                        type="text"
                        className="form-control"
                        name="name"
                        value={nameBook}
                        onChange={e => setNameBook(e.target.value)}
                    />
                    <label>CheckIn Date</label>
                    <input 
                        type="date" 
                        className="form-control" 
                        name="checkIn"
                        value={checkIn}
                        onChange={e => setCheckIn(e.target.value)}
                    />
                    <label>CheckOut Date</label>
                    <input 
                        type="date" 
                        className="form-control" 
                        name="checkOut"
                        value={checkOut}
                        onChange={e => setCheckOut(e.target.value)}
                        />
                    <label>Time</label>
                    <input 
                        type="time" 
                        className="form-control" 
                        name="time"
                        value={time}
                        onChange={e => setTime(e.target.value)}
                    />
                    <label>Email</label>
                    <input 
                    type="email" 
                    className="form-control" 
                    name="email"
                    value={emailBook}
                    onChange={e => setEmailBook(e.target.value)}
                    />
                    <label>Message</label>
                    <textarea 
                    className="form-control" 
                    name="message"
                    value={Message}
                    onChange={e => setMessage(e.target.value)}
                    />

                    <button type="submit" className='submit'>Reserve</button>
                </div>
            </form>
        </div>
    )
}

export default Booking

