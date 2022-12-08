import React from 'react'
import { useNavigate } from 'react-router-dom';

function ThankYou() {
    const navigate = useNavigate()
    // const handleClick = () => {
    //     navigate('/')
    // }
    return (
        <div className='thankYou'>
            <h1>Your Listing is sucessfully updated!</h1>
            <button  className="button" onClick={() => navigate('/')} ></button>
            <img src="https://media0.giphy.com/media/3o6gDWzmAzrpi5DQU8/200w.webp?cid=bb5a1c3apurer6e367wevcarjpeulzdhn2cqftctsvf5mabt&rid=200w.webp&ct=g" alt="thank you gif"/>
        </div>
    )
}

export default ThankYou;