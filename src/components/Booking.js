import React from 'react'
import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
function Booking({rental}) {
    const {id} = useParams();
    const navigate = useNavigate()
    const [booking, setBooking] = useState('')
    const [name, setNameBook] = useState('')
    const [email, setEmailBook] = useState('')
    const [startDate, setCheckIn] = useState('')
    const [endDate, setCheckOut] = useState('')
    const [Message, setMessage] = useState('')
    const[time, setTime] = useState('')
    const jwt_token = localStorage.getItem('jwt');
    let rental_id  = id
    console.log( rental_id)
    const handleBookingSubmit = (e) => {
        e.preventDefault();
        if (rental.user_id !== localStorage.getItem('user_id')) {
           
        fetch("http://localhost:3000/bookings", {
            method: 'POST',
            headers: {
                Authorization: "Bearer " + jwt_token,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: name,
                email: email,
                startDate: startDate,
                endDate: endDate,
            })
        })
        .then(res => res.json())
        .then(res => {
                console.log(res)
                if (res.status === "created") {
                    setBooking(res)
                    console.log(res+ "i am came from booking responce ok ")
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
    }else{
        navigate('/login')
        navigate('/')
    }

    }


        console.log(booking);
        console.log(name);

    return (
        <div>
            <form className='formBook' onSubmit={handleBookingSubmit}>
                <div className="form-group">
                    <label>Name</label>
                    <input 
                        type="text"
                        className="form-control"
                        name="name"
                        value={name}
                        onChange={e => setNameBook(e.target.value)}
                    />
                    <label>CheckIn Date</label>
                    <input 
                        type="date" 
                        className="form-control" 
                        name="startDate"
                        value={startDate}
                        onChange={e => setCheckIn(e.target.value)}
                    />
                    <label>CheckOut Date</label>
                    <input 
                        type="date" 
                        className="form-control" 
                        name="endDate"
                        value={endDate}
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
                    value={email}
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

