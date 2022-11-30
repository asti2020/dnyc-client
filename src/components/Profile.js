import { useState } from "react";
import { useNavigate } from 'react-router-dom'
import UserRental from './UserRental'


function Profile({user, handleDeleteItem}) {
    const [avatar, setAvatar] = useState('')
    console.log(user.rentals + "i am user rentals")
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
                            <img src={user.avatar} alt={user.first_name} />
                            <div>
                                <form onSubmit={handleSubmit}>
                                <input type="file" accept="image/*" multiple={false} onChange={onImageChange}  value={avatar}/>
                                </form>
                            </div>
                        </div>
                        <div className="dashbord">
                            <UserRental handleDeleteItem={handleDeleteItem} rentals = {user.rentals} />
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