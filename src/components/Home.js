import React, { useEffect } from 'react'
import Rental from './Rental'

function Home(user){
    const [rentals, setRentals] = React.useState([])

    useEffect(() => {
        fetch("http://localhost:3000/rentals")
        .then((res) => res.json())
        .then((data) => setRentals(data))
    }, [])
    return (
        <div className="container">
            <div>
                <h1>banner</h1>
            </div>
            <Rental rentals={rentals}/>
        </div>
    )
}

export default Home
