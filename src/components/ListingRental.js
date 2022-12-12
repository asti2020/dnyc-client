import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function ListingRental ({newRental}){
    const navigate = useNavigate();
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [price, setPrice] = useState("")
    const [image, setImage] = useState("")
    const [area_sqft, setArea_sqft] = useState("")
    const [starting_date, setStartingDate] = useState("")
    const [address, setAddress] = useState("")
    const [parking, setParking] = useState("")
    const [phone, setPhone] = useState("")
    const [note, setNotes] = useState("")
    const [features, setFeature] = useState("")
    const [category, setCategory] = useState("")
    const [near_subway, setNearSubway] = useState("")
    const [requirements, setRequirement] = useState("")
    const [utility, setUtility] = useState("")
    const token = localStorage.getItem('jwt')

    function handleSubmit(e){
        e.preventDefault()
        fetch("http://localhost:3000/rentals", {
            method: 'POST',
            headers: {
                Authorization: "Bearer " + token,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                title: title,
                description: description,
                price: price,
                image: image,
                area_sqft: area_sqft,
                starting_date: starting_date,
                address: address,
                parking: parking,
                phone: phone,
                note: note,
                features: features,
                category: category,
                near_subway: near_subway,
                requirements: requirements,
                utility: utility
            })
        })
        .then(res => res.json())

        .then(newList => { 
        //   get POp up from Swal_fire analytics
            console.log(newList)
            newRental(newList)

        })
        setAddress("")
        setTitle("")
        setDescription("")
        setPrice("")
        setImage("")
        setArea_sqft("")
        setStartingDate("")
        setAddress("")
        setParking("")
        setPhone("")
        setNotes("")
        setFeature("")
        setCategory("")
        setNearSubway("")
        setRequirement("")
        setUtility("")
        navigate("/")
    }


    return(
        <>
        <div className="listings">
        <h2>List your product!!</h2>
        <div className='listing'>
            <form className='addform' onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Title</label>
                    <input 
                        type="text" 
                        value={title} 
                        onChange={(e) => setTitle(e.target.value)} 
                        className="form-control" 
                        placeholder="Enter title" 
                    />
                </div>
                <div className="form-group">
                    <label>Description</label>
                    <input
                        type="text"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        className="form-control"
                        placeholder="Enter description"
                    />
                </div>
                <div className="form-group">
                    <label>Price</label>
                    <input
                        type="text"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                        className="form-control"
                        placeholder="Enter price"
                    />
                </div>
                <div className="form-group">
                    <label>Image</label>
                    <input
                        type="text"
                        value={image}
                        onChange={(e) => setImage(e.target.value)}
                        className="form-control"
                        placeholder="Enter image URL"
                    />
                </div>
                <div className="form-group">
                    <label>Area_sqft</label>
                    <input
                        type="text"
                        value={area_sqft}
                        onChange={(e) => setArea_sqft(e.target.value)}
                        className="form-control"
                        placeholder="Enter area_sqft"
                    />
                </div>
                <div className="form-group">
                    <label>Address</label>
                    <input
                        type="address"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        className="form-control"
                        placeholder="Address"
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Starting_date</label>
                    <input
                        type="text"
                        value={starting_date}
                        onChange={(e) => setStartingDate(e.target.value)}
                        className="form-control"
                        placeholder="Enter starting_date"
                    />
                </div>
                <div className="form-group">
                    <label>Parking</label>
                    <input
                        type="text"
                        value={parking}
                        onChange={(e) => setParking(e.target.value)}
                        className="form-control"
                        placeholder="Enter parking"
                    />
                </div>
                <div className="form-group">
                    <label>Phone</label>
                    <input
                        type="text"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="form-control"
                        placeholder="Enter phone"
                    />  
                </div>
                <div className="form-group">
                    <label>Notes</label>
                    <textarea
                        value={note}
                        onChange={(e) => setNotes(e.target.value)}
                        className="form-control"
                        placeholder="Enter notes"
                        rows="3"
                    />
                </div>
                <div className="form-group">
                    <label>Feature</label>
                    <input
                        type="text"
                        value={features}
                        onChange={(e) => setFeature(e.target.value)}
                        className="form-control"
                        placeholder="Best For"
                        rows="3"
                    />
                </div>
                <div className="form-group">
                    <label>category</label>
                    <input
                        type="text"
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                        className="form-control"
                        placeholder="Enter category"
                    />
                </div>
                <div className="form-group">
                    <label>Near Subways</label>
                    <input
                        type="text"
                        value={near_subway}
                        onChange={(e) => setNearSubway(e.target.value)}
                        className="form-control"
                        placeholder="Enter Near Subway"
                    />
                </div>
                <div className="form-group">
                    <label>Requirement</label>
                    <input
                        type="text"
                        value={requirements}
                        onChange={(e) => setRequirement(e.target.value)}
                        className="form-control"
                        placeholder="Enter requirement"
                    />
                </div>
                <div className="form-group">
                    <label>Utility</label>
                    <input
                        type="text"
                        value={utility}
                        onChange={(e) => setUtility(e.target.value)}
                        className="form-control"
                        placeholder="Enter Utility"
                    />
                </div>
                <button className='addForm'>Submit</button>
            </form>
        </div>
        </div>
        </>
    )
}
export default ListingRental;
