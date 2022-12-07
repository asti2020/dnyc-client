
import {useState} from 'react'
import {useNavigate} from 'react-router-dom'
import { useParams } from 'react-router-dom'

function UpdateRental({rental, handleUpdateRental}) {
    const jwt_token = localStorage.getItem('jwt');
    const navigate = useNavigate();
    
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
    rental = rental.find(rental => rental.id === parseInt(id))
    const handleSubmit = (e) => {
        e.preventDefault()
        
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
             handleUpdateRental(updatedRental)
            (navigate(`/rentals/${rental.id}`))
        }
        )

}
    console.log(rental)
   
    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData({
            ...formData,
            [name]: value
        })
        console.log(name, value)
    }
    // console.log(rental.title + "i am form updatedRental")
    return (
        <div>
            <form className='updateForm' onSubmit={handleSubmit}>
                <div className='updateform'>
                <label>Address</label>
                <input 
                    type="text" 
                    name="address" 
                    value={formData.address}
                    placeholder={rental.address}
                    onChange={handleChange}
                />
                </div>
                <div className='updateform'>
                <label>Title</label>
                <input 
                    type="text"
                    name="title"
                    value={formData.title}
                    placeholder={rental.title}
                    onChange={handleChange}
                />
                </div>
                <div className='updateform'>
                <label>Description</label>
                <input 
                    name="description"
                    value={formData.description}
                    placeholder={rental.description}
                    onChange={handleChange}
                    type="textarea"
                />
                </div>
                <div className='updateform'>
                <label>Price</label>
                <input 
                    name="price"
                    value={formData.price}
                    placeholder={rental.price}
                    onChange={handleChange}
                    type="number"
                />
                </div>
                <div className='updateform'>
                <label>Image</label>
                <input 
                    name="image"
                    value={formData.image}
                    placeholder={rental.image}
                    onChange={handleChange}
                    type="text"
                    className='control-image'
                />
                </div>
                <div className='updateform'>
                <label>Near Subway</label>
                <input 
                    name="near_subway"
                    value={formData.near_subway}
                    placeholder={rental.near_subway}
                    onChange={handleChange}
                    type="text"
                />
                </div>
                <div className='updateform'>
                <label>Requirements</label>
                <input 
                    name="requirements"
                    value={formData.requirements}
                    placeholder={rental.requirements}
                    onChange={handleChange}
                    type="text"
                />
                </div>
                <div className='updateform'>
                <label>Category</label>
                <input 
                    name="category"
                    value={formData.category}
                    placeholder={rental.category}
                    onChange={handleChange}
                    type="text"
                />
                </div>
                <button className="deletebtn" type="submit">Update</button>
            </form>
            
        </div>
    )
}

export default UpdateRental


