import  { useEffect } from 'react'
import {useState} from 'react'
import { useParams } from 'react-router-dom'

function UpdateRental({rental, handleUpdateRental}) {
    const jwt_token = localStorage.getItem('jwt');
    
    const [formData, setFormData] = useState({
        title: rental.title,
        description: rental.description,
        price: rental.price,
        image: rental.image,
        area_sqft: rental.area_sqft,
        starting_date: rental.starting_date,
        address: rental.address,
        parking: rental.parking,
        phone: rental.phone,
        note: rental.note,
        features: rental.features,
        category: rental.category,
        near_subway: rental.near_subway,
        requirements: rental.requirements,
        utility: rental.utility
    })
    const {id} = useParams()
    useEffect(() => {
        fetch(`http://localhost:3000/rentals/${id}`, {
            method: 'PATCH',
            headers: {
                Authorization: "Bearer " + jwt_token,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
        .then(res => res.json())
        .then(updatedRental => {
            console.log(updatedRental)
            setFormData(updatedRental)
        }
        )
    }, [])

    console.log(rental)
    const handleSubmit = (e) => {
        e.preventDefault()
    }
    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData({ ...formData, [name]: value })
    }
    return (
        <div>
            <form className='updateform' onSubmit={handleSubmit}>
                <label>Address</label>
                <input 
                    type="text" 
                    name="address" 
                    value={formData.address}
                    placeholder={rental.address}
                    onChange={handleChange}
                    />
                    <button className="deletebtn" type="submit">Update</button>
            </form>
            
        </div>
    )
}

export default UpdateRental


