
import { useNavigate } from 'react-router-dom'
import UserRental from './UserRental'

function Profile({user, handleDeleteItem}) {
    console.log(user.rentals + "i am user rentals")
    const navigate = useNavigate()
    if (user.id) {
                return  (
                <>
                    <div className="profileContainer">
                        <div className="profile">
                            <h3> Hello {user.first_name}! </h3>
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