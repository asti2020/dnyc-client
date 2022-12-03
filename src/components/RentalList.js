import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'

function RentalList({rental}){

    // const navigate = useNavigate()

    // const handleClickPreview = () => {
    //     navigate('/preview', {state: {rental}})
    // }
console.log(rental)
    return (
        <div className="container">
            <div className="card">
                <img src={rental.image} alt={rental.title}  />
                {/* <Link to={`/preview/${rental.id}`}><h3>{rental.title}</h3></Link> */}
                {/* <Link to={`/preview/${rental.ID}`}>{rental[rental.ID].title}</Link> */}
                <h4>{rental.address}</h4>
                <Link to={`/rentals/${rental.id}`}><h3>{rental.title}</h3></Link>
                <div className='rentdet'>
                <p>${rental.price}/M</p> 
                <p>{rental.area_sqft} /sqft</p>
                <p>{rental.description}</p>
                <p>{rental.starting_date}</p>
                {
                    rental.parking === true ? <p>parking :yes</p> : <p>parking :no</p>
                }
                </div>
            </div> 
        </div>
    )
}

export default RentalList
