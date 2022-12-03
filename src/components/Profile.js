import { useState } from "react";
import { useNavigate } from 'react-router-dom'
import UserRental from './UserRental'
import BookingListing from './BookingListing'


function Profile({user, handleDeleteItem}) {
    const [avatar, setAvatar] = useState('')
    console.log(user.email + " i am user rentals")
    const navigate = useNavigate()

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
                            <h3> Hello {user.first_name}! </h3>
                            <h5> add a profile picture</h5>
                            {/* <img  className="avatar" src={user.avatar} alt={user.first_name + "alt"} /> */}
                            <div>
                            {/* <img  className="avatar" src={user.avatar} alt={user.first_name + "alt"} /> */}
                                <form className="avatar" onSubmit={handleSubmit}>
                                <img  className="avatar" src={user.avatar} alt={user.first_name + "alt"} />
                                    <input type="file" accept="image/*" multiple={false} onChange={onImageChange}  value={avatar}/>
                                </form>
                            </div>
                        </div>
                        <div className="dashbord">
                            <UserRental handleDeleteItem={handleDeleteItem} rentals = {user.rentals} />
                        </div>
                        <div>
                            <h4 className="bookingHead">
                                Hello there your resent booking are here!!
                            </h4>
                            <BookingListing />
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