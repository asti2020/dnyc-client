import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom'
import BookingListing from './BookingListing'
import ProfileRentalCard from './ProfileRentalCard'

function Profile({ user, rentals, setRentals}) {
    const [avatar, setAvatar] = useState('')
    const [myRentals, setMyRentals] = useState([])
    const token = localStorage.getItem('jwt')
    console.log(user.email + " i am user rentals")
    const navigate = useNavigate()

    const setDeleteRentals = (rental) => {
        setMyRentals(myRentals.filter(r => r.id !== rental.id))
        setRentals(rentals.filter((r) => r.id !== rental.id))
    }

    useEffect(() => {
        fetch(`http://localhost:3000/rentalsuser`, {
            method: 'GET',
            headers: {
                Authorization: "Bearer " + token,
                'Content-Type': 'application/json'
        }})
            .then(res => res.json())
            .then(data => {
                console.table(data)
                setMyRentals(data)
            })
    }, [])

    function onImageChange(e) {
        setAvatar(e.target.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(user.rentals + "i am user rentals")
        console.log(avatar + "i am avatar")
    }
    if (user.id) {
                return  (
                <>
                    <div className="profileContainer">
                        <div className="profile">
                            <div>
                            {/* <img  className="avatar" src={user.avatar} alt={user.first_name + "alt"} /> */}
                                <form className="avatar" onSubmit={handleSubmit}>
                                <img  className="avatar" src={user.avatar} alt={user.first_name + "alt"} />
                                    <input type="file" accept="image/*" multiple={false} onChange={onImageChange}  value={avatar}/>
                                </form>
                            </div>
                        </div>
                        <div className="profileListing">
                                <div>
                                    <h3> Your Listing Rentals  </h3>
                                    <ProfileRentalCard user={user} setDeleteRental={setDeleteRentals}  myRentals={myRentals} rentals={rentals} />
                                </div>
                                <div>
                                    <h3 className="bookingHead">
                                            Booked items!!
                                    </h3>
                                        <BookingListing />
                                </div>
                        </div>
                    
                    </div>
                </>
                )}
    else {
        navigate("/login")
        return 
    }
}

            
export default Profile


  /* <div className="dashbord">
                            <UserRental handleDeleteItem={handleDeleteItem} rentals = {user.rentals} />
                        </div> */