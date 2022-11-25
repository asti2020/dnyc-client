import React from 'react'
import LoginForm from './LoginForm'
import SignupForm from './SignupForm'
// import { useHistory } from 'react-router-dom'

function Login({setUsers}) {

    const  handleClick = () => {
        localStorage.removeItem('jwt')
    }
    return (
        <>
        <div className='logPlace'>
            <div>
                <LoginForm />
            </div>
            <div >
                <SignupForm setUsers={setUsers}/>
            </div>

        </div>
        <div>
            <button className="submitlog" onClick={handleClick} >Logout</button>
        </div>
        </>
    )
}
export default Login
